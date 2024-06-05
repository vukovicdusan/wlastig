const handler = async (req, res) => {
  const api_key = process.env.KLAVIYO_API;
  const contact_form_list_id = "WLjUJC";
  const free_consultation = "XZQiee";
  try {
    const { name, email, type } = req.body.data;

    // const options = {
    //   method: "POST",
    //   headers: {
    //     accept: "application/json",
    //     revision: "2024-05-15",
    //     "content-type": "application/json",
    //     Authorization: `Klaviyo-API-Key ${api_key}`,
    //   },
    //   body: JSON.stringify({
    //     data: [{ type: "profile" }, { name: name }, { email: email }],
    //   }),
    // };

    // const listId =
    //   type === "contact" ? contact_form_list_id : free_consultation;

    // const response = await fetch(
    //   `https://a.klaviyo.com/api/lists/${listId}/relationships/profiles/`,
    //   options
    // );

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        profiles: [{ email, name }],
      }),
    };
    const listId =
      type === "contact" ? contact_form_list_id : free_consultation;
    const response = await fetch(
      "https://a.klaviyo.com/api/v2/list/" +
        listId +
        "/subscribe?api_key=" +
        api_key,
      options
    );

    if (response.ok) {
      const data = await response.json();
      res.status(200).json(data);
    } else {
      throw new Error("Error adding profile to Klaviyo list");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export default handler;
