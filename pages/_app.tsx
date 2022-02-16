import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getRemoteConfig } from "firebase/remote-config";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAahxhmfiQPCuwJx8Tsy9Nt-HizB-VJRNU",
  authDomain: "teste-ab-60e62.firebaseapp.com",
  projectId: "teste-ab-60e62",
  storageBucket: "teste-ab-60e62.appspot.com",
  messagingSenderId: "183844350446",
  appId: "1:183844350446:web:bb63803fab6086286806ff",
  measurementId: "G-JNKY4K91X0"
};

if (typeof window !== "undefined") {
  const app = initializeApp(firebaseConfig);
  const _analytics = getAnalytics(app);
  const _remoteConfig = getRemoteConfig(app);
  const _messaging = getMessaging(app);
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
