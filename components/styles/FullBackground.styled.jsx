import styled from "styled-components";

export const FullBackground = styled.div`
  position: relative;
  background: ${(props) => props.background || ""};
`;
