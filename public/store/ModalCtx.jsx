import React, { useState } from "react"

export const ModalCtx = React.createContext(0)

export const ModalCtxProvider = (props) => {
	const [pageLoadedCount, setPageLoadedCount] = useState(0)

	const pageLoadedCountIncrementer = () => {
		if (pageLoadedCount <= 2)
			setPageLoadedCount((prevState) => prevState + 1)
		sessionStorage.setItem("viewCount", pageLoadedCount)
	}

	const ctxValue = { pageLoadedCount, pageLoadedCountIncrementer }

	return (
		<ModalCtx.Provider value={ctxValue}>{props.children}</ModalCtx.Provider>
	)
}

export default ModalCtx
