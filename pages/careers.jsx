import React from "react"
import Modal from "../components/Modal"
import { Box } from "../components/styles/Box.styled"
import { Region } from "../components/styles/Region.styled"
import { Stack } from "../components/styles/Stack.styled"
import { UnderlineStyled } from "../components/styles/UnderlineStyled.styled"
import { Wrapper } from "../components/styles/Wrapper.styled"
import { Button } from "../components/styles/Button.styled"
import { StyledText } from "../components/styles/StyledText.styled"
import { Center } from "../components/styles/Center.styled"
import { FullBackground } from "../components/styles/FullBackground.styled"
import { Shapedivider } from "../components/styles/Shapedivider.styled"
import AnimationContainer from "../components/AnimationContainer"
import { Switcher } from "../components/styles/Switcher.styled"

const Careers = () => {
	const careersArr = [
		{
			career: "Software Developer",
			content:
				"We need a software engineer who will be responsible for developing eCommerce cloud solutions for some of well-known world brands. You will be part of the multinational company and work with experienced team members.",
			location: "Belgrade, Serbia",
			type: "full time",
		},
		{
			career: "SEO Specialist",
			content:
				"We need a software engineer who will be responsible for developing eCommerce cloud solutions for some of well-known world brands. You will be part of the multinational company and work with experienced team members.",
			location: "Belgrade, Serbia",
			type: "part time",
		},
		{
			career: "Marketing Cloud Consultant",
			content:
				"We need a software engineer who will be responsible for developing eCommerce cloud solutions for some of well-known world brands. You will be part of the multinational company and work with experienced team members.",
			location: "Belgrade, Serbia",
			type: "full time",
		},
	]
	return (
		<>
			<FullBackground>
				<Region>
					<Wrapper>
						<Stack mb={"var(--s5)"}>
							<Center mt={"var(--s5)"}>
								<AnimationContainer>
									<h1>Careers</h1>
									<UnderlineStyled
										underlinePosition={"center"}
									></UnderlineStyled>
								</AnimationContainer>
							</Center>
							<Switcher switcherJustify={"center"}>
								{careersArr.map((card, index) => (
									<Box
										key={index}
										borderRadius={"15px"}
										boxBackground={"var(--text-dark)"}
										boxColor={"var(--text-light)"}
										maxWidth={"350px"}
									>
										<Stack
											stackAlign={"center"}
											stackJustify={"space-between"}
										>
											<Stack stackAlign={"center"}>
												<UnderlineStyled
													underlineColor={
														"var(--primary-shade)"
													}
												></UnderlineStyled>
												<StyledText
													color={"var(--secondary)"}
													transform={"uppercase"}
												>
													{card.location} |{" "}
													{card.type}
												</StyledText>
												<StyledText
													as={"h3"}
													align={"center"}
												>
													{card.career}
												</StyledText>
												<StyledText align={"center"}>
													{card.content}
												</StyledText>
											</Stack>
											<Button>View Vacancy</Button>
										</Stack>
									</Box>
								))}
							</Switcher>
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
			</FullBackground>
			<Modal></Modal>
		</>
	)
}

export default Careers
