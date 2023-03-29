import React from "react"
import styled from "styled-components"
import AnimationContainer from "../components/AnimationContainer"
import Image from "next/image"
import { Region } from "../components/styles/Region.styled"
import { ServicesHeroStyled } from "../components/styles/services/ServicesHeroStyled.styled"
import { Stack } from "../components/styles/Stack.styled"
import { Switcher } from "../components/styles/Switcher.styled"
import { Wrapper } from "../components/styles/Wrapper.styled"
import vladam from "../public/img/team/VladaM.png"
import vladaj from "../public/img/team/Vladic.png"
import igork from "../public/img/team/IgorK.png"
import stefan from "../public/img/team/StefanI.png"
import sanjin from "../public/img/team/Sanjin.png"
import ljubo from "../public/img/team/Ljubo.png"
import dzuna from "../public/img/team/Dzuna.png"
import filipl from "../public/img/team/Lazovic.png"
import jovank from "../public/img/team/Komljenovic.png"
import iva from "../public/img/team/Iva.png"
import denic from "../public/img/team/Denic.png"
import aleksandars from "../public/img/team/AleksandarS.png"
import { FullBackground } from "../components/styles/FullBackground.styled"
import { Shapedivider } from "../components/styles/Shapedivider.styled"
import Head from "next/head"
import Modal from "../components/Modal"

