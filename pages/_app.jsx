import { GlobalStyles } from "../components/styles/Global";
import "../components/layout/Layout";
import Layout from "../components/layout/Layout";
import Head from "next/head";
import { ModalCtxProvider } from "../store/ModalCtx";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P3TMF2H');
            `,
          }}
        />
        <link
          rel="preload"
          href="/fonts/poppins-extrabold-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/poppins-medium-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/poppins-regular-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>

      <GlobalStyles></GlobalStyles>
      <ModalCtxProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ModalCtxProvider>
    </>
  );
}

export default MyApp;
