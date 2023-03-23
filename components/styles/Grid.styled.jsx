import styled from "styled-components"

export const Grid = styled.div`
	display: grid;
	grid-gap: ${(props) => props.gridGap || "1rem"};

	@supports (width: min(${(props) => props.gridColumn || "250px"}, 100%)) {
		grid-template-columns: repeat(
			${(props) => props.auto || "auto-fit"},
			minmax(min(${(props) => props.gridColumn || "250px"}, 100%), 1fr)
		);
	}
`
