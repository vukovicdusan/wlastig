import React, { useEffect } from "react";

const DetectIncognito = () => {
  useEffect(() => {
    const checkIncognito = async () => {
      if (typeof window !== "undefined") {
        const detectIncognito = (await import("detectincognitojs")).default;

        detectIncognito()
          .then((result) => {
            console.log(result.browserName, result.isPrivate);
          })
          .catch((error) => {
            console.error("Error detecting incognito mode:", error);
          });
      }
    };

    if (document.readyState === "complete") {
      checkIncognito();
    } else {
      window.addEventListener("load", checkIncognito);
    }

    return () => window.removeEventListener("load", checkIncognito);
  }, []);
  return <div></div>;
};

export default DetectIncognito;
