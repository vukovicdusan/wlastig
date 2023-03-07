import styled from "styled-components"

export const ServicesHeroStyled = styled.div`
	color: var(--text-light);

	.hero-background {
		display: flex;
		align-items: center;
		justify-content: center;
		background-image: url(${(props) => props.backgroundImg || ""});
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 15%;
	}

	.hero-content {
		text-align: end;
		max-width: 50%;
		margin-inline-start: auto;
	}

	.service-info {
		color: var(--text-dark);
	}

	@media (max-width: 850px) {
		.desktop {
			display: none;
		}

		h1 {
			font-size: var(--s2);
		}

		.mobile button {
			display: block;
			margin-inline: auto;
		}

		.hero-background {
			height: 250px;
			background-position: 30%;
		}
	}

	@media (max-width: 450px) {
		.hero-background {
			background-position: 40%;
			height: 150px;
		}

		h1 {
			font-size: var(--s0);
		}
	}

	@media (min-width: 850px) {
		.mobile {
			display: none;
		}
	}
`
