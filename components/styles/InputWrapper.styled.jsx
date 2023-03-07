import styled from "styled-components"

export const InputWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	inline-size: 100%;

	& input {
		max-inline-size: 100%;
	}

	& label {
		position: absolute;
		top: -12px;
		right: 15px;
		background-color: var(--background-light);
		padding-inline: 0.5rem;
		transition: all 0.2s ease;
	}

	& input:focus + label,
	textarea:focus + label {
		font-size: 0.8rem;
		top: -6px;
	}
`
