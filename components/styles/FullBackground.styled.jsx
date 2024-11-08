import styled from "styled-components";

export const FullBackground = styled.div`
  position: relative;
  background: ${(props) => props.background || ""};
  display: ${(props) => (props.flex ? "flex" : "")};
  justify-content: ${(props) => (props.justify ? props.justify : "")};
  align-items: ${(props) => (props.align ? props.align : "")};
`;
