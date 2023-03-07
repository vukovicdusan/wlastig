import React, { useEffect } from "react"
import Image from "next/image"
import { useState } from "react"
import ChevronLeft from "./ChevronLeft"
import ChevronRight from "./ChevronRight"
import bex from "../public/img/bex.png"
import strategyx from "../public/img/strategyx-logo.svg"
import quoteStart from "../public/img/quote-start.svg"
import quoteEnd from "../public/img/quote-end.svg"
import { Wrapper } from "./styles/Wrapper.styled"
import { Region } from "./styles/Region.styled"
import { FullBackground } from "./styles/FullBackground.styled"
import { Shapedivider } from "./styles/Shapedivider.styled"
import { Stack } from "./styles/Stack.styled"
import { TestimonialsStyled } from "./styles/TestimonialsStyled.styled"
import { Sidebar } from "./styles/Sidebar.styled"

const testimonials = [
	{
		content:
			"We looked for an end-to-end Web analytics agency to consolidate our collection and improve our analytical potential. And guys from Wlastig exceeded our expectations. All the project aspects were handled professionally, and the results were quite impressive. They delivered additional performance measurements that became our new business objectives alongside required KPIs.",
		img: strategyx,
		frame1: ["+23%", "Leads"],
		frame2: ["-15%", "Recurring Revenue"],
		frame3: ["+55%", "Churn Rate"],
	},
	{
		content:
			"We hired them to set up tracking on our website and to analyze the offline data that we gathered with online data through our website. We located our target groups and made clusters from them so we indicated our audience and gave them a “slight push” to become our loyal customers.",
		img: bex,
		frame1: ["+27%", "Retention rate"],
		frame2: ["-9%", "Churn Rate"],
		frame3: ["+3%", "LTV"],
	},
]

const Testimonials = () => {
	const [reelIndex, setReelIndex] = useState(0)
	const [leftButtonDisabled, setLeftButtonDisabled] = useState(true)
	const [rightButtonDisabled, setRightButtonDisabled] = useState(false)

	let slidesNum = testimonials.length - 1
	useEffect(() => {
		reelIndex > 0
			? setLeftButtonDisabled(false)
			: setLeftButtonDisabled(true)
		reelIndex < slidesNum
			? setRightButtonDisabled(false)
			: setRightButtonDisabled(true)
	}, [reelIndex])

	const reelLinkHandler = (direction) => {
		if (direction === "left") {
			setReelIndex(reelIndex !== 0 ? reelIndex - 1 : 0)
		}
		if (direction === "right") {
			setReelIndex(reelIndex !== slidesNum ? reelIndex + 1 : slidesNum)
		}
	}

	return (
		<FullBackground>
			<Shapedivider position={"top"} rotation={"0"}>
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
				</svg>
			</Shapedivider>
			<Region>
				<Wrapper>
					<TestimonialsStyled>
						<div className="reelButtons">
							<button
								onClick={() => reelLinkHandler("left")}
								className="reelButton"
								disabled={leftButtonDisabled}
							>
								<ChevronLeft
									svgFill={leftButtonDisabled && "#d0d2e7"}
								></ChevronLeft>
							</button>
							<button
								onClick={() => reelLinkHandler("right")}
								className="reelButton"
								disabled={rightButtonDisabled}
							>
								<ChevronRight
									svgFill={rightButtonDisabled && "#d0d2e7"}
								></ChevronRight>
							</button>
						</div>

						<div
							style={{
								transform: `translateX(${-100 * reelIndex}vw)`,
								inlineSize: `${(slidesNum + 1) * 100}vw`,
							}}
							className="reelInside"
						>
							{testimonials.map((testimonial, index) => (
								<div key={index} className="reelItem">
									<Stack
										stackJustify={"center"}
										stackAlign={"center"}
										stackSpace={"s-3"}
									>
										<div className="reelItemBody">
											<Sidebar
												reverse={false}
												sidebarPercent={"80%"}
											>
												<Image
													className="testimonialImg"
													src={testimonial.img}
													width={75}
													height={75}
													alt="logo"
												></Image>
												<blockquote>
													<span className="quoteStart">
														<Image
															src={quoteStart}
															width={20}
															height={20}
															alt="quote"
														></Image>
													</span>
													<p>{testimonial.content}</p>
													<span className="quoteEnd">
														<Image
															src={quoteEnd}
															width={20}
															height={20}
															alt="quote"
														></Image>
													</span>
												</blockquote>
											</Sidebar>
										</div>
										<div className="reelItemFooter">
											<div className="frame">
												<span>
													{testimonial.frame1[0]}
												</span>
												{testimonial.frame1[1]}
											</div>
											<div className="frame">
												<span>
													{testimonial.frame2[0]}
												</span>
												{testimonial.frame2[1]}
											</div>
											<div className="frame">
												<span>
													{testimonial.frame3[0]}
												</span>
												{testimonial.frame3[1]}
											</div>
										</div>
									</Stack>
								</div>
							))}
						</div>
					</TestimonialsStyled>
				</Wrapper>
			</Region>
		</FullBackground>
	)
}

export default Testimonials
