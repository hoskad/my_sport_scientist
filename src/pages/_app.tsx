import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";

import { api } from "myss/utils/api";

import "myss/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />;
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
