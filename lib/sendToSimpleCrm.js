export async function sendToSimpleCrm(contactFormData) {
  // Pull the pixel data from the browser just-in-time
  const scrmDataLayer =
    typeof window !== "undefined" && window.scrmDataLayer
      ? window.scrmDataLayer
      : {};

  const formPublicID = process.env.NEXT_PUBLIC_SCRM_FORM_ID;

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

  const res = await fetch("/api/scrm/submit", {
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
