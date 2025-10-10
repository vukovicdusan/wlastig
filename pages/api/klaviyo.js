const handler = async (req, res) => {
  const api_key = process.env.KLAVIYO_API;
  const contact_form_list_id = "WLjUJC";
  const free_consultation = "XZQiee";

  try {
    const { name, email, type, website, comments } = req.body.data;
    const listId =
      type === "contact" ? contact_form_list_id : free_consultation;
    const headers = {
      accept: "application/json",
      revision: "2024-07-15", // use the latest consistently
      "content-type": "application/json",
      Authorization: `Klaviyo-API-Key ${api_key}`,
    };

    // Helper: get or create a profile, returning { id, created: boolean }
    const getOrCreateProfile = async () => {
      // Try create
      const createResp = await fetch("https://a.klaviyo.com/api/profiles/", {
        method: "POST",
        headers,
        body: JSON.stringify({
          data: {
            type: "profile",
            attributes: {
              email,
              first_name: name,
              organization: website,
              properties: { message: comments, name },
            },
          },
        }),
      });

      if (createResp.ok) {
        const created = await createResp.json();
        return { id: created.data.id, created: true };
      }

      // If create failed, try to find by email; treat found as non-fatal “exists”
      let details;
      try {
        details = await createResp.json();
      } catch {}

      // Query by email
      const filterEmail = encodeURIComponent(`equals(email,"${email}")`);
      const lookupResp = await fetch(
        `https://a.klaviyo.com/api/profiles/?filter=${filterEmail}`,
        {
          method: "GET",
          headers,
        }
      );
      if (lookupResp.ok) {
        const data = await lookupResp.json();
        const existing = data?.data?.[0];
        if (existing?.id) return { id: existing.id, created: false };
      }

      // If we’re here, it’s a hard failure
      throw new Error(`Klaviyo profile error: ${JSON.stringify(details)}`);
    };

    // 1) Get or create profile
    const { id: profileId, created } = await getOrCreateProfile();

    // 2) Add to list (idempotent-ish; Klaviyo may return 409 if already in list)
    const addToListResp = await fetch(
      `https://a.klaviyo.com/api/lists/${listId}/relationships/profiles/`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          data: [{ type: "profile", id: profileId }],
        }),
      }
    );

    let warnings = [];
    if (!addToListResp.ok) {
      // Try to read the error but don’t fail the whole flow — return warning to client
      let err;
      try {
        err = await addToListResp.json();
      } catch {}
      console.error("Add-to-list warning:", err);
      warnings.push("Could not add profile to list");
    }
    res.status(200).json({
      ok: true,
      created,
      profileId,
      warnings,
    });
  } catch (error) {
    console.error("Catch Block Error:", error);
    res.status(500).json({ ok: false, error: error.message || "Server error" });
  }
};

export default handler;
