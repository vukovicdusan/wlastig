import { GlobalStyles } from "../components/styles/Global";
import "../components/layout/Layout";
import Layout from "../components/layout/Layout";
import Head from "next/head";
import { ModalCtxProvider } from "../store/ModalCtx";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isIncognito, setIsIncognito] = useState(false);
  const [browserName, setBrowserName] = useState("");
  const [colorScheme, setColorScheme] = useState("");

  useEffect(() => {
    if (typeof detectIncognito === "function") {
      detectIncognito()
        .then((result) => {
          setIsIncognito(result.isPrivate);
          setBrowserName(result.browserName);
        })
        .catch((error) => {
          console.error("Error detecting incognito mode:", error);
          setIsIncognito(result.isPrivate);
          setBrowserName("Unknown, Brave or uBlock Origin");
        });
    } else {
      console.warn("detectIncognito is unavailable. Brave or script blocked.");
      setIsIncognito(result.isPrivate);
      setBrowserName("Unknown, Brave or uBlock Origin");
    }

    const detectColorScheme = () => {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      setColorScheme(prefersDarkMode ? "dark" : "light");
    };

    // Run once when the app loads
    detectColorScheme();

    // Listen for system color scheme changes
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    darkModeMediaQuery.addEventListener("change", detectColorScheme);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "global",
      color_scheme: colorScheme,
      isIncognito: isIncognito,
      browser: browserName,
    });

    // Cleanup event listener when component unmount
    return () => {
      darkModeMediaQuery.removeEventListener("change", detectColorScheme);
      // window.removeEventListener("load", checkIncognito);
    };
  }, [browserName, colorScheme, isIncognito]);

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
      <Script
        id="gtm"
        strategy="lazyOnload"
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
