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
import ilustration1 from "../public/img/pages/hero-advertising-ilustration1.png";
import ilustration2 from "../public/img/pages/hero-advertising-ilustration2.png";

const Advertising = () => {
  return (
    <main>
      <Head>
        <title>Wlastig Analytics - Advertising Service</title>
        <meta
          name="description"
          content="Wanna hear a great story?
					A moving story about a brave company that made use of data on her way to become a market leader and a household brand. What company are we talking about? Yours!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ServicesHeroStyled
        backgroundImg={"./img/pages/hero-advertising.png"}
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
                <AnimationContainer>
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
                </AnimationContainer>
                <AnimationContainer>
                  <ScrollLink href="#contact-form-section">
                    <Button reverse={false}>
                      Find Your Money Leaks! <span></span>
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
          <Switcher>
            <Stack stackSpace={"var(--s4)"} className="service-info">
              <p>
                If you’re failing to capitalize on the top-quality product and
                superb service you’re offering, chances are your digital
                advertising is misplaced.
              </p>
              <p>
                More often than not, effective marketing is all about choosing
                the right advertising channels. To score big with your marketing
                efforts, you need to become aware of the diverse benefits
                pertinent to each and every one of those - and choose the right
                ones. Sure, digital advertising brings masses of data, and you
                might be struggling to process all the information. We know -
                making sense of data is difficult. Don’t shy away from doing so.
                First, you’re not alone. Secondly, the benefits are numerous.
              </p>
              <p>
                By analyzing available information on demographics, interests
                and behavior, you can learn much more about your audience than
                you have ever dreamed of. Once you know more about your
                audience, you can decide on a cost-effective digital advertising
                mix. This is where we step in.
              </p>
            </Stack>
            <Center>
              <GoogleAdSvg width={400} height={300}></GoogleAdSvg>
            </Center>
          </Switcher>
        </Wrapper>
      </Region>

      <SubServicesGrid subsArr={subsArr}></SubServicesGrid>

      <Infographic processArr={processArr}></Infographic>

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
      <Faq color={"var(--text-light)"} faqArr={faqArr}></Faq>
      <Modal></Modal>
    </main>
  );
};

export default Advertising;
