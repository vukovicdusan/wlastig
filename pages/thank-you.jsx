import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { FullBackground } from "../components/styles/FullBackground.styled"
import { Region } from "../components/styles/Region.styled"
import { Stack } from "../components/styles/Stack.styled"
import { Switcher } from "../components/styles/Switcher.styled"
import { ThankYouStyled } from "../components/styles/ThankYouStyled.styled"
import { Wrapper } from "../components/styles/Wrapper.styled"
import { Center } from "../components/styles/Center.styled"
import AnimationContainer from "../components/AnimationContainer"
import CheckSvg from "../components/CheckSvg"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../public/firebase/firebase"
import { serverTimestamp } from "firebase/firestore"
import { Button } from "../components/styles/Button.styled"
import Loader from "../components/Loader"

const ThankYou = () => {
	const [selected, setSelected] = useState({
		ga: { focus: false, disabled: false },
		gtm: { focus: false, disabled: false },
		aw: { focus: false, disabled: false },
	})
	const [protect, setProtect] = useState(true)
	const [loading, setLoading] = useState(false)
	const router = useRouter()
	const data = router.query

	useEffect(() => {
		if (!router.query.page) {
			router.push("/")
		}
		setProtect(false)

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
		router.push("/")
	}

	return (
		<FullBackground
			className={protect ? "display-none" : ""}
			background={"var(--primary)"}
		>
			<ThankYouStyled>
				<Region>
					<Wrapper>
						<AnimationContainer>
							<Center>
								<h1>Thank You!</h1>
							</Center>
						</AnimationContainer>
						<Switcher switcherJustify={"center"}>
							<div
								onClick={() => cardSelectHandler("ga")}
								className={`audit-card--outer ${
									selected.ga.focus ? "selected" : ""
								} ${selected.ga.disabled ? "disabled" : ""}`}
							>
								{selected.ga.focus ? (
									<span>
										{router.query.page ===
											"/web-analytics" ||
										router.query.page === "/consulting" ||
										router.query.page === "/" ? (
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
									selected.aw.focus ? "selected" : ""
								} ${selected.aw.disabled ? "disabled" : ""}`}
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
										<span>400$</span>
									</Stack>
								</div>
							</div>
						</Switcher>

						<div className="button-loader mr-t-4">
							<Button onClick={firebaseWriteHandler}>
								Request!
							</Button>
							{loading ? <Loader></Loader> : null}
						</div>
					</Wrapper>
				</Region>
			</ThankYouStyled>
		</FullBackground>
	)
}

export default ThankYou
