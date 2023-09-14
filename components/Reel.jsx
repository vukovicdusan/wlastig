import React, { useState } from "react";
import styled from "styled-components";
import AnimationContainer from "./AnimationContainer";
import { Region } from "./styles/Region.styled";
import { Shapedivider } from "./styles/Shapedivider.styled";
import { FullBackground } from "./styles/FullBackground.styled";
import { Button } from "./styles/Button.styled";
import { Stack } from "./styles/Stack.styled";
import AnalyticsSvg from "./svg/AnalyticsSvg";
import AdvertisingSvg from "./svg/AdvertisingSvg";
import ConsultingSvg from "./svg/ConsultingSvg";
import GoogleAdSvg from "./svg/GoogleAdSvg";
import ReportAnalysisSvg from "./svg/ReportAnalysisSvg";
import ReportAnalysis2Svg from "./svg/ReportAnalysis2Svg";
import Link from "next/link";

const Reel = () => {
  const [reelIndex, setReelIndex] = useState(0);

  const reelLinkHandler = (e) => {
    setReelIndex(e);
  };

  return (
    <FullBackground>
      <Region pb={"0"} pt={"0"}>
        <ReelStyled className="reel">
          <div className="reel-links">
            <AnimationContainer delay={"1"}>
              <button
                onClick={() => reelLinkHandler(0)}
                className={`${reelIndex === 0 ? "active" : ""} reel-button`}
              >
                <span className="reel-link-icon">
                  <AnalyticsSvg></AnalyticsSvg>
                  Analytics
                </span>
              </button>
            </AnimationContainer>
            <AnimationContainer delay={"3"}>
              <button
                onClick={() => reelLinkHandler(1)}
                className={`${reelIndex === 1 ? "active" : ""} reel-button`}
              >
                <span className="reel-link-icon">
                  <AdvertisingSvg></AdvertisingSvg>
                  Advertising
                </span>
              </button>
            </AnimationContainer>
            <AnimationContainer delay={"5"}>
              <button
                onClick={() => reelLinkHandler(2)}
                className={`${reelIndex === 2 ? "active" : ""} reel-button`}
              >
                <span className="reel-link-icon">
                  <ConsultingSvg></ConsultingSvg>
                  Consulting
                </span>
              </button>
            </AnimationContainer>
          </div>
          <div
            style={{
              transform: `translateX(${-100 * reelIndex}vw)`,
            }}
            className="reel-inside"
          >
            <Shapedivider
              position={"top"}
              fill={"var(--background-light)"}
              height={"80px"}
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
            <div className="reel-item">
              <div className="reel-item--content">
                <ReportAnalysis2Svg
                  width={350}
                  height={250}
                ></ReportAnalysis2Svg>
                <Stack className="reel-item--text">
                  <p>
                    A data analysis which allows deeper understanding of{" "}
                    <span>CUSTOMER BEHAVIOUR, MARKETING</span> and{" "}
                    <span>WEBSITE PERFORMANCE</span>.
                  </p>
                  <Button as={"div"}>
                    <Link href={"/web-analytics"}>
                      Learn More <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Link>{" "}
                  </Button>
                </Stack>
              </div>
            </div>
            <div className="reel-item">
              <div className="reel-item--content">
                <GoogleAdSvg width={350} height={250}></GoogleAdSvg>
                <Stack className="reel-item--text">
                  <p>
                    To optimize your campaigns and{" "}
                    <span>REDUCE ADVERTISING EXPENSES</span>, we use
                    state-of-the-art advertising methods which leverage machine
                    learning.
                  </p>
                  <Button as={"div"}>
                    <Link href={"/advertising"}>
                      Learn More <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  </Button>
                </Stack>
              </div>
            </div>
            <div className="reel-item">
              <div className="reel-item--content">
                <ReportAnalysisSvg width={350} height={250}></ReportAnalysisSvg>
                <Stack className="reel-item--text">
                  <p>
                    When in trouble, get a fresh pair of eyes to{" "}
                    <span>SAVE YOUR TIME</span> and <span>MONEY</span>. Whatever
                    the problem, we&quot;ll be there to promptly steer the way
                    towards solution.
                  </p>
                  <Button as={"div"}>
                    <Link href={"/consulting"}>
                      Learn More <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  </Button>
                </Stack>
              </div>
            </div>
          </div>
        </ReelStyled>
      </Region>
      <Shapedivider position={"bottom"} height={"110px"}>
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
    </FullBackground>
  );
};

export const ReelStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  block-size: 850px;
  inline-size: 100%;
  overflow: hidden;
  scrollbar-color: #fff #000;

  .reel-inside {
    background-color: var(--primary-shade);
    display: flex;
    inline-size: 300vw;
    transition: all 0.5s ease-in-out;
    position: relative;
  }

  .reel-item {
    display: flex;
    justify-content: center;
    block-size: 750px;
    inline-size: 100vw;
  }

  .reel-item--content {
    display: flex;
    flex-direction: column;
    inline-size: 65%;
    margin-block-start: 6rem;
    align-items: center;
    font-size: var(--s1);
    font-family: var(--poppinsregular);
  }

  .reel-item--content span {
    font-family: var(--poppinsbold);
  }

  .reel-item--text > div {
    align-self: flex-end;
  }

  .reel-item--text > div > a {
    cursor: pointer;
  }

  .reel-item--text a {
    color: var(--text-light);
  }

  .reel-links {
    display: flex;
    justify-content: space-between;
    gap: calc(var(--s5) + 4rem);
    margin-inline: auto;
    z-index: 9;
    padding-block: 2rem;
  }

  .reel-links div {
    display: flex;
    align-items: flex-end;
  }

  .reel-button {
    display: inline-block;
    padding: none;
    border: none;
    border-bottom: 2px solid transparent;
    background-color: none;
    background: none;
    color: var(--theme-primary);
    cursor: pointer;
    text-align: center;
    text-decoration: none !important;
    text-transform: uppercase;
    font-family: var(--poppinsbold);
    opacity: 0.8;
    transition: all 0.2s ease;
  }

  .active {
    outline: none;
    border-bottom: 2px solid var(--theme-primary);
    opacity: 1;
  }

  .reel-link-icon {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    flex: 200px 1 1;
    align-items: center;
  }

  .reel-item--text {
    max-width: 60ch;
  }

  @media (max-width: 800px) {
    block-size: 750px;

    .reel-item {
      block-size: 700px;
    }

    .reel-item--content {
      font-size: var(--s0);
      inline-size: 90%;
      display: flex;
      padding-block-start: 2rem;
      margin-block-start: 1rem;
    }

    .reel-links {
      gap: var(--s2);
    }

    .reel-button {
      font-size: var(--s-1);
    }

    .reel-item--text {
      max-width: 40ch;
    }
  }
  @media (prefers-color-scheme: dark) {
    svg {
      fill: inherit;
    }
  }
`;

export default Reel;
