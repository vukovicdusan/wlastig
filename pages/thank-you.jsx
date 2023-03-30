import { useRouter } from "next/router"
import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { FullBackground } from "../components/styles/FullBackground.styled"
import { Region } from "../components/styles/Region.styled"
import { Stack } from "../components/styles/Stack.styled"
import { Switcher } from "../components/styles/Switcher.styled"
import { Wrapper } from "../components/styles/Wrapper.styled"
import { Center } from "../components/styles/Center.styled"
import AnimationContainer from "../components/AnimationContainer"
import CheckSvg from "../components/svg/CheckSvg"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../public/firebase/firebase"
import { serverTimestamp } from "firebase/firestore"
import { Button } from "../components/styles/Button.styled"
import Loader from "../components/Loader"
import ModalCtx from "../public/store/ModalCtx"
import { StyledText } from "../components/styles/StyledText.styled"
import { TextMedium } from "../components/styles/TextMedium.styled"

const ThankYou = () => {
	const [selected, setSelected] = useState({
		ga: { focus: false, disabled: false },
		gtm: { focus: false, disabled: false },
		aw: { focus: false, disabled: false },
	})
	const [protect, setProtect] = useState(true)
	const [loading, setLoading] = useState(false)
	const [isRequestSent, setIsRequestSent] = useState(false)
	const router = useRouter()
	const data = router.query
	const modalCtx = useContext(ModalCtx)

	useEffect(() => {
		if (!router.query.page) {
			router.push("/")
		}
		setProtect(false)
		modalCtx.modalOpenedHandler()
		router.query.page === "/web-analytics" ||
		router.query.page === "/consulting" ||
		router.query.page === "/"
			? setSelected({
					...selected,
					ga: { focus: true, disabled: true },
			  })
			: setSelected({
					...selected,
					aw: { focus: true, disabled: true },
			  })
	}, [])

	const cardSelectHandler = (card) => {
		switch (card) {
			case "ga":
				selected.ga.focus
					? setSelected({
							...selected,
							ga: { ...selected.ga, focus: false },
					  })
					: setSelected({
							...selected,
							ga: { ...selected.ga, focus: true },
					  })
				break
			case "gtm":
				selected.gtm.focus
					? setSelected({
							...selected,
							gtm: { ...selected.gtm, focus: false },
					  })
					: setSelected({
							...selected,
							gtm: { ...selected.gtm, focus: true },
					  })
				break
			case "aw":
				selected.aw.focus
					? setSelected({
							...selected,
							aw: { ...selected.aw, focus: false },
					  })
					: setSelected({
							...selected,
							aw: { ...selected.aw, focus: true },
					  })
				break
			default:
				""
		}
	}

	const firebaseWriteHandler = async () => {
		setLoading(true)
		await addDoc(collection(db, "clients"), {
			name: data.name,
			mail: data.mail,
			ga: selected.ga.focus,
			gtm: selected.gtm.focus,
			aw: selected.aw.focus,
			created_at: serverTimestamp(),
		})
		setLoading(false)
		// setIsRequestSent(true)
		modalCtx.auditSentHandler()
	}

	return (
		<FullBackground
			className={protect ? "display-none" : ""}
			background={"var(--primary)"}
		>
			<ThankYouStyled>
				<Region first={true}>
					<Wrapper>
						<AnimationContainer>
							<Center>
								<h1>Thank You!</h1>
							</Center>
						</AnimationContainer>
						{!modalCtx.auditSent ? (
							<>
								<Switcher
									switcherJustify={"center"}
									mb={"var(--s3)"}
								>
									<div
										onClick={() => cardSelectHandler("ga")}
										className={`audit-card--outer ${
											selected.ga.focus ? "selected" : ""
										} ${
											selected.ga.disabled
												? "disabled"
												: ""
										}`}
									>
										{selected.ga.focus ? (
											<span>
												{router.query.page ===
													"/web-analytics" ||
												router.query.page ===
													"/consulting" ||
												router.query.page === "/" ? (
													<p>FREE</p>
												) : (
													<CheckSvg></CheckSvg>
												)}
											</span>
										) : null}

										<div className="audit-card--inner">
											<Stack
												stackSpace={"var(--s3)"}
												stackJustify={"space-around"}
											>
												<h4>GA AUDIT</h4>
												<p>
													Lorem ipsum dolor sit amet
													consectetur adipisicing
													elit. Quae quidem, beatae
													mollitia minus quod dolore
													vero natus maiores adipisci
													repudiandae. Earum, non illo
													illum quod eligendi suscipit
													provident nisi dolores.
												</p>
												<span>300$</span>
											</Stack>
										</div>
									</div>
									<div
										onClick={() => cardSelectHandler("gtm")}
										className={`audit-card--outer ${
											selected.gtm.focus ? "selected" : ""
										}`}
									>
										{selected.gtm.focus ? (
											<span>
												<CheckSvg></CheckSvg>
											</span>
										) : null}

										<div className="audit-card--inner">
											<Stack
												stackSpace={"var(--s3)"}
												stackJustify={"space-around"}
											>
												<h4>GTM AUDIT</h4>
												<p>
													Lorem ipsum dolor sit amet
													consectetur adipisicing
													elit. Quae quidem, beatae
													mollitia minus quod dolore
													vero natus maiores adipisci
													repudiandae. Earum, non illo
													illum quod eligendi suscipit
													provident nisi dolores.
												</p>
												<span>350$</span>
											</Stack>
										</div>
									</div>
									<div
										onClick={() => cardSelectHandler("aw")}
										className={`audit-card--outer ${
											selected.aw.focus ? "selected" : ""
										} ${
											selected.aw.disabled
												? "disabled"
												: ""
										}`}
									>
										{selected.aw.focus ? (
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
												stackSpace={"var(--s3)"}
												stackJustify={"space-around"}
											>
												<h4>AW AUDIT</h4>
												<p>
													Lorem ipsum dolor sit amet
													consectetur adipisicing
													elit. Quae quidem, beatae
													mollitia minus quod dolore
													vero natus maiores adipisci
													repudiandae. Earum, non illo
													illum quod eligendi suscipit
													provident nisi dolores.
												</p>
												<span>400$</span>
											</Stack>
										</div>
									</div>
								</Switcher>
								<div className="button-loader">
									<Button onClick={firebaseWriteHandler}>
										Request!
									</Button>
									{loading ? <Loader></Loader> : null}
								</div>
							</>
						) : (
							<TextMedium as={"div"}>
								<StyledText
									align={"center"}
									family={"var(--poppinsbold)"}
									color={"var(--success-color)"}
								>
									Thank you for your request! We will get back
									to you ASAP!
								</StyledText>
							</TextMedium>
						)}
					</Wrapper>
				</Region>
			</ThankYouStyled>
		</FullBackground>
	)
}

export const ThankYouStyled = styled.div`
	h1 {
		color: var(--text-light);
		margin-bottom: var(--s4);
	}

	h4 {
		margin-inline: auto;
	}

	.display-none {
		display: none;
	}

	.disabled {
		pointer-events: none;
	}

	.audit-card--outer {
		position: relative;
		color: #2780ba;
		background: #fff;
		border-radius: 20px;
		padding: 0.5rem;
		transition: all 0.4s ease;
		max-width: 20rem;
		cursor: pointer;
	}

	.audit-card--outer:hover {
		transform: scale(1.02) translateY(-5px);
	}

	.audit-card--outer > span {
		position: absolute;
		top: 0;
		right: 0;
		width: 150px;
		height: 150px;
		background-color: #fff;
		clip-path: polygon(100% 0, 0 0, 100% 100%);
		border-top-right-radius: 20px;
	}

	.audit-card--outer > span p {
		font-family: var(--poppinsbold);
		color: #2780ba;
		transform: translate(70px, 75px) rotateZ(45deg);
	}

	.audit-card--outer > span svg {
		transform: translate(85px, 35px);
		width: 32px;
		height: 32px;
		fill: #2780ba;
	}

	.audit-card--outer.selected {
		background: linear-gradient(
			180deg,
			hsla(204, 65%, 44%, 1) 0%,
			hsla(194, 83%, 69%, 1) 100%
		);
		color: var(--text-light);
	}

	.audit-card--outer.selected .audit-card--inner {
		border: 2px solid #fff;
	}

	.audit-card--inner {
		border: 2px solid #2780ba;
		border-radius: 20px;
		padding: 1rem 1.5rem;
	}
	.audit-card--inner div {
		aspect-ratio: 3 / 4;
	}

	.audit-card--inner span {
		font-size: var(--s3);
		font-family: var(--poppinsbold);
		margin-inline: auto;
	}

	.button-loader {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 3rem;
	}
`

export default ThankYou
