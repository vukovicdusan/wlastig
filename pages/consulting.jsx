import React from "react"
import Image from "next/image"
import { Wrapper } from "../components/styles/Wrapper.styled"
import { Region } from "../components/styles/Region.styled"
import { Stack } from "../components/styles/Stack.styled"
import { Switcher } from "../components/styles/Switcher.styled"
import { ServicesHeroStyled } from "../components/styles/services/ServicesHeroStyled.styled"
import { Center } from "../components/styles/Center.styled"
import { Button } from "../components/styles/Button.styled"
import illustration from "../public/img/report_analysis_-1.svg"
import { FullBackground } from "../components/styles/FullBackground.styled"
import Infographic from "../components/Infographic"
import { UnderlineStyled } from "../components/styles/UnderlineStyled.styled"
import ContactFormSection from "../components/ContactFormSection"
import { Shapedivider } from "../components/styles/Shapedivider.styled"
import CompetitionSection from "../components/CompetitionSection"
import AnimationContainer from "../components/AnimationContainer"
import Faq from "../components/Faq"

const consulting = () => {
	let processArr = [
		{ title: "Getting to know your business" },
		{ title: "Defining the goals" },
		{ title: "To-Do List proposal" },
		{ title: "Monitoring and implementation assistance" },
		{ title: "Regular accomplishment review" },
		{ title: "Presenting end-results" },
	]

	let competitionArr = [
		{
			competition: "Focus on short-term results",
			us: "Focus on long-term results",
		},
		{
			competition: "Putting on a false front",
			us: "Implementing the key business-growth contributing elements",
		},
		{
			competition: "Cherry picking results",
			us: "Focusing on bottom line movers",
		},
		{
			competition: "Limited support",
			us: "Full support all the way through ",
		},
		{
			competition: "Inflexible approach",
			us: "Full-flexibility approach",
		},
	]

	let faqArr = [
		{
			title: "Does consulting make sense for my business?",
			body: (
				<p>
					Consulting is there to point you towards those details that
					might have slipped your attention. Or for when you wanna try
					something you haven???t tried before, but aren???t sure how to
					go about it. Think Google Maps. With the right guidance,
					you???ll get to the goal you set in no time, even though you
					didn???t really know how to get there.
				</p>
			),
		},
		{
			title: "When will I see results?",
			body: (
				<p>
					Consulting takes time. You can???t expect results after a few
					days or a month. (well, in some cases), but if we work
					together and honour the agreement, the results will be
					visible soon enough.
				</p>
			),
		},
	]

	return (
		<>
			<ServicesHeroStyled
				backgroundImg={"./img/services/hero-consulting.png"}
			>
				<div className="hero-background">
					<Region>
						<Wrapper>
							<div className="hero-content ">
								<Stack stackAlign={"end"}>
									<AnimationContainer>
										<h1>
											Big budgets don???t guarantee success,
											a solid plan does.
										</h1>
									</AnimationContainer>
									<AnimationContainer>
										<div className="desktop">
											<Button reverse={false}>
												Improve your data quality for
												FREE!
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
						<Button>Improve your data quality for FREE!</Button>
					</Wrapper>
				</div>
			</ServicesHeroStyled>
			<FullBackground>
				<Region>
					<Wrapper>
						<Switcher>
							<Stack stackSpace={"s4"} className="service-info">
								<p>
									With many years of experience gained across
									diverse industries, together with you we
									will steer your business to go exactly where
									you thought it should.
								</p>
								<p>
									When you???re out of ideas and resources,
									that???s when we get on stage. First we get to
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
									improve your business. But that???s not all.We
									stay available for all questions while in
									the implementation phase. We???re in this
									together.
								</p>
							</Stack>
							<Center>
								<Image
									height={400}
									width={400}
									src={illustration}
									alt="illustration"
								></Image>
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
			{/* <SubServicesGrid subsArr={subsArr}></SubServicesGrid> */}

			<Infographic processArr={processArr.reverse()}></Infographic>

			<ContactFormSection
				shapedivider={false}
				title={"150+ Point Audit For Data Quality"}
				subTitle={"(3X The Industry Average)"}
				cta={"Improve your data quality for FREE!"}
			></ContactFormSection>
			<Faq color={"var(--text-light)"} faqArr={faqArr}></Faq>
		</>
	)
}

export default consulting
