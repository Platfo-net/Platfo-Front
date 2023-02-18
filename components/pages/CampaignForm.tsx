import React, { ChangeEvent, FC, useEffect, useMemo, useState } from "react";
import { Input } from "@/components/dataEntry/Input/Input";
import { useForm, Controller } from "react-hook-form";
import { Body_Postman_Campaign, IAccount, Res_Account_All, Res_Postman_Group_FacebookPageId } from "@/types/api";
import { useTranslation } from "next-i18next";
import { Modal } from "@/components/feedback/Modal";
import TileButton from "@/components/general/TileButton/TileButton";
import { AxiosResponse } from "axios";
import PostmanService from "@/services/endpoints/PostmanService";
import AccountService from "@/services/endpoints/AccountService";
import { Avatar } from "@/components/dataDisplay/Avatar";
import { Button } from "../general/Button";
import { Tile } from "../dataDisplay/Tile";
import { Platform } from "@/constants/enums";
import { Typography } from "@/components/general/Typography";
import { CheckBox } from "../dataEntry/CheckBox";

import LoadingCircle from "../feedback/loading/LoadingCircle/LoadingCircle";
import { TextArea } from "../dataEntry/TextArea/TextArea";
import { AvatarGroup } from "../dataDisplay/AvatarGroup";

const { Text } = Typography;

interface IProps  {
  submitCallback: Function;
};

