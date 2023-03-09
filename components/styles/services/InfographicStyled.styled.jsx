import styled from "styled-components"

export const InfographicStyled = styled.ol`
	--row-gap: 4rem;
	--rocket-aspect: calc(134.13 / 196.24); /* svg viewbox */
	--rocket-height: calc(var(--rocket-width) / var(--rocket-aspect));
	--flame-outer-color: #f16e39;
	--flame-inner-color: #fed103;
	--number-circle-size: 2.5rem;
	--number-circle-border-size: 0.25rem;
	--number-line-height: 0.125rem;
	--number-line-length: calc(var(--rocket-width) / 2 + var(--column-gap) / 2);
	--number-line-dot-size: 0.25rem;

	@media (max-width: 30rem) {
		--row-gap: 1rem;
		--column-gap: 1rem;
	}

	padding-bottom: 10rem;
	list-style: none;
	display: grid;
	column-gap: var(--column-gap);
	row-gap: var(--row-gap);
	counter-reset: liCount;
	font-family: system-ui, sans-serif;
	color: var(--primary);
	overflow: hidden;
	width: min(45rem, 100%);
	margin-inline: auto;
	margin-block-end: -4rem;
	--column-gap: 2rem;
	--rocket-width: 6rem;
	grid-template-columns: 1fr var(--rocket-width) 1fr;

	.enter-up-hidden {
		transform: translateY(500px);
		opacity: 0.2;
		filter: blur(5px);
	}

	.enter-up-show {
		transform: translateY(0);
		opacity: 1;
		filter: blur(0);
		transition: all 1s ease-in-out;
	}

	& .rocket {
		grid-column: 2 !important;
	}
	& > li {
		grid-column: 1/-1 !important;
		width: calc(50% - var(--rocket-width) / 2 - var(--column-gap));
	}
	& > li:nth-of-type(odd) {
		justify-self: end;
	}
	& > li:nth-of-type(even) {
		text-align: right;
	}
	& > li:nth-of-type(even):after {
		left: unset;
		right: calc(var(--circle-pos-x) * -1);
		--dot_pos_multiplier: -1;
	}
	& > li:nth-of-type(even)::before {
		right: unset;
		left: calc(100% + var(--column-gap) / 2);
	}

	&::after {
		content: "";
		grid-row: 1;
		grid-column: 1/-1;
	}
	& .rocket {
		grid-row: 1;
		grid-column: 1;
		position: relative;
		isolation: isolate;
	}
	& .rocket svg {
		width: var(--rocket-width);
		height: var(--rocket-height);
	}
	& .rocket::after {
		content: "";
		position: absolute;
		width: 50%;
		height: 200vh;
		top: calc(100% - var(--rocket-height) * 0.21);
		left: 25%;
		z-index: -1;
		background-image: radial-gradient(
				ellipse at center top,
				var(--flame-inner-color) 20%,
				transparent 50%
			),
			linear-gradient(
				to right,
				transparent 20%,
				var(--flame-outer-color) 40%,
				var(--flame-inner-color) 50%,
				var(--flame-outer-color) 60%,
				transparent 80%
			),
			radial-gradient(
				ellipse at center top,
				var(--flame-outer-color) 35%,
				transparent 65%
			);
		background-repeat: no-repeat;
		background-position: top center;
		background-size: 100% calc(var(--rocket-height) * 0.4), 100%,
			100% calc(var(--rocket-height) * 0.4);
	}
	& > li {
		counter-increment: liCount;
		grid-column: -2;
		position: relative;
	}

	.fade-in-hidden {
		opacity: 0;
		filter: blur(5px);
	}

	.fade-in-show {
		opacity: 1;
		filter: blur(0);
	}

	& li {
		transition: all 1s ease;
	}

	& li:nth-child(2) {
		transition-delay: 1.5s;
	}

	& li:nth-child(3) {
		transition-delay: 1.3s;
	}

	& li:nth-child(4) {
		transition-delay: 1.1s;
	}

	& li:nth-child(5) {
		transition-delay: 0.9s;
	}

	& li:nth-child(6) {
		transition-delay: 0.7s;
	}

	& li:nth-child(7) {
		transition-delay: 0.5s;
	}

	& > li::after {
		content: counter(liCount, decimal-leading-zero);
		width: var(--number-circle-size);
		aspect-ratio: 1;
		display: grid;
		place-items: center;
		border-radius: 50%;
		position: absolute;
		--circle-pos-x: calc(
			var(--number-circle-size) / 2 + var(--column-gap) +
				var(--rocket-width) / 2
		);
		left: calc(var(--circle-pos-x) * -1);
		top: calc(50% - var(--number-circle-size) / 2);
		background-color: var(--accent-color);
		font-weight: 600;
		--dot-size: calc(
			var(--number-circle-size) / -2 + var(--number-line-dot-size)
		);
		box-shadow: inset 0 0 0 var(--number-circle-border-size) currentcolor,
			inset -0.125rem 0.125rem 0.25rem var(--number-circle-border-size) rgb(0
						0 0 / 0.25),
			-0.125rem 0.125rem 0.25rem rgb(0 0 0 / 0.5),
			calc(var(--number-line-length) * var(--dot_pos_multiplier, 1)) 0 0
				var(--dot-size) currentcolor;
	}

	& li:nth-child(2)::after {
		background-color: #7251a2;
	}

	& li:nth-child(3)::after {
		background-color: #10bbc5;
	}

	& li:nth-child(4)::after {
		background-color: #acd038;
	}

	& li:nth-child(5)::after {
		background-color: #d6489a;
	}

	& li:nth-child(6)::after {
		background-color: #fcb410;
	}

	& li:nth-child(7)::after {
		background-color: #f4581b;
	}

	& > li::before {
		position: absolute;
		content: "";
		width: var(--number-line-length);
		height: var(--number-line-height);
		background-color: currentcolor;
		right: calc(100% + var(--column-gap) / 2);
		top: calc(50% - var(--number-line-height) / 2);
	}

	.pale {
		fill: #e6e6e6;
	}

	.orange {
		fill: var(--secondary);
	}

	.gray {
		fill: #cccccc;
	}

	.white {
		fill: #fff;
	}

	.tirquoise {
		fill: #96e0de;
	}
`
