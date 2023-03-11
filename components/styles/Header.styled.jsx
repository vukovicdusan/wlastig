import styled from "styled-components"

export const HeaderStyled = styled.header`
	padding-block: 0.5rem;
	background-color: #020024;
	position: fixed;
	width: 100%;
	z-index: 10;

	& a,
	& .disabled-link {
		color: var(--text-light);
	}

	.logo img {
		object-fit: contain;
	}

	.dropdown-link {
		position: relative;
		cursor: pointer;
	}

	.dropdown {
		max-height: 0;
		width: max-content;
		position: absolute;
		top: 24px;
		left: 0;
		z-index: 8;
		background-color: #020024;
		transition: all 0.2s ease-in-out;
		padding: var(--s1);
		opacity: 0;
		visibility: hidden;
		box-sizing: content-box;
	}

	.dropdown-link:hover .dropdown {
		max-height: ${(props) => props.dropdownHeight}px;
		opacity: 1;
		visibility: visible;
	}

	.icon-closed {
		display: block;
	}

	.icon-open {
		display: none;
	}

	.dropdown-link:hover .icon-closed {
		display: none;
	}

	.dropdown-link:hover .icon-open {
		display: block;
	}

	.dropdown.closed {
		max-height: 0;
	}

	.dropdown.open {
		max-height: ${(props) => props.dropdownHeight || ""}px;
		opacity: 1;
	}

	.show {
		display: block;
	}

	.hidden {
		display: none;
	}

	.dropdown-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.4rem;
	}
`
