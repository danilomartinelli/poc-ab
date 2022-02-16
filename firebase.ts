import { initializeApp } from "firebase/app";
import { getRemoteConfig } from "firebase/remote-config";

const firebaseConfig = {
  apiKey: "AIzaSyAahxhmfiQPCuwJx8Tsy9Nt-HizB-VJRNU",
  authDomain: "teste-ab-60e62.firebaseapp.com",
  projectId: "teste-ab-60e62",
  storageBucket: "teste-ab-60e62.appspot.com",
  messagingSenderId: "183844350446",
  appId: "1:183844350446:web:bb63803fab6086286806ff",
  measurementId: "G-JNKY4K91X0",
};

const app = initializeApp(firebaseConfig);

export const remoteConfigApp =
  typeof window !== "undefined" ? getRemoteConfig(app) : null;
