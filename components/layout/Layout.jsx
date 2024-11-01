import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import CalendlyBadgeWidget from "../CalendlyBadgeWidget";
import { useRouter } from "next/router";
import LandingHeader from "../LandingHeader";

const Layout = ({ children }) => {
  const router = useRouter();

  // Define pages where the header should not be displayed
  const hideHeaderOnPaths = [
    "/google-analytics4-ga4-agency",
    "/google-analytics-ga4-black-friday",
    "/google-analytics-ga4-consultant",
    "/google-ads",
    "/google-ads-black-friday",
    "/ppc-agency",
    "/ppc-agency-black-friday",
  ];
  const blackFridayUrls = [
    "/google-ads-black-friday",
    "/google-analytics-ga4-black-friday",
    "/ppc-agency-black-friday",
  ];
  const isBlackFriday = blackFridayUrls.includes(router.pathname);
  const shouldHideHeader = hideHeaderOnPaths.includes(router.pathname);
  return (
    <LayoutStyled isBlackFriday={isBlackFriday}>
      <CalendlyBadgeWidget></CalendlyBadgeWidget>
      {!shouldHideHeader ? (
        <Header></Header>
      ) : (
        <LandingHeader isBlackFriday={isBlackFriday}></LandingHeader>
      )}
      {children}
      <Footer isBlackFriday={isBlackFriday}></Footer>
    </LayoutStyled>
  );
};

export const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  & > *:nth-child(2) {
    flex-grow: 1;
  }

  & > *:last-child {
    flex-shrink: 0;
  }
`;

export default Layout;
