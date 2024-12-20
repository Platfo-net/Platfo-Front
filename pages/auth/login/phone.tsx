import { NextPageWithLayout } from "@/types/next";
import Image from "next/image";
import LoginImage from "@/assets/images/login.png";
import { useTranslation } from "next-i18next";
import { useForm, Resolver } from "react-hook-form";
import { forwardRef } from "react";
import Link from "next/link";
import { Body_Phone_Login, Res_Auth_AccessToken } from "@/types/api";
import AuthService from "@/services/endpoints/AuthService";
import { phoneCountryCodes } from "@/constants/countryCodes";
import { Path } from "@/constants/enums";
import { AxiosResponse } from "axios";
import { tokenObj } from "@/lib/token";
import { useRouter } from "next/router";

type FormValues = {
  phone: string;
  password: string;
};

const Input: any = forwardRef(
  ({ error, ...rest }: { error: string }, ref: any) => {
    return (
      <div>
        <input
          ref={ref}
          style={{
            borderRadius: "1rem",
            height: "3.5rem",
            width: "100%",
            padding: ".5rem",
            background: "rgba(139, 202, 193 , .24)",
            color: "#000",
          }}
          {...rest}
        />
        <p style={{ color: "red" }}>{error ? error : ""}</p>
      </div>
    );
  }
);

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.phone && values.password ? values : {},
    errors: !values.phone
      ? {
          phone: {
            type: "required",
            message: "phone number is required.",
          },
        }
      : !values.password
      ? {
          password: {
            type: "required",
            message: "password is required.",
          },
        }
      : {},
  };
};

const RegisterPage: NextPageWithLayout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const router = useRouter();

  const login = async (data: Body_Phone_Login) => {
    try {
      const response: AxiosResponse<Res_Auth_AccessToken> =
        await AuthService.postPhoneLogin(data);
      tokenObj.setToken(response.data.access_token);
      router.push({ pathname: Path.Accounts });
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = handleSubmit((data) => {
    const { password } = data;
    let phoneNumber = data.phone;
    if (phoneNumber.startsWith("0")) phoneNumber = phoneNumber.slice(1);

    login({
      phone_country_code: phoneCountryCodes.Iran,
      phone_number: phoneNumber,
      password: password,
    });
  });

  const { t } = useTranslation("common");

  return (
    <>
      <Image
        alt="login image"
        src={LoginImage.src}
        width={2000}
        height={2000}
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
          className="flex flex-col"
          style={{
            width: "90%",
            maxWidth: "500px",
            height: "38rem",
            padding: "1rem",
            background: "white",
            margin: "5% auto",
            borderRadius: "2rem",
            boxShadow: "0px 0px 20px rgba(0,0,0,.4)",
          }}
        >
          <div>
            <h1
              className="mt-5"
              style={{ fontSize: "3rem", color: "black", textAlign: "center" }}
            >
              {t("Login")}
            </h1>
            <p className="mt-1" style={{ color: "black", textAlign: "center" }}>
              {t(`We are very happy to see you again.`)}
            </p>
            <p className="mt-1" style={{ color: "black", textAlign: "center" }}>
              {t(`Let's go`)}
            </p>
          </div>
          <form className="mt-7 flex flex-col flex-auto" onSubmit={onSubmit}>
            <div className="px-3">
              <div className="my-3">
                <div className="ml-3 text-black">Phone Number</div>
                <Input error={errors?.phone?.message} {...register("phone")} />
              </div>
              <div className="my-3">
                <div className="ml-3 text-black">Password</div>
                <Input
                  type="password"
                  error={errors?.password?.message}
                  {...register("password")}
                />
              </div>
            </div>
            {/* <div className="text-center mt-2">
              {t("You forgot your password")}

              <Link href="#">
                <p style={{ color: "#77E9D7", fontWeight: "bold" }}>Forgot password</p>
              </Link>
            </div> */}

            <div className="w-full flex flex-col mt-auto">
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
                Login
              </button>
              <div className="text-center my-4">
                {t("Create New Account ?")}{" "}
                <Link href={Path.PhoneRegister}>
                  <span style={{ color: "#77E9D7", fontWeight: "bold" }}>
                    Register
                  </span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
