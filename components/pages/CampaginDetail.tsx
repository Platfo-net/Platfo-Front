import { FC, useEffect, useMemo, useState } from "react";
import { Modal } from "../feedback/Modal";
import LoadingCircle from "../feedback/loading/LoadingCircle/LoadingCircle";
import { AxiosResponse } from "axios";
import { ICampaign } from "@/types/api";
import PostmanService from "@/services/endpoints/PostmanService";
import { useTranslation } from "next-i18next";
import { Button } from "../general/Button";

interface IProps {
  campaignId: string | null;
  handleCloseModal: () => void;
}

const CampaignDetails: FC<IProps> = ({ campaignId, handleCloseModal}) => {
  const isModalOpen = useMemo(() => !!campaignId, [campaignId]);
  const { t } = useTranslation("common");

  const [loading, setLoading] = useState(false);
  const [campaign, setCampaign] = useState<ICampaign | null>(null);

  const getCampaignId = async (campaignId: string | null) => {
    console.log("geting camapgin by id", campaignId);
    if (!campaignId) return;
    try {
      setLoading(true);
      const response: AxiosResponse<ICampaign> = await PostmanService.getCampaignById(campaignId);
      console.log(response.data);
      setCampaign(response.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isModalOpen) return;
    console.log({ campaignId });
    getCampaignId(campaignId);
  }, [campaignId]);

  return (
    <>
      <Modal isVisible={isModalOpen} width="50%" height="400px" isLoading={isModalOpen}>
        <div className="w-full">
          <div className="container p-4" style={{ minHeight: "250px" }}>
            {isModalOpen ? (
              <div className="flex w-full justify-center items-center h-48">
                {loading ? (
                  <LoadingCircle size="6xl" />
                ) : (
                  <div className="w-full h-full">
                    <span className="font-bold w-full flex justify-center my-2">{campaign?.name}</span>

                    <div className="flex justify-between w-full my-2">
                      <span>{t("description")}</span>
                      <span>{campaign?.description}</span>
                    </div>

                    <div className="flex justify-between w-full my-2">
                      <span>{t("content")}</span>
                      <span>{campaign?.content.text}</span>
                    </div>

                    <div className="flex justify-between w-full my-2">
                      <span>{t("status")}</span>
                      <span>{campaign?.status}</span>
                    </div>

                    <div className="flex justify-between w-full my-2">
                      <span>{t("total-contact-count")}</span>
                      <span>{campaign?.total_contact_count}</span>
                    </div>

                    <div className="flex justify-between w-full my-2">
                      <span>{t("sent-count")}</span>
                      <span>{campaign?.sent_count}</span>
                    </div>

                    <div className="flex justify-between w-full my-2">
                      <span>{t("seen-count")}</span>
                      <span>{campaign?.seen_count}</span>
                    </div>

                    <div className="flex justify-between w-full my-2">
                      <span>{t("created-at")}</span>
                      <span>{new Date(campaign?.created_at ?? "").toLocaleDateString("en")}</span>
                    </div>

                    <div className="w-full flex justify-center">
                      {/* <div className="mx-2">
                        <Button
                          type="button"
                          title={t("edit")}
                          color="postman"
                          variant="contained"
                          onClick={() => handleEditCampaign(campaign.id)}
                        />
                      </div> */}

                      <div className="mx-2">
                        <Button
                          type="button"
                          title={t("cancel")}
                          color="secondary"
                          variant="contained"
                          onClick={() => handleCloseModal()}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CampaignDetails;
