import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import CalendlyBadgeWidget from "../CalendlyBadgeWidget";

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <CalendlyBadgeWidget></CalendlyBadgeWidget>
      <Header></Header>
      {children}
      <Footer></Footer>
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
