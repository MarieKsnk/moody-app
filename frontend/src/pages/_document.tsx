import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <title>Moody – Application culinaire</title>
          <link
            rel="preload"
            href="/fonts/bunch/Bunch-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/bunch/Bunch-Medium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/bunch/Bunch-SemiBold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/bunch/Bunch-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/bunch/Bunch-ExtraBold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/bunch/Bunch-Heavy.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/montserrat/Montserrat-Light.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/montserrat/Montserrat-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/montserrat/Montserrat-SemiBold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/montserrat/Montserrat-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="icon" href="/assets/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
