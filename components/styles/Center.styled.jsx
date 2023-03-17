import styled from "styled-components"

export const Center = styled.div`
	margin-block-start: ${(props) => props.mt || null};
	margin-block-end: ${(props) => props.mb || null};
	box-sizing: content-box;
	margin-inline: auto;
	margin-block: auto;
	max-inline-size: var(--measure);
	display: flex;
	flex-direction: column;
	align-items: center;
`