const CampaignForm: FC<IProps> = ({ submitCallback }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Body_Postman_Campaign>();

  const { t } = useTranslation("common");

  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [stepNum, setStepNum] = useState(0);

  const [groups, setGroups] = useState<IContactGroup[]>([]);
  const [accounts, setAccounts] = useState<IAccount[]>([]);

  const [selectedAccountId, setSelectedAccountId] = useState<string | null>();
  const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);

  const modalHandler = () => setOpenModal(!openModal);

  const handleSelectAccount = (accountId: string | null) => setSelectedAccountId(accountId);
  const handleSelectGroup = (groupId: string | null) => setSelectedGroupId(groupId);

  const getGroups = async (pageId: string) => {
    try {
      setGroups([]);
      setLoading(true);
      const response: AxiosResponse<Res_Postman_Group_FacebookPageId> = await PostmanService.getGroups(pageId);
      setGroups(response.data.items);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  const getAccounts = async () => {
    try {
      setLoading(true);
      const response: AxiosResponse<Res_Account_All> = await AccountService.getAccounts();
      setAccounts(response.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  const createCampaign = async (data: Body_Postman_Campaign) => {
    try {
      setLoading(true);
      const response: AxiosResponse<any> = await PostmanService.postCampaign(data);
      console.log(response);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const resetStates = () => {
    setLoading(false);
    setStepNum(0);
    setGroups([]);
    setAccounts([]);
    setSelectedAccountId(null);
    setSelectedGroupId(null);
  };

  const submit = async (formState: Body_Postman_Campaign) => {
    const { name, description } = formState;
    if (!selectedAccountId || !selectedAccountId) return;

    const campaignData: Body_Postman_Campaign = {
      name,
      description,
      facebook_page_id: selectedAccountId,
      status: "active",
      group_id: selectedAccountId,
      content: {
        title: description,
      },
      is_draft: false,
    };

    await createCampaign(campaignData);
    submitCallback(selectedAccountId)
    resetStates();
    modalHandler();
  };

  const cancel = () => {
    submitCallback(selectedAccountId)
    resetStates();
    modalHandler();
  };

  useEffect(() => {
    if (openModal) getAccounts();
  }, [openModal]);
  const handleChooseAccountNextStep = () => {
    if (!selectedAccountId) return;
    getGroups(selectedAccountId);
    handleSelectGroup(null);
    handleNextStep();
  };

  const ChooseAccountStep: FC = () => {
    return (
      <div>
        <h2>{t("choose-account")}</h2>
        <div className="flex w-full overflow-x-scroll">
          {loading ? (
            <div className="flex w-full justify-center">
              <LoadingCircle size="6xl" />
            </div>
          ) : (
            accounts.map((account) => {
              return (
                <div className="relative">
                  <div onClick={() => handleSelectAccount(account.page_id)} className="basis-1/6 m-3" key={account.id}>
                    <Tile
                      data={account}
                      avatar={
                        <>
                          <Avatar
                            url={account.profile_image}
                            size={6}
                            type="image"
                            icon={Platform[account.platform as unknown as keyof typeof Platform]}
                          />
                        </>
                      }
                      width="150px"
                      height="150px"
                      clickColor="secondary"
                      clickLabel={t("details")}
                    >
                      <Text weight="semiBold"> {account.username} </Text>
                    </Tile>
                    <div className="absolute top-5">
                      <CheckBox checked={selectedAccountId === account.page_id} />
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  };

  const ChooseGroupStep: FC = () => {
    return (
      <div>
        <h2>{t("choose-group")}</h2>
        <div className="flex w-full overflow-x-scroll">
          {groups?.map((group) => {
            return (
              <div onClick={() => handleSelectGroup(group.id)} className="basis-1/6 m-3 relative" key={group.id}>
                <Tile
                  data={group}
                  avatar={
                    <AvatarGroup
                      urlKey="profile_image"
                      size={5}
                      count={10}
                      data={group.contacts}
                      nameKey="username"
                      className="mt-5"
                    />
                  }
                  width="160px"
                  height="160px"
                >
                  <div className="flex flex-col text-center w-full">
                    <Text weight="semiBold"> {group.name} </Text>
                  </div>
                </Tile>
                <div className="absolute top-2">
                  <CheckBox checked={selectedGroupId === group.id} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const ChooseContentStep: FC = () => {
    return (
      <div className="flex flex-col">
        <div className="flex-auto m-auto w-4/5">
          <Input
            label={t("name")}
            color={errors.name?.message ? "danger" : "default"}
            {...register("name", {
              required: t("error-required-field"),
            })}
          />
        </div>

        <div className="flex-auto m-auto w-4/5 ">
          <TextArea
            rows={4}
            label={t("description")}
            color={errors.name?.message ? "danger" : "default"}
            {...register("description", {
              required: t("error-required-field"),
            })}
          />
        </div>
      </div>
    );
  };

  const ChooseAccountStepButtons: FC = () => {
    return (
      <>
        <div className="mx-1">
          <Button
            isDisable={!selectedAccountId}
            onClick={handleChooseAccountNextStep}
            size="sm"
            color="postman"
            title="Next"
          />
        </div>
        <div className="mx-1">
          <Button onClick={cancel} size="sm" color="secondary" title="Cancel" />
        </div>
      </>
    );
  };

  const ChooseGroupStepButtons: FC = () => {
    return (
      <>
        <div className="mx-1">
          <Button onClick={handlePrevStep} size="sm" color="postman" title="Prev" />
        </div>
        <div className="mx-1">
          <Button isDisable={!selectedGroupId} onClick={handleNextStep} size="sm" color="postman" title="Next" />
        </div>
        <div className="mx-1">
          <Button onClick={cancel} size="sm" color="secondary" title="Cancel" />
        </div>
      </>
    );
  };

  const ChooseContentStepButtons: FC = () => {
    return (
      <>
        <div className="mx-1">
          <Button onClick={handlePrevStep} size="sm" color="postman" title="Prev" />
        </div>
        <div className="mx-1">
          <Button onClick={handleSubmit(submit)} size="sm" color="postman" title="Submit" />
        </div>
        <div className="mx-1">
          <Button onClick={cancel} size="sm" color="secondary" title="Cancel" />
        </div>
      </>
    );
  };

  const createCampaignSteps: FC[] = [ChooseAccountStep, ChooseGroupStep, ChooseContentStep];
  const createCampaignButtons: FC[] = [ChooseAccountStepButtons, ChooseGroupStepButtons, ChooseContentStepButtons];

  const isFirstStep = useMemo(() => stepNum === 0, [stepNum]);
  const isLastStep = useMemo(() => stepNum === createCampaignSteps.length - 1, [stepNum]);
  const handleNextStep = () => !isLastStep && setStepNum((prevStep) => prevStep + 1);
  const handlePrevStep = () => !isFirstStep && setStepNum((prevStep) => prevStep - 1);

  return (
    <>
      <TileButton title={t("add-new-group")} onClick={modalHandler} />
      <form onSubmit={handleSubmit(submit)}>
        <Modal isVisible={openModal} width="50%" isLoading={loading}>
          <div className="w-full">
            <div className="container p-4" style={{ minHeight: "250px" }}>
              {loading ? (
                <div className="flex w-full justify-center items-center h-48">
                  <LoadingCircle size="6xl" />
                </div>
              ) : (
                createCampaignSteps[stepNum]({})
              )}
            </div>
            <div className="mt-4 flex justify-center">{createCampaignButtons[stepNum]({}) ?? null}</div>
          </div>
        </Modal>
      </form>
    </>
  );
};

export default CampaignForm;
