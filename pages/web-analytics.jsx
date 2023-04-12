import React from "react"

import { Wrapper } from "../components/styles/Wrapper.styled"
import { Region } from "../components/styles/Region.styled"
import { Stack } from "../components/styles/Stack.styled"
import { Switcher } from "../components/styles/Switcher.styled"
import { ServicesHeroStyled } from "../components/styles/services/ServicesHeroStyled.styled"
import { Center } from "../components/styles/Center.styled"
import { Button } from "../components/styles/Button.styled"
import SubServicesGrid from "../components/SubServicesGrid"
import Infographic from "../components/Infographic"
import { UnderlineStyled } from "../components/styles/UnderlineStyled.styled"
import ContactFormSection from "../components/ContactFormSection"
import CompetitionSection from "../components/CompetitionSection"
import AnimationContainer from "../components/AnimationContainer"
import Faq from "../components/Faq"
import Head from "next/head"
import Modal from "../components/Modal"
import {
	subsArr,
	processArr,
	competitionArr,
	faqArr,
} from "../public/content/web-analytics.js"
import ReportAnalysis2Svg from "../components/svg/ReportAnalysis2Svg"

const webAnalytics = () => {
	return (
		<main>
			<Head>
				<title>Wlastig Analytics - Web Analytics Service</title>
				<meta
					name="description"
					content="Wanna hear a great story?
					A moving story about a brave company that made use of data on her way to become a market leader and a household brand. What company are we talking about? Yours!"
				/>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="preload"
					href="./img/subservices/sprite.svg"
					as="image"
					type="image/svg+xml"
				/>
			</Head>
			<ServicesHeroStyled
				backgroundImg={"./img/pages/hero-analytics.png"}
			>
				<Stack stackSpace={"var(--s4)"} stackAlign={"inherit"}>
					<div className="hero-background">
						<Region>
							<Wrapper>
								<div className="hero-content ">
									<Stack stackAlign={"end"}>
										<AnimationContainer>
											<h1>
												Every company’s data has hidden
												gems that could skyrocket your
												profits
											</h1>
										</AnimationContainer>
										<AnimationContainer>
											<div className="desktop">
												<Button reverse={true}>
													Discover your gems!
												</Button>
											</div>
										</AnimationContainer>
									</Stack>
								</div>
							</Wrapper>
						</Region>
					</div>
					<div className="mobile mr-t-4">
						<Wrapper>
							<Button>Discover your gems!</Button>
						</Wrapper>
					</div>
				</Stack>
			</ServicesHeroStyled>
			<Region>
				<Wrapper>
					<Switcher>
						<Stack
							stackSpace={"var(--s4)"}
							className="service-info"
						>
							<Stack>
								<AnimationContainer>
									<h2>What is Web Analytics?</h2>
									<UnderlineStyled
										underlineMargin={"var(--s-4)"}
									></UnderlineStyled>
								</AnimationContainer>
								<p>
									Web analytics is a measurement and analysis
									of data to get a deep understanding of
									customer behavior, marketing, and website
									performance. What you don&#39;t measure you
									can&#39;t optimize!
								</p>
							</Stack>
							<Stack>
								<AnimationContainer>
									<h2>Why do you need Web Analytics?</h2>
									<UnderlineStyled
										underlineMargin={"var(--s-4)"}
									></UnderlineStyled>
								</AnimationContainer>
								<Stack as="ul">
									<li>
										You can’t optimize what you can’t
										measure!
									</li>
									<li>Improve your marketing performance.</li>
									<li>
										Gain deeper insights into your customer
										behavior.
									</li>
									<li>
										Discover where hidden opportunities.
									</li>
									<li>Make sound data-driven decisions.</li>
								</Stack>
							</Stack>
							<Stack>
								<AnimationContainer>
									<h2>Do we make the right fit?</h2>
									<UnderlineStyled
										underlineMargin={"var(--s-4)"}
									></UnderlineStyled>
								</AnimationContainer>
								<p>
									There are no big or small accounts. Just
									right and wrong strategies. Whether you’re
									just starting out or in need of advanced web
									analysis, we are here for you! Let’s
									transform your data into profits!
								</p>
							</Stack>
						</Stack>
						<Center>
							<ReportAnalysis2Svg
								width={400}
								height={300}
							></ReportAnalysis2Svg>
						</Center>
					</Switcher>
				</Wrapper>
			</Region>

			<SubServicesGrid subsArr={subsArr}></SubServicesGrid>

			<Infographic processArr={processArr}></Infographic>

			<CompetitionSection
				competitionArr={competitionArr}
			></CompetitionSection>

			<ContactFormSection
				shapedivider={false}
				title={"150+ Point Audit For Data Quality"}
				subTitle={"(3X The Industry Average)"}
			></ContactFormSection>
			<Faq color={"var(--text-light)"} faqArr={faqArr}></Faq>
			<Modal></Modal>
		</main>
	)
}

export default webAnalytics
