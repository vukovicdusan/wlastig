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
import { UnderlineStyled } from "../components/styles/UnderlineStyled.styled"
import {
	subsArr,
	processArr,
	competitionArr,
	faqArr,
} from "../public/content/advertising"

const Advertising = () => {
	return (
		<main>
			<Head>
				<title>Wlastig Analytics - Advertising Service</title>
				<meta
					name="description"
					content="Wanna hear a great story?
					A moving story about a brave company that made use of data on her way to become a market leader and a household brand. What company are we talking about? Yours!"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ServicesHeroStyled
				backgroundImg={"./img/pages/hero-advertising.png"}
				deskPos={"45%"}
			>
				<Stack stackAlign={"inherit"}>
					<div className="hero-background">
						<Region first={true}>
							<Wrapper>
								<div className="hero-content ">
									<Stack stackAlign={"end"}>
										<AnimationContainer>
											<h1>
												In a fast-paced world of change,
												finding the right digital
												advertising services recipe is
												of the utmost importance.
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
							<AnimationContainer delay={"3"}>
								<h2>
									{" "}
									Let’s make a winning cocktail for your
									business!
								</h2>
								<UnderlineStyled></UnderlineStyled>
							</AnimationContainer>

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

			<Infographic processArr={processArr}></Infographic>

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
