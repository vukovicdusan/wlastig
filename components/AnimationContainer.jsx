import React from "react";
import styled from "styled-components";

const AnimationContainer = (props) => {
  let animationRef = React.useRef();
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    let config = {
      threshold: 0.4,
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
    <AnimationContainerStyled
      direction={props.direction}
      distance={props.distance}
      delay={props.delay}
      ref={animationRef}
      wobble={props.wobble}
    >
      {props.wobble === true ? (
        <div className={show ? "wobble" : ""}>{props.children}</div>
      ) : (
        <div className={show ? "show" : "hidden"}>{props.children}</div>
      )}
    </AnimationContainerStyled>
  );
};

let direction = (props) => props.direction || "translateY";
let distance = (props) => props.distance || "500px";

export const AnimationContainerStyled = styled.div`
  overflow: ${(props) => (props.wobble ? "visible" : "hidden")};

  .hidden {
    opacity: 0;
    transition: all 1s ease;
    transform: ${direction}(${distance});
  }

  .show {
    opacity: 1;
    transform: ${direction}(0);
    transition: all 1s ease;
    transition-delay: ${(props) => (props.delay ? "0." + props.delay : "0")}s;
  }

  .wobble {
    animation: wobbleAnimation 1s ease;
    animation-delay: 0.5s;
    transition-delay: ${(props) => (props.delay ? "0." + props.delay : "0")}s;
  }

  @keyframes wobbleAnimation {
    0%,
    100% {
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }

    15% {
      -webkit-transform: translateX(-5px) rotate(-10deg);
      transform: translateX(-5px) rotate(-10deg);
    }

    30% {
      -webkit-transform: translateX(calc(5px / 2)) rotate(10deg);
      transform: translateX(calc(5px / 2)) rotate(10deg);
    }

    45% {
      -webkit-transform: translateX(calc(-5px / 2)) rotate(calc(-10deg / 1.8));
      transform: translateX(calc(-5px / 2)) rotate(calc(-10deg / 1.8));
    }

    60% {
      -webkit-transform: translateX(calc(5px / 3.3)) rotate(calc(10deg / 3));
      transform: translateX(calc(5px / 3.3)) rotate(calc(10deg / 3));
    }

    75% {
      -webkit-transform: translateX(calc(-5px / 5.5)) rotate(calc(-10deg / 5));
      transform: translateX(calc(-5px / 5.5)) rotate(calc(-10deg / 5));
    }
  }
`;

export default AnimationContainer;
