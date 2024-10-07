import styled from "styled-components";
import React, { useContext } from "react";
import { Wrapper } from "./styles/Wrapper.styled";
import { Region } from "./styles/Region.styled";
import Image from "next/image";
import dollar from "../public/img/dollar.png";
import { Switcher } from "./styles/Switcher.styled";
import { Stack } from "./styles/Stack.styled";
import { Center } from "./styles/Center.styled";
import { Button } from "./styles/Button.styled";
import { Shapedivider } from "./styles/Shapedivider.styled";
import AnimationContainer from "./AnimationContainer";
import ModalCtx from "../store/ModalCtx";
import ScrollLink from "./ScrollLink";

function Hero() {
  const modalCtx = useContext(ModalCtx);
  return (
    <HeroStyled>
      <Region>
        <Wrapper>
          <Switcher gap={"s4"}>
            <Center>
              <Stack>
                <h1 className="hero-title">
                  &quot;50% of all advertising spend is wasted&quot;
                  <span>John Wanamaker</span>
                </h1>

                <h4>
                  Bad news. In today&apos;s digital market, your waste is closer
                  to 76%!
                </h4>

                <AnimationContainer delay={"3"} wobble={true}>
                  <ScrollLink id="hero_cta" href="#contact-form-section">
                    <Button
                      //!Save the popup functionality for later
                      // onClick={() => {
                      //   modalCtx.forceOpenHandler("audit");
                      // }}
                      as={"span"}
                    >
                      Schedule Free Consultation!
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Button>
                  </ScrollLink>
                </AnimationContainer>
              </Stack>
            </Center>
            <Center>
              <Image
                src={dollar}
                width={500}
                height={400}
                alt="dollar bill"
                className="hero-img"
                priority
              ></Image>
            </Center>
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
    </HeroStyled>
  );
}

export const HeroStyled = styled.div`
  background-image: url("./img/hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: var(--text-light);
  position: relative;
  padding-block-end: 10rem;
  padding-block-start: 65px;

  @media (max-width: 850px) {
    padding-block-end: 5rem;

    .hero-img {
      height: 300px;
    }
  }

  .hero-img {
    object-fit: contain;
  }

  .hero-title span {
    float: right;
    line-height: 3;
    font-size: var(--s1);
  }

  @media (prefers-color-scheme: dark) {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 0;
    }
  }
`;

export default Hero;
