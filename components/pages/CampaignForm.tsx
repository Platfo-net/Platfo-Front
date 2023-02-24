import React, { FC, useEffect, useMemo, useState } from "react";
import { Input } from "@/components/dataEntry/Input/Input";
import { useForm } from "react-hook-form";
import { Body_Postman_Campaign, IContactGroup, Res_Postman_Group_FacebookPageId } from "@/types/api";
import { useTranslation } from "next-i18next";
import { Modal } from "@/components/feedback/Modal";
import TileButton from "@/components/general/TileButton/TileButton";
import { AxiosResponse } from "axios";
import PostmanService from "@/services/endpoints/PostmanService";
import { Button } from "../general/Button";
import { Tile } from "../dataDisplay/Tile";
import { Typography } from "@/components/general/Typography";
import { CheckBox } from "../dataEntry/CheckBox";

import LoadingCircle from "../feedback/loading/LoadingCircle/LoadingCircle";
import { TextArea } from "../dataEntry/TextArea/TextArea";
import { AvatarGroup } from "../dataDisplay/AvatarGroup";

const { Text } = Typography;

interface IProps {
  submitCallback: Function;
  page_id: string;
}

const CampaignForm: FC<IProps> = ({ submitCallback, page_id }) => {
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

  const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);

  const modalHandler = () => setOpenModal(!openModal);

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

  const createCampaign = async (data: Body_Postman_Campaign) => {
    try {
      setLoading(true);
      const response: AxiosResponse<any> = await PostmanService.postCampaign(data);
      console.log(response)
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const resetStates = () => {
    setLoading(false);
    setStepNum(0);
    setGroups([]);
    setSelectedGroupId(null);
  };

  const submit = async (formState: Body_Postman_Campaign) => {
    const { name, description, content } = formState;
    if (!page_id || !selectedGroupId) return;

    const campaignData: Body_Postman_Campaign = {
      name,
      description,
      facebook_page_id: page_id,
      status: "active",
      group_id: selectedGroupId,
      content,
      is_draft: false,
    };

    await createCampaign(campaignData);
    submitCallback(page_id);
    resetStates();
    modalHandler();
  };

  const cancel = () => {
    submitCallback(page_id);
    resetStates();
    modalHandler();
  };

  useEffect(() => {
    if (!openModal) return;
    getGroups(page_id);
    handleSelectGroup(null);
  }, [openModal]);

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
      <div>
        <h2>{t("choose-content")}</h2>
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
            <Input
              label={t("description")}
              color={errors.name?.message ? "danger" : "default"}
              {...register("description", {
                required: t("error-required-field"),
              })}
            />
          </div>

          <div className="flex-auto m-auto w-4/5 ">
            <TextArea
              rows={3}
              label={t("content")}
              color={errors.name?.message ? "danger" : "default"}
              {...register("content.title", {
                required: t("error-required-field"),
              })}
            />
          </div>
        </div>
      </div>
    );
  };

  const ChooseGroupStepButtons: FC = () => {
    return (
      <>
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

  const createCampaignSteps: FC[] = [ChooseGroupStep, ChooseContentStep];
  const createCampaignButtons: FC[] = [ChooseGroupStepButtons, ChooseContentStepButtons];

  const isFirstStep = useMemo(() => stepNum === 0, [stepNum]);
  const isLastStep = useMemo(() => stepNum === createCampaignSteps.length - 1, [stepNum]);
  const handleNextStep = () => !isLastStep && setStepNum((prevStep) => prevStep + 1);
  const handlePrevStep = () => !isFirstStep && setStepNum((prevStep) => prevStep - 1);

  return (
    <>
      <TileButton title={t("add-new-group")} onClick={modalHandler} />
      <form onSubmit={handleSubmit(submit)}>
        <Modal isVisible={openModal} width="max(800px , 50%)" height="350px" isLoading={loading}>
          <div className="w-full flex flex-col justify-between	h-full" style={{ height: 320 }}>
            <div className="container" style={{ minHeight: "250px" }}>
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
