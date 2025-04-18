import React from "react";
import { Wrapper } from "./styles/Wrapper.styled";
import { Region } from "./styles/Region.styled";
import { Stack } from "./styles/Stack.styled";
import { Switcher } from "./styles/Switcher.styled";
import { FullBackground } from "./styles/FullBackground.styled";
import styled from "styled-components";
import { Center } from "./styles/Center.styled";
import { UnderlineStyled } from "./styles/UnderlineStyled.styled";
import AnimationContainer from "./AnimationContainer";
import ScrollLink from "./ScrollLink";
import { Button } from "./styles/Button.styled";

const CompetitionSection = (props) => {
  return (
    <FullBackground background={"var(--primary)"}>
      <Region>
        <Wrapper>
          <CompetitionSectionStyled>
            <Center>
              <AnimationContainer delay={"3"} wobble={true}>
                <ScrollLink id="cta_competition" href="#contact-form-section">
                  <Button as={"span"}>
                    Schedule Free Consultation!
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </Button>
                </ScrollLink>
              </AnimationContainer>
            </Center>
            <AnimationContainer>
              <Center>
                <Switcher
                  as={"h2"}
                  flexBasis={"30rem"}
                  elCount={3}
                  className="text-light"
                  switcherJustify={"flex-center"}
                  switcherAlign={"center"}
                >
                  <span>Competition</span>
                  <span>VS</span>
                  <span>Wlastig</span>
                </Switcher>
                <UnderlineStyled></UnderlineStyled>
              </Center>
            </AnimationContainer>
            <Stack stackAlign={"inherit"}>
              {props.competitionArr.map((el, index) => (
                <AnimationContainer
                  key={index}
                  direction={"translateX"}
                  delay={index}
                >
                  <Switcher
                    flexBasis={"20rem"}
                    elCount={3}
                    className="card"
                    gap={"s0"}
                  >
                    <div className="competition">
                      <p>{el.competition}</p>
                    </div>
                    <div className="vs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="indianred"
                      >
                        <path d="M24 1l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421-5.411-1.316 18-9zm-11 12.501v5.499l2.193-3.323-2.193-2.176zm-13 8.63c1.013-1.574 1.955-2.256 2.938-2.55l.234 1.448c-.663.256-1.215.806-1.965 1.971l-1.207-.869zm11-4.729c-.928 1.473-1.748 2.104-2.566 2.322l.254 1.436c.746-.176 1.521-.583 2.312-1.391v-2.367zm-3.855 2.385c-.883-.103-1.92-.365-2.938-.376l.236 1.462c.873.068 1.931.345 2.963.395l-.261-1.481z" />
                      </svg>
                      {/* <svg className="icon">
												<use
													xlinkHref={
														"./img/subservices/sprite.svg#horse-toy"
													}
												></use>
											</svg> */}
                      <p>VS</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="var(--primary)"
                      >
                        <path d="M23.944 2.038c-.369-.026-.729-.038-1.083-.038-7.671 0-12.038 5.848-13.627 10.554l4.216 4.215c4.842-1.734 10.55-5.939 10.55-13.528 0-.392-.024-.793-.056-1.203zm-10.058 12.645l-2.571-2.571c1.089-2.55 4.185-7.978 10.88-8.312-.224 5.149-3.604 8.856-8.309 10.883zm4.88 1.371c-.488.333-.973.633-1.452.901-.167.794-.591 1.643-1.205 2.366-.001-.514-.145-1.032-.396-1.55-.441.2-.86.373-1.261.524.589 1.524-.011 2.649-.816 3.705 1.156-.087 2.369-.653 3.324-1.609 1.032-1.031 1.755-2.518 1.806-4.337zm-10.542-5.77c-.517-.249-1.032-.39-1.545-.392.716-.607 1.556-1.029 2.343-1.2.28-.493.595-.979.926-1.457-1.819.049-3.307.774-4.34 1.805-.955.955-1.52 2.169-1.608 3.324 1.056-.806 2.183-1.406 3.706-.815.155-.42.326-.842.518-1.265zm6.901.591c-.35-.348-.35-.913 0-1.261.348-.348.912-.348 1.261 0 .349.349.349.914 0 1.262-.349.349-.913.349-1.261-.001zm4.414-4.414c-.696-.696-1.826-.696-2.522 0-.697.696-.697 1.827 0 2.523.696.697 1.826.697 2.523 0 .695-.696.695-1.827-.001-2.523zm-1.703 1.703c-.243-.244-.243-.64 0-.883.242-.244.64-.244.885 0 .242.243.241.639 0 .883-.245.243-.642.243-.885 0zm-6.492 9.024c-1.734 1.844-3.656 2.787-5.72 2.787-3.2 0-5.624-2.354-5.624-5.311 0-1.485.611-3.122 2.043-4.689-3.201 5.137 1.126 10.128 6.694 4.607l.765.765c-.91 1.061-1.661 1.977-2.971 2.638 1.344.057 2.87-.745 4.017-1.593l.796.796z" />
                      </svg>
                      {/* <svg className="icon">
												<use
													xlinkHref={
														"./img/subservices/sprite.svg#rocket"
													}
												></use>
											</svg> */}
                    </div>
                    <div className="us">
                      <p>{el.us}</p>
                    </div>
                  </Switcher>
                </AnimationContainer>
              ))}
            </Stack>
          </CompetitionSectionStyled>
        </Wrapper>
      </Region>
    </FullBackground>
  );
};

export const CompetitionSectionStyled = styled.div`
  & p {
    font-family: var(--poppinsbold);
    color: var(--primary);
  }
  .card {
    background-color: var(--background-light);
    padding: var(--s2);
    border-radius: 5px;
  }
  & .wobble {
    margin-bottom: var(--s5);
  }
  .competition,
  .vs,
  .us {
    display: flex;
    flex-direction: column;
    gap: var(--s0);
  }

  .vs {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  .vs svg {
    width: 40px;
    height: 40px;
  }

  .vs {
    text-align: center;
  }
  .us {
    text-align: end;
    align-items: flex-end;
  }

  .competition p {
    color: indianred;
  }

  .card-container > * {
    width: 100%;
  }

  .text-light {
    width: 100%;
    text-align: center;
  }

  @media (prefers-color-scheme: dark) {
    & p {
      color: inherit;
    }

    .vs svg:last-child {
      fill: var(--theme-primary) !important;
    }
  }
`;

export default CompetitionSection;
