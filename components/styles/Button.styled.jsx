import styled from "styled-components"

export const Button = styled.button`
	display: inline-block;
	padding: var(--s-1, 0.8rem) var(--s0, 2.5rem);
	border: 1px solid transparent;
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

	&:hover {
		border: 1px solid var(--text-light);
		background-color: rgba(242, 84, 91, 0.8);
	}

	@media (max-width: 900px) {
		padding: var(--s-1);
		font-size: var(--s-1);
	}
`
