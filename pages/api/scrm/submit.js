export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = req.body;

    if (!body?.formPublicID) {
      return res.status(400).json({ error: "Missing formPublicID" });
    }
    if (!body?.payload?.results || !Array.isArray(body.payload.results)) {
      return res
        .status(400)
        .json({ error: "payload.results must be an array" });
    }

    const upstream = await fetch(
      "https://develop-api.simplecrm.xyz/v1/collect-external",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    const text = await upstream.text();
    res.status(upstream.status);
    res.setHeader(
      "Content-Type",
      upstream.headers.get("content-type") || "application/json"
    );
    return res.send(text);
  } catch (err) {
    console.error("SCRM submit error:", err);
    return res
      .status(500)
      .json({ error: "Server error", detail: err?.message });
  }
}
