import React from "react";

import { fetchAndActivate, getAll, RemoteConfig } from "firebase/remote-config";

import { remoteConfigApp } from "../firebase";

interface IProps {
  defaults: {
    [key: string]: boolean;
  };
  children: React.ReactNode;
}

const FlagsContext = React.createContext({});

const FlagsProvider = ({ defaults, children }: IProps) => {
  const [flags, setFlags] = React.useState(defaults);

  React.useEffect(() => {
    if (remoteConfigApp) {
      remoteConfigApp.settings = {
        ...remoteConfigApp.settings,
        minimumFetchIntervalMillis: 3600000,
      };

      fetchAndActivate(remoteConfigApp)
        .then((activated) => {
          if (!activated) console.log("not activated");
          return getAll(remoteConfigApp as RemoteConfig);
        })
        .then((remoteFlags) => {
          const newFlags = {
            ...flags,
          };

          for (const [key, config] of Object.entries(remoteFlags)) {
            newFlags[key] = config.asBoolean();
          }

          setFlags(newFlags);
        })
        .catch((error) => console.error(error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remoteConfigApp]);

  return (
    <FlagsContext.Provider value={flags}>{children}</FlagsContext.Provider>
  );
};

export default FlagsProvider;
