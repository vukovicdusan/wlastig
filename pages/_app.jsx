import { GlobalStyles } from "../components/styles/Global";
import "../components/layout/Layout";
import Layout from "../components/layout/Layout";
import Head from "next/head";
import { ModalCtxProvider } from "../store/ModalCtx";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import detectIncognito from "detectincognitojs";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    detectIncognito().then((result) => {
      console.log(result.browserName, result.isPrivate);
    });
    // detectIncognito()
    //   .then((result) => {
    //     window.dataLayer.push({
    //       event: "isIncognito",
    //       isIncognito: result.isPrivate,
    //       browser: result.browserName,
    //     });
    //   })
    //   .catch((error) => {
    //     console.error("Error determining incognito mode:", error);
    //     window.dataLayer.push({
    //       event: "isIncognito",
    //       isIncognito: result.isPrivate,
    //       browser: "unknown",
    //     });
    //   });

    const detectColorScheme = () => {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      window.dataLayer.push({
        event: "color_scheme",
        color_scheme: prefersDarkMode ? "dark" : "light",
      });
    };

    // Run once when the app loads
    detectColorScheme();

    // Listen for system color scheme changes
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    darkModeMediaQuery.addEventListener("change", detectColorScheme);

    // Cleanup event listener when component unmounts
    return () => {
      darkModeMediaQuery.removeEventListener("change", detectColorScheme);
    };
  }, []);

  const blackFridayUrls = [
    "/google-ads-black-friday",
    "/google-analytics-ga4-black-friday",
    "/ppc-agency-black-friday",
  ];
  const isBlackFriday = blackFridayUrls.includes(router.pathname);
  let backgroundColor = isBlackFriday
    ? "var(--bf-black)"
    : "var(--background-light)";

  return (
    <>
      <Head>
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
      <Script
        id="gtm"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://load.data.wlastig.com/yousqvsq.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P3TMF2H');
            `,
        }}
      />

      <GlobalStyles
        isBlackFriday={isBlackFriday}
        backgroundColor={backgroundColor}
      ></GlobalStyles>
      <ModalCtxProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ModalCtxProvider>
    </>
  );
}

export default MyApp;
