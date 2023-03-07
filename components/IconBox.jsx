import React from "react"
import Image from "next/image"
// import styles from "../styles/IconBox.module.css"
import { Stack } from "./styles/Stack.styled"
import { Box } from "./styles/Box.styled"
import { IconBoxStyled } from "./styles/IconBoxStyled.styled"

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

export default IconBox
