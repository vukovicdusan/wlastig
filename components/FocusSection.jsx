import React from "react"
// import styles from "../styles/FocusSection.module.css"
import bulb from "../public/img/bulb.svg"
import search from "../public/img/search.svg"
import aim from "../public/img/aim.svg"
import { Wrapper } from "./styles/Wrapper.styled"
import { Region } from "./styles/Region.styled"
import IconBox from "./IconBox"
import { FullBackground } from "./styles/FullBackground.styled"
import { Stack } from "./styles/Stack.styled"
import { Switcher } from "./styles/Switcher.styled"
import { Button } from "./styles/Button.styled"

const FocusSection = () => {
	const roiContent =
		"Marketing efforts focused on generating money not likes and vanity metrics."
	const performanceContent =
		"Using machine learning and predictive analytics to stay on top of your competition and anticipate future trends"
	const trackingContent =
		"Using enhanced tracking solutions to discover bottom line movers"
	return (
		<FullBackground background={"var(--primary)"}>
			<Wrapper>
				<Region>
					<Stack stackAlign={"center"} stackSpace={"s5"}>
						<Switcher
							switcherJustify={"center"}
							flexBasis={"40"}
							elCount={"3"}
							gap={"s4"}
						>
							<IconBox
								img={aim}
								width={100}
								height={100}
								title={"ROI Focused"}
								content={roiContent}
							></IconBox>
							<IconBox
								img={bulb}
								width={100}
								height={100}
								title={"Performance Forecasting"}
								content={performanceContent}
							></IconBox>

							<IconBox
								img={search}
								width={100}
								height={100}
								title={"Advanced Tracking"}
								content={trackingContent}
							></IconBox>
						</Switcher>
						<Button>Contact us now</Button>
					</Stack>
				</Region>
			</Wrapper>
		</FullBackground>
	)
}

export default FocusSection
