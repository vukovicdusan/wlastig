import React, { useEffect, useRef, useState } from "react"
import AnimationContainer from "./AnimationContainer"
import { Center } from "./styles/Center.styled"
import { FullBackground } from "./styles/FullBackground.styled"
import { Region } from "./styles/Region.styled"
import styled from "styled-components"
import { Shapedivider } from "./styles/Shapedivider.styled"
import { UnderlineStyled } from "./styles/UnderlineStyled.styled"
import { Wrapper } from "./styles/Wrapper.styled"

const Infographic = (props) => {
	let animationRef = useRef()
	const [show, setShow] = useState(false)

	useEffect(() => {
		let config = {
			threshold: 0.5,
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setShow(true)
				}
			})
		}, config)
		observer.observe(animationRef.current)
		return () => {
			observer.disconnect()
		}
	}, [])

	return (
		<FullBackground>
			<Shapedivider position={"top"} rotation={"0"}>
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
						opacity=".25"
					></path>
					<path
						d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
						opacity=".5"
					></path>
					<path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
				</svg>
			</Shapedivider>
			<Region>
				<Wrapper>
					<AnimationContainer>
						<Center>
							<h2>Our Proccess</h2>
							<UnderlineStyled></UnderlineStyled>
						</Center>
					</AnimationContainer>
					<InfographicStyled ref={animationRef}>
						<div
							className={
								show
									? "enter-up-show rocket"
									: "enter-up-hidden rocket"
							}
						>
							{/* <svg
								id="Flat"
								height="512"
								viewBox="0 0 128 128"
								width="512"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="m54.794 94.032h18.32v6.941h-18.32z"
									fill="#9297ab"
								/>
								<path
									d="m98.178 72.374-15.552-15.474-6.148 34.967 14.853 7.1a1.663 1.663 0 0 0 2.32-1.1l5.5-22.007a3.657 3.657 0 0 0 -.973-3.486z"
									fill="#b0b3c1"
								/>
								<path
									d="m29.822 72.374a3.657 3.657 0 0 0 -.974 3.485l5.5 22.007a1.663 1.663 0 0 0 2.32 1.1l15.04-7.01-6.465-34.927z"
									fill="#b0b3c1"
								/>
								<path
									d="m82.062 33.623c-5.676-22.972-18.108-31.623-18.108-31.623s-12.432 8.648-18.107 31.62c-5.073 20.534 3.674 54.239 5.588 61.163a1.729 1.729 0 0 0 1.665 1.269h21.7a1.729 1.729 0 0 0 1.668-1.266c1.92-6.924 10.666-40.629 5.594-61.163z"
									fill="#c1cdd3"
								/>
								<path
									d="m82.062 33.623c-5.674-22.968-18.106-31.623-18.106-31.623a27.79 27.79 0 0 0 -3.977 3.674c4.139 4.471 10.506 13.3 14.129 27.949 5.674 22.977-5.947 62.427-5.947 62.427h6.644a1.728 1.728 0 0 0 1.668-1.267c1.914-6.923 10.66-40.623 5.589-61.16z"
									fill="#b0b3c1"
								/>
								<path
									d="m80.933 29.517c-6.04-19.904-16.979-27.517-16.979-27.517s-10.938 7.613-16.978 27.517z"
									fill="#6bb3d9"
								/>
								<path
									d="m80.933 29.513h-7.74c-3.748-12.336-9.378-19.95-13.111-23.957a27.624 27.624 0 0 1 3.874-3.556s10.934 7.614 16.977 27.513z"
									fill="#4fa4d1"
								/>
								<circle
									cx="63.954"
									cy="48.934"
									fill="#ef5361"
									r="8.65"
									transform="matrix(.526 -.851 .851 .526 -11.294 77.611)"
								/>
								<path
									d="m73.115 100.973h-18.321c-3.114 1.946-4.529 7.66-2.953 10.977.4.834.941 1.587 1.405 2.385a14.055 14.055 0 0 1 1.413 10.565 12.277 12.277 0 0 0 5.778-8.968 6.61 6.61 0 0 1 4.391 4.019 18.609 18.609 0 0 1 1.144 6.049 10.187 10.187 0 0 0 3.909-6.66c.354-2.761-.944-7.188 1.4-8.7a22.306 22.306 0 0 1 3.444 5.565s4.867-10.105-1.61-15.232z"
									fill="#ef5361"
								/>
								<path
									d="m57.689 100.973h9.855c1.675 1.047 2.437 4.121 1.589 5.905-.213.448-.506.853-.756 1.283a7.554 7.554 0 0 0 -.76 5.684 6.608 6.608 0 0 1 -3.109-4.825 3.552 3.552 0 0 0 -2.361 2.163 9.973 9.973 0 0 0 -.616 3.253 5.482 5.482 0 0 1 -2.1-3.583c-.19-1.485.508-3.867-.75-4.677a12.014 12.014 0 0 0 -1.854 2.993s-2.622-5.441.862-8.196z"
									fill="#f2a846"
								/>
							</svg> */}
							<svg className="icon">
								<use
									xlinkHref={
										"./img/subservices/sprite.svg#rocket"
									}
								></use>
							</svg>
						</div>
						{props.processArr.map((process, index) => (
							<li
								className={
									show ? "fade-in-show" : "fade-in-hidden"
								}
								key={index}
							>
								<div className="title">{process.title}</div>
								{/* <div className="content">
						Lorem ipsum dolor sit amet, consectetuer adipiscing
						elit, sed
					</div> */}
							</li>
						))}
					</InfographicStyled>
				</Wrapper>
			</Region>
			<Shapedivider position={"bottom"} rotation={"180"}>
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
						opacity=".25"
					></path>
					<path
						d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
						opacity=".5"
					></path>
					<path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
				</svg>
			</Shapedivider>
		</FullBackground>
	)
}

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
		transform: translateY(30px);
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

export default Infographic
