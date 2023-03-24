import React from "react"
import styled from "styled-components"
import Image from "next/image"
import { Stack } from "./styles/Stack.styled"
import { Box } from "./styles/Box.styled"

function IconBox(props) {
	return (
		<IconBoxStyled>
			<Box
				boxColor={props.color ? props.color : "var(--text-light)"}
				// boxColor={"var(--text-light)"}
			>
				<Stack stackAlign={"center"}>
					<Image
						src={props.img}
						width={props.width}
						height={props.height}
						alt="icon"
					></Image>
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
`

export default IconBox
