import { ConfigWrapper } from "klaviyo-api";

const klaviyo = ConfigWrapper("pk_0f33eb83b86bbcf6768aa8e4fed180cff5");

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email } = req.body;
    try {
      await klaviyo.identify(email, {
        name: name,
        email: email,
      });
      return res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
    }
  }
};

export default handler;
