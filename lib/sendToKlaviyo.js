// lib/sendToKlaviyo.js
export const sendToKlaviyo = async (data, { timeoutMs = 10000 } = {}) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch("/api/klaviyo", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ data }),
      signal: controller.signal,
    });

    // Try to parse JSON, but tolerate empty bodies (e.g., 204)
    let payload = null;
    try {
      payload = await res.clone().json(); // clone so we don’t break on non-JSON
    } catch (_) {
      payload = null;
    }

    clearTimeout(timer);

    if (res.ok) {
      const warnings =
        (payload && (payload.warnings || payload.warning || [])) || [];
      return {
        ok: true,
        warnings: Array.isArray(warnings) ? warnings : [String(warnings)],
        status: res.status,
        data: payload,
      };
    }

    // Non-2xx: return a soft failure, don’t throw
    return {
      ok: false,
      warnings: ["Klaviyo responded with a non-success status."],
      status: res.status,
      error: payload || { message: "Unknown Klaviyo error" },
    };
  } catch (err) {
    clearTimeout(timer);
    // Network/timeout/abort errors: still resolve
    return {
      ok: false,
      warnings: ["Klaviyo request could not be completed (network/timeout)."],
      status: 0,
      error: { message: err?.message || "Network error" },
    };
  }
};
