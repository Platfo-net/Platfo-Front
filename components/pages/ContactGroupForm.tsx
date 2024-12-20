import React, { FC, useEffect, useState } from "react";
import { Input } from "@/components/dataEntry/Input/Input";
import { useForm, Controller, useFormState } from "react-hook-form";
import { Body_Notifier_Group, IContact, Res_LiveChat_Contact_All_PageId } from "@/types/api";
import { useTranslation } from "next-i18next";
import { Modal } from "@/components/feedback/Modal";
import TileButton from "@/components/general/TileButton/TileButton";
import { AxiosResponse } from "axios";
import LiveChatService from "@/services/endpoints/LiveChatService";
import NotifierService from "@/services/endpoints/NotifierService";
import { AvatarCheckBox } from "@/components/dataEntry/AvatarCheckBox";
import { Avatar } from "@/components/dataDisplay/Avatar";

interface IProps {
  pageId: string;
  change: (pageId:string) => void;
}
const ContactGroupForm: FC<IProps> = ({ pageId, change }) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Body_Notifier_Group>({
    defaultValues: {
      facebook_page_id: pageId,
    },
  });
  const { t } = useTranslation("common");

  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const modalHandler = () => {
    setOpenModal(!openModal);
  };

  const getContacts = async (pageId: string) => {
    try {
      setLoading(true);
      const response: AxiosResponse<Res_LiveChat_Contact_All_PageId> = await LiveChatService.getContacts(pageId);
      setContacts(response.data.items);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  const resetForm = () => reset({ name: "", description: "", facebook_page_id: "", contacts: [] });

  const handleCancel = () =>{
    resetForm()
    modalHandler()
  }

  const submit = async (data: Body_Notifier_Group) => {
    const changeData = { ...data, facebook_page_id: pageId };
    changeData.contacts = changeData?.contacts?.filter((contact) => contact) ?? [];
    try {
      setLoading(true);
      await NotifierService.postGroup(changeData);
      setLoading(false);
      setOpenModal(false);
      resetForm()
      change(pageId)
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (openModal) {
        await getContacts(pageId);
      }
    })();
  }, [openModal, pageId]);

  return (
    <>
      <TileButton title={t("Add New Group")} onClick={modalHandler} />
      <form onSubmit={handleSubmit(submit)}>
        <Modal
          isVisible={openModal}
          cancel={handleCancel}
          title={t("Add New Group")}
          width="50%"
          submitType="submit"
          isLoading={loading}
        >
          <div className="flex flex-wrap  w-full">
            <div className="basis-1/3 p-2">
              <Input
                label={t("Name")}
                feedback={errors.name?.message}
                color="notifier"
                status={errors.description?.message ? "danger" : "default"}
                {...register("name", {
                  required: t("Error Required Field"),
                })}
              />
            </div>
            <div className="basis-2/3 p-2">
              <Input
                label={t("Description")}
                color="notifier"
                status={errors.description?.message ? "danger" : "default"}
                feedback={errors.description?.message}
                {...register("description", {
                  required: t("Error Required Field"),
                  minLength: { value: 3, message: t("Error Min Length") },
                })}
              />
            </div>

            <div className="flex flex-wrap mt-4">
              {contacts.map((contact, index) => {
                const fieldName = `contacts[${index}]`;
                return (
                  <fieldset className="m-2" name={fieldName} key={fieldName}>
                    <Controller
                      control={control}
                      name={`contacts[${index}]` as `contacts`}
                      render={({ field: { onChange } }) => (
                        <AvatarCheckBox
                          color="notifier"
                          label={contact.username || ""}
                          onChange={(e) =>
                            onChange(
                              e.currentTarget.checked
                                ? {
                                    contact_id: contact.id,
                                    contact_igs_id: contact.contact_igs_id,
                                  }
                                : undefined
                            )
                          }
                          avatar={<Avatar url={contact.profile_image} size={3.5} type="image" />}
                        />
                      )}
                    />
                  </fieldset>
                );
              })}
            </div>
          </div>
        </Modal>
      </form>
    </>
  );
};

export default ContactGroupForm;
