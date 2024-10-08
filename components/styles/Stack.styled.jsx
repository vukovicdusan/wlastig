import styled from "styled-components";

export const Stack = styled.div`
  margin-block-start: ${(props) => props.mt || null};
  margin-block-end: ${(props) => props.mb || null};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.stackJustify ? props.stackJustify : "flex-start"};
  align-items: ${(props) =>
    props.stackAlign ? props.stackAlign : "flex-start"};

  & > * {
    margin-block: 0;
  }

  & > * + * {
    margin-block-start: ${(props) =>
      props.stackSpace ? props.stackSpace : "var(--s0)"};
  }

  & > :nth-child(${(props) => props.exceptionChild || null}) {
    margin-block-start: ${(props) => props.exceptionMr || "auto"};
  }
`;
