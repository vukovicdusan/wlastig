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
import ilustration from "../public/img/pages/hero-team-ilustration.png";
import ReadMore from "../components/ReadMore";

const ourTeam = () => {
  return (
    <>
      <Head>
        <title>Wlastig Analytics - Our Team</title>
        <meta
          name="description"
          content="Wanna hear a great story?
					A moving story about a brave company that made use of data on her way to become a market leader and a household brand. What company are we talking about? Yours!"
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
              <AnimationContainer>
                <h1>Meet our team!</h1>
              </AnimationContainer>
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
                      <h4>
                        {member.name}
                        <span> ({member.position})</span>
                      </h4>
                      <ReadMore content={member.content}></ReadMore>
                    </Stack>
                  </Switcher>
                </Wrapper>
              </FullBackground>
            ))}
          </Region>
        </FullBackground>
        <Shapedivider position={"bottom"} rotation={"180"} height={"110px"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
          </svg>
        </Shapedivider>
      </OurTeamStyled>
      <ContactFormSection
        title={"Explore the untapped potential of your business data!"}
        subTitle={
          "Start your quest for insights and optimize your digital strategy. Discover the hidden treasures hidden within your data - Get a FREE Tracking Audit!"
        }
        cta={"Get your FREE audit!"}
        auditSubTitle={"Your decisions are only as good as your data."}
        auditId={"tracking_audit"}
      ></ContactFormSection>
      <Modal></Modal>
    </>
  );
};

export const OurTeamStyled = styled.div`
  position: relative;
  img {
    object-fit: contain;
    margin-inline: auto;
  }

  .img-container {
    display: flex;
    align-items: flex-end;
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
  }
`;

export default ourTeam;
