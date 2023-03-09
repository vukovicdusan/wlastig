import styled from "styled-components"

export const CompetitionSectionStyled = styled.div`
	& p {
		font-family: var(--poppinsmedium);
		color: var(--primary);
	}
	.card {
		background-color: var(--background-light);
		padding: var(--s2);
		border-radius: 5px;
	}

	.competition,
	.vs,
	.us {
		display: flex;
		flex-direction: column;
		gap: var(--s0);
	}

	.vs {
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
	}

	.vs svg {
		width: 40px;
		height: 40px;
	}

	.vs {
		text-align: center;
	}
	.us {
		text-align: end;
		align-items: flex-end;
	}

	.competition p {
		color: indianred;
	}

	.card-container > * {
		width: 100%;
	}

	.text-light {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		justify-items: center;
	}
`
