import React from "react"
import styled from "styled-components"
import Image from "next/image"
import { Stack } from "./styles/Stack.styled"
import { Box } from "./styles/Box.styled"

function IconBox(props) {
	return (
		<IconBoxStyled>
			<Box boxColor={props.color ? props.color : "var(--text-light)"}>
				<Stack stackAlign={"center"}>
					<svg className="icon">
						<use
							xlinkHref={
								"./img/subservices/sprite.svg#" + props.img
							}
						></use>
					</svg>
					<h4>{props.title}</h4>
					<p>{props.content}</p>
				</Stack>
			</Box>
		</IconBoxStyled>
	)
}

export const IconBoxStyled = styled.div`
	max-width: 15rem;
	text-align: center;
	.icon {
		max-width: 70px;
		max-height: 70px;
	}
`

export default IconBox
