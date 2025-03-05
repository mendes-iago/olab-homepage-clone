import axios from "axios";

export default async function handler(req, res) {
  const { email } = req.body;

  if (!email || !email.length) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const DATACENTER = API_KEY.split("-")[1];

    const data = {
      email_address: email,
      status: "subscribed",
    };

    const response = await axios.post(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      data,
      {
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );

    return res.status(201).json({ error: "" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
