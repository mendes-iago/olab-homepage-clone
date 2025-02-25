import Head from "next/head";
import SubscriptionForm from "../components/SubscriptionForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inscreva-se</title>
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "0 20px",
        }}
      >
        <img src="images/OLAB_Logo.png" alt="Logo" width="150" />
        <h1>Bem-vindo</h1>
        <p>Assine e receba as últimas novidades!</p>
        <SubscriptionForm />
      </div>
    </>
  );
}
