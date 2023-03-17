import React, { useState, useEffect } from "react"
import { sendContactForm } from "../lib/api"
import { InputWrapper } from "./styles/InputWrapper.styled"
import { Stack } from "./styles/Stack.styled"
import { ContactStyled } from "./styles/ContactStyled.styled"
import { Button } from "./styles/Button.styled"
import Loader from "./Loader"
import Image from "next/image"
import img from "../public/img/popup_pic.png"
import { Switcher } from "./styles/Switcher.styled"

const Contact = (props) => {
	const [hasMounted, setHasMounted] = useState(false)
	const [contactFormData, setContactFormData] = useState({})
	const [contactFormProccess, setContactFormProccess] = useState({
		success: false,
		error: false,
		loading: false,
	})

	useEffect(() => {
		setHasMounted(true)
	}, [])

	useEffect(() => {
		props.onFormSubmitHandler
			? props.onFormSubmitHandler(
					contactFormProccess.success,
					contactFormData
			  )
			: null
	}, [contactFormProccess.success, props])

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
		e.target.name === "email"
			? setContactFormData({ ...contactFormData, email: e.target.value })
			: setContactFormData({
					...contactFormData,
					name: e.target.value,
			  })
	}

	return (
		<ContactStyled popup={props.popup} onSubmit={onSubmitHandler}>
			<Stack stackSpace={"var(--s3)"} className="contactStack">
				<div>
					<h3>Improve your Data Quality for FREE!</h3>
					<p>Your decisions are only as good as your data.</p>
				</div>
				{!contactFormProccess.success && contactFormProccess.error ? (
					<p className="error">
						Something went wrong. Message was not sent.
					</p>
				) : !contactFormProccess.success &&
				  !contactFormProccess.error ? (
					""
				) : (
					<p className="success">
						Thak you for your message! We will contact you ASAP!
					</p>
				)}
				<Switcher
					className="full-width"
					switcherAlign={"center"}
					gap={"var(--s5)"}
					elCount={"2"}
					flexBasis={"20rem"}
				>
					<Stack stackSpace={"var(--s3)"}>
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
					</Stack>
					{props.popup ? (
						<Image
							src={img}
							alt="popup img"
							height={250}
							width={250}
						></Image>
					) : null}
				</Switcher>
				<div className="button-loader">
					<Button>{props.cta || "Submit"}</Button>
					{contactFormProccess.loading ? <Loader></Loader> : null}
				</div>
			</Stack>
		</ContactStyled>
	)
}

export default Contact
