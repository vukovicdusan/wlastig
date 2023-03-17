import styled from "styled-components"

export const ContactStyled = styled.form`
	background-color: var(--background-light);
	border-radius: 5px;
	box-shadow: var(--box-shadow);
	padding: var(--s2) var(--s2);
	height: max-content;
	max-width: ${(props) => (props.popup ? "max-content" : "auto")};

	& img {
		object-fit: contain;
	}
	& h3,
	& p {
		color: var(--primary);
	}

	.full-width {
		width: 100%;
	}

	.success {
		color: #4bb543;
	}

	.error {
		color: indianred;
	}

	.button-loader {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 3rem;
	}
`
