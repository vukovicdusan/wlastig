import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Wrapper } from "./styles/Wrapper.styled";
import { Region } from "./styles/Region.styled";
import { FullBackground } from "./styles/FullBackground.styled";
import { Shapedivider } from "./styles/Shapedivider.styled";
import AnimationContainer from "./AnimationContainer";
import { Stack } from "./styles/Stack.styled";
import { Center } from "./styles/Center.styled";
import { StyledText } from "./styles/StyledText.styled";
import { UnderlineStyled } from "./styles/UnderlineStyled.styled";

const InfographicNew = (props) => {
  let animationRef = useRef();
  const [show, setShow] = useState(false);
  let processesNum = props.processArr.length + 1;

  useEffect(() => {
    let config = {
      threshold: props.treshold || 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      });
    }, config);
    observer.observe(animationRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <FullBackground>
      <Shapedivider
        fill={props.shapeDividerFill || ""}
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
      <Region pb={"12rem"}>
        <Wrapper>
          <Stack
            stackSpace={"var(--s5) !important"}
            stackAlign={"center"}
            mt={"var(--s7)"}
          >
            <AnimationContainer>
              <Center>
                <StyledText
                  smAlign={"center"}
                  as={"h2"}
                  color={props.titleColor || ""}
                >
                  Our Roadmap to Success
                </StyledText>
                <UnderlineStyled></UnderlineStyled>
              </Center>
            </AnimationContainer>
            <InfographicNewStyled
              fireHeight={props.fireHeight}
              processesNum={processesNum}
              ref={animationRef}
              textColor={props.textColor || ""}
            >
              {[...props.processArr].reverse().map((process, index) => (
                <li
                  className={`${show ? "fade-in-show " : "fade-in-hidden "}  ${
                    processesNum % 2 === 0 ? "even" : "odd"
                  }`}
                  key={index}
                >
                  <div className="title">
                    {process.title}
                    {/* {processBodyElement} */}
                    {process.body ? (
                      <p className="process-body">
                        {process.body ? process.body : ""}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>

                  <span className="tooltip"></span>
                </li>
              ))}
            </InfographicNewStyled>
          </Stack>
        </Wrapper>
      </Region>
      <Shapedivider
        fill={props.shapeDividerFill || ""}
        position={"bottom"}
        rotation={"180"}
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
    </FullBackground>
  );
};

export default InfographicNew;

export const InfographicNewStyled = styled.ol`
  --item-height: 100px;
  --item-width: 150px;
  --diagonal: calc(var(--item-width) * 1.414);
  --rocket-height: calc(var(--rocket-width) / var(--rocket-aspect));
  --flame-outer-color: #f16e39;
  --flame-inner-color: #fed103;
  --rocket-aspect: calc(134.13 / 196.24);
  --rocket-width: 6rem;
  --point-size: 60px;
  --number-circle-size: 2.5rem;
  --number-circle-border-size: 0.25rem;
  --number-line-height: 0.125rem;
  --number-line-length: calc(var(--rocket-width) / 2 + var(--column-gap) / 2);
  --number-line-dot-size: 0.25rem;
  --rocket-start-translate-even: 450px, 109px;
  --rocket-start-rotate-even: -123deg;
  --rocket-start-translate-odd: -575px, 100px;
  --rocket-start-rotate-odd: 31deg;
  --rocket-end-translate-even: -135px, 2px;
  --rocket-end-translate-odd: 0, 0;
  --rocket-end-rotate-odd: 31deg;
  --rocket-end-rotate-even: -123deg;
  --fire-line-rotate-even: -80deg;
  --fire-line-bottom-even: -20px;
  --fire-line-right-even: -25px;
  --fire-line-bottom-odd: 30px;
  --fire-line-left-odd: 5px;
  --fire-line-rotate-odd: 80deg;

  color: ${(props) => props.textColor || "var(--text-light)"};
  display: grid;
  grid-template-columns: repeat(4, var(--item-width));
  grid-template-rows: repeat(
    ${(props) => props.processesNum - 1 || 6},
    var(--item-height)
  );
  justify-content: center;
  counter-reset: liCount 0;

  li {
    position: relative;
    width: var(--item-width);
    height: var(--item-height);
    counter-increment: liCount 1;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    /* text-align: center; */
    z-index: 5;
    transition: all 1s ease;
  }

  li:nth-of-type(even) {
    text-align: end;
  }

  li:nth-of-type(1) {
    grid-row: ${(props) => props.processesNum - 1 || 6};
  }
  li:nth-of-type(2) {
    grid-row: ${(props) => props.processesNum - 2 || 6};
  }
  li:nth-of-type(3) {
    grid-row: ${(props) => props.processesNum - 3 || 6};
  }
  li:nth-of-type(4) {
    grid-row: ${(props) => props.processesNum - 4 || 6};
  }
  li:nth-of-type(5) {
    grid-row: ${(props) => props.processesNum - 5 || 6};
  }
  li:nth-of-type(6) {
    grid-row: ${(props) => props.processesNum - 6 || 6};
  }
  li:nth-of-type(7) {
    grid-row: ${(props) => props.processesNum - 7 || 6};
  }
  li:nth-of-type(8) {
    grid-row: ${(props) => props.processesNum - 8 || 6};
  }
  li:nth-of-type(odd) {
    grid-column: 1;
  }
  li:nth-of-type(even) {
    grid-column: 4;
  }

  & li:nth-child(7) {
    transition-delay: 1.3s;
  }

  & li:nth-child(6) {
    transition-delay: 1.3s;
  }

  & li:nth-child(5) {
    transition-delay: 1.1s;
  }

  & li:nth-child(4) {
    transition-delay: 0.9s;
  }

  & li:nth-child(3) {
    transition-delay: 0.7s;
  }

  & li:nth-child(2) {
    transition-delay: 0.5s;
  }

  /** TITLE */

  .title {
    font-family: var(--poppinsbold);
    /* word-break: break-word; */
    font-size: 17px;
  }

  li .title {
    position: relative;
    margin-bottom: 4rem;
    transition: all 0.4s ease;
    cursor: pointer;
  }

  li .title:hover .process-body {
    visibility: visible;
  }

  /* PROCESS BODY */
  .process-body {
    visibility: hidden;
    position: absolute;
    z-index: 1;
    font-size: 14px;
    font-family: var(--poppinsregular);
    text-align: center;
    padding: 1rem;
    border-radius: 4px;
    background-color: var(--background-light);
    border: 1px solid var(--text-dark);
    min-width: 200px;
  }

  li:nth-child(even) .process-body {
    right: 0;
  }

  /* POINT */
  li::before {
    content: counter(liCount, decimal-leading-zero);
    position: absolute;
    padding: 0.5rem;
    border: 5px solid var(--text-dark);
    border-radius: 100px;
    aspect-ratio: 1;
    width: var(--point-size);
    height: var(--point-size);
    bottom: -20px;
    left: -20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: var(--poppinsbold);
    z-index: 1;
    padding: 1rem;
    --dot-size: calc(
      var(--number-circle-size) / -2 + var(--number-line-dot-size)
    );
    box-shadow: inset 0 0 0 var(--number-circle-border-size) currentcolor,
      inset -0.125rem 0.125rem 0.25rem var(--number-circle-border-size) rgb(0 0
            0 / 0.25),
      -0.125rem 0.125rem 0.25rem rgb(0 0 0 / 0.5),
      calc(var(--number-line-length) * var(--dot_pos_multiplier, 1)) 0 0
        var(--dot-size) currentcolor;
  }

  li:nth-of-type(even)::before {
    right: -20px;
    left: revert;
  }

  li:last-of-type::before {
    content: "";
    left: revert;
    right: -20px;
    border: none;
    border-radius: 0;
    background-color: transparent !important;
    transform: rotate(31deg);
  }

  /** LINE */
  li::after {
    content: "";
    position: absolute;
    width: 50px;
    height: calc(var(--diagonal) * 2.8);
    opacity: 0.8;
    /* border-top: 8px dashed var(--text-dark); */
    background-image: radial-gradient(
        ellipse at center top,
        var(--flame-inner-color) 20%,
        transparent 50%
      ),
      linear-gradient(
        to right,
        transparent 20%,
        var(--flame-outer-color) 40%,
        var(--flame-inner-color) 50%,
        var(--flame-outer-color) 60%,
        transparent 80%
      ),
      radial-gradient(
        ellipse at center top,
        var(--flame-outer-color) 35%,
        transparent 65%
      );
    background-repeat: no-repeat;
    background-position: top center;
    background-size: 100% calc(var(--rocket-height) * 0.4), 100%,
      100% calc(var(--rocket-height) * 0.4);
    bottom: var(--fire-line-bottom-odd);
    left: var(--fire-line-left-odd);
    transform-origin: bottom left;
    transform: rotate(var(--fire-line-rotate-odd));
  }

  li:last-of-type::after {
    content: none;
  }

  li:nth-child(even)::after {
    transform: rotate(var(--fire-line-rotate-even));

    bottom: var(--fire-line-bottom-even);
    left: revert;
    right: var(--fire-line-right-even);
  }

  & li:nth-child(1)::before {
    background-color: #e52b50;
  }

  & li:nth-child(2)::before {
    background-color: #7251a2;
  }

  & li:nth-child(3)::before {
    background-color: #10bbc5;
  }

  & li:nth-child(4)::before {
    background-color: #acd038;
  }

  & li:nth-child(5)::before {
    background-color: #d6489a;
  }

  & li:nth-child(6)::before {
    background-color: #fcb410;
  }

  & li:nth-child(7)::before {
    background-color: #f4581b;
  }

  .fade-in-hidden {
    opacity: 0;
    filter: blur(5px);
  }

  .fade-in-show {
    opacity: 1;
    filter: blur(0);
  }

  li:last-child::before {
    transition: transform 2s ease;
    transition-delay: 1s;
  }

  li.even:last-child::before {
    transform: translate(var(--rocket-start-translate-even))
      rotate(var(--rocket-start-rotate-even));
  }

  li.odd:last-child::before {
    transform: translate(var(--rocket-start-translate-odd))
      rotate(var(--rocket-start-rotate-odd));
  }

  .fade-in-show:last-child::before {
    background-image: url("../img/startup.avif");
    background-position: center;
    background-size: contain;
  }

  li.fade-in-show.even:last-child::before {
    transform: translate(var(--rocket-end-translate-even))
      rotate(var(--rocket-end-rotate-even)) !important;
  }

  li.fade-in-show.odd:last-child::before {
    transform: translate(var(--rocket-end-translate-odd))
      rotate(var(--rocket-end-rotate-odd)) !important;
  }

  @media (max-width: 660px) {
    --item-height: 90px;
    --item-width: 100px;
    --rocket-start-translate-even: 450px, 109px;
    --rocket-start-rotate-even: -123deg;
    --rocket-start-translate-odd: -575px, 100px;
    --rocket-start-rotate-odd: 31deg;
    --rocket-end-translate-even: -95px, 3px;
    --rocket-end-translate-odd: 0, 0;
    --rocket-end-rotate-odd: 31deg;
    --rocket-end-rotate-even: -123deg;
    --fire-line-rotate-even: -77deg;
    --fire-line-bottom-even: -20px;
    --fire-line-right-even: -25px;
    --fire-line-bottom-odd: 30px;
    --fire-line-left-odd: 5px;
    --fire-line-rotate-odd: 77deg;
    --point-size: 50px;

    .title {
      font-size: 14px;
    }
  }

  @media (max-width: 451px) {
    --item-height: 90px;
    --item-width: 70px;
    --rocket-start-translate-even: 450px, 109px;
    --rocket-start-rotate-even: -119deg;
    --rocket-start-translate-odd: -575px, 100px;
    --rocket-start-rotate-odd: 31deg;
    --rocket-end-translate-even: -60px, 3px;
    --rocket-end-translate-odd: 0, 0;
    --rocket-end-rotate-odd: 31deg;
    --rocket-end-rotate-even: -119deg;
    --fire-line-rotate-even: -71deg;
    --fire-line-bottom-even: -20px;
    --fire-line-right-even: -25px;
    --fire-line-bottom-odd: 30px;
    --fire-line-left-odd: 5px;
    --fire-line-rotate-odd: 71deg;
    --point-size: 50px;

    .title {
      font-size: 13px;
    }
  }
`;
