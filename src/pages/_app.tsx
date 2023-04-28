import { type AppType } from "next/app";

import { api } from "myss/utils/api";

import "myss/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
