import * as React from "react"

const SvgComponent = (props) => (
	<svg
		width={props.svgWidth || 24}
		height={props.svgHeight || 24}
		xmlns="http://www.w3.org/2000/svg"
		fillRule="evenodd"
		clipRule="evenodd"
		fill={props.svgFill || "#083d77"}
		// {...props}
	>
		<path d="M4 .755 18.374 12 4 23.219l.619.781L20 12 4.609 0 4 .755z" />
	</svg>
)

export default SvgComponent
