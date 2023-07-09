import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { NextPageWithLayout } from "@/types/next";
import { appWithTranslation } from "next-i18next";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { setLanguageDirection } from "@/styles/globals";
import { Provider } from "react-redux";
import { store } from "@/stores/store";

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();

  useEffect(() => {
    if (router.locale) {
      setLanguageDirection(router.locale);
    }
  }, [router.locale]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const style = ["color: Violet", "font-size: 1.5em"].join(";");
    }
  }, []);

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}

export default appWithTranslation(MyApp as React.FC);
