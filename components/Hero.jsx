import styled from "styled-components";
import React, { useState } from "react";
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
import Modal from "./Modal";

function Hero() {
  const [forceOpen, setForceOpen] = useState({ state: false, type: "" });

  const modalClosedHandler = () => {
    setForceOpen({ state: false, type: "" });
  };

  return (
    <HeroStyled>
      <Region>
        <Wrapper>
          <Switcher gap={"s4"}>
            <Center>
              <Stack>
                <AnimationContainer>
                  <h1 className="hero-title">
                    &quot;50% of all advertising spent is wasted&quot;
                    <span>John Wanamaker</span>
                  </h1>
                </AnimationContainer>
                <AnimationContainer
                  direction={"translateX"}
                  distance={"-500px"}
                  delay={"2"}
                >
                  <h4>
                    Due to the competitiveness of the digital market, nowadays
                    your waste is closer to 76%!
                  </h4>
                </AnimationContainer>
                <AnimationContainer delay={"3"}>
                  <Button
                    onClick={() => {
                      setForceOpen({ state: true, type: "audit" });
                    }}
                  >
                    Find your money leaks!
                  </Button>
                </AnimationContainer>
              </Stack>
            </Center>
            <Center>
              <AnimationContainer direction={"translateX"}>
                <Image
                  src={dollar}
                  width={500}
                  height={400}
                  alt="dollar bill"
                  className="hero-img"
                ></Image>
              </AnimationContainer>
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
      {/* <Modal
        forceOpen={forceOpen}
        modalClosedHandler={modalClosedHandler}
      ></Modal> */}
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
`;

export default Hero;
