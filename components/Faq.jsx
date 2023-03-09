import React from "react"
import AccordionItem from "./AccordionItem"
import AnimationContainer from "./AnimationContainer"
import { Center } from "./styles/Center.styled"
import { FullBackground } from "./styles/FullBackground.styled"
import { Region } from "./styles/Region.styled"
import { Stack } from "./styles/Stack.styled"
import { UnderlineStyled } from "./styles/UnderlineStyled.styled"
import { Wrapper } from "./styles/Wrapper.styled"

const Faq = (props) => {
	return (
		<FullBackground background={"var(--primary)"}>
			<Region>
				<Wrapper>
					<Center>
						<AnimationContainer>
							<Center>
								<h2 className="text-light">FAQ</h2>
								<UnderlineStyled
									underlinePosition={"center"}
								></UnderlineStyled>
							</Center>
						</AnimationContainer>
						<Stack className="mr-t-4" stackSpace={"s3"}>
							{props.faqArr.map((faq, index) => (
								<AnimationContainer
									direction={"translateX"}
									distance={"-500px"}
									delay={index}
									key={index}
								>
									<AccordionItem
										accTitle={faq.title}
										accBody={faq.body}
										color={props.color}
									></AccordionItem>
								</AnimationContainer>
							))}
						</Stack>
					</Center>
				</Wrapper>
			</Region>
		</FullBackground>
	)
}

export default Faq
