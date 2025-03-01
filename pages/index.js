import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubscribe = () => {
    // Simulação de inscrição bem-sucedida
    if (email.trim() === "") {
      setEmailError("👨‍💻 Por favor, insira seu email.");
      return;
    } else if (!email.includes("@") || !email.includes(".")) {
      setEmailError("🚨 Email inválido.");
      return;
    }

    // Se chegou aqui, o email é válido
    setEmailError("");
    setSubscribed(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError("");
  };

  const impactText = subscribed
    ? "Obrigado por se inscrever!"
    : "Transforme suas ideias em realidade";
  const complementText = subscribed
    ? "Em breve você receberá novidades incríveis em seu email"
    : "Junte-se à nossa comunidade e receba conteúdo exclusivo";

  return (
    <>
      <Head>
        <title>OLAB Live</title>
      </Head>

      <div className="container">
        <img src="images/logo.png" className="logo" />
        <h1>{impactText}</h1>
        <p>{complementText}</p>

        {!subscribed && (
          <div className="form">
            <div className="input-group">
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={handleEmailChange}
                className={emailError ? "input-error" : ""}
              />
              {emailError && <div className="error-message">{emailError}</div>}
            </div>
            <button onClick={handleSubscribe}>Inscrever</button>
          </div>
        )}

        <style jsx>{`
          .container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 0 20px;
            max-width: 600px;
            margin: 0 auto;
          }
          .logo {
            height: 100px;
            margin-bottom: 30px;
          }
          h1 {
            font-size: 2rem;
            margin-bottom: 30px;
          }
          p {
            font-size: 1rem;
            margin-bottom: 16px;
            color: #333;
          }
          .form {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 400px;
          }
          .input-group {
            display: flex;
            flex-direction: column;
            align-item: flex-start;
            width: 100%;
          }
          input {
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 1rem;
            width: 100%;
            font-family: "Gotham";
          }
          input:focus {
            outline-color: #000;
          }
          .input-error {
          }
          .error-message {
            font-size: 1rem;
            font-weight: 300;
            padding: 15px;
            text-align: center;
            width: 100%;
          }
          button {
            margin-top: 10px;
            padding: 12px 15px;
            border: none;
            border-radius: 4px;
            background-color: #e47a39;
            color: #fff;
            cursor: pointer;
            font-size: 1rem;
            font-weight: bold;
            transition: background-color 0.3s;
            width: 100%;
            font-family: "Gotham";
          }
          button:hover {
            background-color: #d05b2a;
          }

          @media (min-width: 768px) {
            .form {
              flex-direction: column;
            }
            button {
              white-space: nowrap;
            }
          }
        `}</style>

        <style jsx global>{`
          @font-face {
            font-family: "Gotham";
            src: url("/fonts/Gotham-Medium.otf") format("opentype");
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Gotham";
            src: url("/fonts/Gotham-Book.otf") format("opentype");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Gotham";
            src: url("/fonts/Gotham-Light.otf") format("opentype");
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Gotham";
            src: url("/fonts/Gotham-Black.otf") format("opentype");
            font-weight: 900;
            font-style: normal;
            font-display: swap;
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          html,
          body {
            font-family: "Gotham", sans-serif;
            // background-color: #f1e6d9;
          }
        `}</style>
      </div>
    </>
  );
}
