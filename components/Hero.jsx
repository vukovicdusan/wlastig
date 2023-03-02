import React from "react"
import Wrapper from "./layout/Wrapper"
import Region from "./layout/Region"
import styles from "../styles/Hero.module.css"
import Image from "next/image"
import dollar from "../public/img/dollar.png"

function Hero() {
	return (
		<div className={styles.hero}>
			<Region>
				<Wrapper>
					<div className={styles.heroSwitcher}>
						<div className={styles.titleStack}>
							<h1 className={styles.heroTitle}>
								&quot;50% of all advertising spent is
								wasted&quot;
								<span>John Wanamaker</span>
							</h1>
							<h4>
								Due to the competitiveness of the digital
								market, nowadays your waste is closer to 76%!
							</h4>
							<button className="button">
								Find your money leaks!
							</button>
						</div>
						<div className={styles.center}>
							<Image
								src={dollar}
								width={400}
								height={300}
								alt="dollar bill"
								className={styles.heroImg}
							></Image>
						</div>
					</div>
				</Wrapper>
			</Region>
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
		</div>
	)
}

export default Hero
