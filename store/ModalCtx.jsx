import React, { useEffect, useState } from "react";

export const ModalCtx = React.createContext(0);

export const ModalCtxProvider = (props) => {
  const [hasOpened, setHasOpened] = useState(false);
  const [auditSent, setAuditSent] = useState(false);
  const [forceOpen, setForceOpen] = useState({ state: false, type: "" });
  useEffect(() => {
    let modalData = sessionStorage.getItem("modalOpened") || false;
    setHasOpened(modalData);
    let auditData = sessionStorage.getItem("auditSent") || false;
    setAuditSent(auditData);
  }, []);

  const modalOpenedHandler = () => {
    !hasOpened ? setHasOpened(true) : "";
    sessionStorage.setItem("modalOpened", true);
  };

  const auditSentHandler = (status) => {
    if (status === "auditSent") {
      setAuditSent(true);
      sessionStorage.setItem("auditSent", true);
    } else if (status === "newAudit") {
      setAuditSent(false);
      sessionStorage.setItem("auditSent", false);
    }
  };

  const forceOpenHandler = (type) => {
    setForceOpen({ state: true, type: type });
  };

  const modalCloseHandler = () => {
    console.log("should be closing");
    console.log(forceOpen);
    setForceOpen({ state: false, type: "" });
  };

  const ctxValue = {
    hasOpened,
    modalOpenedHandler,
    auditSentHandler,
    auditSent,
    forceOpenHandler,
    modalCloseHandler,
    forceOpen,
  };

  return (
    <ModalCtx.Provider value={ctxValue}>{props.children}</ModalCtx.Provider>
  );
};

export default ModalCtx;
