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
  ];

  const isBlackFriday =
    router.pathname === "/google-analytics-ga4-black-friday";
  const shouldHideHeader = hideHeaderOnPaths.includes(router.pathname);
  return (
    <LayoutStyled isBlackFriday={isBlackFriday}>
      <CalendlyBadgeWidget></CalendlyBadgeWidget>
      {!shouldHideHeader ? <Header></Header> : <LandingHeader></LandingHeader>}
      {children}
      <Footer isBlackFriday={isBlackFriday}></Footer>
    </LayoutStyled>
  );
};

export const LayoutStyled = styled.div`
  background: ${(props) => (props.isBlackFriday ? "var(--bg-bf)" : "")};
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
