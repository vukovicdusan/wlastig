import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  inline-size: 100%;

  & input {
    max-inline-size: 100%;
    background-color: transparent !important;
    color: ${(props) => props.inputTextColor || "var(--text-dark)"};
  }

  & label {
    position: absolute;
    top: -12px;
    right: 15px;
    background-color: ${(props) =>
      props.labelBgColor || "var(--background-light)"};
    padding-inline: 0.5rem;
    transition: all 0.2s ease;
    color: ${(props) => props.labelTextColor || "var(--theme-primary)"};
  }

  & input:focus + label,
  textarea:focus + label {
    font-size: 0.8rem;
    top: -6px;
  }
`;
