import React from "react";
import Modal from "../../components/Modal";
import { Box } from "../../components/styles/Box.styled";
import { Region } from "../../components/styles/Region.styled";
import { Stack } from "../../components/styles/Stack.styled";
import { UnderlineStyled } from "../../components/styles/UnderlineStyled.styled";
import { Wrapper } from "../../components/styles/Wrapper.styled";
import { Button } from "../../components/styles/Button.styled";
import { StyledText } from "../../components/styles/StyledText.styled";
import { FullBackground } from "../../components/styles/FullBackground.styled";
import { Shapedivider } from "../../components/styles/Shapedivider.styled";
import AnimationContainer from "../../components/AnimationContainer";
import { Switcher } from "../../components/styles/Switcher.styled";
import Head from "next/head";
import { ServicesHeroStyled } from "../../components/styles/services/ServicesHeroStyled.styled";
import Link from "next/link";
import { careersArr } from "../../public/content/careersArr";
import Image from "next/image";
import ilustration from "../../public/img/pages/hero-careers-ilustration-1.png";

const Careers = ({ data }) => {
  return (
    <>
      <Head>
        <title>Wlastig Analytics - Careers</title>
        <meta
          name="description"
          content="Wanna hear a great story?
					A moving story about a brave company that made use of data on her way to become a market leader and a household brand. What company are we talking about? Yours!"
        />
        <link
          rel="canonical"
          href="https://www.wlastig.com/careers"
          key="canonical"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ServicesHeroStyled backgroundImg={"./img/pages/hero-careers.png"}>
        <Stack stackAlign={"inherit"}>
          <div className="hero-background">
            <div className="hero-content ">
              <div>
                <Image
                  className="hero-ilustration"
                  src={ilustration}
                  width={350}
                  height={350}
                  alt="ilustration"
                ></Image>
              </div>
              <Stack stackAlign={"end"}>
                <StyledText
                  as={"h1"}
                  color={"var(--primary)"}
                  family={"var(--poppinsbold)"}
                >
                  Looking to launch your career among a team of seasoned
                  professionals?{" "}
                </StyledText>
              </Stack>
            </div>
          </div>
        </Stack>
      </ServicesHeroStyled>
      <FullBackground>
        <Region>
          <Wrapper>
            <Stack mb={"var(--s5)"} stackSpace={"var(--s5)"}>
              <AnimationContainer delay={"3"}>
                <h2>Search no more. You found the right place!</h2>
                <UnderlineStyled></UnderlineStyled>
                <p>
                  We’re on the constant lookout for new colleagues. If you’re
                  proactive, industrious and cordial, you’re already halfway
                  there. The most important thing for us is that new colleagues
                  integrate quickly and easily. We strive for a friendly
                  atmosphere, but we hone huge respect for doing business. We
                  expect to learn from you, as much as you’ll learn from us.
                  Let’s grow and develop together. Waiting to hear from you.
                  Send us your CV as well as the cover letter at
                  careers@wlastig.com.
                </p>
              </AnimationContainer>

              <Switcher switcherJustify={"center"}>
                {data.map((career, index) => (
                  <Box
                    key={index}
                    borderRadius={"15px"}
                    boxBackground={"var(--text-dark)"}
                    boxColor={"var(--text-light)"}
                    maxWidth={"350px"}
                  >
                    <Stack stackAlign={"center"} stackJustify={"space-between"}>
                      <Stack stackAlign={"center"}>
                        <UnderlineStyled
                          underlineColor={"var(--primary-shade)"}
                        ></UnderlineStyled>
                        <StyledText
                          color={"var(--secondary)"}
                          transform={"uppercase"}
                        >
                          {career.location} | {career.type}
                        </StyledText>
                        <StyledText as={"h3"} align={"center"}>
                          {career.careerTitle}
                        </StyledText>
                        <StyledText align={"center"}>
                          {career.content}
                        </StyledText>
                      </Stack>
                      <Button as={"div"}>
                        <Link href={`/careers/${career.careerSlug}`}>
                          View Vacancy <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </Link>
                      </Button>
                    </Stack>
                  </Box>
                ))}
              </Switcher>
            </Stack>
          </Wrapper>
        </Region>
        <Shapedivider position={"bottom"} rotation={"0"} height={"80px"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </Shapedivider>
      </FullBackground>
      <Modal></Modal>
    </>
  );
};

export const getStaticProps = () => {
  const careersArrData = careersArr;
  return {
    props: {
      data: careersArrData,
    },
  };
};

export default Careers;
