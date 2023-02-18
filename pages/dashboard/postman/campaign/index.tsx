import { NextPageWithLayout } from "@/types/next";
//import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { postmanMenu } from "@/constants/dashboardMenu";
import { Tile } from "@/components/dataDisplay/Tile";
import { Avatar } from "@/components/dataDisplay/Avatar";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { useTranslation } from "next-i18next";
import { IAccount, ICampaign, Res_Account_All, Res_Postman_Campaign_FacebookPageId } from "@/types/api";
import { Typography } from "@/components/general/Typography";
import BackdropLoading from "@/components/feedback/BackdropLoading/BackdropLoading";
import AccountService from "@/services/endpoints/AccountService";
import { Platform } from "@/constants/enums";
import PostmanService from "@/services/endpoints/PostmanService";
import CampaignForm from "@/components/pages/CampaignForm";
import { Button } from "@/components/general/Button";
import CampaignDetails from "@/components/pages/CampaginDetail";

const { Text } = Typography;

const CampaignsPage: NextPageWithLayout = () => {
  const [loading, setLoading] = useState(false);
  const [accounts, setAccounts] = useState<Res_Account_All>([]);
  const [campaigns, setCampaigns] = useState<ICampaign[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<IAccount>();

  const [selectedCampaignId , setSelectedCampaignId] = useState<string | null>(null)

  const { t } = useTranslation("common");

  const getAccounts = async () => {
    try {
      setLoading(true);
      const response: AxiosResponse<Res_Account_All> = await AccountService.getAccounts();
      setAccounts(response.data);
      if (response.data.length > 0) {
        setLoading(false);
        return response.data[0];
      } else {
        setLoading(false);
        return null;
      }
    } catch (e) {
      setLoading(false);
      return null;
    }
  };

  const getCampaigns = async (pageId: string) => {
    try {
      setLoading(true);
      const response: AxiosResponse<Res_Postman_Campaign_FacebookPageId> = await PostmanService.getCampaigns({facebook_page_id:pageId});
      console.log(response.data);
      setCampaigns(response.data.items);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  const changeSelectedAccount = async (account: IAccount) => {
    await getCampaigns(account.page_id);
    setSelectedAccount(account);
  };

  useEffect(() => {
    (async () => {
      const firstAccount = await getAccounts();
      if (firstAccount) {
        setSelectedAccount(firstAccount);
        await getCampaigns(firstAccount.page_id);
      } else {
        setCampaigns([]);
      }
    })();
  }, []);

  return (
    <>
      <BackdropLoading loading={loading} />
      {accounts.length > 0 && (
        <Tile className="m-3" width="auto">
          <div className="flex w-full space-x-4 justify-start overflow-x-auto">
            {accounts.map((account) => {
              return (
                <Avatar
                  key={account.id}
                  url={account.profile_image}
                  type="image"
                  click={changeSelectedAccount}
                  data={account}
                  isActive={account.id === selectedAccount?.id}
                  color="postman"
                  icon={Platform[account.platform as unknown as keyof typeof Platform]}
                  title={account.username}
                />
              );
            })}
          </div>
        </Tile>
      )}

      <div className="flex flex-wrap">
        <CampaignDetails campaignId={selectedCampaignId} handleCloseModal={() => setSelectedCampaignId(null)} />
        {selectedAccount && (
          <div className="basis-1/6 m-3 ">
            <CampaignForm submitCallback={getCampaigns} />
          </div>
        )}
        {campaigns?.map((campaign) => {
          return (
            <div className="basis-1/6 m-3" key={campaign.id}>
              <Tile data={campaign} width="255px" height="255px" clickLabel={t("details")}>
                <div className="flex flex-col text-center w-full">
                  <div className="w-full flex justify-center mb-6">
                    <Avatar url={""} type="image" color="postman" size={6} />
                  </div>
                  <Text weight="semiBold"> {campaign.name} </Text>
                  <Text className="mt-5" weight="semiBold">
                    {new Date(campaign.created_at).toLocaleDateString("en")}
                  </Text>
                  {/* <Button
                    type="button"
                    className="mx-6"
                    width="full"
                    title={t("details")}
                    color="postman"
                    variant="contained"
                    onClick={() => setSelectedCampaignId(campaign.id)}
                  /> */}
                </div>
              </Tile>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CampaignsPage;

CampaignsPage.getLayout = (page) => {
  return (
    <DashboardLayout topMenu={postmanMenu} meta={{ title: "Campaigns" }} color="postman">
      {page}
    </DashboardLayout>
  );
};
