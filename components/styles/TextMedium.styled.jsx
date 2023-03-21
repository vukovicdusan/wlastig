import styled from "styled-components"

export const TextMedium = styled.p`
	color: ${(props) => props.color || "var(--text-dark)"};
	font-family: ${(props) => props.family || "var(--poppinsregular)"};
	font-size: var(--s1);

	@media (max-width: 450px) {
		font-size: var(--s0);
	}
`
