import React, { useEffect, useState } from "react"

export const ModalCtx = React.createContext(0)

export const ModalCtxProvider = (props) => {
	const [hasOpened, setHasOpened] = useState(false)

	useEffect(() => {
		let sessionData = sessionStorage.getItem("modalOpened") || false
		setHasOpened(sessionData)
	}, [])

	const modalOpenedHandler = () => {
		!hasOpened ? setHasOpened(true) : ""
		sessionStorage.setItem("modalOpened", true)
	}

	const ctxValue = { hasOpened, modalOpenedHandler }

	return (
		<ModalCtx.Provider value={ctxValue}>{props.children}</ModalCtx.Provider>
	)
}

export default ModalCtx
