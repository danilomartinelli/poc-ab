import "../styles/globals.css";

import type { AppProps } from "next/app";
import FlagsProvider from "../store/FlagsProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FlagsProvider
      defaults={{
        someAwesomeFeatureEnabled: false,
      }}
    >
      <Component {...pageProps} />
    </FlagsProvider>
  );
}

export default MyApp;
