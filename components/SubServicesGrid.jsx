import React from "react"
import IconBox from "./IconBox"
import { Grid } from "./styles/Grid.styled"

const SubServicesGrid = (props) => {
	return (
		<Grid>
			{props.subsArr.map((sub, index) => (
				<IconBox
					key={index}
					width={100}
					height={100}
					img={sub.img}
					title={sub.title}
					content={sub.content}
					color={"var(--text-light)"}
				></IconBox>
			))}
		</Grid>
	)
}

export default SubServicesGrid
