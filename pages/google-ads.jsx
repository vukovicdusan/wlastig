import React, { useEffect } from "react";
import { Region } from "../components/styles/Region.styled";
import { Wrapper } from "../components/styles/Wrapper.styled";
import { Switcher } from "../components/styles/Switcher.styled";
import { Center } from "../components/styles/Center.styled";
import { Stack } from "../components/styles/Stack.styled";
import ContactForm from "../components/ContactForm";
import { Shapedivider } from "../components/styles/Shapedivider.styled";
import { FullBackground } from "../components/styles/FullBackground.styled";
import { StyledH1, StyledText } from "../components/styles/StyledText.styled";
import Head from "next/head";
import AnimationContainer from "../components/AnimationContainer";
import IconBox from "../components/IconBox";
import { Grid } from "../components/styles/Grid.styled";
import { UnderlineStyled } from "../components/styles/UnderlineStyled.styled";
import Testimonials from "../components/Testimonials";
import ContactFormSection from "../components/ContactFormSection";
import Infographic from "../components/Infographic";
import { whyChooseWlastig } from "../public/content/landing";
import { processArr } from "../public/content/advertising";
import { Button } from "../components/styles/Button.styled";
import useScreenSize from "../hooks/useScreenSize";
import { LandingStyled } from "../components/LandingStyled.styled";
import ScrollLink from "../components/ScrollLink";
import Link from "next/link";
import InfographicNew from "../components/InfographicNew";

