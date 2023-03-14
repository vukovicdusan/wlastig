import styled from "styled-components"

export const AccordionItemStyled = styled.div`
	max-width: 60ch;
	color: ${(props) => props.color || ""};
	.accordion-title {
		display: flex;
		justify-content: space-between;
		cursor: pointer;
		text-transform: capitalize;
	}

	.accordion-body {
		max-height: 0;
		overflow: hidden;
		transition: all 0.3s ease-in-out;
	}

	& svg {
		transition: transform 0.2s ease-in-out;
		fill: ${(props) => props.color || "var(--text-dark)"};
	}

	.rotate {
		transform: rotateZ(180deg);
	}
`
