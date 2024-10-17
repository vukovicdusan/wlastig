import React, { useEffect, useState } from "react";
import Image from "next/image";
import ChevronLeft from "./svg/ChevronLeft";
import ChevronRight from "./svg/ChevronRight";
import quoteStart from "../public/img/quote-start.svg";
import quoteEnd from "../public/img/quote-end.svg";
import { Wrapper } from "./styles/Wrapper.styled";
import { Region } from "./styles/Region.styled";
import { FullBackground } from "./styles/FullBackground.styled";
import { Shapedivider } from "./styles/Shapedivider.styled";
import { Stack } from "./styles/Stack.styled";
import styled from "styled-components";
import AnimationContainer from "./AnimationContainer";
import {
  testimonials,
  testimonialsLanding,
} from "../public/content/testimonials";

const Testimonials = (props) => {
  const [reelIndex, setReelIndex] = useState(0);
  const [leftButtonDisabled, setLeftButtonDisabled] = useState(true);
  const [rightButtonDisabled, setRightButtonDisabled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  let sidebarLayout = props.sidebarLayout;
  let slidesToDisplay = sidebarLayout ? 1 : isSmallScreen ? 1 : 3;
  let testimonialsToUse = sidebarLayout ? testimonials : testimonialsLanding;
  let slidesNum = testimonialsToUse.length - 1;

  useEffect(() => {
    reelIndex > 0 ? setLeftButtonDisabled(false) : setLeftButtonDisabled(true);
    reelIndex < slidesNum
      ? setRightButtonDisabled(false)
      : setRightButtonDisabled(true);
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsSmallScreen(mediaQuery.matches);

    const handleMediaChange = (event) => {
      setIsSmallScreen(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    // Clean up the listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [reelIndex, slidesNum]);

  const reelLinkHandler = (direction) => {
    if (direction === "left") {
      setReelIndex(reelIndex !== 0 ? reelIndex - 1 : 0);
    }
    if (direction === "right") {
      setReelIndex(
        reelIndex !== Math.floor(slidesNum / slidesToDisplay)
          ? reelIndex + 1
          : Math.floor(slidesNum / slidesToDisplay)
      );
    }
  };

  // Utility function to split the array into chunks of 3
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // In your component
  const testimonialChunks = chunkArray(testimonialsToUse, slidesToDisplay);

  return (
    <FullBackground>
      <Shapedivider position={"top"} rotation={"0"}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </Shapedivider>
      <Region pb={"0"}>
        <Wrapper>
          <AnimationContainer delay={"4"}>
            <TestimonialsStyled sidebarLayout={sidebarLayout}>
              <div className="reelButtons">
                <button
                  onClick={() => reelLinkHandler("left")}
                  className="reelButton"
                  disabled={leftButtonDisabled}
                >
                  <ChevronLeft
                    svgFill={
                      leftButtonDisabled
                        ? "var(--disabled-slider-btn-color)"
                        : "var(--active-slider-btn-color)"
                    }
                  ></ChevronLeft>
                </button>
                <button
                  onClick={() => reelLinkHandler("right")}
                  className="reelButton"
                  disabled={rightButtonDisabled}
                >
                  <ChevronRight
                    svgFill={
                      rightButtonDisabled
                        ? "var(--disabled-slider-btn-color)"
                        : "var(--active-slider-btn-color)"
                    }
                  ></ChevronRight>
                </button>
              </div>

              <div
                style={{
                  transform: `translateX(${-100 * reelIndex}vw)`,
                  inlineSize: `${((slidesNum + 1) / slidesToDisplay) * 100}vw`,
                }}
                className="reelInside"
              >
                {testimonialChunks.map((chunk, chunkIndex) => (
                  <div key={chunkIndex} className="cards-wrapper">
                    {chunk.map((testimonial, index) => (
                      <div key={index} className="reelItem">
                        <Stack
                          stackJustify={"center"}
                          stackAlign={"center"}
                          stackSpace={"var(--s-3)"}
                        >
                          <div className="reelItemBody">
                            <div className={sidebarLayout ? "sidebar" : "card"}>
                              <Image
                                className="testimonialImg"
                                src={testimonial.img}
                                width={125}
                                height={125}
                                alt="logo"
                              ></Image>
                              <blockquote>
                                <span className="quoteStart">
                                  <Image
                                    src={quoteStart}
                                    width={20}
                                    height={20}
                                    alt="quote"
                                  ></Image>
                                </span>
                                <p>{testimonial.content}</p>
                                <span className="quoteEnd">
                                  <Image
                                    src={quoteEnd}
                                    width={20}
                                    height={20}
                                    alt="quote"
                                  ></Image>
                                </span>
                              </blockquote>
                            </div>
                          </div>
                          <div className="reelItemFooter">
                            {sidebarLayout ? (
                              <>
                                <div className="frame">
                                  <span>{testimonial.frame1[0]}</span>
                                  {testimonial.frame1[1]}
                                </div>
                                <div className="frame">
                                  <span>{testimonial.frame2[0]}</span>
                                  {testimonial.frame2[1]}
                                </div>
                                <div className="frame">
                                  <span>{testimonial.frame3[0]}</span>
                                  {testimonial.frame3[1]}
                                </div>
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        </Stack>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </TestimonialsStyled>
          </AnimationContainer>
        </Wrapper>
      </Region>
    </FullBackground>
  );
};

export const TestimonialsStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  inline-size: 100%;
  overflow: hidden;
  scrollbar-color: #fff #000;
  padding-block: ${(props) =>
    props.sidebarLayout ? "var(--s4)" : "var(--s5)"};

  .cards-wrapper {
    display: flex;
    flex-direction: row;
    /* gap: 1rem; */
    margin-left: ${(props) => (props.sidebarLayout ? "revert" : "auto")};
    margin-right: ${(props) => (props.sidebarLayout ? "revert" : "auto")};
    width: ${(props) =>
      props.sidebarLayout ? "100vw" : "clamp(16rem, 95vw, 75rem)"};
    padding-left: ${(props) =>
      props.sidebarLayout ? "revert" : "clamp(0.9rem, 1rem + 0.47vw, 1.33rem)"};
    padding-right: ${(props) =>
      props.sidebarLayout ? "revert" : "clamp(0.9rem, 1rem + 0.47vw, 1.33rem)"};
    justify-content: ${(props) => (props.sidebarLayout ? "center" : "revert")};
    align-items: ${(props) => (props.sidebarLayout ? "flex-end" : "revert")};
  }

  .reelInside {
    background-color: transparent;
    display: flex;
    transition: all 0.5s ease-in-out;
    position: relative;
    margin-left: calc(50% - 50vw);
  }

  .reelItem {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    /* inline-size: ${(props) => (props.sidebarLayout ? "100vw" : "33.3vw")}; */
    gap: var(--s1);
  }

  .reelItemBody {
    max-width: 650px;
    position: relative;
    padding: var(--s2);
    border-radius: 20px;
    color: var(--theme-text-dark);
  }

  .testimonialImg {
    object-fit: contain;
    margin-block: auto;
  }

  & blockquote {
    border-inline-start: 1px solid var(--primary-shade);
    padding-inline-start: var(--s0);
  }

  & blockquote p {
    min-inline-size: 80%;
  }

  .reelItemFooter {
    display: flex;
    gap: var(--s1);
  }

  .sidebar {
    display: flex;
    flex-wrap: wrap;
    gap: var(--s1);
  }

  .sidebar > :first-child {
    flex-grow: 1;
  }

  .sidebar > :last-child {
    flex-basis: 0;
    flex-grow: 999;
    min-inline-size: 75%;
  }

  .card {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    color: var(--text-light);
  }

  .card blockquote {
    border-inline-start: revert;
    padding-inline-start: revert;
    background-color: ${(props) =>
      props.sidebarLayout ? "" : "var(--primary)"};
    padding: var(--s3) var(--s2);
    border-radius: 5px;
    min-height: 500px;
  }

  .card blockquote p {
    min-inline-size: revert;
  }

  .card .testimonialImg {
    border-radius: 100px;
    background: var(--background-light);
    margin-top: -4rem;
    z-index: 1;
    border: 1px solid var(--primary);
  }

  .frame {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 100%;
    border: 4px solid rgba(8, 61, 119, 0.5);
    border-radius: 5px;
    background-color: var(--testimonial-frames);
    background-size: cover;
    padding: var(--s0) var(--s1);
    color: var(--primary);
    font-family: var(--poppinsbold);
    text-transform: uppercase;
    text-align: center;
    background-repeat: no-repeat;
    background-position: center;
    width: 120px;
    height: 100px;
  }

  .reelItemFooter > *:nth-child(2) {
    background-image: url("./img/brda-chart.png");
  }
  .reelItemFooter > *:nth-child(1) {
    background-image: url("./img/stubovi.png");
  }
  .reelItemFooter > *:nth-child(3) {
    background-image: url("./img/doline-chart.png");
  }

  .quoteEnd img {
    margin-inline-start: auto;
  }

  .reelButtons {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: ${(props) => (props.sidebarLayout ? "50%" : "93%")};
    transform: translateY(-50%);
    left: 50%;
    transform: translateX(-50%);
    width: ${(props) => (props.sidebarLayout ? "70%" : "6rem")};
    z-index: 9;
  }

  .reelButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding: none;
    border: none;
    border-radius: 50px;
    background: none;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  /* .reelButton svg {
		fill: var(--primary);
	} */

  @media (max-width: 1240px) {
    .card .testimonialImg {
      margin-top: -3rem;
    }

    .reelItemBody {
      max-width: 500px;
      padding: var(--s0);
    }
  }

  @media (max-width: 1013px) {
    .card blockquote {
      min-height: 700px;
    }
  }

  @media (max-width: 900px) {
    .reelButtons {
      width: ${(props) => (props.sidebarLayout ? "100%" : "4rem")};
    }
    .cards-wrapper {
      justify-content: ${(props) =>
        props.sidebarLayout ? "center" : "center"};
    }
  }

  @media (max-width: 768px) {
    .card blockquote {
      min-height: 400px;
    }
  }

  @media (max-width: 550px) {
    .reelButtons {
      width: ${(props) => (props.sidebarLayout ? "30%" : "3rem")};
      top: revert;
      bottom: 0px;
    }
    .reelItemFooter {
      gap: var(--s-5);
    }

    .frame {
      font-size: var(--s-2);
      padding: var(--s-5) var(--s-2);
      width: 80px;
      height: 60px;
    }

    & blockquote {
      border-inline-start: none;
    }

    .card blockquote {
      min-height: 300px;
    }
  }
`;

export default Testimonials;
