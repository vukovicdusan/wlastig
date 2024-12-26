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
} from "../public/content/advertising";
import GoogleAdSvg from "../components/svg/GoogleAdSvg";
import ScrollLink from "../components/ScrollLink";
import Image from "next/image";
import ilustration1 from "../public/img/pages/hero-advertising-ilustration1.avif";
import ilustration2 from "../public/img/pages/hero-advertising-ilustration2.webp";

const Advertising = () => {
  return (
    <main>
      <Head>
        <title>Wlastig Analytics - Advertising Service</title>
        <meta
          name="description"
          content="Elevate your brand with Wlastig's advertising services. We craft data-driven campaigns to maximize ROI, boost visibility, and drive conversions across all digital channels."
        />
        <link
          rel="canonical"
          href="https://www.wlastig.com/advertising"
          key="canonical"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ServicesHeroStyled
        backgroundImg={"./img/pages/hero-advertising.avif"}
        deskPos={"45%"}
      >
        <Stack stackAlign={"inherit"}>
          <div className="hero-background">
            <div className="hero-content advertising-hero">
              <div>
                <Image
                  className="hero-ilustration"
                  src={ilustration1}
                  width={300}
                  height={300}
                  alt="ilustration"
                  priority
                ></Image>
                <Image
                  className="hero-ilustration"
                  src={ilustration2}
                  width={300}
                  height={300}
                  alt="ilustration"
                  priority
                ></Image>
              </div>
              <Stack stackAlign={"end"}>
                <Stack stackAlign={"end"}>
                  <h1>
                    Don&apos;t waste money on secret formulas and marketing
                    wizards.
                  </h1>
                  <h3>
                    Trust in data and math. It&apos;s when you become
                    data-driven that the real magic kicks in!
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
      <Region>
        <h2 className="visually-hidden">Why do you need Advertising?</h2>
        <Wrapper>
          <Stack stackSpace={"var(--s4) !important"}>
            <Switcher>
              <Stack stackSpace={"var(--s4)"} className="service-info">
                <p>
                  If you’re failing to capitalize on the top-quality product and
                  superb service you’re offering, chances are your digital
                  advertising is misplaced.
                </p>
                <p>
                  More often than not, effective marketing is all about choosing
                  the right advertising channels. To score big with your
                  marketing efforts, you need to become aware of the diverse
                  benefits pertinent to each and every one of those - and choose
                  the right ones. Sure, digital advertising brings masses of
                  data, and you might be struggling to process all the
                  information. We know - making sense of data is difficult.
                  Don’t shy away from doing so. First, you’re not alone.
                  Secondly, the benefits are numerous.
                </p>
                <p>
                  By analyzing available information on demographics, interests
                  and behavior, you can learn much more about your audience than
                  you have ever dreamed of. Once you know more about your
                  audience, you can decide on a cost-effective digital
                  advertising mix. This is where we step in.
                </p>
              </Stack>
              <Center>
                <GoogleAdSvg width={400} height={300}></GoogleAdSvg>
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
        shapedivider={false}
        title={"Schedule a free consultation"}
        subTitle={[
          "Interested in improving your paid advertising efforts? Book a free consultation to review your current digital campaigns and discover how to improve targeting, performance, and return on investment.",
        ]}
        formType={"freeConsultation"}
      ></ContactFormSection>
      <Faq color={"var(--text-light)"} faqArr={faqArr}></Faq>
      <Modal></Modal>
    </main>
  );
};

export default Advertising;
