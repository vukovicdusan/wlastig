import React, { useEffect, useState } from "react"

export const ModalCtx = React.createContext(0)

export const ModalCtxProvider = (props) => {
	const [hasOpened, setHasOpened] = useState(false)
	const [auditSent, setAuditSent] = useState(false)

	useEffect(() => {
		let modalData = sessionStorage.getItem("modalOpened") || false
		setHasOpened(modalData)
		let auditData = sessionStorage.getItem("auditSent") || false
		setAuditSent(auditData)
	}, [])

	const modalOpenedHandler = () => {
		!hasOpened ? setHasOpened(true) : ""
		sessionStorage.setItem("modalOpened", true)
	}

	const auditSentHandler = () => {
		setAuditSent(true)
		sessionStorage.setItem("auditSent", true)
	}

	const ctxValue = {
		hasOpened,
		modalOpenedHandler,
		auditSentHandler,
		auditSent,
	}

	return (
		<ModalCtx.Provider value={ctxValue}>{props.children}</ModalCtx.Provider>
	)
}

export default ModalCtx
