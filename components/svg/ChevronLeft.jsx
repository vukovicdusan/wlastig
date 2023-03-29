import * as React from "react"

const ChevronLeft = (props) => (
	<svg
		width={props.svgWidth || 24}
		height={props.svgHeight || 24}
		xmlns="http://www.w3.org/2000/svg"
		fillRule="evenodd"
		clipRule="evenodd"
		fill={props.svgFill || "#083d77"}
		// {...props}
	>
		<path d="M20 .755 5.626 12 20 23.219l-.619.781L4 12 19.391 0 20 .755z" />
	</svg>
)

export default ChevronLeft
