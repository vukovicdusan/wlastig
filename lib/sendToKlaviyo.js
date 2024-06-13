export const sendToKlaviyo = async (data) => {
  try {
    const response = await fetch("/api/klaviyo", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    if (response.ok) {
      console.log("Profile added to Klaviyo list");
      // Handle success
    } else {
      const errorData = await response.json();
      console.error(
        "Error adding profile to Klaviyo list: response is not ok: from sendToKlaviyo function",
        errorData
      );
      // Handle error
    }
  } catch (error) {
    console.error(
      "Error adding profile to Klaviyo list: from sendToKlaviyo function catch block",
      error
    );
    // Handle error
  }
};
