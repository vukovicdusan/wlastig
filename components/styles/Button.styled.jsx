import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  color: var(--text-light);
  background-color: ${(props) =>
    props.reverse ? "var(--primary)" : "var(--secondary)"};
  border: none;
  border-radius: 5px;
  padding: var(--s-1, 0.8rem) var(--s0, 2.5rem);
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  text-decoration: none !important;
  line-height: 1;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.2s ease;
  margin-block-start: ${(props) => props.mt || null};
  margin-block-end: ${(props) => props.mb || null};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  span {
    position: absolute;
    width: 25%;
    height: 100%;
    background-color: var(--secondary-soft);
    transform: translateY(150%);
    border-radius: 50%;
    left: calc((var(--n) - 1) * 45%);
    transition: 0.5s;
    transition-delay: calc((var(--n) - 1) * 0.1s);
    z-index: -1;
  }

  &:hover {
    color: var(--background-light);
  }

  &:hover span {
    transform: translateY(0) scale(3.7);
  }

  & span:nth-child(1) {
    --n: 1;
  }

  & span:nth-child(2) {
    --n: 2;
  }

  & span:nth-child(3) {
    --n: 3;
  }

  & span:nth-child(4) {
    --n: 4;
  }

  @media (max-width: 900px) {
    padding: var(--s-1);
    font-size: var(--s-1);
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      color: inherit;
    }
  }
`;
