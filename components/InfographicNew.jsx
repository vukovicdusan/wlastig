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
    "a1 a2 a3 a4 a5"
    "b1 b2 b3 b4 b5"
    "c1 c2 c3 c4 c5";
  grid-template-columns: 150px 150px 150px 150px 150px;
  grid-template-rows: 150px 150px 150px;
  justify-content: center;
  counter-reset: liCount 0;

  li {
    position: relative;
    width: var(--item-width);
    height: var(--item-height);
    counter-increment: liCount 1;
  }

  /** TITLE */
  li .title {
    position: absolute;
    bottom: -50%;
    left: 25%;
    transform: translateY(-50%);
  }

  li:nth-child(even) .title {
    left: 0;
    bottom: 0;
    padding-bottom: 0.5rem;
  }

  li:last-of-type .title {
    left: revert;
    bottom: revert;
    top: 0;
    right: 0;
  }

  /** TITLE TOOLTIP */
  .tooltip {
    content: "";
    position: absolute;
    width: 30px;
    height: 1px;
    background-color: black;
    bottom: 0;
    left: 0;
  }

  li:nth-child(even) .tooltip {
    width: 1px;
    height: 30px;
    bottom: 0px;
    left: 0;
  }

  li:last-of-type .tooltip {
    width: 30px;
    height: 1px;
    bottom: revert;
    left: revert;
    top: 0;
    right: 0;
  }

  /* POINT */
  li::before {
    content: counter(liCount, decimal-leading-zero);
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: black;
    border-radius: 100px;
    bottom: -12px;
    left: -16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    z-index: 1;
    border: 4px solid var(--primary);
    padding: 1rem;
    --circle-pos-x: calc(
      var(--number-circle-size) / 2 + var(--column-gap) + var(--rocket-width) /
        2
    );
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

  li:nth-of-type(1) {
    grid-area: c1;
  }
  li:nth-of-type(2) {
    grid-area: b2;
  }
  li:nth-of-type(3) {
    grid-area: b3;
  }
  li:nth-of-type(4) {
    grid-area: a4;
  }
  li:nth-of-type(5) {
    grid-area: a5;
  }
  li:nth-of-type(6) {
    grid-area: a5;
  }
  li:last-of-type::before {
    bottom: revert;
    left: revert;
    top: -8px;
    right: -7px;
  }

  /** LINE */

  li::after {
    content: "";
    position: absolute;
    width: var(--diagonal);
    height: 5px;
    background-image: radial-gradient(
        ellipse at center top,
        var(--flame-inner-color) 20%,
        transparent 50%
      ),
      linear-gradient(
        to right,
        transparent 20%,
        var(--flame-outer-color) 40%,
        var(--flame-inner-color) 50%,
        var(--flame-outer-color) 60%,
        transparent 80%
      ),
      radial-gradient(
        ellipse at center top,
        var(--flame-outer-color) 35%,
        transparent 65%
      );
    background-repeat: no-repeat;
    background-position: top center;
    background-size: 100% calc(var(--rocket-height) * 0.4), 100%,
      100% calc(var(--rocket-height) * 0.4);
    border-radius: 100px;
    bottom: 0;
    left: 0;
    transform-origin: bottom left;
    transform: rotate(-45deg);
  }

  li:last-of-type::after {
    content: none;
  }

  li:nth-child(even)::after {
    width: var(--item-width);
    transform: revert;
  }

  & li:nth-child(8)::before {
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

  /* COUNTER POINTS */

  @media (max-width: 750px) {
  }
`;
