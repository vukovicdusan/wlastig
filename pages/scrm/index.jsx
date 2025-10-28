import Head from "next/head";
import React from "react";
import { Wrapper } from "../../components/styles/Wrapper.styled";
import { Region } from "../../components/styles/Region.styled";
import ContactForm from "../../components/ContactForm";
import { Stack } from "../../components/styles/Stack.styled";
import styled from "styled-components";

const SCRM = () => {
  return (
    <main>
      <Head>
        <title>Wlastig Analytics - SCRM Testing</title>
        <meta name="description" content="SCRM Testing Grounds" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://staging.simplecrm.xyz/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          try {
            window.scrm?.init?.();
          } catch {}
        }}
      />

      <Region>
        <Wrapper>
          <ScrmStagingStyled>
            <Stack stackSpace={"var(--s4)"} stackAlign={"center"}>
              <h1 className="center">Simple CRM Submission Test Page</h1>
              <Stack stackAlign={"center"}>
                <h2>External Form</h2>
                <ContactForm bfBg={"--background-light"} formType={"freeConsultation2"} btnId={"form_submit_consultation2"} scrmIsStaging={true}></ContactForm>
              </Stack>
              <Stack stackAlign={"center"}>
                <h2>Classic Form</h2>
                <iframe frameBorder={0} title="Vlada Wlastig Testing Form 2" src="https://staging.simplecrm.xyz/view-form?publicID=14e6e9e2-2576-404c-8374-0779998efef6" width="100%" height="100%"></iframe>
              </Stack>
            </Stack>
          </ScrmStagingStyled>
        </Wrapper>
      </Region>
    </main>
  );
};

export const ScrmStagingStyled = styled.div`
  iframe {
    border: none;
    height: 600px;
    width: 600px;
  }
  @media (max-width: 650px) {
    iframe {
      border: none;
      height: 600px;
      width: 340px;
    }
  }
`;

export default SCRM;
