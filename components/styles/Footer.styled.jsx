import styled from "styled-components"

export const FooterStyled = styled.footer`
	padding-block-start: var(--s5);

	.letterIcon {
		width: var(--s5);
		height: var(--s5);
		position: relative;
		display: block;
		fill: var(--secondary);
	}

	.social-icon {
		width: 45px;
		height: 45px;
	}

	.clutch.social-icon {
		border-radius: 1000px;
		background-color: #000;
	}

	.footers-footer {
		background-color: var(--primary);
		color: var(--text-light);
		font-size: var(--s-2);
		text-align: center;
		margin-block-start: auto;
	}
`
