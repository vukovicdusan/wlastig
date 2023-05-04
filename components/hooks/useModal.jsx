import { useState } from "react";
export const useModal = () => {
  const [forceOpen, setForceOpen] = useState({ state: false, type: "" });

  const modelOpenHandler = (type) => {
    setForceOpen({ state: "true", type: type });
  };

  const modalClosedHandler = () => {
    setForceOpen({ state: false, type: "" });
  };

  return [modalClosedHandler, modelOpenHandler, forceOpen];
};
