import { NextPageWithLayout } from "@/types/next";
import Image from "next/image";
import LoginImage from "@/assets/images/login.png";
import { useTranslation } from "next-i18next";
import { useForm, Resolver } from "react-hook-form";
import { forwardRef } from "react";
import Link from "next/link";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

const Input: any = forwardRef(({ error, ...rest }: { error: string }, ref: any) => {
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
        }}
        {...rest}
      />
      <p style={{ color: "red" }}>{error ? error : ""}</p>
    </div>
  );
});

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
          <h1 style={{ fontSize: "2rem", color: "black", textAlign: "center" }}>{t("Create an Account")}</h1>
          <p style={{ color: "black", textAlign: "center" }}>{t(`Let's get started with your 14 days free trial`)}</p>
          <form onSubmit={onSubmit}>
            <div className="px-3">
              <div className="my-3">
                <div className="ml-3 text-black">name</div>
                <Input error={errors?.name?.message} {...register("name")} />
              </div>
              <div className="my-3">
                <div className="ml-3 text-black">email</div>
                <Input error={errors?.email?.message} {...register("email")} />
              </div>
              <div className="my-3">
                <div className="ml-3 text-black">password</div>
                <Input type="password" error={errors?.password?.message} {...register("password")} />
              </div>
              <div className="my-3">
                <div className="ml-3 text-black">confirmPassword</div>
                <Input type="password" error={errors?.confirmPassword?.message} {...register("confirmPassword")} />
              </div>
            </div>
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
                Register
              </button>
            </div>
            <div className="text-center my-2">
              {t("have an account")}{" "}
              <Link href="/auth/login2">
                {" "}
                <span style={{ color: "#77E9D7", fontWeight: "bold" }}>Login</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login2;
