import styled from "styled-components";

export const BFLandingStyled = styled.div`
  background-color: var(--bf-gray);
  overflow: hidden;
  .hero-title span {
    color: var(--secondary);
  }
  .contact-form-wrapper,
  .contact-form-wrapper-gray {
    display: inline;
    background-color: var(--bf-black) !important;
    border-radius: 5px;
    padding: var(--s2) var(--s2);
    height: max-content;
    max-width: fit-content;
    transition: all 0.4s ease;
  }
  .relative {
    position: relative;
  }
  .black-friday-border {
    border: 1px solid var(--secondary);
  }

  .contact-form-wrapper-gray {
    background-color: var(--bf-gray);
  }
  .spacer {
    background: var(--bf-black);
    padding-block: 5rem;
  }
  .styled-list {
    list-style: disc;
  }

  ul li {
    padding-left: 35px;
    text-indent: -50px;
  }

  .bf-icon {
    position: absolute;
    top: 40%;
    left: 30%;
    opacity: 0.8;
    z-index: 0;
    animation: slowSpin 180s linear infinite;
  }
  .bf-icon:nth-child(2) {
    top: 0;
    left: 10%;
  }
  .bf-icon:nth-child(3) {
    top: -5%;
    left: 70%;
  }
  .bf-icon:nth-child(4) {
    top: 80%;
    left: 70%;
  }
  #why-us .bf-icon:nth-child(1) {
    top: 5%;
    left: 0;
  }
  #why-us .bf-icon:nth-child(2) {
    top: 15%;
    left: 80%;
  }
  .relative .bf-icon:nth-child(1) {
    top: 75%;
    left: 80%;
    z-index: 1;
  }
  .relative .bf-icon:nth-child(2) {
    top: 25%;
    left: 0;
    z-index: 1;
  }

  input,
  textarea {
    color: var(--text-light);
  }

  @-moz-keyframes slowSpin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes slowSpin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes slowSpin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @media (max-width: 825px) {
    h1,
    h1 + p {
      text-align: center;
    }
    .center-mobile {
      justify-content: center;
    }
    .bf-icon:nth-child(2) {
      top: 350px;
      left: 65%;
    }
  }
  @media (max-width: 430px) {
    .contact-form-wrapper {
      padding: var(--s-2);
    }
    .sm-justify-center {
      justify-content: center;
    }
  }
`;
