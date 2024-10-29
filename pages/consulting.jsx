import React from "react";
import { Wrapper } from "../components/styles/Wrapper.styled";
import { Region } from "../components/styles/Region.styled";
import { Stack } from "../components/styles/Stack.styled";
import { Switcher } from "../components/styles/Switcher.styled";
import { ServicesHeroStyled } from "../components/styles/services/ServicesHeroStyled.styled";
import { Center } from "../components/styles/Center.styled";
import { Button } from "../components/styles/Button.styled";
import { FullBackground } from "../components/styles/FullBackground.styled";
import Infographic from "../components/Infographic";
import ContactFormSection from "../components/ContactFormSection";
import { Shapedivider } from "../components/styles/Shapedivider.styled";
import CompetitionSection from "../components/CompetitionSection";
import AnimationContainer from "../components/AnimationContainer";
import Head from "next/head";
import Modal from "../components/Modal";
import { processArr, competitionArr } from "../public/content/consulting";
import ReportAnalysisSvg from "../components/svg/ReportAnalysisSvg";
import ScrollLink from "../components/ScrollLink";
import Image from "next/image";
import ilustration from "../public/img/pages/hero-consulting-ilustration.png";

const Consulting = () => {
  return (
    <>
      <Head>
        <title>Wlastig Analytics - Consulting Service</title>
        <meta
          name="description"
          content="Wanna hear a great story?
					A moving story about a brave company that made use of data on her way to become a market leader and a household brand. What company are we talking about? Yours!"
        />
        <link
          rel="canonical"
          href="https://www.wlastig.com/consulting"
          key="canonical"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ServicesHeroStyled backgroundImg={"./img/pages/hero-consulting.png"}>
        <Stack stackAlign={"inherit"}>
          <div className="hero-background">
            <div className="hero-content consulting-hero">
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
                <Stack stackAlign={"end"}>
                  <h1>
                    &quot;Failing to plan is planning to fail.&quot; - Benjamin
                    Franklin
                  </h1>
                  <h3>
                    Big budgets don&apos;t guarantee success. Solid plans do.
                  </h3>
                </Stack>
                <AnimationContainer wobble={true} delay={"9"}>
                  <ScrollLink id="hero_cta" href="#contact-form-section">
                    <Button reverse={false} as={"span"}>
                      Schedule Free Consultation! <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Button>
                  </ScrollLink>
                </AnimationContainer>
              </Stack>
            </div>
          </div>
        </Stack>
      </ServicesHeroStyled>
      <FullBackground>
        <Region>
          <Wrapper>
            <Switcher mb={"var(--s5)"}>
              <Stack stackSpace={"var(--s4)"} className="service-info">
                <p>
                  With many years of experience gained across diverse
                  industries, together with you we will steer your business to
                  go exactly where you thought it should.
                </p>
                <p>
                  When you’re out of ideas and resources, that’s when we get on
                  stage. First we get to know your business, understand your
                  working processes and data availability at present. Then we go
                  through all these items together with you and suggest what you
                  could improve, how much to do and what impact that would have
                  on your business.
                </p>
                <p>
                  The goal of the consultation sessions is to reach a solution
                  together, one that will improve your business. But that’s not
                  all.We stay available for all questions while in the
                  implementation phase. We’re in this together.
                </p>
              </Stack>
              <Center>
                <ReportAnalysisSvg width={400} height={300}></ReportAnalysisSvg>
              </Center>
            </Switcher>
          </Wrapper>
        </Region>
        <Shapedivider
          fill={"var(--primary)"}
          position={"bottom"}
          rotation={"0"}
          height="100px"
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </Shapedivider>
      </FullBackground>

      <Infographic ctaButton={true} processArr={processArr}></Infographic>

      <CompetitionSection competitionArr={competitionArr}></CompetitionSection>
      <ContactFormSection
        shapedivider={false}
        title={"Schedule a free consultation"}
        subTitle={[
          "Are you seeing a lot of (not sets) in your reports? Purchase revenue isn’t correct? Are you struggling with reading GA4 reports? Your GA4 data is not accurate enough?",
          "If your answer to any of these questions is yes or maybe - we are here to hear you out and help you improve your tracking so you can rely on data and be confident in making data-driven decisions!",
          "We are offering a free 30-minute consultation with one of our experts to delve deeper into your specific challenges, answer any further questions you may have, and explore how Wlastig can help you achieve your goals.",
        ]}
        formType={"freeConsultation"}
      ></ContactFormSection>
      {/* <Faq color={"var(--text-light)"} faqArr={faqArr}></Faq> */}
      <Modal></Modal>
    </>
  );
};

export default Consulting;
