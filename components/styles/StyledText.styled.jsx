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

  @media (max-width: 450px) {
    font-size: ${(props) =>
      props.fontSize ? `calc(${props.fontSize} - 35%)` : ""};
  }
`;

export const StyledH1 = styled.h1`
  font-size: ${(props) => props.fontSize || ""};
  color: ${(props) => props.color || ""};
  text-transform: ${(props) => props.transform || ""};
  text-align: ${(props) => props.align || ""};
  font-family: ${(props) => props.family || ""};
`;
