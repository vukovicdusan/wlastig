const handler = async (req, res) => {
  const api_key = process.env.KLAVIYO_API;
  const contact_form_list_id = "WLjUJC";
  const free_consultation = "XZQiee";

  try {
    const { name, email, type, website } = req.body.data;
    const listId =
      type === "contact" ? contact_form_list_id : free_consultation;
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        revision: "2024-05-15",
        "content-type": "application/json",
        Authorization: `Klaviyo-API-Key ${api_key}`,
      },
      body: JSON.stringify({
        data: {
          type: "profile-bulk-import-job",
          attributes: {
            profiles: {
              data: [
                {
                  type: "profile",
                  attributes: {
                    email: email,
                    first_name: name,
                    organization: website,
                  },
                  meta: { patch_properties: { unset: "skus" } },
                },
              ],
            },
          },
          relationships: { lists: { data: [{ type: "list", id: listId }] } },
        },
      }),
    };

    const response = await fetch(
      `https://a.klaviyo.com/api/profile-bulk-import-jobs/`,
      options
    );

    if (response.ok) {
      const data = await response.json();
      res.status(200).json(data);
    } else {
      const errorData = await response.json();
      console.error("Error Response Data:", errorData);
      throw new Error(
        `Error adding profile to Klaviyo list: ${errorData.detail}`
      );
    }
  } catch (error) {
    console.error("Catch Block Error:", error);
    res.status(500).json({ error: error.message || "Server error" });
  }
};

export default handler;
