import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Wrapper } from "./styles/Wrapper.styled";
import { Region } from "./styles/Region.styled";

const InfographicNew = (props) => {
  let animationRef = useRef();
  const [show, setShow] = useState(false);
  let processesNum = props.processArr.length + 1;

  useEffect(() => {
    let config = {
      threshold: props.treshold || 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      });
    }, config);
    observer.observe(animationRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Region>
      <Wrapper>
        <InfographicNewStyled
          fireHeight={props.fireHeight}
          processesNum={processesNum}
          ref={animationRef}
          textColor={props.textColor || ""}
        >
          {/* <div
          className={show ? "enter-up-show rocket" : "enter-up-hidden rocket"}
          >
          <svg className="icon">
          <use xlinkHref={"./img/subservices/sprite.svg#rocket"}></use>
          </svg>
          </div> */}
          {[...props.processArr].reverse().map((process, index) => (
            <li
              className={show ? "fade-in-show" : "fade-in-hidden"}
              key={index}
            >
              <div className="title">{process.title}</div>
              <p>{process.body ? process.body : ""}</p>
              <span className="tooltip"></span>
            </li>
          ))}
        </InfographicNewStyled>
      </Wrapper>
    </Region>
  );
};

export default InfographicNew;

export const InfographicNewStyled = styled.ol`
  --item-height: 150px;
  --item-width: 150px;
  --diagonal: calc(var(--item-width) * 1.414);
  --rocket-height: calc(var(--rocket-width) / var(--rocket-aspect));
  --flame-outer-color: #f16e39;
  --flame-inner-color: #fed103;
  --rocket-aspect: calc(134.13 / 196.24);
  --rocket-width: 6rem;
  --number-circle-size: 2.5rem;
  --number-circle-border-size: 0.25rem;
  --number-line-height: 0.125rem;
  --number-line-length: calc(var(--rocket-width) / 2 + var(--column-gap) / 2);
  --number-line-dot-size: 0.25rem;

  display: grid;
  grid-template-areas:
    "a1 a2 a3 a4"
    "b1 b2 b3 b4"
    "c1 c2 c3 c4"
    "d1 d2 d3 d4"
    "e1 e2 e3 e4"
    "f1 f2 f3 f4";
  grid-template-columns: repeat(4, var(--item-width));
  grid-template-rows: repeat(6, var(--item-width));
  justify-content: center;
  counter-reset: liCount 0;

  li {
    position: relative;
    width: var(--item-width);
    height: var(--item-height);
    counter-increment: liCount 1;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    /* text-align: center; */
    z-index: 5;
  }

  li:nth-of-type(even) {
    text-align: end;
  }

  li:nth-of-type(1) {
    grid-area: f1;
  }
  li:nth-of-type(2) {
    grid-area: e4;
  }
  li:nth-of-type(3) {
    grid-area: d1;
  }
  li:nth-of-type(4) {
    grid-area: c4;
  }
  li:nth-of-type(5) {
    grid-area: b1;
  }
  li:nth-of-type(6) {
    grid-area: a4;
  }

  /** TITLE */

  .title {
    font-family: var(--poppinsbold);
    /* word-break: break-word; */
    font-size: 17px;
  }

  .title + p {
    font-size: 14px;
  }

  li .title {
    color: var(--text-dark);
    position: relative;
  }

  /* POINT */
  li::before {
    content: counter(liCount, decimal-leading-zero);
    /* content: ""; */
    position: absolute;
    padding: 0.5rem;
    border: 5px solid var(--text-dark);
    border-radius: 100px;
    aspect-ratio: 1;
    width: 60px;
    height: 60px;
    bottom: -20px;
    left: -20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: var(--poppinsbold);
    z-index: 1;
    padding: 1rem;
    --dot-size: calc(
      var(--number-circle-size) / -2 + var(--number-line-dot-size)
    );
    box-shadow: inset 0 0 0 var(--number-circle-border-size) currentcolor,
      inset -0.125rem 0.125rem 0.25rem var(--number-circle-border-size) rgb(0 0
            0 / 0.25),
      -0.125rem 0.125rem 0.25rem rgb(0 0 0 / 0.5),
      calc(var(--number-line-length) * var(--dot_pos_multiplier, 1)) 0 0
        var(--dot-size) currentcolor;
  }

  li:nth-of-type(even)::before {
    right: -20px;
    left: revert;
  }

  li:last-of-type::before {
    content: "";
    left: revert;
    right: -20px;
    border: none;
    border-radius: 0;
    background-color: transparent !important;
    transform: rotate(31deg);
  }

  /** LINE */
  li::after {
    content: "";
    position: absolute;
    width: calc(var(--diagonal) * 2.9);
    height: 10px;
    opacity: 0.8;
    border-top: 8px dashed var(--text-dark);
    bottom: 0;
    left: 5px;
    transform-origin: bottom left;
    transform: rotate(-15deg);
  }

  li:last-of-type::after {
    content: none;
  }

  li:nth-child(even)::after {
    transform: rotate(15deg);
    bottom: revert;
    top: -10px;
    left: revert;
    right: -25px;
  }

  & li:nth-child(1)::before {
    background-color: #e52b50;
  }

  & li:nth-child(2)::before {
    background-color: #7251a2;
  }

  & li:nth-child(3)::before {
    background-color: #10bbc5;
  }

  & li:nth-child(4)::before {
    background-color: #acd038;
  }

  & li:nth-child(5)::before {
    background-color: #d6489a;
  }

  & li:nth-child(6)::before {
    background-color: #fcb410;
  }

  & li:nth-child(7)::before {
    background-color: #f4581b;
  }

  li.fade-in-hidden:last-of-type::before {
    background-image: url("./img/startup(1).png");
    background-position: center;
    background-size: contain;
    transform: translate(-575px, 150px);
    transition: transform 0.3s ease;
  }

  li.fade-in-show:last-of-type::before {
    transform: translate(0px, 0px) !important;
  }
  /* COUNTER POINTS */

  @media (max-width: 750px) {
  }
`;
