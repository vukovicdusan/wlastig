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
import SubServicesGrid from "../components/SubServicesGrid"
import bulb from "../public/img/bulb.svg"
import { FullBackground } from "../components/styles/FullBackground.styled"
import Infographic from "../components/Infographic"
import { UnderlineStyled } from "../components/styles/UnderlineStyled.styled"
import ContactFormSection from "../components/ContactFormSection"
import { Shapedivider } from "../components/styles/Shapedivider.styled"
import CompetitionSection from "../components/styles/CompetitionSection"
import AnimationContainer from "../components/AnimationContainer"

const webAnalytics = () => {
	const subsArr = [
		{
			title: "Tracking",
			content:
				"Get an advanced tracking solution for your company's success!",
			img: bulb,
		},
		{
			title: "Conversion Attribution",
			content:
				"Don’t go for the one-size-fits-all attribution model, get yourself a custom fit!",
			img: bulb,
		},
		{
			title: "Website optimization",
			content:
				"Transform your website into a conversion generating machine!",
			img: bulb,
		},
		{
			title: "Marketing Databases",
			content:
				"Leverage your offline data to improve your online performance!",
			img: bulb,
		},
		{
			title: "Predictive analytics and ML",
			content:
				"Predicting and capitalizing on the future trends and customer behaviour!",
			img: bulb,
		},
		{
			title: "A/B testing",
			content: "Test your hypothesis to improve your results!",
			img: bulb,
		},
		{
			title: "Reporting and Visualization",
			content: "Uncover the story behind your data!",
			img: bulb,
		},
		{
			title: "Data Quality Testing",
			content:
				"Your decisions are only as good as your data. Improve your decisions by enhancing the quality of your data.",
			img: bulb,
		},
		{
			title: "Behavior Analysis",
			content:
				"Understand who your customers are, what they want and what impacts their decision making.",
			img: bulb,
		},
	]

	let processArr = [
		{ title: "Understanding Your Business" },
		{ title: "Tracking and Data Portfolio Audit" },
		{ title: "Fixing and upgrading existing tracking structure" },
		{ title: "Analyzing for valuable insights" },
		{ title: "Reporting and Data visualisation" },
		{ title: "Continual testing for constant improvement" },
	]

	let competitionArr = [
		{
			competition: "One-size-fits-all solutions",
			us: "Tailor-made solutions to fit your specific needs",
		},
		{
			competition: "No technical implementation documentation",
			us: "In-depth, step by step procedure sheet",
		},
		{
			competition: "Set-it-and-forget-it approach",
			us: "Continuous testing and data quality improvement",
		},
		{
			competition: "Vanity metrics ego boost reporting",
			us: "Profit-oriented actionable insights ",
		},
		{
			competition: "Inefficient tracking setup slowing down your website",
			us: "Website-friendly tracking solutions",
		},
		{
			competition: "Hiding behind the technical jargon",
			us: "Transparent communication",
		},
		{ competition: "10 accounts per person", us: "3 accounts per person" },
	]

	return (
		<>
			<ServicesHeroStyled
				backgroundImg={"./img/services/hero-analytics.png"}
			>
				<div className="hero-background">
					<Region>
						<Wrapper>
							<div className="hero-content ">
								<Stack stackAlign={"end"}>
									<AnimationContainer>
										<h1>
											Every company’s data has hidden gems
											that could skyrocket your profits
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
			</ServicesHeroStyled>
			<Region>
				<Wrapper>
					<Switcher>
						<Stack stackSpace={"s4"} className="service-info">
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

			<SubServicesGrid subsArr={subsArr}></SubServicesGrid>

			<Infographic processArr={processArr.reverse()}></Infographic>

			<CompetitionSection
				competitionArr={competitionArr}
			></CompetitionSection>

			<ContactFormSection
				shapedivider={false}
				title={"150+ Point Audit For Data Quality"}
				subTitle={"(3X The Industry Average)"}
			></ContactFormSection>
		</>
	)
}

export default webAnalytics
