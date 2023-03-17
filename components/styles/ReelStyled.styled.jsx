import styled from "styled-components"

export const ReelStyled = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	block-size: 800px;
	inline-size: 100%;
	overflow: hidden;
	scrollbar-color: #fff #000;

	.reel-inside {
		background-color: var(--primary-shade);
		display: flex;
		inline-size: 300vw;
		transition: all 0.5s ease-in-out;
		position: relative;
	}

	.reel-item {
		display: flex;
		justify-content: center;
		block-size: 750px;
		inline-size: 100vw;
	}

	.reel-item--content {
		display: flex;
		flex-direction: column;
		inline-size: 65%;
		margin-block-start: 6rem;
		align-items: center;
		font-size: var(--s1);
		font-family: var(--poppinsregular);
	}

	.reel-item--content span {
		font-family: var(--poppinsbold);
	}

	.reel-item--content button {
		align-self: flex-end;
	}

	.reel-links {
		display: flex;
		justify-content: space-between;
		gap: calc(var(--s5) + 4rem);
		margin-inline: auto;
		z-index: 9;
		padding-block: 2rem;
	}

	.reel-button {
		display: inline-block;
		padding: none;
		border: none;
		border-bottom: 2px solid transparent;
		background-color: none;
		background: none;
		color: var(--primary);
		cursor: pointer;
		text-align: center;
		text-decoration: none !important;
		text-transform: uppercase;
		font-family: var(--poppinsbold);
		transition: all 0.2s ease;
	}

	.reel-button:focus {
		outline: none;
		border-bottom: 2px solid var(--primary);
	}

	.reel-link-icon {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		flex: 200px 1 1;
		align-items: center;
	}

	.reel-item--text {
		max-width: 60ch;
	}

	@media (max-width: 800px) {
		block-size: 750px;

		.reel-item {
			block-size: 700px;
		}

		.reel-item--content {
			font-size: var(--s0);
			inline-size: 90%;
			display: flex;
			padding-block-start: 0;
			margin-block-start: 1rem;
		}

		.reel-item .reel-item--content svg {
			height: 300px;
		}

		.reel-links {
			gap: var(--s2);
		}

		.reel-button {
			font-size: var(--s-1);
		}

		.reel-item--text {
			max-width: 40ch;
		}
	}
`
