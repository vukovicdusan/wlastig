import styled from "styled-components";

export const Box = styled.div`
  padding: ${(props) => props.boxPadding || "var(--s1)"};
  border: 1px solid ${(props) => props.boxBorderColor || "var(--primary)"};
  color: ${(props) => props.boxColor || "var(--text-dark)"};
  background-color: ${(props) => props.boxBackground || "transparent"};
  border-radius: ${(props) => props.borderRadius || ""};
  max-width: ${(props) => props.maxWidth || null};
  & * {
    color: inherit;
  }

  & > div {
    height: 100%;
  }
  @media (prefers-color-scheme: dark) {
    --text-dark: #0f0f0f !important;
  }
`;
