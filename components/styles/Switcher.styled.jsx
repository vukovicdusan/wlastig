import styled from "styled-components"

export const Switcher = styled.div`
	margin-block-start: ${(props) => props.mt || null};
	margin-block-end: ${(props) => props.mb || null};
	display: flex;
	flex-wrap: wrap;
	gap: ${(props) => props.gap || "var(--s1)"};
	justify-content: ${(props) => props.switcherJustify || "flex-start"};
	align-items: ${(props) => props.switcherAlign || ""};
	flex-direction: ${(props) => props.reverse || "revert"};

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
