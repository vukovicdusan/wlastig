import React, { useEffect, useState } from "react"

export const ModalCtx = React.createContext(0)

export const ModalCtxProvider = (props) => {
	const [pageLoadedCount, setPageLoadedCount] = useState("", () => {
		const sessionData = sessionStorage.getItem("viewCount")
		return Number(sessionData) || ""
	})

	const pageLoadedCountIncrementer = () => {
		if (pageLoadedCount < 2) setPageLoadedCount(Number(pageLoadedCount) + 1)
	}

	useEffect(() => {
		sessionStorage.setItem("viewCount", pageLoadedCount.toString())
	}, [pageLoadedCount])

	const ctxValue = { pageLoadedCount, pageLoadedCountIncrementer }

	return (
		<ModalCtx.Provider value={ctxValue}>{props.children}</ModalCtx.Provider>
	)
}

export default ModalCtx
