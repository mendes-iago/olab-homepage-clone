import Head from "next/head";
import SubscriptionForm from "../components/SubscriptionForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Newsletter OLAB Learning</title>
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
        <img src="/images/OLAB_Logo.png" alt="Logo" width="150" />
        <h1>Transforme seu conhecimento em ação!</h1>
        <p>
          Inscreva-se para receber dicas e conteúdos exclusivos sobre
          sensoriamento remoto.
        </p>
        <SubscriptionForm />
      </div>
    </>
  );
}
