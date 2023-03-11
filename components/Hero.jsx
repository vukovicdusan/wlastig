import React from "react"
import { Wrapper } from "./styles/Wrapper.styled"
import { Region } from "./styles/Region.styled"
import Image from "next/image"
import dollar from "../public/img/dollar.png"
import { Switcher } from "./styles/Switcher.styled"
import { Stack } from "./styles/Stack.styled"
import { Center } from "./styles/Center.styled"
import { Button } from "./styles/Button.styled"
import { HeroStyled } from "./styles/HeroStyled.styled"
import { Shapedivider } from "./styles/Shapedivider.styled"

function Hero() {
	return (
		<HeroStyled>
			<Region>
				<Wrapper>
					<Switcher gap={"s4"}>
						<Center>
							<Stack>
								<h1 className="hero-title">
									&quot;50% of all advertising spent is
									wasted&quot;
									<span>John Wanamaker</span>
								</h1>
								<h4>
									Due to the competitiveness of the digital
									market, nowadays your waste is closer to
									76%!
								</h4>
								<Button>Find your money leaks!</Button>
							</Stack>
						</Center>
						<Center>
							<Image
								src={dollar}
								width={400}
								height={300}
								alt="dollar bill"
								className="hero-img"
							></Image>
						</Center>
					</Switcher>
				</Wrapper>
			</Region>
			<Shapedivider
				fill={"var(--background-light)"}
				position={"bottom"}
				height={"100px"}
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
		</HeroStyled>
	)
}

export default Hero
