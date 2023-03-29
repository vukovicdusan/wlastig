import styled from "styled-components"

export const SvgImageStyled = styled.div`
	svg {
		width: ${(props) => props.width}px;
		height: ${(props) => props.height}px;
		@media (max-width: 450px) {
			width: calc(${(props) => props.width}px - 40%);
			height: calc(${(props) => props.height}px - 40%);
		}
	}
`
