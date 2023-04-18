import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

const Panto = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);
export default appWithTranslation(Panto /*, nextI18NextConfig */);
