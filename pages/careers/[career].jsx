import React from "react"
import { Region } from "../../components/styles/Region.styled"
import { Wrapper } from "../../components/styles/Wrapper.styled"
import { careersArr } from "../../public/content/careersArr"
import { UnderlineStyled } from "../../components/styles/UnderlineStyled.styled"
import AnimationContainer from "../../components/AnimationContainer"
import { Stack } from "../../components/styles/Stack.styled"
import { StyledText } from "../../components/styles/StyledText.styled"
import styled from "styled-components"
import { Shapedivider } from "../../components/styles/Shapedivider.styled"
import Modal from "../../components/Modal"
import Head from "next/head"

export async function getStaticPaths() {
	const careersArrData = careersArr

	const paths = careersArrData.map((career) => {
		return {
			params: { career: `${career.careerSlug}` },
		}
	})
	return { paths, fallback: false }
}

export const getStaticProps = (context) => {
	const careerSlug = context.params.career
	const careerData = careersArr.find(
		(career) => career.careerSlug === careerSlug
	)
	return {
		props: {
			data: careerData,
		},
	}
}

const Career = ({ data }) => {
	return (
		<>
			<Head>
				<title>Wlastig Analytics - {data.careerTitle}</title>
				<meta
					name="description"
					content="Wanna hear a great story?
					A moving story about a brave company that made use of data on her way to become a market leader and a household brand. What company are we talking about? Yours!"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<SingleCareer>
				<Region first={true}>
					<Wrapper>
						<Stack stackSpace={"var(--s5)"} mb={"var(--s5)"}>
							<Stack>
								<AnimationContainer>
									<h1>{data.careerTitle}</h1>
									<UnderlineStyled></UnderlineStyled>
								</AnimationContainer>
								<StyledText as={"h5"} transform={"uppercase"}>
									{data.location} | {data.type}
								</StyledText>
								<p>{data.content}</p>
							</Stack>
							<Stack stackSpace={"var(--s3)"}>
								<div>
									<AnimationContainer>
										<h5>Responsibilities</h5>
										<UnderlineStyled></UnderlineStyled>
									</AnimationContainer>
									<Stack as={"ul"}>
										{data.responsibilities.map(
											(resp, index) => (
												<li key={index}>{resp}</li>
											)
										)}
									</Stack>
								</div>
								<div>
									<AnimationContainer>
										<h5>Requirements</h5>
										<UnderlineStyled></UnderlineStyled>
									</AnimationContainer>

									<Stack as={"ul"}>
										{data.requirements.map(
											(resp, index) => (
												<li key={index}>{resp}</li>
											)
										)}
									</Stack>
								</div>
							</Stack>
						</Stack>
					</Wrapper>
				</Region>
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
				<Modal></Modal>
			</SingleCareer>
		</>
	)
}

export const SingleCareer = styled.div`
	position: relative;
	ul {
		list-style: disc;
		padding-inline-start: 1rem;
	}
`

export default Career
