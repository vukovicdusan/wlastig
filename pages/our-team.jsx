import React from "react"
import styled from "styled-components"
import AnimationContainer from "../components/AnimationContainer"
import Image from "next/image"
import { Region } from "../components/styles/Region.styled"
import { ServicesHeroStyled } from "../components/styles/services/ServicesHeroStyled.styled"
import { Stack } from "../components/styles/Stack.styled"
import { Switcher } from "../components/styles/Switcher.styled"
import { Wrapper } from "../components/styles/Wrapper.styled"
import { teamArr } from "../public/content/team"
import { FullBackground } from "../components/styles/FullBackground.styled"
import { Shapedivider } from "../components/styles/Shapedivider.styled"
import Head from "next/head"
import Modal from "../components/Modal"

const ourTeam = () => {
	return (
		<>
			<Head>
				<title>Wlastig Analytics - Our Team</title>
				<meta
					name="description"
					content="Wanna hear a great story?
					A moving story about a brave company that made use of data on her way to become a market leader and a household brand. What company are we talking about? Yours!"
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
		</>
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
