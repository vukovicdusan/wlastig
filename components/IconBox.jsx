import React from "react";
import styled from "styled-components";
import { Stack } from "./styles/Stack.styled";
import { Box } from "./styles/Box.styled";
import { Switcher } from "./styles/Switcher.styled";

function IconBox(props) {
  let horizontal = props.flexDirection === "row";

  return (
    <IconBoxStyled horizontal={horizontal}>
      <Box
        boxColor={props.color ? props.color : "var(--text-light)"}
        boxBorderColor={props.boxBorderColor}
      >
        {horizontal ? (
          <Switcher
            smJustify={props.smJustify}
            flexBasis={"20rem"}
            elCount={"2"}
            gap={"var(--s2)"}
          >
            <svg className="icon">
              <use
                xlinkHref={"../img/subservices/sprite.svg#" + props.img}
              ></use>
            </svg>
            <Stack stackAlign={"flex-start"} stackJustify={"flex-start"}>
              <h4>{props.title}</h4>
              <p>{props.content}</p>
            </Stack>
          </Switcher>
        ) : (
          <Stack stackAlign={"center"} stackJustify={"center"}>
            <svg className="icon">
              <use
                xlinkHref={"../img/subservices/sprite.svg#" + props.img}
              ></use>
            </svg>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
          </Stack>
        )}
      </Box>
    </IconBoxStyled>
  );
}

export const IconBoxStyled = styled.div`
  max-width: ${(props) => (props.horizontal ? "" : "15rem")};
  text-align: ${(props) => (props.horizontal ? "start" : "center")};
  .icon {
    max-width: 70px;
    max-height: 70px;
  }
`;

export default IconBox;
