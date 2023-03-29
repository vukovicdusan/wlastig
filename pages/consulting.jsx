import React from "react"
import { Wrapper } from "../components/styles/Wrapper.styled"
import { Region } from "../components/styles/Region.styled"
import { Stack } from "../components/styles/Stack.styled"
import { Switcher } from "../components/styles/Switcher.styled"
import { ServicesHeroStyled } from "../components/styles/services/ServicesHeroStyled.styled"
import { Center } from "../components/styles/Center.styled"
import { Button } from "../components/styles/Button.styled"
import { FullBackground } from "../components/styles/FullBackground.styled"
import Infographic from "../components/Infographic"
import ContactFormSection from "../components/ContactFormSection"
import { Shapedivider } from "../components/styles/Shapedivider.styled"
import CompetitionSection from "../components/CompetitionSection"
import AnimationContainer from "../components/AnimationContainer"
import Faq from "../components/Faq"
import Head from "next/head"
import Modal from "../components/Modal"
import {
	processArr,
	competitionArr,
	faqArr,
} from "../public/content/consulting"
import ReportAnalysisSvg from "../components/svg/ReportAnalysisSvg"

const Consulting = () => {
	return (
		<>
			<Head>
				<title>Wlastig Analytics - Consulting Service</title>
				<meta
					name="description"
					content="Wanna hear a great story?
					A moving story about a brave company that made use of data on her way to become a market leader and a household brand. What company are we talking about? Yours!"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ServicesHeroStyled
				backgroundImg={"./img/pages/hero-consulting.png"}
			>
				<Stack stackAlign={"inherit"}>
					<div className="hero-background">
						<Region first={true}>
							<Wrapper>
								<div className="hero-content ">
									<Stack stackAlign={"end"}>
										<AnimationContainer>
											<h1>
												Big budgets don’t guarantee
												success, a solid plan does.
											</h1>
										</AnimationContainer>
										<AnimationContainer>
											<div className="desktop">
												<Button reverse={false}>
													Improve your data quality
													for FREE!
												</Button>
											</div>
										</AnimationContainer>
									</Stack>
								</div>
							</Wrapper>
						</Region>
					</div>
					<div className="mobile">
						<Wrapper>
							<Button>Improve your data quality for FREE!</Button>
						</Wrapper>
					</div>
				</Stack>
			</ServicesHeroStyled>
			<FullBackground>
				<Region>
					<Wrapper>
						<Switcher mb={"var(--s5)"}>
							<Stack
								stackSpace={"var(--s4)"}
								className="service-info"
							>
								<p>
									With many years of experience gained across
									diverse industries, together with you we
									will steer your business to go exactly where
									you thought it should.
								</p>
								<p>
									When you’re out of ideas and resources,
									that’s when we get on stage. First we get to
									know your business, understand your working
									processes and data availability at present.
									Then we go through all these items together
									with you and suggest what you could improve,
									how much to do and what impact that would
									have on your business.
								</p>
								<p>
									The goal of the consultation sessions is to
									reach a solution together, one that will
									improve your business. But that’s not all.We
									stay available for all questions while in
									the implementation phase. We’re in this
									together.
								</p>
							</Stack>
							<Center>
								<ReportAnalysisSvg
									width={400}
									height={300}
								></ReportAnalysisSvg>
							</Center>
						</Switcher>
					</Wrapper>
				</Region>
				<Shapedivider
					fill={"var(--primary)"}
					position={"bottom"}
					rotation={"0"}
					height="100px"
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
			</FullBackground>

			<CompetitionSection
				competitionArr={competitionArr}
			></CompetitionSection>

			<Infographic processArr={processArr}></Infographic>

			<ContactFormSection
				shapedivider={false}
				title={"150+ Point Audit For Data Quality"}
				subTitle={"(3X The Industry Average)"}
				cta={"Improve your data quality for FREE!"}
			></ContactFormSection>
			<Faq color={"var(--text-light)"} faqArr={faqArr}></Faq>
			<Modal></Modal>
		</>
	)
}

export default Consulting
