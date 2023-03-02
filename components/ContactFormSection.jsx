import React from "react"
import Region from "./layout/Region"
import Wrapper from "./layout/Wrapper"
import styles from "../styles/ContactFormSection.module.css"
import Contact from "./Contact"

const ContactFormSection = () => {
	return (
		<div className={styles.background}>
			<div className={styles.shapedivider}>
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"></path>
				</svg>
			</div>
			<Region>
				<Wrapper>
					<div className={styles.switcher}>
						<Contact></Contact>
						<div className={styles.message}>
							<h3 className="title-xl">
								150+ Point Audit For Data Quality
							</h3>
							<p className="title-l">(3X The Industry Average)</p>
						</div>
					</div>
				</Wrapper>
			</Region>
		</div>
	)
}

export default ContactFormSection
