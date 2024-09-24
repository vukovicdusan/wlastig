import { useEffect } from "react";
import Head from "next/head";

const CalendlyBadgeWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/wlastig/free-consultation",
          text: "Schedule Free </br> Consultation!",
          color: "#f2545b",
          textColor: "#ffffff",
          branding: undefined,
        });
      }
    };
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
    </>
  );
};

export default CalendlyBadgeWidget;
