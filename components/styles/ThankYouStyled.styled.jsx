import styled from "styled-components"

export const ThankYouStyled = styled.div`
	padding-block-start: 65px;
	h1 {
		color: var(--text-light);
		margin-bottom: var(--s4);
	}

	h4 {
		margin-inline: auto;
	}

	.disabled {
		pointer-events: none;
	}

	.audit-card--outer {
		position: relative;
		color: #2780ba;
		background: #fff;
		border-radius: 20px;
		padding: 0.5rem;
		transition: all 0.4s ease;
		max-width: 20rem;
		cursor: pointer;
	}

	.audit-card--outer:hover {
		transform: scale(1.02) translateY(-5px);
	}

	.audit-card--outer > span {
		position: absolute;
		top: 0;
		right: 0;
		width: 150px;
		height: 150px;
		background-color: #fff;
		clip-path: polygon(100% 0, 0 0, 100% 100%);
		border-top-right-radius: 20px;
	}

	.audit-card--outer > span p {
		font-family: var(--poppinsbold);
		color: #2780ba;
		transform: translate(70px, 75px) rotateZ(45deg);
	}

	.audit-card--outer > span svg {
		transform: translate(85px, 35px);
		width: 32px;
		height: 32px;
		fill: #2780ba;
	}

	.audit-card--outer.selected {
		background: linear-gradient(
			180deg,
			hsla(204, 65%, 44%, 1) 0%,
			hsla(194, 83%, 69%, 1) 100%
		);
		color: var(--text-light);
	}

	.audit-card--outer.selected .audit-card--inner {
		border: 2px solid #fff;
	}

	.audit-card--inner {
		border: 2px solid #2780ba;
		border-radius: 20px;
		padding: 1rem 1.5rem;
	}
	.audit-card--inner div {
		aspect-ratio: 3 / 4;
	}

	.audit-card--inner span {
		font-size: var(--s3);
		font-family: var(--poppinsbold);
		margin-inline: auto;
	}
`
