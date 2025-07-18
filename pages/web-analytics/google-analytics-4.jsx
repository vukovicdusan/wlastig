import React, { useEffect } from "react";
import { Region } from "../../components/styles/Region.styled";
import { Wrapper } from "../../components/styles/Wrapper.styled";
import { Switcher } from "../../components/styles/Switcher.styled";
import { Center } from "../../components/styles/Center.styled";
import { Stack } from "../../components/styles/Stack.styled";
import ContactForm from "../../components/ContactForm";
import { Shapedivider } from "../../components/styles/Shapedivider.styled";
import { FullBackground } from "../../components/styles/FullBackground.styled";
import {
  StyledH1,
  StyledText,
} from "../../components/styles/StyledText.styled";
import Head from "next/head";
import AnimationContainer from "../../components/AnimationContainer";
import IconBox from "../../components/IconBox";
import { Grid } from "../../components/styles/Grid.styled";
import { UnderlineStyled } from "../../components/styles/UnderlineStyled.styled";
import Testimonials from "../../components/Testimonials";
import ContactFormSection from "../../components/ContactFormSection";
import { processArr, whyChooseWlastig } from "../../public/content/landing";
import { Button } from "../../components/styles/Button.styled";
import useScreenSize from "../../hooks/useScreenSize";
import { LandingStyled } from "../../components/LandingStyled.styled";
import InfographicNew from "../../components/InfographicNew";
import { ServicesHeroStyled } from "../../components/styles/services/ServicesHeroStyled.styled";
import ScrollLink from "../../components/ScrollLink";
import Image from "next/image";
import ilustration from "../../public/img/pages/ga4-novi3-cropped.webp";

const GoogleAnalytycs4 = () => {
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
        <title>Wlastig Analytics - Google Analytics 4</title>
        <meta
          name="description"
          content="Unlock the full potential of Google Analytics 4 (GA4) with Wlastig’s expert consulting services. We provide tailored GA4 strategies, implementation, and insights to drive your business forward."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ServicesHeroStyled
        backgroundImg={"../img/pages/hero-consulting.avif"}
        overlay={true}
        overlayTone={"rgba(0, 0, 0, 0.2)"}
      >
        <Stack stackSpace={"var(--s4)"} stackAlign={"inherit"}>
          <div className="hero-background">
            <div className="hero-content">
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
                    Unlock the Full Potential of Google Analytics 4
                  </h1>
                  <h3 className="z-index-1">
                    Advanced GA4 Tracking Solutions to Elevate Your Data
                    Insights and Drive Growth.
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
                GA4 Tracking Services Tailored to Your Business
              </StyledText>
              <Center>
                <UnderlineStyled></UnderlineStyled>
              </Center>
            </AnimationContainer>
            <AnimationContainer>
              <Stack stackAlign="center">
                <p className="max-w-prose-plus">
                  Unlock the full potential of your website data with customized
                  Google Analytics 4 (GA4) tracking solutions designed to meet
                  the unique needs of your business. At <bold>Wlastig</bold>, we
                  specialize in implementing advanced GA4 tracking and
                  Server-Side Tracking via Google Tag Manager (GTM), ensuring
                  you capture the right insights that drive growth.
                </p>{" "}
                <p className="max-w-prose-plus">
                  {" "}
                  Whether you&apos;re looking to understand user behavior,
                  optimize your conversions, or improve marketing performance,
                  our team ensures accurate data collection across platforms.
                  With precise tracking and actionable insights, you&apos;ll
                  have the data-driven tools needed to make informed decisions
                  and stay ahead of the competition.
                </p>
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
                  title={"Custom GA4 tracking:"}
                  content={
                    "We create a tracking architecture built around the key performance indicators (KPIs) that matter most to your business. From event tracking to funnel analysis, we ensure you’re getting the data you need to drive smart decisions."
                  }
                ></IconBox>
              </AnimationContainer>
              <AnimationContainer delay={"2"}>
                <IconBox
                  flexDirection={"row"}
                  color={"var(--theme-text-dark)"}
                  boxBorderColor={"transparent"}
                  img={"data-analysis"}
                  width={100}
                  height={100}
                  title={"Server-Side Tracking Implementation:"}
                  content={
                    "Our Server-Side Tracking solutions ensure that your data is more accurate by reducing loss from ad blockers and browser restrictions. This improved data accuracy leads to a better understanding of user journeys, translating into more conversions and higher ROI."
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
                  title={"More conversions, better campaign results:"}
                  content={
                    "With higher accuracy in tracking user actions, your marketing and ad campaigns benefit from better data. This means you can optimize your campaigns more effectively, leading to increased conversions and more efficient ad spending, maximizing your return on investment."
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
                  title={"In-depth reporting and actionable insights:"}
                  content={
                    "We go beyond basic analytics with in-depth reports that highlight actionable insights. By leveraging this data, you can fine-tune your strategies, refine your audience targeting, and optimize your user experience for continuous growth."
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
              <div className="contact-form-wrapper bg-primary">
                <ContactForm
                  textBf={"var(--text-light)"}
                  bfBg={"var(--primary)"}
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
                    Why Choose Wlastig for GA4 Tracking?
                  </StyledText>
                  <Center>
                    <UnderlineStyled></UnderlineStyled>
                  </Center>
                </AnimationContainer>
                <AnimationContainer>
                  <Center>
                    <StyledText className="max-w-prose-plus">
                      We specialize in advanced{" "}
                      <strong>Google Analytics 4 (GA4)</strong>
                      tracking solutions designed to give you the deepest
                      insights into your website performance and user behavior.
                      Here’s why <strong>Wlastig</strong> is your ideal partner
                      for GA4 implementation:
                    </StyledText>
                  </Center>
                </AnimationContainer>
                <Grid gridColumn={"400px"} gridGap={"var(--s5)"}>
                  {whyChooseWlastig
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
                {serviceCount < whyChooseWlastig.length && isSmallScreen ? (
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
        <div className="remove-mobile">
          <InfographicNew
            titleColor={"var(--text-dark)"}
            textColor={"var(--text-dark)"}
            shapeDividerFill={"var(--primary)"}
            ctaButton={false}
            processArr={processArr}
            treshold={0.3}
            fireHeight={"218vh"}
          ></InfographicNew>
        </div>
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

export default GoogleAnalytycs4;
