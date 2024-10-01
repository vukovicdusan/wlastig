const handler = async (req, res) => {
  const api_key = process.env.KLAVIYO_API;
  const contact_form_list_id = "WLjUJC";
  const free_consultation = "XZQiee";

  try {
    const { name, email, type, website, comments } = req.body.data;
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
          type: "profile",
          attributes: {
            email: email,
            first_name: name,
            organization: website,
            properties: { message: comments, name: name },
          },
        },
      }),
    };

    const response = await fetch(
      `https://a.klaviyo.com/api/profiles/`,
      options
    );

    if (response.ok) {
      const listId =
        type === "contact" ? contact_form_list_id : free_consultation;
      const data = await response.json();
      let profileId = data.data.id;
      // res.status(200).json(data);
      const addToListOptions = {
        method: "POST",
        headers: {
          accept: "application/json",
          revision: "2024-07-15",
          "content-type": "application/json",
          Authorization: `Klaviyo-API-Key ${api_key}`,
        },
        body: JSON.stringify({
          data: [
            {
              type: "profile",
              id: profileId, // Use the profile ID in the request body
            },
          ],
        }),
      };
      const addToListResponse = await fetch(
        `https://a.klaviyo.com/api/lists/${listId}/relationships/profiles/`,
        addToListOptions
      );
      if (addToListResponse.ok) {
        const listData = await addToListResponse.json();
        res.status(200).json(listData);
      } else {
        const errorData = await addToListResponse.json();
        console.error("Error addToList Response Data: ", errorData);
        throw new Error(`Error adding profile to Klaviyo list: ${errorData}`);
      }
    } else {
      const errorData = await response.json();
      console.error("Error Response Data:", errorData);
      throw new Error(`Error adding profile to Klaviyo list: ${errorData}`);
    }
  } catch (error) {
    console.error("Catch Block Error:", error);
    res.status(500).json({ error: error.message || "Server error" });
  }
};

export default handler;
