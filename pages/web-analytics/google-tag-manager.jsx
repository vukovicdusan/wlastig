import React, { useEffect } from "react";
import { Region } from "../../components/styles/Region.styled";
import { Wrapper } from "../../components/styles/Wrapper.styled";
import { Switcher } from "../../components/styles/Switcher.styled";
import { Center } from "../../components/styles/Center.styled";
import { Stack } from "../../components/styles/Stack.styled";
import ContactForm from "../../components/ContactForm";
import { Shapedivider } from "../../components/styles/Shapedivider.styled";
import { FullBackground } from "../../components/styles/FullBackground.styled";
import { StyledText } from "../../components/styles/StyledText.styled";
import Head from "next/head";
import AnimationContainer from "../../components/AnimationContainer";
import IconBox from "../../components/IconBox";
import { Grid } from "../../components/styles/Grid.styled";
import { UnderlineStyled } from "../../components/styles/UnderlineStyled.styled";
import Testimonials from "../../components/Testimonials";
import ContactFormSection from "../../components/ContactFormSection";
import {
  gtmProcessArr,
  whyChooseWlastigGTM,
} from "../../public/content/landing";
import { Button } from "../../components/styles/Button.styled";
import useScreenSize from "../../hooks/useScreenSize";
import { LandingStyled } from "../../components/LandingStyled.styled";
import InfographicNew from "../../components/InfographicNew";
import { ServicesHeroStyled } from "../../components/styles/services/ServicesHeroStyled.styled";
import ScrollLink from "../../components/ScrollLink";
import Image from "next/image";
import ilustration from "../../public/img/pages/gtm-vizual-novi-cropped.webp";

