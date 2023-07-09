import { NextPageWithLayout } from "@/types/next";
import Image from "next/image";
import LoginImage from "@/assets/images/login.png";
import { useTranslation } from "next-i18next";
import { useForm, Resolver } from "react-hook-form";
import { forwardRef } from "react";
import Link from "next/link";
import { VerificationCode } from "@/components/dataEntry/VerificationCode/VerificationCode";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.name ? values : {},
    errors: !values.name
      ? {
          name: {
            type: "required",
            message: "name is required.",
          },
        }
      : !values.email
      ? {
          email: {
            type: "required",
            message: "email is required.",
          },
        }
      : !values.password
      ? {
          password: {
            type: "required",
            message: "password is required.",
          },
        }
      : values.confirmPassword !== values.password
      ? {
          confirmPassword: {
            type: "deps",
            message: "password not match",
          },
        }
      : {},
  };
};

const Login2: NextPageWithLayout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  
  const onSubmit = handleSubmit((data) => console.log(data));

  const completeCode = (data: any) => {
    console.log(data);
  };

  const { t } = useTranslation("common");

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
      <div style={{ position: "absolute", zIndex: 10000, width: "100%", height: "100%" }}>
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
          <h1 className="mt-5" style={{ fontSize: "2.3rem", color: "black", textAlign: "center" }}>
            {t("Verify your email")}
          </h1>
          <p className="mt-3" style={{ color: "black", textAlign: "center" }}>
            {t(`A verification Code has been sent to`)}
          </p>
          <p className="mt-2" style={{ color: "black", textAlign: "center" }}>
            Email@gmail.com
          </p>

          <p className="mt-3 mx-4" style={{ color: "black", textAlign: "center" }}>
            {t(`Please check your inbox and enter the verification code blew to verify your email address`)}
          </p>

          <p className="mt-3 mx-4" style={{ color: "black", textAlign: "center" }}>
            {t(`Verification Code`)}
          </p>
          <div className="mx-auto" style={{ width: "20rem" }}>
            <VerificationCode steps={5} onComplete={(data) => completeCode(data)} />
          </div>

          <p className="mt-3 mx-4" style={{ color: "black", textAlign: "center" }}>
            {t(`The code will expire after`)}
          </p>

          <p className="mt-3 mx-4" style={{ color: "black", textAlign: "center" }}>
            {t(`[time]`)}
          </p>

          <p className="mt-3 mx-4" style={{ color: "black", textAlign: "center" }}>
            {t(`resend code`)}
          </p>

          <div className="w-full flex">
            <button
              className="text-black"
              style={{
                margin: "0 auto",
                padding: "1rem 2.4rem",
                background: "#77E9D7",
                borderRadius: "1rem",
              }}
              formAction="submit"
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login2;
