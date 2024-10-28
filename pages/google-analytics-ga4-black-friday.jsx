import React, { useEffect } from "react";
import { Region } from "../components/styles/Region.styled";
import { Wrapper } from "../components/styles/Wrapper.styled";
import { Switcher } from "../components/styles/Switcher.styled";
import { Center } from "../components/styles/Center.styled";
import { Stack } from "../components/styles/Stack.styled";
import ContactForm from "../components/ContactForm";
import { Shapedivider } from "../components/styles/Shapedivider.styled";
import { FullBackground } from "../components/styles/FullBackground.styled";
import styled from "styled-components";
import { StyledH1, StyledText } from "../components/styles/StyledText.styled";
import Head from "next/head";
import AnimationContainer from "../components/AnimationContainer";
import IconBox from "../components/IconBox";
import { Grid } from "../components/styles/Grid.styled";
import { UnderlineStyled } from "../components/styles/UnderlineStyled.styled";
import Testimonials from "../components/Testimonials";
import ContactFormSection from "../components/ContactFormSection";
import Infographic from "../components/Infographic";
import { processArr, whyChooseWlastig } from "../public/content/landing";
import { Button } from "../components/styles/Button.styled";
import useScreenSize from "../hooks/useScreenSize";
import CheckSvg from "../components/svg/CheckSvg";
import ScrollLink from "../components/ScrollLink";
import GoogleAdSvg from "../components/svg/GoogleAdSvg";