const GoogleTagManager = () => {
  const isSmallScreen = useScreenSize();
  const [serviceCount, setserviceCount] = React.useState(4);

  useEffect(() => {
    isSmallScreen ? setserviceCount(4) : setserviceCount(8);
  }, [isSmallScreen]);

  const seeMore = () => {
    whyChooseWlastig.length > serviceCount
      ? setserviceCount((prevState) => prevState + 4)
      : setserviceCount(whyChooseWlastig.length);
  };

  return (
    <main>
      <Head>
        <title>Wlastig Analytics - Google Tag Manager (GTM)</title>
        <meta
          name="description"
          content="Optimize your tracking with expert Google Tag Manager (GTM) implementation from Wlastig. We ensure your tags, triggers, and variables are set up correctly so your data is accurate, structured, and actionable. Whether you need a fresh GTM setup, debugging, or advanced tracking configurations, our expertise guarantees reliable data for better marketing and business decisions."
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ServicesHeroStyled
        overlay={true}
        overlayTone={"rgba(0, 0, 0, 0.2)"}
        backgroundImg={"../img/hero.jpg"}
      >
        <Stack stackSpace={"var(--s4)"} stackAlign={"inherit"}>
          <div className="hero-background">
            <div className="hero-content ga4-hero">
              <div>
                <Image
                  className="hero-ilustration"
                  src={ilustration}
                  width={450}
                  height={400}
                  alt="ilustration"
                  priority
                ></Image>
              </div>
              <Stack stackAlign={"end"}>
                <Stack stackAlign={"end"}>
                  <h1 className="z-index-1">
                    Your Data Is Only as Good as Your Tracking
                  </h1>
                  <h3 className="z-index-1">
                    Properly configured Google Tag Manager is the foundation of
                    accurate tracking. It ensures your data is trustworthy,
                    structured, and ready to drive smarter decisions.
                  </h3>
                </Stack>

                <AnimationContainer wobble={true} delay={"9"}>
                  <ScrollLink id="hero_cta" href="#freeConsultation2">
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
      <LandingStyled>
        <Region>
          <Wrapper>
            <AnimationContainer>
              <StyledText as={"h2"} align="center" maxWidth={"100%"}>
                Flawless Tracking Starts with a Solid GTM Setup
              </StyledText>
              <Center>
                <UnderlineStyled></UnderlineStyled>
              </Center>
            </AnimationContainer>
            <AnimationContainer>
              <Stack stackAlign="center">
                <p className="max-w-prose-plus">
                  Google Tag Manager is a powerful tool—but only when configured
                  correctly. A poorly implemented GTM setup can lead to missing
                  data, tracking discrepancies, and unreliable insights. At
                  Wlastig, we ensure every tag, trigger, and variable is
                  structured for accuracy and efficiency. From event tracking to
                  advanced configurations, we build a GTM setup that delivers
                  trustworthy data, empowering you to make confident marketing
                  decisions.
                </p>{" "}
              </Stack>
            </AnimationContainer>
            <Switcher
              switcherJustify={"center"}
              flexBasis={"40rem"}
              elCount={"2"}
              gap={"var(--s4)"}
              mb={"var(--s4)"}
              mt={"var(--s4)"}
            >
              <AnimationContainer>
                <IconBox
                  flexDirection={"row"}
                  color={"var(--theme-text-dark)"}
                  boxBorderColor={"transparent"}
                  img={"chart"}
                  width={100}
                  height={100}
                  html={true}
                  title={"Data Accuracy & Reliability"}
                  content={
                    "&#x2022; Ensures that all tracking events are correctly captured and reported.<br> &#x2022; Reduces data discrepancies between platforms like Google Analytics, Google Ads, Meta Pixel, TikTok Ads, etc."
                  }
                ></IconBox>
              </AnimationContainer>
              <AnimationContainer delay={"2"}>
                <IconBox
                  flexDirection={"row"}
                  color={"var(--theme-text-dark)"}
                  boxBorderColor={"transparent"}
                  img={"report"}
                  width={100}
                  height={100}
                  html={true}
                  title={"Improved Marketing & Advertising ROI"}
                  content={
                    "&#x2022; Ensures accurate conversion tracking for better ad targeting and attribution.<br> &#x2022; Helps optimize ad spend by tracking user interactions effectively."
                  }
                ></IconBox>
              </AnimationContainer>
            </Switcher>
            <Switcher
              switcherJustify={"center"}
              flexBasis={"40rem"}
              elCount={"2"}
              gap={"var(--s4)"}
            >
              <AnimationContainer delay={"3"}>
                <IconBox
                  flexDirection={"row"}
                  color={"var(--theme-text-dark)"}
                  boxBorderColor={"transparent"}
                  img={"ecommerce"}
                  width={100}
                  height={100}
                  html={true}
                  title={"Improved Website Performance"}
                  content={
                    "&#x2022; Loads tags asynchronously, preventing slowdowns and ensuring a smooth user experience.<br>&#x2022; Reduces the need for multiple tracking scripts embedded directly in the site’s code."
                  }
                ></IconBox>
              </AnimationContainer>
              <AnimationContainer delay={"6"}>
                <IconBox
                  flexDirection={"row"}
                  color={"var(--theme-text-dark)"}
                  boxBorderColor={"transparent"}
                  img={"keyword-search"}
                  width={100}
                  height={100}
                  html={true}
                  title={"Enhanced Security & Compliance"}
                  content={
                    "&#x2022; Controls which third-party scripts run on your site, reducing security risks.<br>&#x2022; Helps with GDPR and CCPA compliance by managing consent-based tracking."
                  }
                ></IconBox>
              </AnimationContainer>
            </Switcher>
            <Switcher
              switcherJustify={"center"}
              flexBasis={"40rem"}
              elCount={"2"}
              gap={"var(--s4)"}
            >
              <AnimationContainer delay={"3"}>
                <IconBox
                  flexDirection={"row"}
                  color={"var(--theme-text-dark)"}
                  boxBorderColor={"transparent"}
                  img={"direction"}
                  width={100}
                  height={100}
                  html={true}
                  title={"Scalability & Flexibility"}
                  content={
                    "&#x2022; Adapts to business growth with an easily expandable tracking setup.<br>&#x2022; Works efficiently for both small websites and enterprise-level businesses."
                  }
                ></IconBox>
              </AnimationContainer>
              <AnimationContainer delay={"6"}>
                <IconBox
                  flexDirection={"row"}
                  color={"var(--theme-text-dark)"}
                  boxBorderColor={"transparent"}
                  img={"search"}
                  width={100}
                  height={100}
                  html={true}
                  title={"Future-Proof Tracking"}
                  content={
                    "&#x2022; Keeps your analytics setup adaptable to new tracking requirements and platform updates.<br>&#x2022; Supports server-side tracking for greater data control and privacy compliance."
                  }
                ></IconBox>
              </AnimationContainer>
            </Switcher>
          </Wrapper>
        </Region>
        <FullBackground background={"var(--primary)"}>
          <Shapedivider
            position={"top"}
            fill={"var(--background-light)"}
            height={"100px"}
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
          <Region pt={"7rem"}>
            <Wrapper>
              <AnimationContainer>
                <Stack stackJustify={"center"} stackAlign={"center"}>
                  <h3 className="title-xl text-center text-light">
                    Schedule a free consultation
                  </h3>
                  <UnderlineStyled></UnderlineStyled>
                </Stack>
              </AnimationContainer>
              <div className="contact-form-wrapper bg-light">
                <ContactForm
                  // textBf={"var(--text-light)"}
                  bfBg={"var(--background-light)"}
                  formType={"freeConsultation2"}
                  btnId={"form_submit_consultation2"}
                ></ContactForm>
              </div>
            </Wrapper>
          </Region>
        </FullBackground>
        <FullBackground>
          <Shapedivider position={"top"} rotation={"0"}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
              ></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
            </svg>
          </Shapedivider>
          <Region pt={"12rem"} pb={"12rem"}>
            <Wrapper>
              <Stack
                stackSpace={"var(--s4)"}
                stackJustify={"center"}
                stackAlign={"center"}
                mt={"var(--s2)"}
              >
                <AnimationContainer>
                  <StyledText as={"h2"} align="center" maxWidth={"100%"}>
                    Why Choose Wlastig for Google Tag Manager?
                  </StyledText>
                  <Center>
                    <UnderlineStyled></UnderlineStyled>
                  </Center>
                </AnimationContainer>
                <AnimationContainer>
                  <Center>
                    <StyledText className="max-w-prose-plus">
                      At Wlastig, we specialize in delivering precision-driven{" "}
                      <strong>Google Tag Manager (GTM)</strong> setups that
                      ensure your tracking is accurate, efficient, and scalable.
                      We understand that reliable data is the backbone of smart
                      decision-making, and we bring deep expertise to every
                      aspect of GTM management. Here’s why Wlastig is the best
                      choice for your GTM needs:
                    </StyledText>
                  </Center>
                </AnimationContainer>
                <Grid gridColumn={"400px"} gridGap={"var(--s5)"}>
                  {whyChooseWlastigGTM
                    .slice(0, serviceCount)
                    .map((item, index) => (
                      // <div >
                      <Stack key={index} stackAlign={"center"}>
                        <StyledText as={"h4"} color={"var(--secondary)"}>
                          {item.title}
                        </StyledText>
                        <StyledText>{item.body}</StyledText>
                      </Stack>
                      // </div>
                    ))}
                </Grid>
                {serviceCount < whyChooseWlastigGTM.length && isSmallScreen ? (
                  <Center mt={"var(--s4)"}>
                    <Button id="see_more_services" onClick={seeMore}>
                      See More <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Button>
                  </Center>
                ) : null}
              </Stack>
            </Wrapper>
          </Region>
          <Shapedivider position={"bottom"} rotation={"0"}>
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
        <InfographicNew
          titleColor={"var(--text-dark)"}
          textColor={"var(--text-dark)"}
          shapeDividerFill={"var(--primary)"}
          ctaButton={false}
          processArr={gtmProcessArr}
          treshold={0.3}
          fireHeight={"218vh"}
        ></InfographicNew>
        <div className="spacer"></div>
        <Testimonials sidebarLayout={false}></Testimonials>
        <ContactFormSection
          formType={"freeConsultation3"}
          shapedivider={true}
          title={"Schedule a free consultation"}
          btnId={"form_submit_consultation3"}
          subTitle={[
            "Improve your tracking and measurement of website and marketing performance. Schedule a free consultation to discuss your current website tracking setup and explore ways to gain better insights from your data.",
          ]}
        >
          {" "}
        </ContactFormSection>
      </LandingStyled>
    </main>
  );
};

export default GoogleTagManager;
