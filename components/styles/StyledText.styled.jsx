import styled from "styled-components";

export const StyledText = styled.p`
  color: ${(props) => props.color || ""};
  text-transform: ${(props) => props.transform || ""};
  text-align: ${(props) => props.align || ""};
  font-family: ${(props) => props.family || ""};
  font-size: ${(props) => props.fontSize || ""};
  max-width: ${(props) => props.maxWidth || ""};
  margin-top: ${(props) => props.mt || ""};
  margin-bottom: ${(props) => props.mb || ""};
`;
export const StyledH1 = styled.h1`
  color: ${(props) => props.color || ""};
  text-transform: ${(props) => props.transform || ""};
  text-align: ${(props) => props.align || ""};
  font-family: ${(props) => props.family || ""};
`;
