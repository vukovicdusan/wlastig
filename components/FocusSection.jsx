import React from "react";
import { Wrapper } from "./styles/Wrapper.styled";
import { Region } from "./styles/Region.styled";
import { Center } from "./styles/Center.styled";
import IconBox from "./IconBox";
import { FullBackground } from "./styles/FullBackground.styled";
import { Stack } from "./styles/Stack.styled";
import { Switcher } from "./styles/Switcher.styled";
import { Button } from "./styles/Button.styled";
import AnimationContainer from "../components/AnimationContainer";
import Link from "next/link";

const FocusSection = () => {
  const roiContent =
    "Marketing efforts focused on generating money not likes and vanity metrics.";
  const performanceContent =
    "Using machine learning and predictive analytics to stay on top of your competition and anticipate future trends";
  const trackingContent =
    "Using enhanced tracking solutions to discover bottom line movers";
  return (
    <FullBackground background={"var(--primary)"}>
      <Wrapper>
        <Region>
          <Stack stackAlign={"center"} stackSpace={"var(--s5)"}>
            <Switcher
              switcherJustify={"center"}
              flexBasis={"40rem"}
              elCount={"3"}
              gap={"var(--s4)"}
            >
              <AnimationContainer>
                <Center>
                  <IconBox
                    img={"money-focus"}
                    width={100}
                    height={100}
                    title={"ROI Focused"}
                    content={roiContent}
                  ></IconBox>
                </Center>
              </AnimationContainer>
              <AnimationContainer delay={"2"}>
                <Center>
                  <IconBox
                    img={"growth"}
                    width={100}
                    height={100}
                    title={"Performance Forecasting"}
                    content={performanceContent}
                  ></IconBox>
                </Center>
              </AnimationContainer>
              <AnimationContainer delay={"4"}>
                <Center>
                  <IconBox
                    img={"job"}
                    width={100}
                    height={100}
                    title={"Advanced Tracking"}
                    content={trackingContent}
                  ></IconBox>
                </Center>
              </AnimationContainer>
            </Switcher>
            <Link className="a-exception" href={"/contact"}>
              <Button as={"span"}>Contact Us Now</Button>
            </Link>
          </Stack>
        </Region>
      </Wrapper>
    </FullBackground>
  );
};

export default FocusSection;
