import React from "react"
import { Wrapper } from "../components/styles/Wrapper.styled"
import { Region } from "../components/styles/Region.styled"
import { Stack } from "../components/styles/Stack.styled"
import { Switcher } from "../components/styles/Switcher.styled"
import { ServicesHeroStyled } from "../components/styles/services/ServicesHeroStyled.styled"
import { Center } from "../components/styles/Center.styled"
import { Button } from "../components/styles/Button.styled"
import SubServicesGrid from "../components/SubServicesGrid"
import bulb from "../public/img/bulb.svg"
import Infographic from "../components/Infographic"
import ContactFormSection from "../components/ContactFormSection"
import CompetitionSection from "../components/CompetitionSection"
import AnimationContainer from "../components/AnimationContainer"
import Faq from "../components/Faq"
import Head from "next/head"
import ReelImage from "../components/ReelImage"
import Modal from "../components/Modal"

const Advertising = () => {
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

	let faqArr = [
		{
			title: "What kind of clients have you served so far?",
			body: (
				<p>
					Handling diverse budget constraints for a wide range of
					business types, we worked with small, middle, and big
					companies, spanning from e-commerce via lead generation to
					B2B and SaaS. Our smallest client had a monthly advertising
					budget of 5K and our largest went as high as 240K. We
					learned how to squeeze the maximum out of smaller budgets
					and decrease waste to a minimum with the big ones.
				</p>
			),
		},
		{
			title: "Who will work on my project?",
			body: (
				<p>
					Your assigned team comprises three persons. Depending on the
					type of your business, you’ll get a chief account manager
					who specializes in your field. Two A number of account
					managers will be serving as peer reviewers to minimize the
					possibility of human error. For more sophisticated issues, a
					specialized web analyst will aid the chief account manager
					with in-depth analysis questions.<br></br>
					<br></br> When necessary, a web designer, graphic designer,
					and copywriter will join the team as your mini-creative
					department.
				</p>
			),
		},
		{
			title: "How much experience do you have?",
			body: (
				<p>
					The team that will help your business grow learned their
					craft working for more than 200 clients, coming from a wide
					array of business verticals with diverse professional needs.
				</p>
			),
		},
		{
			title: "How long until I see results?",
			body: (
				<p>
					It depends on too many factors. Get your FREE audit and
					you’ll get an accurate estimate. Typically, clients see
					improvements within a month from the moment they apply audit
					recommendations.
				</p>
			),
		},
		{
			title: "What tools and technologies do you use?",
			body: (
				<p>
					We use whatever tool is best for your business. Primary
					marketing platforms which work for most businesses, which we
					regularly use are:
					<br></br>
					<br></br>* Google Ads<br></br>* Facebook and Instagram Ads
					<br></br>* Bing Ads <br></br>* Linkedin Ads
					<br></br>
					<br></br>
					We also employ various analytics tools to enhance marketing
					performance.
				</p>
			),
		},
		{
			title: "How long is your service contract?",
			body: (
				<p>
					Where others chain you for half a year, your minimum
					contractual obligation with us is four weeks. Every month a
					revision takes place, upon which you may or may not re-sign.
					We’re pretty sure you’ll want to continue.
				</p>
			),
		},
		{
			title: "Can you guarantee results?",
			body: (
				<p>
					Whoever says they can, is not being straight. We can
					guarantee that each and every one decision will be based on
					sound statistical and mathematical principles.
				</p>
			),
		},
	]

	return (
		<main>
			<Head>
				<title>Wlastig Analytics - Advertising Service</title>
				<meta
					name="Wlastig Analytics - Web Analytics, Advertising and
			Consulting"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ServicesHeroStyled
				backgroundImg={"./img/pages/hero-advertising.png"}
				deskPos={"45%"}
			>
				<Stack stackAlign={"inherit"}>
					<div className="hero-background">
						<Region>
							<Wrapper>
								<div className="hero-content ">
									<Stack stackAlign={"end"}>
										<AnimationContainer>
											<h1>
												In a fast-paced world of change,
												finding the right digital
												advertising services recipe is
												of the utmost importance. Let’s
												make a winning cocktail for your
												business!
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
					<div className="mobile">
						<Wrapper>
							<Button>Get a FREE Audit</Button>
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
							<ReelImage
								svgHeight={300}
								svgWidth={400}
								content={"reel3"}
							></ReelImage>
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
			<Faq color={"var(--text-light)"} faqArr={faqArr}></Faq>
			<Modal></Modal>
		</main>
	)
}

export default Advertising
