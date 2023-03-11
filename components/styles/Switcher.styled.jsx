import styled from "styled-components"

export const Switcher = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: var(--${(props) => props.gap || "s1"});
	justify-content: ${(props) => props.switcherJustify || "flex-start"};
	flex-direction: ${(props) => (props.reverse ? "row-reverse" : "revert")};
	& > * {
		flex-grow: 1;
		flex-basis: calc(
			(${(props) => props.flexBasis || "50"}rem - 100%) * 999
		);
	}

	& > :nth-last-child(n + ${(props) => props.elCount + 1 || 3}),
	& > :nth-last-child(n + ${(props) => props.elCount + 1 || 3}) ~ * {
		flex-basis: 100%;
	}
`
