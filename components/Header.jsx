import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { Wrapper } from "./styles/Wrapper.styled"
import Image from "next/image"
import Link from "next/link"
import logo from "../public/img/logo/logo-white.png"
import { Wrap } from "./styles/Wrap.styled"
import { Button } from "./styles/Button.styled"
import { Stack } from "./styles/Stack.styled"
import { DisabledLink } from "./styles/DisabledLink.styled"
import MobileMenu from "./MobileMenu"
import { useRouter } from "next/router"

const Header = () => {
	const [dropdownHeight, setDropdownHeight] = useState("")
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const dropdownRef = useRef()
	const router = useRouter()

	useEffect(() => {
		setMobileMenuOpen(false)
	}, [router.asPath])

	useEffect(() => {
		setDropdownHeight(dropdownRef.current.scrollHeight)
	}, [])

	const menuOpenHandler = () => {
		mobileMenuOpen ? setMobileMenuOpen(false) : setMobileMenuOpen(true)
	}

	return (
		<HeaderStyled dropdownHeight={dropdownHeight} menuOpen={mobileMenuOpen}>
			<MobileMenu menuOpen={mobileMenuOpen}></MobileMenu>
			<Wrapper>
				<Wrap>
					<div className="logo">
						<Link href={"/"} className="a-exception" passHref>
							<Image
								width="100"
								height="50"
								src={logo}
								alt="logo"
							/>
						</Link>
					</div>
					<nav className="desktop-nav">
						<Wrap as={"ul"} className={"text-bold"} role="list">
							<li>
								<Link href={"/"} passHref>
									Home
								</Link>
							</li>
							<li className="dropdown-link">
								<DisabledLink
									color={"var(--text-light)"}
									className="dropdown-icon"
								>
									Services{" "}
									<svg
										className="icon-closed"
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
										className="icon-open"
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
								</DisabledLink>
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
								<Link href={"/our-team"} passHref>
									Our Team
								</Link>
							</li>
							<li>
								<Link href={"/careers"} passHref>
									Careers
								</Link>
							</li>
							<li>
								<Link href={"/contact"} passHref>
									Contact Us
								</Link>
							</li>
							<li>
								<Button content={"haha"}>
									Let&apos;s Talk!
								</Button>
							</li>
						</Wrap>
					</nav>
					<button
						onClick={menuOpenHandler}
						className="hamburger"
						aria-label="open menu"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="hamburger-svg"
							height="32"
							width="32"
						>
							<line
								id="top-line"
								x1="4.8"
								y1="9.6"
								x2="27.2"
								y2="9.6"
								stroke="var(--text-light)"
								strokeWidth="3"
								strokeLinecap="round"
							></line>

							<line
								id="bottom-line"
								x1="27.2"
								y1="22.4"
								x2="4.8"
								y2="22.4"
								stroke="var(--text-light)"
								strokeWidth="3"
								strokeLinecap="round"
							></line>
						</svg>
					</button>
				</Wrap>
			</Wrapper>
		</HeaderStyled>
	)
}

export const HeaderStyled = styled.header`
	padding-block: 0.5rem;
	background-color: #020024;
	position: fixed;
	width: 100%;
	z-index: 10;

	& a,
	& .disabled-link {
		color: var(--text-light);
	}

	.logo img {
		object-fit: contain;
	}

	.dropdown-link {
		position: relative;
		cursor: pointer;
	}

	.dropdown {
		max-height: 0;
		width: max-content;
		position: absolute;
		top: 24px;
		left: 0;
		z-index: 8;
		background-color: #020024;
		transition: all 0.2s ease-in-out;
		padding: var(--s1);
		opacity: 0;
		visibility: hidden;
		box-sizing: content-box;
	}

	.dropdown-link:hover .dropdown {
		max-height: ${(props) => props.dropdownHeight}px;
		opacity: 1;
		visibility: visible;
	}

	.icon-closed {
		display: block;
	}

	.icon-open {
		display: none;
	}

	.dropdown-link:hover .icon-closed {
		display: none;
	}

	.dropdown-link:hover .icon-open {
		display: block;
	}

	.dropdown.closed {
		max-height: 0;
	}

	.dropdown.open {
		max-height: ${(props) => props.dropdownHeight || ""}px;
		opacity: 1;
	}

	.show {
		display: block;
	}

	.hidden {
		display: none;
	}

	.dropdown-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.4rem;
	}

	.hamburger {
		display: none;
		background: none;
		border: none;
		z-index: 10;
	}

	.hamburger svg {
		fill: #fff;
		transform: ${(props) =>
			props.menuOpen ? "rotateZ(225deg)" : "rotate(0)"};
		transition: transform 0.4s ease;
	}

	.hamburger line {
		transition: transform 0.6s ease-in-out;
	}

	.hamburger line:nth-child(1) {
		transform: ${(props) =>
			props.menuOpen
				? "rotate(-90deg) translate(-29px, 7px)"
				: "rotate(0deg)"};
	}

	.hamburger line:nth-child(2) {
		transform: ${(props) =>
			props.menuOpen ? "rotate(0deg) translate(0,-9px)" : "rotate(-deg)"};
	}

	@media (max-width: 850px) {
		.desktop-nav {
			display: none;
		}

		.hamburger {
			display: block;
		}
	}
`

export default Header
