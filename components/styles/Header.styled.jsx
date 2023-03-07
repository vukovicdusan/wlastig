import styled from "styled-components"

export const HeaderStyled = styled.header`
	padding-block: 0.5rem;
	background-color: #020024;

	& a {
		color: var(--text-light);
	}

	.logo img {
		object-fit: contain;
	}

	.dropdown-link {
		position: relative;
	}

	.dropdown {
		max-height: 0;
		width: max-content;
		position: absolute;
		top: 45px;
		left: 0;
		z-index: 8;
		background-color: #020024;
		transition: all 0.2s ease-in-out;
		overflow: hidden;
		padding: var(--s1);
		opacity: 0;
		box-sizing: content-box;
	}

	.dropdown-link:hover ul {
		max-height: ${(props) => props.dropdownHeight || ""}px;
		opacity: 1;
	}

	.open {
		display: none;
	}

	.dropdown-link:hover .closed {
		display: none;
	}

	.dropdown-link:hover .open {
		display: block;
	}

	.dropdown-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.4rem;
	}
`
