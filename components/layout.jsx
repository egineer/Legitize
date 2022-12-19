import Head from "next/head";
import styles from "../styles/layout.module.css";
import Header from "./nav/header";
import Footer from "./nav/footer";

const name = "Ricano Dago";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, web3Handler , account }) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <link rel="shortcut icon" href="img/favicon.ico" />
        <link rel="apple-touch-icon" href="img/apple-touch-icon.html" />
        <link rel="apple-touch-icon" sizes="72x72" href="img/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="img/apple-touch-icon-114x114.png" />
        <title>Legitize</title>
      </Head>
      <Header web3Handler={web3Handler} />
      {children}
      <Footer/>
    </div>
  );
}
