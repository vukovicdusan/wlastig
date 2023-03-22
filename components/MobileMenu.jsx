import Link from "next/link"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { DisabledLink } from "./styles/DisabledLink.styled"
import { Wrapper } from "./styles/Wrapper.styled"
import { Region } from "./styles/Region.styled"
import { Stack } from "./styles/Stack.styled"
import { TextMedium } from "./styles/TextMedium.styled"

const MobileMenu = (props) => {
	const [showMenu, setShowMenu] = useState(false)

	useEffect(() => {
		props.menuOpen
			? (document.body.style.overflow = "hidden") && setShowMenu(true)
			: (document.body.style.overflow = "auto") &&
			  setTimeout(() => {
					setShowMenu(false)
			  }, 500)
	}, [props.menuOpen])

	return (
		<>
			{showMenu ? (
				<MobileMenuStyled show={props.menuOpen}>
					<Region as={"div"}>
						<Wrapper>
							<nav>
								<Stack as="ul" stackAlign={"flex-end"}>
									<TextMedium as="li">
										<Link href={"/"}>Home</Link>
									</TextMedium>
									<Stack as={"ul"} stackAlign={"flex-end"}>
										<DisabledLink>
											<TextMedium
												color={"var(--text-light)"}
											>
												Services{" "}
												<span className="arrow">
													&#10549;
												</span>
											</TextMedium>
										</DisabledLink>
										<li className="subservice">
											<Link href={"/web-analytics"}>
												Web Analytics
											</Link>
										</li>
										<li className="subservice">
											<Link href={"/advertising"}>
												Advertising
											</Link>
										</li>
										<li className="subservice">
											<Link href={"/consulting"}>
												Consulting
											</Link>
										</li>
									</Stack>
									<TextMedium as="li">
										<Link href={"/our-team"}>Our Team</Link>
									</TextMedium>
									<TextMedium as="li">
										<Link href={"/careers"}>Careers</Link>
									</TextMedium>
									<TextMedium as="li">
										<Link href={"contact"}>Contact Us</Link>
									</TextMedium>
								</Stack>
							</nav>
						</Wrapper>
					</Region>
				</MobileMenuStyled>
			) : null}
		</>
	)
}

export const MobileMenuStyled = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	background-color: var(--primary);
	display: flex;
	align-items: flex-end;
	text-align: end;
	animation: ${(props) =>
		props.show ? "slideIn .4s both" : "slideOut .4s both"};
	transition: transform 0.4s ease-in-out;

	@keyframes slideIn {
		0% {
			transform: translateX(500px);
		}
		100% {
			transform: translateX(0);
		}
	}

	@keyframes slideOut {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(500px);
		}
	}

	.subservice {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.arrow {
		transform: translateY(10px);
		display: inline-block;
	}
`

export default MobileMenu
