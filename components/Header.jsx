import React, { useEffect, useRef, useState } from "react"
import { Wrapper } from "./styles/Wrapper.styled"
import Image from "next/image"
import Link from "next/link"
import logo from "../public/img/logo/logo-white.png"
import { Wrap } from "./styles/Wrap.styled"
import { HeaderStyled } from "./styles/Header.styled"
import { Button } from "./styles/Button.styled"
import { Stack } from "./styles/Stack.styled"

const Header = () => {
	const [dropdownHeight, setDropdownHeight] = useState("")
	const dropdownRef = useRef()

	useEffect(() => {
		setDropdownHeight(dropdownRef.current.scrollHeight)
	}, [])
	return (
		<HeaderStyled dropdownHeight={dropdownHeight}>
			<Wrapper>
				<Wrap>
					<div href="" className="logo">
						<Link href={"/"} className="a-exception" passHref>
							<Image
								width="100"
								height="50"
								src={logo}
								alt="logo"
							/>
						</Link>
					</div>
					<nav>
						<Wrap as={"ul"} className={"text-bold"} role="list">
							<li>
								<Link href={"/"} passHref>
									Home
								</Link>
							</li>
							<li className="dropdown-link">
								<Link
									className="dropdown-icon"
									href={"/"}
									passHref
								>
									Services{" "}
									<svg
										className="closed"
										height={24}
										width={24}
										clipRule="evenodd"
										fillRule="evenodd"
										strokeLinejoin="round"
										strokeMiterlimit="2"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
											fillRule="nonzero"
											fill="#fff"
										/>
									</svg>
									<svg
										className="open"
										clipRule="evenodd"
										fillRule="evenodd"
										strokeLinejoin="round"
										strokeMiterlimit="2"
										height={24}
										width={24}
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="m21 11.75c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z"
											fillRule="nonzero"
											fill="#fff"
										/>
									</svg>
								</Link>
								<Stack
									as="ul"
									className="dropdown"
									ref={dropdownRef}
								>
									<li>
										<Link href={"/web-analytics"}>
											Web Analytics
										</Link>
									</li>
									<li>
										<Link href={"/advertising"}>
											Advertising
										</Link>
									</li>
									<li>
										<Link href={"/consulting"}>
											Consulting
										</Link>
									</li>
								</Stack>
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
								<Button>Let&apos;s Talk!</Button>
							</li>
						</Wrap>
					</nav>
				</Wrap>
			</Wrapper>
		</HeaderStyled>
	)
}

export default Header
