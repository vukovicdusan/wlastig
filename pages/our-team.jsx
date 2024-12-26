import React, { useState } from "react";
import styled from "styled-components";
import AnimationContainer from "../components/AnimationContainer";
import Image from "next/image";
import { Region } from "../components/styles/Region.styled";
import { ServicesHeroStyled } from "../components/styles/services/ServicesHeroStyled.styled";
import { Stack } from "../components/styles/Stack.styled";
import { Switcher } from "../components/styles/Switcher.styled";
import { Wrapper } from "../components/styles/Wrapper.styled";
import { teamArr } from "../public/content/team";
import { FullBackground } from "../components/styles/FullBackground.styled";
import { Shapedivider } from "../components/styles/Shapedivider.styled";
import Head from "next/head";
import Modal from "../components/Modal";
import ContactFormSection from "../components/ContactFormSection";
import ilustration from "../public/img/pages/hero-team-ilustration.webp";
import ReadMore from "../components/ReadMore";

const ourTeam = () => {
  return (
    <>
      <Head>
        <title>Wlastig Analytics - Our Team</title>
        <meta
          name="description"
          content="Meet the experts behind Wlastig's success. Our dedicated team specializes in web analytics, advertising, and consulting, delivering data-driven solutions to help your business thrive."
        />
        <link
          rel="canonical"
          href="https://www.wlastig.com/our-team"
          key="canonical"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ServicesHeroStyled backgroundImg={"./img/pages/hero-team.png"}>
        <div className="hero-background">
          <div className="hero-content ">
            <div>
              <Image
                className="hero-ilustration"
                src={ilustration}
                width={350}
                height={350}
                alt="ilustration"
                priority
              ></Image>
            </div>
            <Stack stackAlign={"end"}>
              <h1>Meet our team!</h1>
            </Stack>
          </div>
        </div>
      </ServicesHeroStyled>
      <OurTeamStyled>
        <FullBackground background={"var(--primary-shade)"}>
          <Region pt={"0"}>
            {teamArr.map((member, index) => (
              <FullBackground
                key={index}
                background={
                  index % 2 !== 0
                    ? "var(--primary-shade)"
                    : "var(--background-light)"
                }
              >
                <Wrapper>
                  <Switcher
                    className="member-container"
                    reverse={index % 2 === 0 ? true : false}
                  >
                    <div className="img-container">
                      <Image
                        width={350}
                        height={300}
                        src={member.img}
                        alt="team member"
                      ></Image>
                    </div>
                    <Stack
                      className="member-content-container"
                      stackJustify={"center"}
                      stackAlign={"flex-start"}
                    >
                      <h2>
                        {member.name}
                        <span> ({member.position})</span>
                      </h2>
                      <ReadMore content={member.content}></ReadMore>
                    </Stack>
                  </Switcher>
                </Wrapper>
              </FullBackground>
            ))}
          </Region>
        </FullBackground>
        {/* <Shapedivider position={"bottom"} rotation={"180"} height={"110px"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
          </svg>
        </Shapedivider> */}
      </OurTeamStyled>
      <ContactFormSection
        shapedivider={false}
        title={"Schedule a free consultation"}
        subTitle={[
          "Are you seeing a lot of (not sets) in your reports? Purchase revenue isn’t correct? Are you struggling with reading GA4 reports? Your GA4 data is not accurate enough?",
          "If your answer to any of these questions is yes or maybe - we are here to hear you out and help you improve your tracking so you can rely on data and be confident in making data-driven decisions!",
          "We are offering a free 30-minute consultation with one of our experts to delve deeper into your specific challenges, answer any further questions you may have, and explore how Wlastig can help you achieve your goals.",
        ]}
        formType={"freeConsultation"}
        // cta={"Get Your FREE Audit"}
        // auditTitle={"Find Your Money Leaks For Free!"}
        // auditId={"marketing_audit"}
      ></ContactFormSection>
      <Modal></Modal>
    </>
  );
};

export const OurTeamStyled = styled.div`
  position: relative;
  & section {
    padding-bottom: 0;
  }
  img {
    object-fit: contain;
    margin-inline: auto;
  }

  .img-container {
    display: flex;
    align-items: flex-end;
  }

  h2 {
    font-size: var(--s1);
  }

  .shapedivider {
    z-index: -1;
  }

  .member-container {
    padding-block-start: 2rem;
  }

  .member-container h4 span {
    font-family: var(--poppinsregular);
    font-size: var(--s0);
  }

  .member-content-container {
    padding-block-end: 1rem;
  }

  @media (max-width: 700px) {
    .member-content-container:last-child {
      padding-block-end: var(--s4);
    }
    h2 {
      font-size: var(--s0);
    }
  }
`;

export default ourTeam;
