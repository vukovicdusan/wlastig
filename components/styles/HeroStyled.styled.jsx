import styled from "styled-components"

export const HeroStyled = styled.div`
	background-image: url("./img/hero.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	color: var(--text-light);
	position: relative;
	padding-block-end: 10rem;

	@media (max-width: 850px) {
		padding-block-end: 5rem;
	}

	.hero-img {
		object-fit: contain;
	}

	.hero-title span {
		float: right;
		line-height: 3;
		font-size: var(--s1);
	}
`
