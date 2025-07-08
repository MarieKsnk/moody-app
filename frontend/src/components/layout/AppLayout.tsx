import Head from "next/head";
import { IAppLayoutProps } from "./AppLayout.props";
import { Header } from "../organisms/Nav/Header";
import { Footer } from "../organisms/Footer/Footer";

export const AppLayout: React.FC<IAppLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Moody - Application culinaire</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Moody, votre carnet de recette personnel & numérique, guidé par votre mood du jour !"
        />
        <meta
          name="keywords"
          content="cuisine, recettes, food, cooking, moody, émotions"
        />
        <meta name="author" content="Marie Klisnick" />
      </Head>
      <div className="app-layout">
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </div>
    </>
  );
};
