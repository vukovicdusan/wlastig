import React from "react";
import IconBox from "./IconBox";
import { Wrap } from "./styles/Wrap.styled";
import { Region } from "./styles/Region.styled";
import { Wrapper } from "./styles/Wrapper.styled";
import { FullBackground } from "./styles/FullBackground.styled";
import { Shapedivider } from "./styles/Shapedivider.styled";
import { Center } from "./styles/Center.styled";
import { UnderlineStyled } from "./styles/UnderlineStyled.styled";
import { Button } from "./styles/Button.styled";
import AnimationContainer from "./AnimationContainer";

const SubServicesGrid = (props) => {
  const [subsCount, setSubsCount] = React.useState(4);

  const seeMore = () => {
    props.subsArr.length > subsCount
      ? setSubsCount((prevState) => prevState + 4)
      : setSubsCount(props.subsArr.length);
  };

  return (
    <FullBackground background={"var(--primary)"}>
      <Shapedivider
        position={"top"}
        fill={"var(--background-light)"}
        height={"100px"}
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </Shapedivider>
      <Region pt={"7rem"}>
        <h2 className="visually-hidden">Subservices</h2>
        <Wrapper>
          <Wrap
            mt={"var(--s4)"}
            wrapJustify={"center"}
            wrapAlign={"flex-start"}
          >
            {props.subsArr.slice(0, subsCount).map((sub, index) => (
              <AnimationContainer delay={index} key={index}>
                <IconBox
                  width={100}
                  height={100}
                  img={sub.img}
                  title={sub.title}
                  content={sub.content}
                  color={"var(--text-light)"}
                ></IconBox>
              </AnimationContainer>
            ))}
          </Wrap>
          {subsCount < props.subsArr.length ? (
            <Center mt={"var(--s4)"}>
              <Button id="see_more_services" onClick={seeMore}>
                See More <span></span>
                <span></span>
                <span></span>
                <span></span>
              </Button>
            </Center>
          ) : null}
        </Wrapper>
      </Region>
    </FullBackground>
  );
};

export default SubServicesGrid;
