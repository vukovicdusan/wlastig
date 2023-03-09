import React, { useState, useEffect } from "react"
import { sendContactForm } from "../lib/api"
import { InputWrapper } from "./styles/InputWrapper.styled"
import { Stack } from "./styles/Stack.styled"
import { ContactStyled } from "./styles/ContactStyled.styled"
import { Button } from "./styles/Button.styled"

// import Loader from "../components/Loader"

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
					message: e.target.value,
			  })
	}

	return (
		<ContactStyled>
			<Stack
				stackSpace={"s3"}
				onSubmit={onSubmitHandler}
				className="contactStack"
			>
				<div>
					<h3>Improve your Data Quality for FREE!</h3>
					<p>Your decisions are only as good as your data.</p>
				</div>
				{!contactFormProccess.success && contactFormProccess.error ? (
					<p className="error">
						Došlo je do greške. Poruka nije poslata.
					</p>
				) : !contactFormProccess.success &&
				  !contactFormProccess.error ? (
					""
				) : (
					<p className="success">Hvala na poruci! Javljamo se!</p>
				)}
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
				<Button>{props.cta || "Submit"}</Button>
			</Stack>
		</ContactStyled>
	)
}

export default Contact
