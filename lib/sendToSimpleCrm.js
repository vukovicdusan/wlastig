export async function sendToSimpleCrm(contactFormData, isStaging) {
  // Pull the pixel data from the browser just-in-time
  const scrmDataLayer =
    typeof window !== "undefined" && window.scrmDataLayer
      ? window.scrmDataLayer
      : {};

  const productionFormPublicID = process.env.NEXT_PUBLIC_SCRM_FORM_ID;
  const stagingFormPublicID = process.env.NEXT_PUBLIC_SCRM_STAGING_FORM_ID;
  let formPublicID = isStaging ? stagingFormPublicID : productionFormPublicID;

  const results = [
    {
      id: "primary-email",
      name: "Email",
      type: "text",
      value: contactFormData.email || "",
    },
    {
      id: "full-name",
      name: "Name",
      type: "text",
      value: contactFormData.name || "",
    },
    {
      id: "company-website",
      name: "Company Website",
      type: "text",
      value: contactFormData.website || "",
    },
    {
      id: "message",
      name: "Message",
      type: "text",
      value: contactFormData.comments || "",
    },
    {
      id: "page-url",
      name: "Page URL",
      type: "text",
      value: contactFormData.pageUrl || "",
    },
    {
      id: "form-type",
      name: "Form Type",
      type: "text",
      value: contactFormData.type || "",
    },
  ];

  const body = {
    formPublicID,
    payload: {
      results,
      scrmDataLayer,
    },
  };

  let apiEndpoint = isStaging
    ? "/api/scrm/submitToStaging"
    : "/api/scrm/submit";

  const res = await fetch(apiEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `SCRM submit failed (${res.status})`);
  }

  return res;
}
