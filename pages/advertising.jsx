import React from "react"
import Image from "next/image"
import { Wrapper } from "../components/styles/Wrapper.styled"
import { Region } from "../components/styles/Region.styled"
import { Stack } from "../components/styles/Stack.styled"
import { Switcher } from "../components/styles/Switcher.styled"
import { ServicesHeroStyled } from "../components/styles/services/ServicesHeroStyled.styled"
import { Center } from "../components/styles/Center.styled"
import { Button } from "../components/styles/Button.styled"
import illustration from "../public/img/google_ad.svg"
import SubServicesGrid from "../components/SubServicesGrid"
import bulb from "../public/img/bulb.svg"
import { FullBackground } from "../components/styles/FullBackground.styled"
import Infographic from "../components/Infographic"
import { UnderlineStyled } from "../components/styles/UnderlineStyled.styled"
import ContactFormSection from "../components/ContactFormSection"
import { Shapedivider } from "../components/styles/Shapedivider.styled"
import CompetitionSection from "../components/styles/CompetitionSection"
import AnimationContainer from "../components/AnimationContainer"

const advertising = () => {
	const subsArr = [
		{
			title: "Keyword research",
			content:
				"Finding the best keywords to bid on that are most likely to result in conversions.",
			img: bulb,
		},
		{
			title: "Lead Generation Campaigns",
			content:
				"Generate high-quality prospects for your services and products.",
			img: bulb,
		},
		{
			title: "Ecommerce Advertising",
			content:
				"Convert visitors into paying customers and achieve profitable, long-term growth.",
			img: bulb,
		},
		{
			title: "Funnel Building and Optimization",
			content:
				"Guide your prospects from awareness to the purchase in the most cost-effective way.",
			img: bulb,
		},
		{
			title: "Dynamic Remarketing",
			content:
				"Attract bottom of the funnel abandoners with tailored ads.",
			img: bulb,
		},
		{
			title: "Google Ads",
			content:
				"Leverage Google Search, Shopping, and Display to help you shatter your revenue goals, consistently.",
			img: bulb,
		},
		{
			title: "Youtube Ads",
			content:
				"Target your most valuable customers with video advertising on the world’s largest video platform.",
			img: bulb,
		},
		{
			title: "Paid Social Media Advertising",
			content:
				"Build a social presence and attract customers on Facebook, Instagram, Linkedin, and other social media platforms.",
			img: bulb,
		},
	]

	let processArr = [
		{ title: "Understanding Your Business" },
		{ title: "Defining marketing goals" },
		{ title: "Creating advertising strategy" },
		{ title: "A/B testing" },
		{ title: "Campaign optimization" },
		{ title: "Reporting and Data visualisation" },
	]

	let competitionArr = [
		{
			competition: "Employing all digital advertising channels",
			us: "The most cost-effective channels results-based selection",
		},
		{
			competition: "Casting a wide net",
			us: "Narrow niche targeting",
		},
		{
			competition:
				"Avoiding reckless spending on unprofitable campaigns ",
			us: "Permanent monitoring and rerouting budget towards cost-effective campaigns",
		},
		{
			competition:
				"Reluctance to embrace novel channels of digital advertising",
			us: "Early adoption to market changes",
		},

		{ competition: "10 accounts per person", us: "3 accounts per person" },
	]

	return (
		<>
			<ServicesHeroStyled
				backgroundImg={"./img/services/hero-advertising.png"}
				deskPos={"45%"}
			>
				<div className="hero-background">
					<Region>
						<Wrapper>
							<div className="hero-content ">
								<Stack stackAlign={"end"}>
									<AnimationContainer>
										<h1>
											In a fast-paced world of change,
											finding the right digital
											advertising services recipe is of
											the utmost importance. Let’s make a
											winning cocktail for your business!
										</h1>
									</AnimationContainer>
									<AnimationContainer>
										<div className="desktop">
											<Button reverse={false}>
												Get a FREE Audit
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
						<Button>Get a FREE Audit</Button>
					</Wrapper>
				</div>
			</ServicesHeroStyled>
			<Region>
				<Wrapper>
					<Switcher>
						<Stack stackSpace={"s4"} className="service-info">
							<p>
								If you’re failing to capitalize on the
								top-quality product and superb service you’re
								offering, chances are your digital advertising
								is misplaced.
							</p>
							<p>
								More often than not, effective marketing is all
								about choosing the right advertising channels.
								To score big with your marketing efforts, you
								need to become aware of the diverse benefits
								pertinent to each and every one of those - and
								choose the right ones. Sure, digital advertising
								brings masses of data, and you might be
								struggling to process all the information. We
								know - making sense of data is difficult. Don’t
								shy away from doing so. First, you’re not alone.
								Secondly, the benefits are numerous.
							</p>
							<p>
								By analyzing available information on
								demographics, interests and behavior, you can
								learn much more about your audience than you
								have ever dreamed of. Once you know more about
								your audience, you can decide on a
								cost-effective digital advertising mix. This is
								where we step in.
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

			<SubServicesGrid subsArr={subsArr}></SubServicesGrid>

			<Infographic processArr={processArr.reverse()}></Infographic>

			<CompetitionSection
				competitionArr={competitionArr}
			></CompetitionSection>

			<ContactFormSection
				shapedivider={false}
				title={
					"100+ point audit of your digital advertising (PPC) performance"
				}
				subTitle={"Stop wasting money, find your leaks for FREE!"}
				cta={"Get a FREE Audit"}
			></ContactFormSection>
		</>
	)
}

export default advertising
