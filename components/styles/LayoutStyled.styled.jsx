import styled from "styled-components"

export const LayoutStyled = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;

	& > *:nth-child(1) {
		flex-grow: 1;
	}

	& > *:last-child {
		flex-shrink: 0;
	}
`
