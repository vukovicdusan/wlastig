import React, { useEffect, useState } from "react"

export const ModalCtx = React.createContext(0)

export const ModalCtxProvider = (props) => {
	const [hasOpened, setHasOpened] = useState(false)

	useEffect(() => {
		const sessionData = sessionStorage.getItem("modalOpened")
		setHasOpened(sessionData)
	}, [])

	const modalOpenedHandler = () => {
		setHasOpened(true)
		sessionStorage.setItem("modalOpened", hasOpened)
	}

	const ctxValue = { hasOpened, modalOpenedHandler }

	return (
		<ModalCtx.Provider value={ctxValue}>{props.children}</ModalCtx.Provider>
	)
}

export default ModalCtx
