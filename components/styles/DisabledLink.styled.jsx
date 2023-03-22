import styled from "styled-components"

export const DisabledLink = styled.span`
	color: ${(props) => props.color || "var(--text-dark)"};
	text-decoration: none;
	transition: all 0.3s ease;
	position: relative;

	&::after {
		content: "";
		position: absolute;
		width: 0%;
		height: 3px;
		border-radius: 2px;
		background-color: var(--secondary);
		left: 0;
		bottom: -5px;
		transition: width 0.2s ease-in-out;
	}

	&:hover::after {
		width: 100%;
	}
`