const ourTeam = () => {
	let teamArr = [
		{
			name: "Vlada M.",
			content: (
				<p>
					Vladimir sees himself as an interpreter. He believes that
					math is a perfect language. If fed with the right data, it
					will tell you amazing stories. His job is to translate those
					stories into actionable insights.<br></br>
					<br></br>Vladimir is passionate about philosophy and chili
					peppers. The mean of this data set is &#39;The
					Philosopher&#39;s Cookbook&#39; but translated into
					actionable insights, it is more Wittgenstein and Carolina
					Reaper.<br></br>
					<br></br>He even invented his own special mind-blowing
					recipe - sarma with wasabi sauce, and trust us when we say
					it&#39;s not for those who are faint of heart.
				</p>
			),
			img: vladam,
		},
		{
			name: "Vlada J.",
			content: (
				<p>
					Vladimir is a true detective when we talk about data. For
					him every dataset is like a crime scene with a lot of
					evidence where he needs to collect, label, categorize, and
					visualize data to get a clear picture of what&#39;s going
					on. When you talk with him about data you will see that he
					is really passionate about his job.
					<br></br>
					<br></br>His hobby is fishing which is very serious even
					though he never catches fish heavier than 3kg. But he is
					trying very hard.
					<br></br>
					<br></br>He is in good shape, starting this Monday you can
					find him in the gym after work (same story for the previous
					3 years).
				</p>
			),
			img: vladaj,
		},
		{
			name: "Stefan I.",
			content: (
				<p>
					Lover of the ever-changing digital world, Stefan is a PPC
					specialist that&#39;s been helping businesses grow online
					since 2014. Years of experience creating, managing, and
					optimizing Paid Advertising Campaigns make him a hotshot in
					meeting key KPIs and target ROAS.
					<br></br>
					<br></br>Being client-focused, Stefan genuinely enjoys
					seeing positive results and the value his work brings to his
					clients. In parallel to his role as a Digital marketing
					manager, he welcomes mentoring people starting a career in
					PPC. Stefan also teaches PPC advertising at Internet
					Academy, where he tries to demystify the best practices of
					Paid Search Marketing to his students.
					<br></br>
					<br></br>Apart from being a digital marketing geek, he is
					passionate about seeing the world and exploring its hidden
					corners. Stefan lives by the life motto Why walk when you
					can dance. In the wild, he can be found dancing salsa a lot.
				</p>
			),
			img: stefan,
		},
		{
			name: "Igor K.",
			content: (
				<p>
					Igor is a Web Analyst on a mission. He enjoys dissecting
					data to understand the &#39;what,&#39; the &#39;who,&#39;
					and the &#39;why&#39; questions behind it. His analytical
					and coding skills mix proves to be the right puzzle piece in
					collecting, measuring, and visualizing complex data from
					multiple angles. The ultimate goal – to create value and
					extract actionable insights from raw data. He is one of
					those people who loves their job.
					<br></br>
					<br></br>When he&#39;s not talking about meeting
					clients&#39; targets and ROIs, he&#39;s probably talking
					about sports. He claims that playing sports is better than
					watching it. For those fond of martial arts, Igor is your
					go-to wushu_bjj_MMA guy.
					<br></br>
					<br></br>He has always had a taste for adventure and
					breaking out of his comfort zone. Not surprisingly, you can
					often find him planning his next big trip. He&#39;s a
					globetrotter, even if he would never use that word.
				</p>
			),
			img: igork,
		},
		{
			name: "Iva",
			content: (
				<p>
					Iva knows all the secrets of the fine art of pay-per-click
					advertising. She works across various channels, but her tool
					of choice will always be paid social media. On any given
					day, you’ll likely find her implementing data-driven
					optimizations and monitoring the performance of PPC
					accounts. For a self-confessed overthinker, she is an
					incredibly focused can-doer who proves time and again to
					have a magic bullet for solving complex problems and nailing
					clients’ campaigns.
					<br></br>
					<br></br>Thanks to her perceptiveness and a keen interest in
					psychology, friends often see her as the best person to ask
					for advice. She especially likes hanging out with people who
					make her forget to look at her phone. Oh and she is
					absolutely hooked on Latin dancing, reggaeton and tropical
					rhythms.
				</p>
			),
			img: iva,
		},
		{
			name: "Sanjin",
			content: (
				<p>
					Sanjin is so passionate about analyzing data that his wife
					once said, oh I wish I could turn it into a Google sheet
					just for one day.
					<br></br>
					<br></br>He is very determined and likes to finish what he
					started. Sometimes he goes too much into details and people
					tell him that he is a perfectionist which is probably just a
					nice way of saying he has OCD.
					<br></br>
					<br></br>Sanjin likes to work out but was banned from the
					gym for making weird noises. So now he pushes and pulls data
					instead of weights.<br></br>
					<br></br>He always has a smile on his face and joking is his
					way to keep a good atmosphere in the team. Sometimes he even
					says something funny.
				</p>
			),
			img: sanjin,
		},
		{
			name: "Ljubomir",
			content: (
				<p>
					Besides being a top-notch graphic designer and a visual
					storyteller, Ljubomir is also an ex-footballer who always
					has a smile on his face and a joke up his sleeve. The only
					thing he dislikes in humor is pretending that his favorite
					club (Red Star) isn’t the most dominant team of all time -
					in every sport ever. Beyond that, everything else is up for
					discussion.
					<br></br>
					<br></br>When he’s not developing concepts and reviewing
					layouts, you’ll probably find Ljubomir running after his two
					little girls and enjoying every second of it. He believes
					he’s a downtowner, but we know he’s living the suburban
					life.
				</p>
			),
			img: ljubo,
		},
		{
			name: "Dusan V.",
			content: (
				<p>
					Well-versed in both the technical and creative sides of web
					designing, Dusan is our master problem solver. In a
					nutshell, he is great at making things work - either turning
					a design into a user-friendly and Google-friendly website or
					writing JavaScript functions.
					<br></br>
					<br></br>He perceives his job as a puzzle and a series of
					happy little problems waiting to be solved. In other words,
					he is working his dream job. Even so, he knows that to solve
					problems every day, you have to spend time not solving
					problems every day. That is why Dusan is a man of great
					passions.
					<br></br>
					<br></br>Whether boxing, cycling or drinking beer, he always
					gives his all. He feels that his favorite pastimes only make
					him better at his job. This is particularly true for the
					beer-drinking part.
				</p>
			),
			img: dzuna,
		},
		{
			name: "Aleksandar S.",
			content: (
				<p>
					Did someone say analysis? Despite the results, this man will
					always suspiciously “raise his eyebrows and tilt his head to
					one side.“ There is no certainty; there is only adventure -
					as any good (skeptical) analyst will tell you. For
					Aleksandar, there is always going to be something
					interesting worth investigating. Fully committed to
					analyzing, fully satisfied when reanalyzing all the
					accumulated data.
					<br></br>
					<br></br>When he’s not behind the screen doing A/B testing
					for work, you’ll find him doing A/B testing for pleasure.
					When his girlfriend asks him to choose between two dishes
					she wants to cook, he always chooses both options - for the
					purpose of split testing, of course. Apart from eating great
					food, he became fond of weightlifting.
				</p>
			),
			img: aleksandars,
		},
		{
			name: "Filip L.",
			content: (
				<p>
					Filip is a self-taught graphic design magician. With years
					of experience under his belt, he’s always looking for
					inventive ways to balance creativity with usability. His
					forward thinking helps him (and us) come up with optimal,
					user-oriented solutions.
					<br></br>
					<br></br>A gamer, a friend, a sports enthusiast (can
					occasionally be seen at the gym), an old soul trapped in a
					young man’s body – those are just a few of the words that
					could best describe Filip. His flaws are most frequently but
					virtues in disguise. And vice versa.
				</p>
			),
			img: filipl,
		},
		{
			name: "Jovan K.",
			content: (
				<p>
					Jovan has a history of accomplishing the seemingly
					impossible in app and web development. He has an extensive
					skillset in several programming languages. – but the .js
					ecosystem will always be his No.1 choice.
					<br></br>
					<br></br>Loves developing strategies and creating models,
					hates wrapping his head around someone else’s architecture,
					zealous about coding and forming an intricate relationship
					with his own code.
					<br></br>
					<br></br>After hours, you can find him catching up with his
					friends, going for a swim, or watching TV gems such as Game
					of Thrones and Office. He really went for Peaky Blinders.
					How do we know that? He talked with a Brummie accent for two
					weeks after the show ended.
				</p>
			),
			img: jovank,
		},
		{
			name: "Aleksandar D.",
			content: (
				<p>
					Passionate about all things development, Aleksandar knows
					his tech stuff. He has nothing but love for Python’s
					versatility, PHP’s coding standards and Laravel’s elegance.
					<br></br>
					<br></br>As a developer, he loves to hate poorly written
					technical documentation. Unsurprisingly, he prefers to use
					his time and effort in coding, debugging, or discussing
					coding with other developers. This highly productive night
					owl says the best ideas come to him in the wee hours of the
					night.
					<br></br>
					<br></br>In his spare time, Aleksandar enjoys exploring the
					great outdoors. When he’s not in the mountains hiking, he
					likes to get lost in video games - a massive fan of the
					Witcher, Apex and Total War scenery.
				</p>
			),
			img: denic,
		},
	]

	return (
		<main>
			<Head>
				<title>Wlastig Analytics - Our Team</title>
				<meta
					name="Wlastig Analytics - Web Analytics, Advertising and
			Consulting"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ServicesHeroStyled backgroundImg={"./img/pages/hero-team.png"}>
				<div className="hero-background">
					<Region first={true}>
						<Wrapper>
							<div className="hero-content ">
								<Stack stackAlign={"end"}>
									<AnimationContainer>
										<h1>Meet our team!</h1>
									</AnimationContainer>
								</Stack>
							</div>
						</Wrapper>
					</Region>
				</div>
			</ServicesHeroStyled>
			<OurTeamStyled>
				<FullBackground background={"var(--primary-shade)"}>
					<Region pt={"0"}>
						{teamArr.map((member, index) => (
							<FullBackground
								key={index}
								background={
									index % 2 !== 0
										? "var(--primary-shade)"
										: "var(--background-light)"
								}
							>
								<Wrapper>
									<Switcher
										className="member-container"
										reverse={index % 2 === 0 ? true : false}
									>
										<div className="img-container">
											<Image
												width={350}
												height={300}
												src={member.img}
												alt="team member"
											></Image>
										</div>
										<Stack
											className="member-content-container"
											stackJustify={"center"}
											stackAlign={"flex-start"}
										>
											<h4>{member.name}</h4>
											{member.content}
										</Stack>
									</Switcher>
								</Wrapper>
							</FullBackground>
						))}
					</Region>
				</FullBackground>
				<Shapedivider
					position={"bottom"}
					rotation={"0"}
					height={"80px"}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
					>
						<path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
					</svg>
				</Shapedivider>
			</OurTeamStyled>
			<Modal></Modal>
		</main>
	)
}

export const OurTeamStyled = styled.div`
	position: relative;
	img {
		object-fit: contain;
		margin-inline: auto;
	}

	.img-container {
		display: flex;
		align-items: flex-end;
	}

	.shapedivider {
		z-index: -1;
	}

	.member-container {
		padding-block-start: 2rem;
	}

	.member-content-container {
		padding-block-end: 1rem;
	}

	@media (max-width: 700px) {
		.member-content-container:last-child {
			padding-block-end: var(--s4);
		}
	}
`

export default ourTeam
