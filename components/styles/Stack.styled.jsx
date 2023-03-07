import styled from "styled-components"

export const Stack = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: ${(props) =>
		props.stackJustify ? props.stackJustify : "flex-start"};
	align-items: ${(props) =>
		props.stackAlign ? props.stackAlign : "flex-start"};

	& > * {
		margin-block: 0;
	}

	& > * + * {
		--stack-space: var(--s0);
		margin-block-start: var(
			--${(props) => (props.stackSpace ? props.stackSpace : "s0")}
		);
	}
`