const LandingAdvertising = () => {
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
        <title>Wlastig Analytics - Google Ads</title>
        <meta
          name="description"
          content="Drive targeted traffic and maximize conversions with Wlastig’s Google Ads services. Our experts create optimized campaigns that deliver measurable results and boost your online presence."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingStyled>
        <FullBackground background={"var(--primary)"}>
          <Region pt={"65px"} pb={"130px"}>
            <Wrapper>
              <Switcher className="center-mobile" gap={"var(--s4)"}>
                <Stack stackJustify={"center"}>
                  <StyledH1
                    color="var(--text-light)"
                    className="hero-title"
                    align={"start"}
                  >
                    Boost Your Revenue or Number of Leads with Targeted PPC
                    Campaigns!
                  </StyledH1>
                  <StyledText
                    fontSize={"var(--s2)"}
                    color={"var(--text-light)"}
                    maxWidth={"40ch"}
                    align={"start"}
                  >
                    Harness the power of PPC advertising to attract the right
                    audience to your website. Our experts run efficient
                    campaigns that deliver measurable results.
                  </StyledText>
                </Stack>
                <div className="contact-form-wrapper">
                  <StyledText
                    family="var(--poppinsbold)"
                    fontSize="var(--s2)"
                    color="var(--secondary)"
                  >
                    SIGN UP FOR<br></br> FREE CONSULTATION
                  </StyledText>
                  <ContactForm
                    formType={"freeConsultation1"}
                    btnName={"Launch Your PPC Campaign Now"}
                    btnId={"form_submit_consultation1"}
                  ></ContactForm>
                </div>
              </Switcher>
            </Wrapper>
          </Region>

          <Shapedivider
            fill={"var(--background-light)"}
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
            <Center>
              <AnimationContainer>
                <StyledText
                  className="max-w-prose-sm"
                  as={"h2"}
                  align="center"
                  maxWidth={"100%"}
                >
                  How Google Ads and Bing Ads Can Transform Your Business
                </StyledText>
                <Center>
                  <UnderlineStyled></UnderlineStyled>
                </Center>
              </AnimationContainer>
            </Center>
            <AnimationContainer>
              <Stack stackAlign="center">
                <StyledText
                  color="var(--text-dark)"
                  className="max-w-prose-plus"
                >
                  <strong>Google</strong> and <strong>Bing Ads</strong> are like
                  your digital megaphones, bringing the right crowd straight to
                  your door. With search ads showing up when people are actively
                  looking for what you offer, and display ads popping up on
                  sites they love to visit, you’re always in the spotlight.
                </StyledText>{" "}
                <StyledText
                  color="var(--text-dark)"
                  className="max-w-prose-plus"
                >
                  These platforms don&apos;t just drive traffic—they bring in
                  relevant traffic. More clicks, more leads, better ROAS, and
                  ultimately, more revenue. It’s like putting your brand where
                  your audience is already hanging out, ready to engage.
                  Effortless growth, fueled by smart ads.
                </StyledText>
              </Stack>
            </AnimationContainer>
            {/* <Switcher
              switcherJustify={"center"}
              flexBasis={"40rem"}
              elCount={"2"}
              gap={"var(--s4)"}
              mb={"var(--s4)"}
              mt={"var(--s4)"}
            >
              <AnimationContainer>
                <Center>
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
                </Center>
              </AnimationContainer>
              <AnimationContainer delay={"2"}>
                <Center>
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
                </Center>
              </AnimationContainer>
            </Switcher> */}
            {/* <Switcher
              switcherJustify={"center"}
              flexBasis={"40rem"}
              elCount={"2"}
              gap={"var(--s4)"}
            >
              <AnimationContainer delay={"3"}>
                <Center>
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
                </Center>
              </AnimationContainer>
              <AnimationContainer delay={"6"}>
                <Center>
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
                </Center>
              </AnimationContainer>
            </Switcher> */}
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
                    10 Years of Expertise in PPC Advertising
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
                      We are proud to have a team of dedicated digital marketing
                      experts with over 10 years of experience in the industry.
                      Our specialists are certified for PPC platforms, ensuring
                      that your campaigns are managed by professionals who
                      understand the intricacies of these powerful advertising
                      platforms.
                    </StyledText>
                    <StyledText
                      color="var(--text-light)"
                      className="max-w-prose-plus"
                    >
                      With a track record of successful campaigns that deliver
                      measurable results, we are committed to helping your
                      business grow through tailored strategies and data-driven
                      insights—Trust Wlastig&apos;s team to take your digital
                      marketing to the next level.
                    </StyledText>
                  </Stack>
                </AnimationContainer>
                {/* <Grid gridColumn={"400px"} gridGap={"var(--s5)"}>
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
                </Grid> */}
                {/* {serviceCount < whyChooseWlastig.length && isSmallScreen ? (
                  <Center mt={"var(--s4)"}>
                    <Button id="see_more_services" onClick={seeMore}>
                      See More <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Button>
                  </Center>
                ) : null} */}
                <AnimationContainer mt={"var(--s4)"} delay={"3"} wobble={true}>
                  <Link className="a-exception" href={"/our-team"} passHref>
                    <Button as={"span"}>
                      Learn More About Our Team
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Button>
                  </Link>
                </AnimationContainer>
              </Stack>
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
          <Region pt="14rem">
            <Wrapper>
              <Stack>
                <Center>
                  <AnimationContainer>
                    <StyledText
                      as={"h2"}
                      color={"var(--text-dark)"}
                      align="center"
                      maxWidth={"100%"}
                    >
                      Tailored PPC Packages
                    </StyledText>
                    <Center>
                      <UnderlineStyled></UnderlineStyled>
                    </Center>
                  </AnimationContainer>
                </Center>
                <Center>
                  <AnimationContainer>
                    <Center>
                      <StyledText
                        color="var(--text-dark)"
                        className="max-w-prose-plus"
                      >
                        Every PPC strategy is like solving a Rubik&apos;s
                        Cube—complex in its own way. That’s why we don’t offer
                        one-size-fits-all packages. Pricing is tailored based on
                        the scope of work, competition, and the amount of effort
                        required. The most effective way to get accurate
                        information and a quote? Schedule a brief call with us.
                        This way, we can dive into the details and craft the
                        best strategy for your needs!
                      </StyledText>
                    </Center>
                  </AnimationContainer>
                </Center>
              </Stack>
            </Wrapper>
          </Region>
          <Region pb={"12rem"}>
            <Wrapper>
              <AnimationContainer>
                <Stack stackJustify={"center"} stackAlign={"center"}>
                  <h3 className="title-xl text-center">
                    Schedule a free consultation
                  </h3>
                  <UnderlineStyled></UnderlineStyled>
                </Stack>
              </AnimationContainer>
              <div className="contact-form-wrapper">
                <ContactForm
                  formType={"freeConsultation2"}
                  btnId={"form_submit_consultation2"}
                ></ContactForm>
              </div>
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
        {/* <ContactFormSection
          formType={"freeConsultation"}
          title={"Schedule a free consultation"}
        ></ContactFormSection> */}
        {/* <Infographic
          ctaButton={false}
          processArr={processArr}
          treshold={0.3}
          fireHeight={"218vh"}
        ></Infographic> */}
        <InfographicNew
          titleColor={"var(--text-dark)"}
          textColor={"var(--text-dark)"}
          shapeDividerFill={"var(--primary)"}
          ctaButton={false}
          processArr={processArr}
          treshold={0.3}
          fireHeight={"218vh"}
        ></InfographicNew>
        <div className="spacer"></div>
        <Testimonials sidebarLayout={false}></Testimonials>
        <ContactFormSection
          formType={"freeConsultation3"}
          shapedivider={true}
          title={"Schedule A Free Consultation"}
          btnId={"form_submit_consultation3"}
          // subTitle={[
          //   "Interested in improving your paid advertising efforts? Book a free consultation to review your current digital campaigns and discover how to improve targeting, performance, and return on investment.",
          // ]}
        >
          {" "}
        </ContactFormSection>
      </LandingStyled>
    </main>
  );
};

export default LandingAdvertising;
