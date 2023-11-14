import React, { useEffect, useState } from "react";
import Audit from "./Audit";
import { Shapedivider } from "./styles/Shapedivider.styled";
import { FullBackground } from "./styles/FullBackground.styled";
import { Wrapper } from "./styles/Wrapper.styled";
import { Region } from "./styles/Region.styled";
import { Switcher } from "./styles/Switcher.styled";
import { Stack } from "./styles/Stack.styled";
import CareerForm from "../components/CareerForm";
import styled from "styled-components";
import AnimationContainer from "./AnimationContainer";
import { useRouter } from "next/router";

const ContactFormSection = (props) => {
  const router = useRouter();

  return (
    <FullBackground background={"var(--primary)"}>
      {props.shapedivider ? (
        <Shapedivider
          height={"130px"}
          rotation={"0"}
          fill={props.shapedividerColor || "var(--background-light)"}
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"></path>
          </svg>
        </Shapedivider>
      ) : null}
      <Region>
        <Wrapper>
          <ContactFormSectionStyled>
            <Switcher
              reverse={"row-reverse"}
              switcherJustify={"center"}
              gap={"var(--s5)"}
            >
              <Stack stackJustify={"center"} stackAlign={"center"}>
                <AnimationContainer>
                  <h3 className="title-xl">
                    {props.title || "150+ Point Audit For Data Quality"}
                  </h3>
                  <p className="title-l">{props.subTitle || ""}</p>
                </AnimationContainer>
              </Stack>
              {router.pathname === "/careers/[career]" ? (
                <CareerForm></CareerForm>
              ) : (
                <Audit
                  auditId={props.auditId}
                  cta={props.cta}
                  auditTitle={props.auditTitle}
                  auditSubTitle={props.auditSubTitle}
                ></Audit>
              )}
            </Switcher>
          </ContactFormSectionStyled>
        </Wrapper>
      </Region>
    </FullBackground>
  );
};

export const ContactFormSectionStyled = styled.div`
  margin-block-start: var(--s5);

  & .title-xl,
  & .title-l {
    text-align: center;
    color: var(--text-light);
  }
`;

export default ContactFormSection;
