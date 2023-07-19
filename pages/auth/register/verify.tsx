import { NextPageWithLayout } from "@/types/next";
import Image from "next/image";
import LoginImage from "@/assets/images/login.png";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Body_Activate_By_SMS, Body_Phone_Verification } from "@/types/api";
import { phoneCountryCodes } from "@/constants/countryCodes";
import AuthService from "@/services/endpoints/AuthService";
import { useCountDown } from "@/components/hooks/useCountDown";
import { timerFormatter } from "@/utils/timerFormatter";
import ReactPin from "react-pin-input";
import { tokenObj } from "@/lib/token";

const Login2: NextPageWithLayout = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [smsToken, setSmsToken] = useState<string>("");
  const { timeLeft } = useCountDown({
    countDownAmount: 300,
    onFinishCallback: () => {
      router.reload();
    },
  });


  const sendVerificationCode = async (data: Body_Phone_Verification) => {
    try {
      const res = await AuthService.postActivationCodeBySMS(data);
      setSmsToken(res.data.token);
    } catch (e) {
      console.log(e);
    }
  };

  const activateByVerificationCode = async (data:Body_Activate_By_SMS)=>{
    try{
      const response = await AuthService.postActivateBySMS(data);
      if(response.status === 200){
        tokenObj.setToken(smsToken);
        router.push({ pathname: "/dashboard" });
      }
    }catch(e){
        console.log(e);
        console.log('login unsuccessful')
    }
  }

  const completeCode = (data: string) => {
    const { phone } = router.query;
    if (!smsToken.length) return;
    if (!phone || typeof phone !== "string") return;
    activateByVerificationCode({
      code: data,
      token: smsToken,
      phone_country_code: phoneCountryCodes.Iran,
      phone_number: phone,
    });
  };
  useEffect(() => {
    let { phone } = router.query;
    if (!phone || typeof phone !== "string") return;
    if (phone.startsWith("0")) phone = phone.slice(1)
    sendVerificationCode({
      phone_country_code: phoneCountryCodes.Iran,
      phone_number: phone,
    });
  }, [router.query]);

  return (
    <>
      <Image
        alt="login image"
        src={LoginImage.src}
        width={1000}
        height={1000}
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          zIndex: 10000,
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            width: "90%",
            maxWidth: "500px",
            padding: "1rem",
            height: "38rem",
            background: "white",
            margin: "5% auto",
            borderRadius: "2rem",
            boxShadow: "0px 0px 20px rgba(0,0,0,.4)",
          }}
        >
          <h1
            className="mt-5"
            style={{ fontSize: "2.3rem", color: "black", textAlign: "center" }}
          >
            {t("Verify your Phone")}
          </h1>
          <p className="mt-3" style={{ color: "black", textAlign: "center" }}>
            {t(`A verification Code has been sent to`)}
          </p>
          <p className="mt-2" style={{ color: "black", textAlign: "center" }}>
            {router.query.phone ?? ""}
          </p>

          <p
            className="mt-3 mx-4"
            style={{ color: "black", textAlign: "center" }}
          >
            {t(
              `Please check your inbox and enter the verification code blew to verify your email address`
            )}
          </p>

          <p
            className="mt-3 mx-4"
            style={{ color: "black", textAlign: "center" }}
          >
            {t(`Verification Code`)}
          </p>

          <div className="mx-auto" style={{ width: "20rem" }}>
            <ReactPin
              style={{ display: "flex", justifyContent: "center" }}
              inputStyle={{
                border: "none",
                borderRadius: "1rem",
                background: "#8BCAC1",
                color: "white",
              }}
              length={6}
              onComplete={completeCode}
              focus
              type="custom"
              inputMode="text"
            />
          </div>

          <p
            className="mt-3 mx-4"
            style={{ color: "black", textAlign: "center" }}
          >
            {t(`The code will expire after`)}
          </p>

          <p
            className="mt-3 mx-4"
            style={{ color: "black", textAlign: "center" }}
          >
            {timerFormatter(timeLeft)}
          </p>

          <p
            className="mt-3 mx-4"
            style={{ color: "black", textAlign: "center" }}
          >
            {t(`resend code`)}
          </p>
        </div>
      </div>
    </>
  );
};

export default Login2;
