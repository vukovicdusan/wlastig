import styled from "styled-components"

export const ContactStyled = styled.form`
	background-color: var(--background-light);
	border-radius: 5px;
	box-shadow: var(--box-shadow);
	padding: var(--s2) var(--s2);

	& h3,
	& p {
		color: var(--primary);

		.success {
			color: var(--secondary);
		}

		.error {
			color: indianred;
		}
	}
`
