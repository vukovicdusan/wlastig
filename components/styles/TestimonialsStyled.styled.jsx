import styled from "styled-components"

export const TestimonialsStyled = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	inline-size: 100%;
	overflow: hidden;
	scrollbar-color: #fff #000;
	padding-block: var(--s4);

	.reelInside {
		background-color: transparent;
		display: flex;
		transition: all 0.5s ease-in-out;
		position: relative;
		margin-left: calc(50% - 50vw);
	}

	.reelItem {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		inline-size: 100vw;
		gap: var(--s1);
	}

	.reelItemBody {
		max-width: 650px;
		position: relative;
		padding: var(--s2);
		border-radius: 20px;
		color: var(--text-dark);
	}

	.testimonialImg {
		object-fit: contain;
		margin-block: auto;
	}

	& blockquote {
		border-inline-start: 1px solid var(--primary-shade);
		padding-inline-start: var(--s0);
	}

	& blockquote p {
		min-inline-size: 80%;
	}

	.reelItemFooter {
		display: flex;
		gap: var(--s1);
	}

	.frame {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-basis: 100%;
		border: 4px solid rgba(8, 61, 119, 0.5);
		border-radius: 5px;
		background-color: rgba(0, 0, 0, 0.05);
		background-size: cover;
		padding: var(--s0) var(--s1);
		color: var(--primary);
		font-family: var(--poppinsbold);
		text-transform: uppercase;
		text-align: center;
		background-repeat: no-repeat;
		background-position: center;
	}

	.reelItemFooter > *:nth-child(2) {
		background-image: url("./img/brda-chart.png");
	}
	.reelItemFooter > *:nth-child(1) {
		background-image: url("./img/stubovi.png");
	}
	.reelItemFooter > *:nth-child(3) {
		background-image: url("./img/doline-chart.png");
	}

	.quoteEnd img {
		margin-inline-start: auto;
	}

	.reelButtons {
		display: flex;
		justify-content: space-between;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 50%;
		transform: translateX(-50%);
		width: 70%;
		z-index: 9;
	}

	.reelButton {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		padding: none;
		border: none;
		border-radius: 50px;
		background: none;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	@media (max-width: 900px) {
		.reelButtons {
			width: 100%;
		}
	}

	@media (max-width: 550px) {
		.reelButtons {
			width: 30%;
			top: revert;
			bottom: 0px;
		}
		.reelItemFooter {
			gap: var(--s-5);
		}

		.frame {
			font-size: var(--s-2);
			padding: var(--s-5) var(--s-2);
		}

		& blockquote {
			border-inline-start: none;
		}
	}
`
