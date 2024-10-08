import React from "react";

import { Wrapper } from "../components/styles/Wrapper.styled";
import { Region } from "../components/styles/Region.styled";
import { Stack } from "../components/styles/Stack.styled";
import { Switcher } from "../components/styles/Switcher.styled";
import { ServicesHeroStyled } from "../components/styles/services/ServicesHeroStyled.styled";
import { Center } from "../components/styles/Center.styled";
import { Button } from "../components/styles/Button.styled";
import SubServicesGrid from "../components/SubServicesGrid";
import Infographic from "../components/Infographic";
import { UnderlineStyled } from "../components/styles/UnderlineStyled.styled";
import ContactFormSection from "../components/ContactFormSection";
import CompetitionSection from "../components/CompetitionSection";
import AnimationContainer from "../components/AnimationContainer";
import Faq from "../components/Faq";
import Head from "next/head";
import Modal from "../components/Modal";
import {
  subsArr,
  processArr,
  competitionArr,
  faqArr,
} from "../public/content/web-analytics.js";
import ReportAnalysis2Svg from "../components/svg/ReportAnalysis2Svg";
import CheckSvg from "../components/svg/CheckSvg";
import ScrollLink from "../components/ScrollLink";
import Image from "next/image";
import ilustration from "../public/img/pages/hero-analytics-ilustration.png";
const webAnalytics = () => {
  return (
    <main>
      <Head>
        <title>Wlastig Analytics - Web Analytics Service</title>
        <meta
          name="description"
          content="Wanna hear a great story?
					A moving story about a brave company that made use of data on her way to become a market leader and a household brand. What company are we talking about? Yours!"
        />
        <link
          rel="canonical"
          href="https://www.wlastig.com/web-analytics"
          key="canonical"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="./img/subservices/sprite.svg"
          as="image"
          type="image/svg+xml"
        />
      </Head>
      <ServicesHeroStyled backgroundImg={"./img/pages/hero-analytics.png"}>
        <Stack stackSpace={"var(--s4)"} stackAlign={"inherit"}>
          <div className="hero-background">
            <div className="hero-content analytics-hero">
              <div>
                <Image
                  className="hero-ilustration"
                  src={ilustration}
                  width={500}
                  height={350}
                  alt="ilustration"
                  priority
                ></Image>
              </div>
              <Stack stackAlign={"end"}>
                <Stack stackAlign={"end"}>
                  <h1>
                    &quot;Knowing yourself is the beginning of all wisdom.&quot;
                    Aristotle
                  </h1>
                  <h3>
                    The same goes for businesses. Every company’s data has
                    hidden gems.
                  </h3>
                </Stack>

                <AnimationContainer wobble={true} delay={"9"}>
                  <ScrollLink id="hero_cta" href="#contact-form-section">
                    <Button reverse={true} as={"span"}>
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
      <Region>
        <Wrapper>
          <Stack stackSpace={"var(--s4) !important"}>
            <Switcher>
              <Stack stackSpace={"var(--s4)"} className="service-info">
                <Stack>
                  <p>
                    Web analytics is a measurement and analysis of data to get a
                    deep understanding of customer behavior, marketing, and
                    website performance. What you don&#39;t measure you
                    can&#39;t optimize!
                  </p>
                </Stack>
                <Stack>
                  <AnimationContainer>
                    <h2>Why do you need Web Analytics?</h2>
                    <UnderlineStyled
                      underlineMargin={"var(--s-4)"}
                    ></UnderlineStyled>
                  </AnimationContainer>
                  <Stack as="ul">
                    <li>
                      <CheckSvg
                        svgWidth={50}
                        svgHeight={15}
                        svgFill={"#4bb543"}
                      ></CheckSvg>
                      You can’t optimize what you can’t measure!
                    </li>
                    <li>
                      <CheckSvg
                        svgWidth={50}
                        svgHeight={15}
                        svgFill={"#4bb543"}
                      ></CheckSvg>
                      Improve your marketing performance.
                    </li>
                    <li>
                      <CheckSvg
                        svgWidth={50}
                        svgHeight={15}
                        svgFill={"#4bb543"}
                      ></CheckSvg>
                      Gain deeper insights into your customer behavior.
                    </li>
                    <li>
                      <CheckSvg
                        svgWidth={50}
                        svgHeight={15}
                        svgFill={"#4bb543"}
                      ></CheckSvg>
                      Discover where hidden opportunities.
                    </li>
                    <li>
                      <CheckSvg
                        svgWidth={50}
                        svgHeight={15}
                        svgFill={"#4bb543"}
                      ></CheckSvg>
                      Make sound data-driven decisions.
                    </li>
                  </Stack>
                </Stack>
                <Stack>
                  <AnimationContainer>
                    <h2>Do we make the right fit?</h2>
                    <UnderlineStyled
                      underlineMargin={"var(--s-4)"}
                    ></UnderlineStyled>
                  </AnimationContainer>
                  <p>
                    There are no big or small accounts. Just right and wrong
                    strategies. Whether you’re just starting out or in need of
                    advanced web analysis, we are here for you! Let’s transform
                    your data into profits!
                  </p>
                </Stack>
              </Stack>
              <Center>
                <ReportAnalysis2Svg
                  width={400}
                  height={300}
                ></ReportAnalysis2Svg>
              </Center>
            </Switcher>
            <Center>
              <AnimationContainer delay={"3"} wobble={true}>
                <ScrollLink id="cta_services" href="#contact-form-section">
                  <Button as={"span"}>
                    Schedule Free Consultation!
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </Button>
                </ScrollLink>
              </AnimationContainer>
            </Center>
          </Stack>
        </Wrapper>
      </Region>

      <SubServicesGrid subsArr={subsArr}></SubServicesGrid>

      <Infographic processArr={processArr}></Infographic>

      <CompetitionSection competitionArr={competitionArr}></CompetitionSection>

      <ContactFormSection
        formType={"freeConsultation"}
        shapedivider={false}
        title={"Schedule a free consultation"}
        subTitle={[
          "Are you seeing a lot of (not sets) in your reports? Purchase revenue isn’t correct? Are you struggling with reading GA4 reports? Your GA4 data is not accurate enough?",
          "If your answer to any of these questions is yes or maybe - we are here to hear you out and help you improve your tracking so you can rely on data and be confident in making data-driven decisions!",
          "We are offering a free 30-minute consultation with one of our experts to delve deeper into your specific challenges, answer any further questions you may have, and explore how Wlastig can help you achieve your goals.",
        ]}
        // cta={"Get Your FREE Audit"}
        // auditTitle={"Find Your Money Leaks For Free!"}
        // auditId={"marketing_audit"}
      ></ContactFormSection>
      <Faq color={"var(--text-light)"} faqArr={faqArr}></Faq>
      <Modal></Modal>
    </main>
  );
};

export default webAnalytics;
