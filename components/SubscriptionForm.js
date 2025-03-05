import { useState } from "react";
import { subscribeToMailchimp } from "../utils/mailchimp";

export default function SubscriptionForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Subscribing...");
    try {
      await subscribeToMailchimp(email);
      setStatus("Subscribed successfully!");
      setEmail("");
    } catch (error) {
      setStatus("Error: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button type="submit">Subscribe</button>
      {status && <p className="status">{status}</p>}

      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        input {
          font-family: "Gotham";
          padding: 10px;
          margin-bottom: 10px;
          width: 300px;
          max-width: 100%;
          border-radius: 5px;
          border: 1px solid #ccc;
          box-sizing: border-box;
          font-size: 0.8rem;
        }
        input:focus {
          outline: none;
          border: 1px solid #000000;
        }
        button {
          font-size: 0.8rem;
          font-family: "Gotham";
          padding: 10px 20px;
          background-color: #e47a39;
          color: white;
          border: none;
          cursor: pointer;
          width: 300px;
          border-radius: 5px;
          box-sizing: border-box;
        }
        .status {
          font-size: 0.9rem;
          font-weight: 300;
          margin-top: 10px;
        }
      `}</style>
    </form>
  );
}
