import React from "react"
import css from "../styles/Header.module.css"
import Wrapper from "./layout/Wrapper"
import Image from "next/image"
import Link from "next/link"
import logo from "../public/img/logo/logo-white.png"

const Header = () => {
	return (
		<header className={css.siteHeader}>
			<Wrapper>
				<div className={css.wrap}>
					<div href="" className={css.logo}>
						<Link href={"/"} passHref>
							<Image
								width="100"
								height="50"
								src={logo}
								alt="logo"
							/>
						</Link>
					</div>
					<nav>
						<ul className={`${css.wrap} [ text-bold ]`} role="list">
							<li>
								<Link href={"/"} passHref>
									Home
								</Link>
							</li>
							<li>
								<Link href={"/"} passHref>
									Services
								</Link>
							</li>
							<li>
								<Link href={"/"} passHref>
									Our Team
								</Link>
							</li>
							<li>
								<Link href={"/"} passHref>
									Careers
								</Link>
							</li>
							<li>
								<Link href={"/"} passHref>
									Contact Us
								</Link>
							</li>
							<li>
								<button className="button">
									Let&apos;s Talk!
								</button>
							</li>
						</ul>
					</nav>
				</div>
			</Wrapper>
		</header>
	)
}

export default Header
