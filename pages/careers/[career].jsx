import React from "react"
import { Region } from "../../components/styles/Region.styled"
import { Wrapper } from "../../components/styles/Wrapper.styled"
import { careersArr } from "../../public/careersArr"
import { UnderlineStyled } from "../../components/styles/UnderlineStyled.styled"
import AnimationContainer from "../../components/AnimationContainer"
import { Stack } from "../../components/styles/Stack.styled"
import { StyledText } from "../../components/styles/StyledText.styled"
import styled from "styled-components"

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
		<SingleCareer>
			<Region first={true}>
				<Wrapper>
					<Stack stackSpace={"var(--s5)"}>
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
									{data.requirements.map((resp, index) => (
										<li key={index}>{resp}</li>
									))}
								</Stack>
							</div>
						</Stack>
					</Stack>
				</Wrapper>
			</Region>
		</SingleCareer>
	)
}

export const SingleCareer = styled.div`
	ul {
		list-style: disc;
		padding-inline-start: 1rem;
	}
`

export default Career
