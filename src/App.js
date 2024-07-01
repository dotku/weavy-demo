import React from "react";
import { useWeavy, WyFiles } from "@weavy/uikit-react";

export default function WeavyComponent() {
  console.log("process.env", process.env.REACT_APP_WEAVY_NAME);
  useWeavy({
    url: `https://${process.env.REACT_APP_WEAVY_NAME}.weavy.io`,
    tokenFactory: async () => process.env.REACT_APP_WEAVY_TOKEN,
  });

  return <WyFiles uid="wyuidfiles"></WyFiles>;
}
