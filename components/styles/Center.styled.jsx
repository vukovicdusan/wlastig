import styled from "styled-components"

export const Center = styled.div`
	box-sizing: content-box;
	margin-inline: auto;
	margin-block: auto;
	max-inline-size: var(--measure);
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-block-start: ${(props) => props.mt || ""};
	margin-block-end: ${(props) => props.mb || ""};
`
