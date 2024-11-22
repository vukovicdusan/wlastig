import { GlobalStyles } from "../components/styles/Global";
import "../components/layout/Layout";
import Layout from "../components/layout/Layout";
import Head from "next/head";
import { ModalCtxProvider } from "../store/ModalCtx";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { checkAdBlock } from "adblock-checker";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loadScript, setLoadScript] = useState(false);

  useEffect(() => {
    const detectColorScheme = () => {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return prefersDarkMode ? "dark" : "light";
    };

    const initializeState = async () => {
      let isPrivate = false;
      let browserName = "Unknown, Brave or uBlock Origin";

      if (typeof detectIncognito === "function") {
        try {
          const result = await detectIncognito();
          isPrivate = result.isPrivate;
          browserName = result.browserName;
        } catch (error) {
          console.error("Error detecting incognito mode:", error);
        }
      } else {
        console.warn(
          "detectIncognito is unavailable. Brave or script blocked."
        );
      }

      const colorScheme = detectColorScheme();
      const isAdBlock = await checkAdBlock();

      // Push to dataLayer once
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "visitor_info",
        color_scheme: colorScheme,
        isIncognito: isPrivate,
        browser: browserName,
        isAdBlock,
      });
      setLoadScript(true);
    };

    // Call the initialization function
    initializeState();

    // Listen for system color scheme changes
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const handleColorSchemeChange = () => {
      const colorScheme = detectColorScheme();
      setGlobalState((prevState) => ({
        ...prevState,
        colorScheme,
      }));
    };
    darkModeMediaQuery.addEventListener("change", handleColorSchemeChange);

    // Cleanup event listener
    return () => {
      darkModeMediaQuery.removeEventListener("change", handleColorSchemeChange);
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
        src={
          "https://cdn.jsdelivr.net/gh/Joe12387/detectIncognito@main/dist/es5/detectIncognito.min.js"
        }
        strategy="beforeInteractive"
      ></Script>
      {loadScript ? (
        <Script
          id="gtm"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://load.data.wlastig.com/yousqvsq.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P3TMF2H');
          `,
          }}
        />
      ) : null}

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
