import styled from "styled-components";

export const StyledText = styled.p`
  color: ${(props) => props.color || "inherit"};
  text-transform: ${(props) => props.transform || "inherit"};
  text-align: ${(props) => props.align || "inherit"};
  font-family: ${(props) => props.family || "inherit"};
  font-size: ${(props) => props.fontSize || "inherit"};
  max-width: ${(props) => props.maxWidth || "inherit"};
`;
export const StyledH1 = styled.h1`
  color: ${(props) => props.color || "inherit"};
  text-transform: ${(props) => props.transform || "inherit"};
  text-align: ${(props) => props.align || "inherit"};
  font-family: ${(props) => props.family || "inherit"};
`;
