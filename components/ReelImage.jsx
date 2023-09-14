import * as React from "react";
import styled from "styled-components";
// import { reelImg1 } from "../public/img/svg-components/reelImg1"
// import { reelImg2 } from "../public/img/svg-components/reelImg2"
// import { reelImg3 } from "../public/img/svg-components/reelImg3"
// import { buttonImg1 } from "../public/img/svg-components/buttonImg1"
// import { buttonImg2 } from "../public/img/svg-components/buttonImg2"
// import { buttonImg3 } from "../public/img/svg-components/buttonImg3"

const ReelImage = (props) => {
  const reel1 = reelImg1;
  const reel2 = reelImg2;
  const reel3 = reelImg3;
  const button1 = buttonImg1;
  const button2 = buttonImg2;
  const button3 = buttonImg3;

  let content;

  switch (props.content) {
    case "reel1":
      content = reel1;
      break;
    case "reel2":
      content = reel2;
      break;
    case "reel3":
      content = reel3;
      break;
    case "button1":
      content = button1;
      break;
    case "button2":
      content = button2;
      break;
    case "button3":
      content = button3;
      break;
  }

  return (
    <ReelImageStyled
      width={props.svgWidth || 24}
      height={props.svgHeight || 24}
      cssWidth={props.svgWidth}
      cssHeight={props.svgHeight}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={props.svgFill || "#083d77"}
      viewBox={props.viewBox || "0 0 400 300"}
      // {...props}
    >
      {content}
    </ReelImageStyled>
  );
};

export const ReelImageStyled = styled.svg`
  width: ${(props) => props.cssWidth}px;
  height: ${(props) => props.cssHeight}px;
  @media (max-width: 450px) {
    width: calc(${(props) => props.cssWidth}px - 30%);
    height: calc(${(props) => props.cssHeight}px - 30%);
  }
`;

export default ReelImage;
