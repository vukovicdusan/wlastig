import React, { useState, useEffect } from "react"
import * as styles from "../styles/Contact.module.css"
import { sendContactForm } from "../lib/api"
// import Loader from "../components/Loader"

const Contact = () => {
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
		<form onSubmit={onSubmitHandler} className={styles.contactStack}>
			<div>
				<h3>Improve your Data Quality for FREE!</h3>
				<p>Your decisions are only as good as your data.</p>
			</div>
			{!contactFormProccess.success && contactFormProccess.error ? (
				<p className={styles.error}>
					Došlo je do greške. Poruka nije poslata.
				</p>
			) : !contactFormProccess.success && !contactFormProccess.error ? (
				""
			) : (
				<p className={styles.success}>Hvala na poruci! Javljamo se!</p>
			)}
			<div className={styles.inputWrapper}>
				<input
					type="text"
					name="name"
					id="name"
					autoCapitalize="none"
					autoCorrect="off"
					required
					onChange={inputHandler}
				/>
				<label className={styles.borderTitle} htmlFor="name">
					Name
				</label>
			</div>
			<div className={styles.inputWrapper}>
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
				<label className={styles.borderTitle} htmlFor="email">
					Email
				</label>
			</div>
			<button className="button">Submit</button>
		</form>
	)
}

export default Contact
