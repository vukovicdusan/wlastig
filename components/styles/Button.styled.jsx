import styled from "styled-components"

export const Button = styled.button`
	display: inline-block;
	position: relative;
	padding: var(--s-1, 0.8rem) var(--s0, 2.5rem);
	border: none;
	border-radius: 5px;
	color: var(--text-light);
	background-color: ${(props) =>
		props.reverse ? "var(--primary)" : "var(--secondary)"};
	cursor: pointer;
	line-height: 1;
	text-align: center;
	text-decoration: none !important;
	text-transform: uppercase;
	font-weight: bold;
	transition: all 0.2s ease;
	overflow: hidden;

	&::before,
	&::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 1px;
		top: 0;
		left: 0;
		transform: translateX(-110%);
		background-color: ${(props) =>
			props.reverse ? "var(--secondary)" : "var(--primary)"};
		box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
		border-radius: 5px;
		transition: transform 0.2s ease-in-out;
	}

	&:after {
		transform: translateX(110%);
		top: revert;
		bottom: 0;
	}

	&:hover::after {
		transform: translateX(-110%);
	}

	&:hover::before {
		transform: translateX(110%);
	}

	@media (max-width: 900px) {
		padding: var(--s-1);
		font-size: var(--s-1);
	}
`
