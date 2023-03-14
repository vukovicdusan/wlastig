import { useRouter } from "next/router"
import React from "react"
import { FullBackground } from "../components/styles/FullBackground.styled"
import { Region } from "../components/styles/Region.styled"
import { Stack } from "../components/styles/Stack.styled"
import { Switcher } from "../components/styles/Switcher.styled"
import { ThankYouStyled } from "../components/styles/ThankYouStyled.styled"
import { Wrapper } from "../components/styles/Wrapper.styled"
import CheckSvg from "../components/CheckSvg"

const ThankYou = () => {
	const [selected, setSelected] = React.useState({
		ga: false,
		gtm: false,
		aw: false,
	})

	const cardSelectHandler = (card) => {
		switch (card) {
			case "ga":
				selected.ga
					? setSelected({ ...selected, ga: false })
					: setSelected({ ...selected, ga: true })
				break
			case "gtm":
				selected.gtm
					? setSelected({ ...selected, gtm: false })
					: setSelected({ ...selected, gtm: true })
				break
			case "aw":
				selected.aw
					? setSelected({ ...selected, aw: false })
					: setSelected({ ...selected, aw: true })
				break
			default:
				""
		}
	}

	console.log(selected)
	const router = useRouter()
	console.log("this is thank you page", router.query.page)
	return (
		<FullBackground background={"var(--primary)"}>
			<ThankYouStyled>
				<h1>Thank You!</h1>
				<Region>
					<Wrapper>
						<Switcher switcherJustify={"center"}>
							<div
								onClick={() => cardSelectHandler("ga")}
								className={`audit-card--outer ${
									selected.ga ? "selected" : ""
								}`}
							>
								{selected.ga ? (
									<span>
										{router.query.page ===
										"/advertising" ? (
											<CheckSvg></CheckSvg>
										) : (
											<p>FREE</p>
										)}
									</span>
								) : null}

								<div className="audit-card--inner">
									<Stack
										stackSpace={"s3"}
										stackJustify={"space-around"}
									>
										<h4>GA AUDIT</h4>
										<p>
											Lorem ipsum dolor sit amet
											consectetur adipisicing elit. Quae
											quidem, beatae mollitia minus quod
											dolore vero natus maiores adipisci
											repudiandae. Earum, non illo illum
											quod eligendi suscipit provident
											nisi dolores.
										</p>
										<span>350$</span>
									</Stack>
								</div>
							</div>
							<div
								onClick={() => cardSelectHandler("gtm")}
								className={`audit-card--outer ${
									selected.gtm ? "selected" : ""
								}`}
							>
								{selected.gtm ? (
									<span>
										<CheckSvg></CheckSvg>
									</span>
								) : null}

								<div className="audit-card--inner">
									<Stack
										stackSpace={"s3"}
										stackJustify={"space-around"}
									>
										<h4>GTM AUDIT</h4>
										<p>
											Lorem ipsum dolor sit amet
											consectetur adipisicing elit. Quae
											quidem, beatae mollitia minus quod
											dolore vero natus maiores adipisci
											repudiandae. Earum, non illo illum
											quod eligendi suscipit provident
											nisi dolores.
										</p>
										<span>350$</span>
									</Stack>
								</div>
							</div>
							<div
								onClick={() => cardSelectHandler("aw")}
								className={`audit-card--outer ${
									selected.aw ? "selected" : ""
								}`}
							>
								{selected.aw ? (
									<span>
										{router.query.page ===
										"/advertising" ? (
											<p>FREE</p>
										) : (
											<CheckSvg></CheckSvg>
										)}
									</span>
								) : null}

								<div className="audit-card--inner">
									<Stack
										stackSpace={"s3"}
										stackJustify={"space-around"}
									>
										<h4>AW AUDIT</h4>
										<p>
											Lorem ipsum dolor sit amet
											consectetur adipisicing elit. Quae
											quidem, beatae mollitia minus quod
											dolore vero natus maiores adipisci
											repudiandae. Earum, non illo illum
											quod eligendi suscipit provident
											nisi dolores.
										</p>
										<span>350$</span>
									</Stack>
								</div>
							</div>
						</Switcher>
					</Wrapper>
				</Region>
			</ThankYouStyled>
		</FullBackground>
	)
}

export default ThankYou
