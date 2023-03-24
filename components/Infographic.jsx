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
							<svg
								height="800px"
								width="800px"
								version="1.1"
								id="Layer_1"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								viewBox="0 0 443.883 443.883"
								xmlSpace="preserve"
							>
								<g>
									<path
										className="pale"
										fill="#E6E6E6;"
										d="M336.036,166.27v277.61h-7.98l-8.59-49.56c-3.14-18.14-12.93-32.76-25.87-38.63
									c-1.48-0.67-2.91-1.45-4.29-2.34v-140.3v-40.58v-6.2H336.036z"
									/>
									<path
										className="orange"
										fill="#F4581B;"
										d="M336.036,150.31v15.96h-46.73v-15.96c0-22.16,8.34-43.52,23.37-59.82
									C327.697,106.79,336.036,128.15,336.036,150.31z"
									/>
									<path
										className="orange"
										fill="#F4581B;"
										d="M319.467,394.32l8.59,49.56h-15.48h-45.92V304.66c0,21.03,8.96,39.92,22.65,48.69
									c1.38,0.89,2.81,1.67,4.29,2.34C306.536,361.56,316.327,376.18,319.467,394.32z"
									/>
									<path
										className="gray"
										fill="#CCCCCC;"
										d="M289.307,213.05v140.3c-13.69-8.77-22.65-27.66-22.65-48.69v-41.44v-28.4
									c0-32.42-12.2-63.65-34.17-87.49c-5.68-6.16-15.4-6.16-21.08,0c-10.99,11.92-19.54,25.69-25.33,40.53
									c-5.8,14.84-8.85,30.75-8.85,46.96v28.4v41.44c0,21.04-8.95,39.93-22.65,48.69v-140.3v-40.58c0-30.84,5.6-61.12,16.26-89.49h102.22
									c10.65,28.37,16.25,58.65,16.25,89.49V213.05z"
									/>
									<path
										className="orange"
										fill="#F4581B;"
										d="M273.057,82.98h-102.22c11.43-30.44,28.69-58.66,51.11-82.98
									C244.367,24.32,261.617,52.54,273.057,82.98z"
									/>
									<path
										className="white"
										fill="#FFFFFF;"
										d="M244.786,162.94c-3.67-5.48-7.78-10.7-12.3-15.61c-5.68-6.16-15.4-6.16-21.08,0
									c-4.53,4.91-8.64,10.13-12.31,15.62c-5.26,7.83-9.61,16.18-13.02,24.91c-5.8,14.84-8.85,30.75-8.85,46.96v209.06h89.43V234.82
									C266.656,209.07,258.967,184.08,244.786,162.94z"
									/>
									<path
										className="orange"
										fill="#F4581B;"
										d="M244.786,162.94c-5.58,6.32-13.74,10.3-22.84,10.3c-9.1,0-17.26-3.98-22.85-10.29
									c3.67-5.49,7.78-10.71,12.31-15.62c5.68-6.16,15.4-6.16,21.08,0C237.007,152.24,241.116,157.46,244.786,162.94z"
									/>
									<path
										className="tirquoise"
										fill="#96E0DE;"
										d="M253.335,213.159l-14.081,14.067c-9.542-9.542-25.069-9.542-34.625,0l-14.081-14.067
									C207.867,195.854,236.029,195.854,253.335,213.159z"
									/>
									<path
										className="orange"
										fill="#F4581B;"
										d="M154.577,353.35c13.7-8.76,22.65-27.65,22.65-48.69v139.22h-17.61h-43.78l8.58-49.56
									c3.15-18.14,12.94-32.76,25.88-38.63C151.767,355.02,153.197,354.24,154.577,353.35z"
									/>
									<path
										className="pale"
										fill="#E6E6E6;"
										d="M154.577,213.05v140.3c-1.38,0.89-2.81,1.67-4.28,2.34c-12.94,5.87-22.73,20.49-25.88,38.63
									l-8.58,49.56h-7.99V166.27h46.73v6.2V213.05z"
									/>
									<path
										className="orange"
										fill="#F4581B;"
										d="M154.577,150.31v15.96h-46.73v-15.96c0-22.16,8.34-43.52,23.37-59.82
									C146.237,106.79,154.577,128.15,154.577,150.31z"
									/>
									<path
										className="orange"
										fill="#F4581B;"
										d="M229.445,443.883h-15v-72.448c0-4.142,3.358-7.5,7.5-7.5l0,0c4.142,0,7.5,3.358,7.5,7.5V443.883z"
									/>
								</g>
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
