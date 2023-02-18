import TileButton from "../general/TileButton/TileButton";
import { FC, useEffect, useMemo, useState } from "react";
import { Modal } from "../feedback/Modal";
import LoadingCircle from "../feedback/loading/LoadingCircle/LoadingCircle";
import { AxiosResponse } from "axios";
import { ICampaign, Res_Postman_Campaign_FacebookPageId } from "@/types/api";
import PostmanService from "@/services/endpoints/PostmanService";

interface IProps {
  campaignId: string | null;
  handleCloseModal: Function;
}

const CampaignDetails: FC<IProps> = ({ campaignId, handleCloseModal }) => {
  const isModalOpen = useMemo(() => (!!campaignId) , [campaignId]);

  const [loading, setLoading] = useState(false);
  const [campaign, setCampaign] = useState<ICampaign | null>(null);

  const getCampaignId = async (campaignId: string | null) => {
    console.log('geting camapgin by id' ,campaignId)
    if (!campaignId) return;
    try {
      setLoading(true);
      const response: AxiosResponse<ICampaign> = await PostmanService.getCampaignById(campaignId);
      setCampaign(response.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isModalOpen) return;
    console.log({campaignId})
    getCampaignId(campaignId);
  }, [campaignId]);



  return (
    <>
      <Modal isVisible={isModalOpen} width="50%" isLoading={isModalOpen}>
        <div className="w-full">
          <div className="container p-4" style={{ minHeight: "250px" }}>
            {isModalOpen ? (
              <div className="flex w-full justify-center items-center h-48">
                <LoadingCircle size="6xl" />
              </div>
            ) : null}
          </div>
        </div>
      </Modal>
    </>
  );
};


export default CampaignDetails