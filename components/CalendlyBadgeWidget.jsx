import { useEffect } from "react";

const CalendlyBadgeWidget = () => {
  useEffect(() => {
    const loadCalendlyCSS = () => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.type = "text/css";
      link.media = "print"; // Load as non-blocking
      link.onload = () => {
        link.media = "all"; // Apply after load
      };
      document.head.appendChild(link);
    };

    const loadCalendlyScript = () => {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initBadgeWidget({
            url: "https://calendly.com/wlastig/free-consultation?hide_gdpr_banner=1",
            text: "Schedule Free </br> Consultation!",
            color: "#f2545b",
            textColor: "#ffffff",
            branding: undefined,
          });
        }
      };
    };

    // Load CSS and Script
    loadCalendlyCSS();
    loadCalendlyScript();

    return () => {
      if (window.Calendly && window.Calendly.destroyBadge) {
        window.Calendly.destroyBadge();
      }
    };
  }, []);

  return null;
};

export default CalendlyBadgeWidget;
