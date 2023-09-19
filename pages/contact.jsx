import React, { useContext } from "react";
import Head from "next/head";
import styled from "styled-components";
import AnimationContainer from "../components/AnimationContainer";
import Modal from "../components/Modal";
import { Region } from "../components/styles/Region.styled";
import { ServicesHeroStyled } from "../components/styles/services/ServicesHeroStyled.styled";
import { Stack } from "../components/styles/Stack.styled";
import { Wrapper } from "../components/styles/Wrapper.styled";
import { Switcher } from "../components/styles/Switcher.styled";
import { Shapedivider } from "../components/styles/Shapedivider.styled";
import { TextMedium } from "../components/styles/TextMedium.styled";
import ContactForm from "../components/ContactForm";
import { StyledText } from "../components/styles/StyledText.styled";
import ModalCtx from "../store/ModalCtx";
import Image from "next/image";
import ilustration from "../public/img/pages/hero-contact-ilustration.png";

const Contact = () => {
  const modalCtx = useContext(ModalCtx);
  return (
    <ContactPageStyled>
      <Head>
        <title>Wlastig Analytics - Contact Us</title>
        <meta
          name="description"
          content="Wanna hear a great story?
					A moving story about a brave company that made use of data on her way to become a market leader and a household brand. What company are we talking about? Yours!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ServicesHeroStyled backgroundImg={"./img/pages/hero-contact.png"}>
        <div className="hero-background">
          <div className="hero-content contact-hero">
            <div>
              <Image
                className="hero-ilustration"
                src={ilustration}
                width={350}
                height={350}
                alt="ilustration"
              ></Image>
            </div>
            <Stack stackAlign={"end"}>
              <AnimationContainer>
                <h1>Let&#39;s talk!</h1>
              </AnimationContainer>
            </Stack>
          </div>
        </div>
      </ServicesHeroStyled>
      <Region>
        <Wrapper>
          <Switcher gap={"var(--s3)"} mb={"var(--s5)"}>
            <Stack stackJustify={"center"} stackSpace={"var(--s2)"}>
              <AnimationContainer>
                <h2>Your data-driven success story starts here.</h2>
              </AnimationContainer>
              <AnimationContainer delay={2}>
                <TextMedium>You&#39;ll love working with Wlastig.</TextMedium>
              </AnimationContainer>
              <AnimationContainer direction={"translateX"}>
                <Stack as="ul">
                  <li>
                    {/* <CheckSvg svgWidth={50} svgFill={"#4bb543"}></CheckSvg> */}
                    <p>
                      At Wlastig, we believe that clear communication and
                      collaboration are the keys to unlocking the true potential
                      of your data. We are excited to connect with you and learn
                      more about your unique challenges and goals.
                    </p>
                  </li>
                  <li>
                    {/* <CheckSvg svgWidth={50} svgFill={"#4bb543"}></CheckSvg> */}
                    <p>
                      Our team of expert analysts and strategists is ready to
                      help you uncover insights, optimize your operations, and
                      drive growth. To get started, simply fill out the form
                      below or reach out using one of the methods provided.
                    </p>
                  </li>
                  <li>
                    {/* <CheckSvg svgWidth={50} svgFill={"#4bb543"}></CheckSvg> */}
                    <p>
                      We look forward to hearing from you and exploring how
                      Wlastig can empower your organization with data-driven
                      solutions. Together, we&#39;ll turn your data into a
                      competitive advantage.
                    </p>
                  </li>
                </Stack>
              </AnimationContainer>
            </Stack>
            <AnimationContainer>
              <Stack className="box" stackAlign={"center"}>
                <ContactForm></ContactForm>
                <StyledText family={"var(--poppinsbold)"}>
                  Want a quote and a game plan fast?
                </StyledText>
                <button
                  onClick={() => {
                    modalCtx.forceOpenHandler("audit");
                  }}
                  className="arrow ghost-button"
                >
                  <StyledText
                    color={"var(--secondary)"}
                    family={"var(--poppinsbold)"}
                  >
                    Get your audit now!
                  </StyledText>
                  <svg
                    clipRule="evenodd"
                    fillRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                    viewBox="0 0 24 24"
                    height={24}
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={"var(--secondary)"}
                  >
                    <path
                      d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
                      fillRule="nonzero"
                    />
                  </svg>
                </button>
              </Stack>
            </AnimationContainer>
          </Switcher>
        </Wrapper>
        <Shapedivider position={"bottom"} rotation={"0"} height={"80px"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </Shapedivider>
      </Region>
      <Modal></Modal>
    </ContactPageStyled>
  );
};

export const ContactPageStyled = styled.div`
  position: relative;
  .box {
    /* box-shadow: var(--box-shadow); */
    padding: var(--s1) var(--s0);
    margin: 0.5rem;
    border-radius: 5px;
  }

  .arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
  }

  .ghost-button {
    background: none;
    border: none;
    cursor: pointer;
  }

  .ghost-button:hover {
    text-decoration: underline;
    text-decoration-color: var(--secondary);
    text-decoration-thickness: 2px;
  }

  @media (max-width: 880px) {
    .box {
      margin: 0;
    }
  }
`;

export default Contact;
