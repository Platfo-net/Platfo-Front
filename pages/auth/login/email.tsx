import { NextPageWithLayout } from "@/types/next";
import Image from "next/image";
import LoginImage from "@/assets/images/login.png";
import { useTranslation } from "next-i18next";
import { useForm, Resolver } from "react-hook-form";
import { forwardRef } from "react";
import Link from "next/link";
import { Body_Auth_AccessToken } from "@/types/api";
import { login } from "@/stores/reducers/auth";
import { useAppDispatch, useAppSelector } from "@/stores/reduxHooks";
import { useRouter } from "next/router";
import { Path } from "@/constants/enums";

type FormValues = {
  email: string;
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
    values: values.email ? values : {},
    errors: !values.email
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
  const dispatch = useAppDispatch();

  const { t } = useTranslation("common");

  const { requestState, token, error } = useAppSelector(({ auth }) => ({
    requestState: auth.requestState,
    token: auth.token,
    error: auth.error,
  }));

  if (Boolean(token) && !error) router.push(Path.Accounts);

  const submit = handleSubmit((data: Body_Auth_AccessToken) => {
    dispatch(login(data));
  });

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

          <form className="mt-7" onSubmit={submit}>
            <div className="px-3">
              <div className="my-3">
                <div className="ml-3 text-black">email</div>
                <Input error={errors?.email?.message} {...register("email")} />
              </div>
              <div className="my-3">
                <div className="ml-3 text-black">password</div>
                <Input
                  type="password"
                  error={errors?.password?.message}
                  {...register("password")}
                />
              </div>
            </div>

            <div className="text-center mt-2">
              {t("You want to login with your phone number")}

              <Link href={Path.PhoneLogin}>
                <p style={{ color: "#77E9D7", fontWeight: "bold" }}>
                  Login with phone number
                </p>
              </Link>
            </div>

            <div className="text-center mt-2">
              {t("You forgot your password")}

              <Link href="#">
                <p style={{ color: "#77E9D7", fontWeight: "bold" }}>
                  Forgot password
                </p>
              </Link>
            </div>

            <div className="w-full flex mt-4">
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
            </div>
          </form>
          <div className="text-center my-2">
            {t("Create New Account ?")}{" "}
            <Link href={Path.EmailLogin}>
              <span style={{ color: "#77E9D7", fontWeight: "bold" }}>
                Register
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
