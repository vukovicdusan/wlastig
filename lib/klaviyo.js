export const sendContactToKlaviyo = async (data) => {
  const options = {
    method: "POST",
    headers: { revision: "2023-02-22", "content-type": "application/json" },
    body: JSON.stringify({
      data: {
        type: "subscription",
        attributes: {
          list_id: "WLjUJC",
          custom_source: "Homepage footer signup form",
          email: "matt.kemp@klaviyo-demo.com",
          phone_number: "+15005550006",
          properties: { newKey: "New Value" },
        },
      },
    }),
  };

  fetch(
    "https://a.klaviyo.com/client/subscriptions/?company_id=SUJBDA",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
