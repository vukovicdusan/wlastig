import React, { useContext } from "react";
import { Wrapper } from "./styles/Wrapper.styled";
import { Region } from "./styles/Region.styled";
import { Center } from "./styles/Center.styled";
import IconBox from "./IconBox";
import { FullBackground } from "./styles/FullBackground.styled";
import { Stack } from "./styles/Stack.styled";
import { Switcher } from "./styles/Switcher.styled";
import { Button } from "./styles/Button.styled";
import AnimationContainer from "../components/AnimationContainer";
import ModalCtx from "../store/ModalCtx";

const FocusSection = () => {
  const modalCtx = useContext(ModalCtx);

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
          <h2 className="visually-hidden">Our Focus</h2>
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
            <AnimationContainer wobble={true} delay={"9"}>
              <Button
                onClick={() => {
                  modalCtx.forceOpenHandler("contact");
                }}
                as={"span"}
                id="contact_us_now"
              >
                Contact Us Now <span></span>
                <span></span>
                <span></span>
                <span></span>
              </Button>
            </AnimationContainer>
          </Stack>
        </Region>
      </Wrapper>
    </FullBackground>
  );
};

export default FocusSection;
