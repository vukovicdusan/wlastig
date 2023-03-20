import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import { LayoutStyled } from "../styles/LayoutStyled.styled"

const Layout = ({ children }) => {
	return (
		<LayoutStyled>
			<Header></Header>
			{children}
			<Footer></Footer>
		</LayoutStyled>
	)
}

export default Layout
