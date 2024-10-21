import styled from "styled-components";

export const Shapedivider = styled.div`
  position: absolute;
  top: ${(props) => (props.position === "top" ? "-1px" : "revert")};
  left: 0;
  bottom: ${(props) => (props.position === "bottom" ? "-1px" : "revert")};
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(${(props) => props.rotation || "180"}deg);

  & svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: ${(props) => props.height || "150px"};
  }

  & svg path {
    fill: ${(props) => props.fill || "var(--primary)"};
  }

  @media (max-width: 600px) {
    & svg {
      height: 80px;
    }
  }
`;
