import * as React from "react"
import { reelImg1 } from "../public/img/reelImg1"
import { reelImg2 } from "../public/img/reelImg2"
import { reelImg3 } from "../public/img/reelImg3"

const CheckSvg = (props) => {
	const reel1 = reelImg1

	const reel2 = reelImg2

	const reel3 = reelImg3

	let content

	if (props.content === "reel1") {
		content = reel1
	} else if (props.content === "reel2") {
		content = reel2
	} else content = reel3

	return (
		<svg
			width={props.svgWidth || 24}
			height={props.svgHeight || 24}
			xmlns="http://www.w3.org/2000/svg"
			fillRule="evenodd"
			clipRule="evenodd"
			fill={props.svgFill || "#083d77"}
			viewBox="0 0 400 300"
			// {...props}
		>
			{content}
		</svg>
	)
}
export default CheckSvg
