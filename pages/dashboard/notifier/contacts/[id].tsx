import { useRouter } from "next/router";
import { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";
//import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NotifierMenu } from "@/constants/dashboardMenu";
import { NextPageWithLayout } from "@/types/next";
import { Path } from "@/constants/enums";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import InfoSection from "@/components/dataDisplay/InfoSection/InfoSection";
import { Avatar } from "@/components/dataDisplay/Avatar";
import { GetStaticPaths, GetStaticProps } from "next";
import BackdropLoading from "@/components/feedback/BackdropLoading/BackdropLoading";
import LiveChatService from "@/services/endpoints/LiveChatService";
import { IContact, Res_LiveChat_Contact_Id } from "@/types/api";
import { useTranslation } from "next-i18next";
import { Dot } from "@/components/feedback/Dot";
import { Typography } from "@/components/general/Typography";

const { Text } = Typography;

const ContactDetailsPage: NextPageWithLayout = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { id } = router.query;

  const [contactInfo, setContactInfo] = useState<IContact>();
  const [loading, setLoading] = useState(false);

  const getContactDetails = useCallback(async () => {
    const response: AxiosResponse<Res_LiveChat_Contact_Id> =
      await LiveChatService.getContact(id as string);
    setContactInfo(response.data);
  }, [id]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        await getContactDetails();
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    })();
  }, [getContactDetails]);

  return (
    <>
      <BackdropLoading loading={loading} />
      {contactInfo && (
        <InfoSection
          username={contactInfo.username}
          follows={contactInfo.followers_count}
          name={contactInfo.name}
          avatar={
            <Avatar
              type="image"
              url={contactInfo.profile_image}
              size={7}
              click={() => {}}
            />
          }
          followers={contactInfo.followers_count}
          extra={
            <ul className="flex flex-col justify-between h-full">
              {contactInfo.is_verified_user !== undefined && (
                <li className="flex space-x-2 ">
                  <Dot isTrue={contactInfo.is_verified_user} className="my-1" />
                  <Text>{t("Is Verified User")}</Text>
                </li>
              )}
              {contactInfo.is_user_follow_business !== undefined && (
                <li className="flex space-x-2">
                  <Dot
                    isTrue={contactInfo.is_user_follow_business}
                    className="my-1"
                  />
                  <Text>{t("Is User Follow business")}</Text>
                </li>
              )}
              {contactInfo.is_business_follow_user !== undefined && (
                <li className="flex space-x-2">
                  <Dot
                    isTrue={contactInfo.is_business_follow_user}
                    className="my-1"
                  />
                  <Text>{t("Is Business Follow User")}</Text>
                </li>
              )}
            </ul>
          }
        />
      )}
    </>
  );
};

export default ContactDetailsPage;

// export const getStaticProps = async ({ locale }: { locale: string }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common'])),
//     },
//   };
// };

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};

ContactDetailsPage.getLayout = (page) => {
  const updatenotifierMenu = [
    ...NotifierMenu,
    {
      key: "contact-info",
      path: Path.NotifierContacts + "/[id]",
    },
  ];
  return (
    <DashboardLayout
      topMenu={updatenotifierMenu}
      meta={{ title: "Contact Details" }}
    >
      {page}
    </DashboardLayout>
  );
};
