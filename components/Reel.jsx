import React, { useState } from "react"
import Image from "next/image"
import reelLink1 from "../public/img/analytics.svg"
import reelLink2 from "../public/img/advertisement.svg"
import reelLink3 from "../public/img/consultations.svg"
import AnimationContainer from "./AnimationContainer"
import { Region } from "./styles/Region.styled"
import { Shapedivider } from "./styles/Shapedivider.styled"
import { FullBackground } from "./styles/FullBackground.styled"
import { ReelStyled } from "./styles/ReelStyled.styled"
import { Button } from "./styles/Button.styled"
import { Stack } from "./styles/Stack.styled"
import ReelImage from "./ReelImage"

const Reel = () => {
	const [reelIndex, setReelIndex] = useState(0)

	const reelLinkHandler = (e) => {
		setReelIndex(e)
	}

	return (
		<FullBackground>
			<Region pb={"0"} pt={"0"}>
				<ReelStyled className="reel">
					<div className="reel-links">
						<AnimationContainer delay={"1"}>
							<button
								onClick={() => reelLinkHandler(0)}
								className="reel-button"
							>
								<span className="reel-link-icon">
									<Image
										src={reelLink1}
										height={70}
										width={70}
										alt="analytics logo"
									></Image>
									Analytics
								</span>
							</button>
						</AnimationContainer>
						<AnimationContainer delay={"3"}>
							<button
								onClick={() => reelLinkHandler(1)}
								className="reel-button"
							>
								<span className="reel-link-icon">
									<Image
										src={reelLink2}
										height={70}
										width={70}
										alt="advertisement logo"
									></Image>
									Advertising
								</span>
							</button>
						</AnimationContainer>
						<AnimationContainer delay={"5"}>
							<button
								onClick={() => reelLinkHandler(2)}
								className="reel-button"
							>
								<span className="reel-link-icon">
									<Image
										src={reelLink3}
										height={70}
										width={70}
										alt="consulting logo"
									></Image>
									Consulting
								</span>
							</button>
						</AnimationContainer>
					</div>
					<div
						style={{
							transform: `translateX(${-100 * reelIndex}vw)`,
						}}
						className="reel-inside"
					>
						<Shapedivider
							position={"top"}
							fill={"var(--background-light)"}
							height={"100px"}
						>
							<svg
								data-name="Layer 1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 1200 120"
								preserveAspectRatio="none"
							>
								<path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
							</svg>
						</Shapedivider>
						<div className="reel-item">
							<div className="reel-item--content">
								{/* <Image src={reel1} alt="analysis image"></Image> */}
								<ReelImage
									content={"reel1"}
									svgWidth={350}
									svgHeight={250}
								></ReelImage>
								<Stack className="reel-item--text">
									<p>
										A data analysis which allows deeper
										understanding of{" "}
										<span>
											CUSTOMER BEHAVIOUR, MARKETING
										</span>{" "}
										and <span>WEBSITE PERFORMANCE</span>.
									</p>
									<Button>Web Analytics</Button>
								</Stack>
							</div>
						</div>
						<div className="reel-item">
							<div className="reel-item--content">
								<ReelImage
									content={"reel3"}
									svgWidth={350}
									svgHeight={250}
								></ReelImage>
								<AnimationContainer>
									<Stack className="reel-item--text">
										<p>
											To optimize your campaigns and{" "}
											<span>
												REDUCE ADVERTISING EXPENSES
											</span>
											, we use state-of-the-art
											advertising methods which leverage
											machine learning.
										</p>
										<Button>Advertising</Button>
									</Stack>
								</AnimationContainer>
							</div>
						</div>
						<div className="reel-item">
							<div className="reel-item--content">
								<ReelImage
									content={"reel2"}
									svgWidth={350}
									svgHeight={250}
								></ReelImage>
								<Stack className="reel-item--text">
									<p>
										When in trouble, get a fresh pair of
										eyes to <span>SAVE YOUR TIME</span> and{" "}
										<span>MONEY</span>. Whatever the
										problem, we&quot;ll be there to promptly
										steer the way towards solution.
									</p>
									<Button>Consulting</Button>
								</Stack>
							</div>
						</div>
					</div>
				</ReelStyled>
			</Region>
			<Shapedivider position={"bottom"}>
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

export default Reel
