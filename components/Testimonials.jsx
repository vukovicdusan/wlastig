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
import { Sidebar } from "./styles/Sidebar.styled";
import AnimationContainer from "./AnimationContainer";
import { testimonials } from "../public/content/testimonials";

const Testimonials = () => {
  const [reelIndex, setReelIndex] = useState(0);
  const [leftButtonDisabled, setLeftButtonDisabled] = useState(true);
  const [rightButtonDisabled, setRightButtonDisabled] = useState(false);

  let slidesNum = testimonials.length - 1;
  useEffect(() => {
    reelIndex > 0 ? setLeftButtonDisabled(false) : setLeftButtonDisabled(true);
    reelIndex < slidesNum
      ? setRightButtonDisabled(false)
      : setRightButtonDisabled(true);
  }, [reelIndex]);

  const reelLinkHandler = (direction) => {
    if (direction === "left") {
      setReelIndex(reelIndex !== 0 ? reelIndex - 1 : 0);
    }
    if (direction === "right") {
      setReelIndex(reelIndex !== slidesNum ? reelIndex + 1 : slidesNum);
    }
  };

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
            <TestimonialsStyled>
              <div className="reelButtons">
                <button
                  onClick={() => reelLinkHandler("left")}
                  className="reelButton"
                  disabled={leftButtonDisabled}
                >
                  <ChevronLeft
                    svgFill={leftButtonDisabled && "#d0d2e7"}
                  ></ChevronLeft>
                </button>
                <button
                  onClick={() => reelLinkHandler("right")}
                  className="reelButton"
                  disabled={rightButtonDisabled}
                >
                  <ChevronRight
                    svgFill={rightButtonDisabled && "#d0d2e7"}
                  ></ChevronRight>
                </button>
              </div>

              <div
                style={{
                  transform: `translateX(${-100 * reelIndex}vw)`,
                  inlineSize: `${(slidesNum + 1) * 100}vw`,
                }}
                className="reelInside"
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="reelItem">
                    <Stack
                      stackJustify={"center"}
                      stackAlign={"center"}
                      stackSpace={"var(--s-3)"}
                    >
                      <div className="reelItemBody">
                        <Sidebar reverse={false} sidebarPercent={"75%"}>
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
                        </Sidebar>
                      </div>
                      <div className="reelItemFooter">
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
                      </div>
                    </Stack>
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
  padding-block: var(--s4);

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
    inline-size: 100vw;
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
    top: 50%;
    transform: translateY(-50%);
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
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

  @media (max-width: 900px) {
    .reelButtons {
      width: 100%;
    }
  }

  @media (max-width: 550px) {
    .reelButtons {
      width: 30%;
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
  }
`;

export default Testimonials;
