import React, { useEffect, useState } from "react"
import Head from "next/head"
import styled from "styled-components"
import AnimationContainer from "../components/AnimationContainer"
import Modal from "../components/Modal"
import { Region } from "../components/styles/Region.styled"
import { ServicesHeroStyled } from "../components/styles/services/ServicesHeroStyled.styled"
import { Stack } from "../components/styles/Stack.styled"
import { Wrapper } from "../components/styles/Wrapper.styled"
import { Switcher } from "../components/styles/Switcher.styled"
import { InputWrapper } from "../components/styles/InputWrapper.styled"
import { Button } from "../components/styles/Button.styled"
import { Shapedivider } from "../components/styles/Shapedivider.styled"
import { TextMedium } from "../components/styles/TextMedium.styled"
import CheckSvg from "../components/svg/CheckSvg"
import { sendContactForm } from "../lib/api"
import Loader from "../components/Loader"

const Contact = () => {
	const [hasMounted, setHasMounted] = useState(false)
	const [contactFormData, setContactFormData] = useState({ audit: false })
	const [contactFormProccess, setContactFormProccess] = useState({
		success: false,
		error: false,
		loading: false,
	})

	useEffect(() => {
		setHasMounted(true)
	}, [])

	if (!hasMounted) {
		return null
	}
	const onSubmitHandler = async (e) => {
		e.preventDefault()
		setContactFormProccess((prev) => ({ ...prev, loading: true }))
		try {
			await sendContactForm(contactFormData)
			setContactFormProccess((prev) => ({
				...prev,
				success: true,
				loading: false,
			}))
		} catch (err) {
			console.log(err)
			setContactFormProccess((prev) => ({
				...prev,
				error: true,
				loading: false,
			}))
		}
	}

	const inputHandler = (e) => {
		switch (e.target.name) {
			case "email":
				setContactFormData({
					...contactFormData,
					email: e.target.value,
				})
				break
			case "name":
				setContactFormData({ ...contactFormData, name: e.target.value })
				break
			case "phone":
				setContactFormData({
					...contactFormData,
					phone: e.target.value,
				})
				break
			case "company":
				setContactFormData({
					...contactFormData,
					company: e.target.value,
				})
				break
			case "website":
				setContactFormData({
					...contactFormData,
					website: e.target.value,
				})
				break
			case "comments":
				setContactFormData({
					...contactFormData,
					comments: e.target.value,
				})
				break
			default:
				""
		}
	}

	return (
		<ContactPageStyled>
			<Head>
				<title>Wlastig Analytics - Contact Us</title>
				<meta
					name="description"
					content="Wanna hear a great story?
					A moving story about a brave company that made use of data on her way to become a market leader and a household brand. What company are we talking about? Yours!"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ServicesHeroStyled backgroundImg={"./img/pages/hero-contact.png"}>
				<div className="hero-background">
					<Region>
						<Wrapper>
							<div className="hero-content ">
								<Stack stackAlign={"end"}>
									<AnimationContainer>
										<h1>Let&#39;s talk!</h1>
									</AnimationContainer>
								</Stack>
							</div>
						</Wrapper>
					</Region>
				</div>
			</ServicesHeroStyled>
			<Region>
				<Wrapper>
					<Switcher gap={"var(--s3)"} mb={"var(--s5)"}>
						<Stack stackJustify={"center"} stackSpace={"var(--s2)"}>
							<AnimationContainer>
								<h2>Are We The Best Fit For You?</h2>
							</AnimationContainer>
							<AnimationContainer delay={2}>
								<TextMedium>
									You&#39;ll love working with Wlastig if…
								</TextMedium>
							</AnimationContainer>
							<AnimationContainer direction={"translateX"}>
								<Stack as="ul">
									<li>
										<CheckSvg
											svgFill={"#4bb543"}
										></CheckSvg>
										You&#39;re big on communication
									</li>
									<li>
										<CheckSvg
											svgFill={"#4bb543"}
										></CheckSvg>
										You&#39;re not afraid to explore new
										ideas with a proven partner
									</li>
									<li>
										<CheckSvg
											svgFill={"#4bb543"}
										></CheckSvg>
										You treat marketing like an investment,
										not a slot machine
									</li>
									<li>
										<CheckSvg
											svgFill={"#4bb543"}
										></CheckSvg>
										You&#39;ve got enough bandwidth to
										handle much more business
									</li>
								</Stack>
							</AnimationContainer>
						</Stack>
						<AnimationContainer>
							<Stack
								className="form-container"
								stackSpace={"var(--s2)"}
								stackJustify={"center"}
								stackAlign={"center"}
							>
								<Stack
									stackJustify={"center"}
									stackAlign={"center"}
								>
									<h2>Reach Out!</h2>
									<span>
										<a
											className="text-red"
											href="mailto: info@wlastig.com"
										>
											info@wlastig.com
										</a>
									</span>
									<span>
										<a
											className="text-red"
											href="tel: +38169123456"
										>
											+38169123456
										</a>
									</span>
								</Stack>
								<Stack
									as="form"
									stackJustify={"center"}
									stackAlign={"center"}
									onSubmit={onSubmitHandler}
								>
									<Switcher elCount={2} flexBasis={"20rem"}>
										<InputWrapper>
											<input
												type="text"
												name="name"
												id="name"
												autoCapitalize="none"
												autoCorrect="off"
												required
												onChange={inputHandler}
											/>
											<label htmlFor="name">Name</label>
										</InputWrapper>
										<InputWrapper>
											<input
												type="text"
												name="email"
												id="email"
												autoCapitalize="none"
												autoCorrect="off"
												required
												pattern="[^@]+@[^\.]+\..+"
												onChange={inputHandler}
											/>
											<label htmlFor="email">Email</label>
										</InputWrapper>
									</Switcher>
									<Switcher elCount={2} flexBasis={"20rem"}>
										<InputWrapper>
											<input
												type="tel"
												name="phone"
												id="phone"
												autoCapitalize="none"
												autoCorrect="off"
												onChange={inputHandler}
											/>
											<label htmlFor="website">
												Your Phone Number
											</label>
										</InputWrapper>
										<InputWrapper>
											<input
												type="text"
												name="company"
												id="company"
												autoCapitalize="none"
												autoCorrect="off"
												required
												onChange={inputHandler}
											/>
											<label htmlFor="company">
												Company Name
											</label>
										</InputWrapper>
									</Switcher>
									<InputWrapper>
										<input
											type="text"
											name="website"
											id="website"
											autoCapitalize="none"
											autoCorrect="off"
											onChange={inputHandler}
										/>
										<label htmlFor="website">
											Company Website
										</label>
									</InputWrapper>
									<InputWrapper>
										<textarea
											id="comments"
											name="comments"
											rows="4"
											onChange={inputHandler}
										></textarea>
										<label htmlFor="website">
											Any Comments?
										</label>
									</InputWrapper>
									<div className="button-loader">
										<Button>Send My Message</Button>
										{contactFormProccess.loading ? (
											<Loader></Loader>
										) : null}
									</div>
								</Stack>
								{!contactFormProccess.success &&
								contactFormProccess.error ? (
									<p className="error">
										Something went wrong. Message was not
										sent.
									</p>
								) : !contactFormProccess.success &&
								  !contactFormProccess.error ? (
									""
								) : (
									<p className="success">
										Thank you for your message! We will
										contact you ASAP!
									</p>
								)}
								<p>Want a quote and a game plan fast?</p>
								<button className="text-red arrow ghost-button">
									Start your custom marketing plan now
									<svg
										clipRule="evenodd"
										fillRule="evenodd"
										strokeLinejoin="round"
										strokeMiterlimit="2"
										viewBox="0 0 24 24"
										height={24}
										width={24}
										xmlns="http://www.w3.org/2000/svg"
										fill={"var(--secondary)"}
									>
										<path
											d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
											fillRule="nonzero"
										/>
									</svg>
								</button>
							</Stack>
						</AnimationContainer>
					</Switcher>
				</Wrapper>
				<Shapedivider
					position={"bottom"}
					rotation={"0"}
					height={"80px"}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
					>
						<path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
					</svg>
				</Shapedivider>
			</Region>
			<Modal></Modal>
		</ContactPageStyled>
	)
}

export const ContactPageStyled = styled.div`
	position: relative;

	.form-container {
		box-shadow: var(--box-shadow);
		padding: var(--s1) var(--s0);
		border-radius: 5px;
		margin: 0.5rem;
	}

	.text-red {
		color: var(--secondary);
	}

	.form-container p,
	.form-container .text-red {
		font-family: var(--poppinsbold);
	}

	ul li {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
	}
	.arrow {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.4rem;
	}

	.ghost-button {
		background: none;
		border: none;
		cursor: pointer;
	}

	.ghost-button:hover {
		text-decoration: underline;
	}

	.success {
		color: #4bb543;
	}

	.error {
		color: indianred;
	}

	.button-loader {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 3rem;
	}
`

export default Contact
