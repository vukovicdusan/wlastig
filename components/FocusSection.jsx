import React from "react"
import styles from "../styles/FocusSection.module.css"
import bulb from "../public/img/bulb.svg"
import search from "../public/img/search.svg"
import aim from "../public/img/aim.svg"
import Wrapper from "./layout/Wrapper"
import Region from "./layout/Region"
import BackgroundWrapper from "./layout/BackgroundWrapper"
import IconBox from "./IconBox"

const FocusSection = () => {
	const roiContent =
		"Marketing efforts focused on generating money not likes and vanity metrics."
	const performanceContent =
		"Using machine learning and predictive analytics to stay on top of your competition and anticipate future trends"
	const trackingContent =
		"Using enhanced tracking solutions to discover bottom line movers"
	return (
		<BackgroundWrapper bckg={"#083d77"}>
			<Wrapper>
				<Region>
					<div className={styles.focusStack}>
						<div className={styles.focusSwitcher}>
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
						</div>
						<button className="button">Contact us now</button>
					</div>
				</Region>
			</Wrapper>
		</BackgroundWrapper>
	)
}

export default FocusSection
