import React, { useEffect, useState } from "react"
import Contact from "./Contact"
import { Shapedivider } from "./styles/Shapedivider.styled"
import { FullBackground } from "./styles/FullBackground.styled"
import { Wrapper } from "./styles/Wrapper.styled"
import { Region } from "./styles/Region.styled"
import { Switcher } from "./styles/Switcher.styled"
import { Stack } from "./styles/Stack.styled"
import { ContactFormSectionStyled } from "./styles/ContactFormSectionStyled.styled"
import AnimationContainer from "./AnimationContainer"
import { useRouter } from "next/router"

const ContactFormSection = (props) => {
	const [formSubmited, setFormSubmited] = useState(false)
	const router = useRouter()
	const page = router.asPath
	// console.log(router)

	const onFormSubmitHandler = (isSubmited) => {
		setFormSubmited(isSubmited)
	}

	useEffect(() => {
		formSubmited &&
			router.push(
				{ pathname: "/thank-you", query: { page: page } },
				"/thank-you"
			)
	}, [formSubmited, router, page])

	return (
		<FullBackground background={"var(--primary)"}>
			{props.shapedivider ? (
				<Shapedivider
					height={"130px"}
					rotation={"0"}
					fill={props.shapedividerColor || "var(--background-light)"}
				>
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
					>
						<path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"></path>
					</svg>
				</Shapedivider>
			) : null}
			<Region>
				<Wrapper>
					<ContactFormSectionStyled>
						<Switcher reverse={true} gap={"s5"}>
							<Stack
								stackJustify={"center"}
								stackAlign={"center"}
							>
								<AnimationContainer>
									<h3 className="title-xl">{props.title}</h3>
									<p className="title-l">{props.subTitle}</p>
								</AnimationContainer>
							</Stack>
							<Contact
								cta={props.cta}
								onFormSubmitHandler={onFormSubmitHandler}
							></Contact>
						</Switcher>
					</ContactFormSectionStyled>
				</Wrapper>
			</Region>
		</FullBackground>
	)
}

export default ContactFormSection
