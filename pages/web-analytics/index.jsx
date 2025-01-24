import React from "react";

import { Wrapper } from "../../components/styles/Wrapper.styled.jsx";
import { Region } from "../../components/styles/Region.styled.jsx";
import { Stack } from "../../components/styles/Stack.styled.jsx";
import { Switcher } from "../../components/styles/Switcher.styled.jsx";
import { ServicesHeroStyled } from "../../components/styles/services/ServicesHeroStyled.styled.jsx";
import { Center } from "../../components/styles/Center.styled.jsx";
import { Button } from "../../components/styles/Button.styled.jsx";
import SubServicesGrid from "../../components/SubServicesGrid.jsx";
import Infographic from "../../components/Infographic.jsx";
import { UnderlineStyled } from "../../components/styles/UnderlineStyled.styled.jsx";
import ContactFormSection from "../../components/ContactFormSection.jsx";
import CompetitionSection from "../../components/CompetitionSection.jsx";
import AnimationContainer from "../../components/AnimationContainer.jsx";
import Faq from "../../components/Faq.jsx";
import Head from "next/head";
import Modal from "../../components/Modal.jsx";
import {
  subsArr,
  processArr,
  competitionArr,
  faqArr,
} from "../../public/content/web-analytics.js";
import ReportAnalysis2Svg from "../../components/svg/ReportAnalysis2Svg.jsx";
import CheckSvg from "../../components/svg/CheckSvg.jsx";
import ScrollLink from "../../components/ScrollLink.jsx";
import Image from "next/image";
import ilustration from "../../public/img/pages/hero-analytics-ilustration.avif";
const webAnalytics = () => {
  return (
    <main>
      <Head>
        <title>Wlastig Analytics - Web Analytics Service</title>
        <meta
          name="description"
          content="Discover Wlastig's web analytics expertise. From Google Analytics 4 (GA4) tracking to Server-Side Tagging with Google Tag Manager (GTM), we provide actionable insights to optimize your business performance."
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
      <ServicesHeroStyled backgroundImg={"./img/pages/hero-analytics.avif"}>
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

      <Infographic ctaButton={true} processArr={processArr}></Infographic>

      <CompetitionSection competitionArr={competitionArr}></CompetitionSection>

      <ContactFormSection
        formType={"freeConsultation"}
        shapedivider={false}
        title={"Schedule a free consultation"}
        subTitle={[
          "Improve your tracking and measurement of website and marketing performance. Schedule a free consultation to discuss your current website tracking setup and explore ways to gain better insights from your data.",
        ]}
        // cta={"Get Your FREE Audit"}
        // auditTitle={"Find Your Money Leaks For Free!"}
        // auditId={"marketing_audit"}
      ></ContactFormSection>
      {/* <?Faq color={"var(--text-light)"} faqArr={faqArr}></Faq> */}
      <Modal></Modal>
    </main>
  );
};

export default webAnalytics;
