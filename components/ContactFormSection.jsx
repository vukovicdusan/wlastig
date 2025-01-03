import React, { useEffect, useState } from "react";
// import Audit from "./Audit";
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
import ContactForm from "./ContactForm";
import { UnderlineStyled } from "./styles/UnderlineStyled.styled";
import { Center } from "./styles/Center.styled";
import { StyledText } from "./styles/StyledText.styled";

const ContactFormSection = (props) => {
  const router = useRouter();

  const subTitleContent = props.subTitle
    ? props.subTitle.map((content, index) => (
        <StyledText
          key={index}
          fontSize={"var(--s1)"}
          color={"var(--text-light)"}
          align={"center"}
        >
          {content}
        </StyledText>
      ))
    : "";

  return (
    <FullBackground background={props.bg || "var(--primary)"}>
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
      <Region id="contact-form-section">
        <Wrapper>
          <ContactFormSectionStyled>
            <Center>
              <AnimationContainer>
                <Stack stackJustify={"center"} stackAlign={"center"}>
                  <h2 className="title-xl">{props.title || ""}</h2>
                  <UnderlineStyled></UnderlineStyled>
                </Stack>
              </AnimationContainer>
            </Center>

            <Switcher
              reverse={"row-reverse"}
              switcherJustify={"center"}
              gap={"var(--s5)"}
            >
              {" "}
              {props.subTitle ? (
                <Center>
                  <AnimationContainer>
                    <Stack stackJustify={"center"} stackAlign={"center"}>
                      {subTitleContent}
                    </Stack>
                  </AnimationContainer>
                </Center>
              ) : (
                ""
              )}
              {router.pathname === "/careers/[career]" ? (
                <CareerForm></CareerForm>
              ) : (
                <div className="contact-form-wrapper">
                  <ContactForm
                    btnId={props.btnId || "form_submit_consultation"}
                    formType={props.formType}
                    alignButton={"center"}
                    btnName={props.btnName || "Schedule Free Consultation!"}
                    bf={props.bf || ""}
                    bfInputBg={props.bfInputBg || ""}
                    bfBg={props.bfBg || ""}
                    textBf={props.textBf || ""}
                  ></ContactForm>
                </div>
                // <Audit
                // 	auditId={props.auditId}
                // 	cta={props.cta}
                // 	auditTitle={props.auditTitle}
                // 	auditSubTitle={props.auditSubTitle}
                // ></Audit>
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

  & h4 {
    color: var(--theme-primary);
    margin-left: 5px;
  }

  & .title-xl {
    text-transform: capitalize;
    /* margin-bottom: var(--s1); */
  }

  & .title-xl,
  & .title-s {
    text-align: center;
    color: var(--text-light);
  }

  & .title-s {
    text-align: justify;
  }

  & .title-s:first-child {
    font-family: var(--poppinsmedium), "Times New Roman", Times, serif;
  }

  .contact-form-wrapper {
    background-color: var(--background-light);
    border-radius: 5px;
    padding: var(--s2) var(--s2);
    height: max-content;
    max-width: fit-content;
    transition: all 0.4s ease;
  }
  @media (max-width: 430px) {
    .contact-form-wrapper {
      padding: var(--s-2);
    }
  }
`;

export default ContactFormSection;
