import type { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("sw.js", { scope: "/" });
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
