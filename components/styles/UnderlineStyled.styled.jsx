import styled from "styled-components"

export const UnderlineStyled = styled.div`
	display: flex;
	justify-content: ${(props) => props.underlinePosition || "flex-start"};
	position: relative;

	&::after {
		content: "";
		display: block;
		width: 8rem;
		height: 3px;
		background-color: ${(props) =>
			props.underlineColor || "var(--secondary)"};
		margin-block: ${(props) => props.underlineMargin || "var(--s1)"};
	}
`
