import Head from "next/head";
import SubscriptionForm from "../components/SubscriptionForm";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Subscribe to Our Newsletter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1>Subscribe to Our Newsletter</h1>
        <p>Stay updated with our latest news and offers!</p>
        <SubscriptionForm />
      </main>

      <style jsx>{`
        h1 {
          font-weight: 900;
        }
        p {
          font-weight: normal;
        }
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          width: 300px;
          margin: 0 auto;
        }
        .logo {
          max-width: 150px;
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  );
}
