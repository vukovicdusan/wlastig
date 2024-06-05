import React from "react";
import { InlineWidget } from "react-calendly";
import styled from "styled-components";

const CalendlyPopup = () => {
  return (
    <CalendlyPopupStyled>
      <dialog>
        <span
          onClick={() => {
            modalCtx.modalCloseHandler(), setModalOpen(false);
          }}
          className="modal-close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#f8f8ff"
          >
            <path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" />
          </svg>
        </span>
        <InlineWidget url="https://calendly.com/wlastig/free-consultation" />
      </dialog>
    </CalendlyPopupStyled>
  );
};

export const CalendlyPopupStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  z-index: 10;
  overflow-y: scroll;
  opacity: 0;
  /* animation: ${(props) => (props.show ? "fadeIn .4s forwards" : "")}; */
  animation: fadeIn 0.4s forwards;
  transition: all 0.4s ease-in;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  dialog {
    position: relative;
    display: block;
    background-color: var(--background-light);
    color: revert;
    border: none;
    border-radius: 5px;
    margin-block: auto;
    /* animation: ${(props) => (props.show ? "slideDown .8s forwards" : "")}; */
    animation: slideDown 0.8s forwards;
    overflow-y: auto;
  }

  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(-500px);
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  .modal-close {
    position: absolute;
    top: 5%;
    right: 5%;
    z-index: 10;
    cursor: pointer;
  }

  .modal-close svg {
    fill: var(--secondary);
    transition: fill 0.2s ease;
  }

  .modal-close svg:hover {
    fill: var(--primary);
  }
  .calendly-inline-widget {
    min-width: 320px;
    height: 700px;
  }
`;

export default CalendlyPopup;