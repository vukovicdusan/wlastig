import styled from "styled-components"

export const Wrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: ${(props) => props.wrapJustify || "space-between"};
	align-items: ${(props) => props.wrapAlign || "center"};
	gap: ${(props) =>
		props.wrapGap || "clamp(1.375rem, 1.2rem + 0.89vw, 2rem)"};
`