const Landing = () => {
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
        <title>Wlastig Analytics</title>
        <meta
          name="description"
          content="Wanna hear a great story?
        A moving story about a brave company that made use of data on her way to become a market leader and a household brand. What company are we talking about? Yours!"
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BFLandingStyled>
        <FullBackground background={"var(--bf-black)"}>
          <Region pt={"65px"} pb={"130px"}>
            <Wrapper>
              <Switcher className="center-mobile" gap={"var(--s4)"}>
                <Stack stackJustify={"center"}>
                  <StyledH1 color="var(--text-light)" className="hero-title">
                    Is Your Conversion Tracking Ready for{" "}
                    <span>Black Friday</span>?
                  </StyledH1>
                  <StyledText
                    fontSize={"var(--s2)"}
                    color={"var(--text-light)"}
                    maxWidth={"40ch"}
                  >
                    Black Friday is just around the corner. Maximize your
                    campaign success by optimizing your website’s conversion
                    tracking
                  </StyledText>
                </Stack>
                <div className="contact-form-wrapper black-friday-border">
                  <StyledText
                    family="var(--poppinsbold)"
                    fontSize="var(--s2)"
                    color="var(--secondary)"
                  >
                    SIGN UP FOR<br></br> FREE CONSULTATION
                  </StyledText>
                  <ContactForm
                    bf={true}
                    btnName={"Sign up now!"}
                    btnId={"landing_page"}
                    bfInputBg={"var(--bf-gray)"}
                    bfBg={"var(--bf-black)"}
                    textBf={"var(--secondary)"}
                  ></ContactForm>
                </div>
              </Switcher>
            </Wrapper>
            <Region>
              <Wrapper>
                <Stack stackSpace={"var(--s4) !important"}>
                  <Switcher mt={"var(--s4)"} reverse={true}>
                    <Stack stackSpace={"var(--s4)"} className="service-info">
                      <Stack>
                        <Center>
                          <AnimationContainer>
                            <StyledText
                              color="var(--text-light)"
                              as={"h2"}
                              className="text-center"
                            >
                              Wlastig x Black Friday
                            </StyledText>
                            <UnderlineStyled
                              underlineMargin={"var(--s-4)"}
                              underlinePosition={"center"}
                            ></UnderlineStyled>
                          </AnimationContainer>
                        </Center>
                        <StyledText color="var(--text-light)">
                          Black Friday is one of the biggest, if not the
                          biggest, sales events of the year. To capitalize on
                          this opportunity, you need more than just great
                          offers—you need precise data. Effective{" "}
                          <strong>conversion tracking</strong> is critical to
                          ensuring every lead and transaction is captured,
                          helping you understand the performance of your
                          campaign and optimize them in real-time. Without
                          accurate tracking, you risk missing valuable insights
                          and sales opportunities.
                        </StyledText>
                        <Stack as="ul">
                          <StyledText color="var(--text-light)" as={"li"}>
                            <CheckSvg
                              svgWidth={50}
                              svgHeight={15}
                              svgFill={"#4bb543"}
                            ></CheckSvg>
                            GA4 Tracking
                          </StyledText>
                          <StyledText color="var(--text-light)" as={"li"}>
                            <CheckSvg
                              svgWidth={50}
                              svgHeight={15}
                              svgFill={"#4bb543"}
                            ></CheckSvg>
                            Advertising Platforms Tracking
                          </StyledText>
                          <StyledText color="var(--text-light)" as={"li"}>
                            <CheckSvg
                              svgWidth={50}
                              svgHeight={15}
                              svgFill={"#4bb543"}
                            ></CheckSvg>
                            Server-Side Tracking via GTM
                          </StyledText>
                          <StyledText color="var(--text-light)" as={"li"}>
                            <CheckSvg
                              svgWidth={50}
                              svgHeight={15}
                              svgFill={"#4bb543"}
                            ></CheckSvg>
                            Conversion Tracking & Custom Reports
                          </StyledText>
                        </Stack>
                      </Stack>
                    </Stack>
                    <Center>
                      <GoogleAdSvg width={400} height={300}></GoogleAdSvg>
                    </Center>
                  </Switcher>

                  <Center>
                    <StyledText
                      color={"var(--text-light)"}
                      fontSize={"var(--s2)"}
                      family={"var(--poppinsbold)"}
                      mb={"var(--s4)"}
                      mt={"var(--s6)"}
                      align={"center"}
                      className="max-w-prose-sm"
                    >
                      Get expert help to fine - tune your tracking today and
                      crush your Black Friday goals!
                    </StyledText>
                    <AnimationContainer delay={"3"} wobble={true}>
                      <ScrollLink
                        id="bf_landing_cta"
                        href="#contact-form-section"
                      >
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
          </Region>

          <Shapedivider
            fill={"var(--bf-gray)"}
            position={"bottom"}
            height={"100px"}
          >
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"></path>
            </svg>
          </Shapedivider>
        </FullBackground>
        <Region>
          <Wrapper>
            <AnimationContainer>
              <StyledText
                color="var(--text-light)"
                as={"h2"}
                align="center"
                maxWidth={"100%"}
              >
                GA4 Tracking Services Tailored to Your Business
              </StyledText>
              <Center>
                <UnderlineStyled></UnderlineStyled>
              </Center>
            </AnimationContainer>
            <AnimationContainer>
              <Stack stackAlign="center">
                <StyledText
                  color="var(--text-light)"
                  className="max-w-prose-plus"
                >
                  Unlock the full potential of your website data with customized
                  Google Analytics 4 (GA4) tracking solutions designed to meet
                  the unique needs of your business. At Wlastig, we specialize
                  in implementing advanced GA4 tracking and Server-Side Tracking
                  via Google Tag Manager (GTM), ensuring you capture the right
                  insights that drive growth.
                </StyledText>{" "}
                <StyledText
                  color="var(--text-light)"
                  className="max-w-prose-plus"
                >
                  {" "}
                  Whether you’re looking to understand user behavior, optimize
                  your conversions, or streamline marketing performance, our
                  team ensures seamless data collection across platforms. With
                  precision tracking and real-time analytics, you’ll have the
                  data-driven tools needed to make informed decisions and
                  outperform the competition.
                </StyledText>
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
              <Center>
                <IconBox
                  smJustify={"center"}
                  flexDirection={"row"}
                  color={"var(--text-light)"}
                  boxBorderColor={"transparent"}
                  img={"chart"}
                  width={100}
                  height={100}
                  title={
                    "Custom GA4 tracking setup tailored to your business goals:"
                  }
                  content={
                    "We create a tracking architecture built around the key performance indicators (KPIs) that matter most to your business. From event tracking to funnel analysis, we ensure you’re getting the data you need to drive smart decisions."
                  }
                ></IconBox>
              </Center>

              <Center>
                <IconBox
                  smJustify={"center"}
                  flexDirection={"row"}
                  color={"var(--text-light)"}
                  boxBorderColor={"transparent"}
                  img={"data-analysis"}
                  width={100}
                  height={100}
                  title={
                    "Server-Side Tracking implementation for enhanced data accuracy and more conversions:"
                  }
                  content={
                    "Our Server-Side Tracking solutions ensure that your data is more accurate by reducing loss from ad blockers and browser restrictions. This improved data accuracy leads to better understanding of user journeys, translating into more conversions and higher ROI."
                  }
                ></IconBox>
              </Center>
            </Switcher>
            <Switcher
              switcherJustify={"center"}
              flexBasis={"40rem"}
              elCount={"2"}
              gap={"var(--s4)"}
            >
              <Center>
                <IconBox
                  smJustify={"center"}
                  flexDirection={"row"}
                  color={"var(--text-light)"}
                  boxBorderColor={"transparent"}
                  img={"ecommerce"}
                  width={100}
                  height={100}
                  title={"More conversions, better campaign results:"}
                  content={
                    "With higher accuracy in tracking user actions, your marketing and ad campaigns benefit from better data. This means you can optimize your campaigns more effectively, leading to increased conversions and more efficient ad spend, maximizing your return on investment."
                  }
                ></IconBox>
              </Center>

              <Center>
                <IconBox
                  smJustify={"center"}
                  flexDirection={"row"}
                  color={"var(--text-light)"}
                  boxBorderColor={"transparent"}
                  img={"search"}
                  width={100}
                  height={100}
                  title={
                    "In-depth reporting and actionable insights to elevate your marketing strategies:"
                  }
                  content={
                    "We go beyond basic analytics with in-depth reports that highlight actionable insights. By leveraging this data, you can fine-tune your strategies, refine your audience targeting, and optimize your user experience for continuous growth."
                  }
                ></IconBox>
              </Center>
            </Switcher>

            <Center>
              <StyledText
                fontSize={"var(--s2)"}
                family={"var(--poppinsbold)"}
                mb={"var(--s4)"}
                mt={"var(--s4)"}
                align={"center"}
                className="max-w-prose-sm"
                color="var(--text-light)"
              >
                Don’t Leave Sales on the Table — Ensure Your Web Tracking is
                Black Friday Ready!
              </StyledText>
              <AnimationContainer delay={"3"} wobble={true}>
                <ScrollLink id="bf_landing_cta" href="#contact-form-section">
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
          </Wrapper>
        </Region>
        <FullBackground background={"var(--bf-black)"}>
          <Shapedivider
            position={"top"}
            fill={"var(--bf-gray)"}
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
              <Stack
                stackSpace={"var(--s4)"}
                stackJustify={"center"}
                stackAlign={"center"}
                mt={"var(--s2)"}
              >
                <AnimationContainer>
                  <StyledText
                    as={"h2"}
                    color={"var(--text-light)"}
                    align="center"
                    maxWidth={"100%"}
                  >
                    Why Choose Wlastig for GA4 Tracking?
                  </StyledText>
                  <Center>
                    <UnderlineStyled></UnderlineStyled>
                  </Center>
                </AnimationContainer>
                <AnimationContainer>
                  <Center>
                    <StyledText
                      color="var(--text-light)"
                      className="max-w-prose-plus"
                    >
                      At <strong>Wlastig</strong>, we specialize in advanced{" "}
                      <strong>Google Analytics 4 (GA4)</strong> tracking
                      solutions designed to give you the deepest insights into
                      your website performance and user behavior. Here’s why
                      Wlastig is your ideal partner for GA4 implementation:
                    </StyledText>
                  </Center>
                </AnimationContainer>
                <Grid gridColumn={"400px"} gridGap={"var(--s5)"}>
                  {whyChooseWlastig
                    .slice(0, serviceCount)
                    .map((item, index) => (
                      // <div >
                      <Stack key={index}>
                        <StyledText as={"h4"} color={"var(--secondary)"}>
                          {item.title}
                        </StyledText>
                        <StyledText color={"var(--text-light)"}>
                          {item.body}
                        </StyledText>
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
        </FullBackground>
        <FullBackground>
          <Shapedivider
            fill={"var(--bf-black)"}
            position={"top"}
            rotation={"0"}
          >
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
              <AnimationContainer>
                <Stack stackJustify={"center"} stackAlign={"center"}>
                  <StyledText
                    color={"var(--text-light)"}
                    as={"h3"}
                    className="title-xl text-center"
                  >
                    Schedule a free consultation
                  </StyledText>
                  <UnderlineStyled></UnderlineStyled>
                </Stack>
              </AnimationContainer>
              <div className="contact-form-wrapper-gray">
                <ContactForm
                  bf={true}
                  bfBg={"var(--bf-gray)"}
                  bfInputBg={"var(--bf-gray)"}
                  textBf={"var(--secondary)"}
                ></ContactForm>
              </div>
            </Wrapper>
          </Region>
          <Shapedivider
            fill={"var(--bg-bf)"}
            position={"bottom"}
            rotation={"0"}
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
        {/* <ContactFormSection
          formType={"freeConsultation"}
          title={"Schedule a free consultation"}
        ></ContactFormSection> */}
        <Infographic
          titleColor={"var(--text-light)"}
          textColor={"var(--text-light)"}
          shapeDividerFill={"var(--bg-bf)"}
          ctaButton={false}
          processArr={processArr}
          treshold={0.3}
          fireHeight={"218vh"}
        ></Infographic>
        {/* <div className="spacer"></div> */}
        <Testimonials
          bgCard={"var(--bg-bf)"}
          shapeDividerFill={"var(--bg-bf)"}
          sidebarLayout={false}
        ></Testimonials>
        <ContactFormSection
          shapedividerColor={"var(--bf-gray)"}
          formType={"freeConsultation"}
          shapedivider={true}
          title={"Schedule a free consultation"}
          bg={"var(--bf-black)"}
          bf={true}
          bfInputBg={"var(--bf-gray)"}
          bfBg={"var(--bf-black)"}
          textBf={"var(--secondary)"}
        >
          {" "}
        </ContactFormSection>
      </BFLandingStyled>
    </main>
  );
};

export const BFLandingStyled = styled.div`
  background-color: var(--bf-gray);
  .hero-title span {
    color: var(--secondary);
  }
  .contact-form-wrapper,
  .contact-form-wrapper-gray {
    display: inline;
    background-color: var(--bf-black);
    border-radius: 5px;
    padding: var(--s2) var(--s2);
    height: max-content;
    max-width: fit-content;
    transition: all 0.4s ease;
  }

  .black-friday-border {
    border: 1px solid var(--secondary);
  }

  .contact-form-wrapper-gray {
    background-color: var(--bf-gray);
  }
  .spacer {
    background: var(--bf-black);
    padding-block: 5rem;
  }
  .styled-list {
    list-style: disc;
  }

  ul li {
    padding-left: 35px;
    text-indent: -50px;
  }
  @media (max-width: 825px) {
    h1,
    h1 + p {
      text-align: center;
    }
    .center-mobile {
      justify-content: center;
    }
  }
  @media (max-width: 430px) {
    .contact-form-wrapper {
      padding: var(--s-2);
    }
    .sm-justify-center {
      justify-content: center;
    }
  }
`;

export default Landing;
