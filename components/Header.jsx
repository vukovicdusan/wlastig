import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Wrapper } from "./styles/Wrapper.styled";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/img/logo/logo-white.png";
import { Wrap } from "./styles/Wrap.styled";
import { Button } from "./styles/Button.styled";
import { Stack } from "./styles/Stack.styled";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/router";
// import { useModal } from "./hooks/useModal";
// import Modal from "./Modal";
import ModalCtx from "../store/ModalCtx";
import NavItemHasChildren from "./NavItemHasChildren";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const router = useRouter();
  const modalCtx = useContext(ModalCtx);
  // const [modalCloseHandler, modelOpenHandler, forceOpen] = useModal();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [router.asPath]);

  /** HIDE AND SHOW HEADER ON SCROLL */
  // useEffect(() => {
  //   let direction = 0;
  //   let prevDirection = 0;
  //   let prevScroll = window.scrollY;
  //   let currentScroll;
  //   window.addEventListener("scroll", () => {
  //     currentScroll = window.scrollY;
  //     currentScroll > prevScroll ? (direction = 2) : (direction = 1);
  //     direction !== prevDirection && toggleHeader(direction, currentScroll);
  //     prevScroll = currentScroll;
  //   });
  // });

  // const toggleHeader = (direction, currentScroll) => {
  //   direction === 2 && currentScroll > 70
  //     ? setHideHeader(true)
  //     : setHideHeader(false);
  // };

  const menuOpenHandler = () => {
    mobileMenuOpen ? setMobileMenuOpen(false) : setMobileMenuOpen(true);
  };

  return (
    <HeaderStyled hideHeader={hideHeader} menuOpen={mobileMenuOpen}>
      <MobileMenu menuOpen={mobileMenuOpen}></MobileMenu>
      <Wrapper>
        <Wrap>
          <div className="logo">
            <Link href={"/"} className="a-exception" passHref>
              <Image width="100" height="50" src={logo} priority alt="logo" />
            </Link>
          </div>
          <nav className="desktop-nav">
            <Wrap as={"ul"} className={"text-bold"} role="list">
              <li>
                <Link href={"/"} passHref>
                  Home
                </Link>
              </li>
              <NavItemHasChildren disabledLink={true} name={"Services"}>
                <Stack as="ul">
                  <NavItemHasChildren
                    name={"Web Analytics"}
                    link={"/web-analytics"}
                  >
                    <Stack as="ul">
                      <li>
                        <Link href={"/web-analytics/google-analytics-4"}>
                          Google Analytics
                        </Link>
                      </li>
                      <li>
                        <Link href={"/web-analytics/google-tag-manager"}>
                          Google Tag Manager
                        </Link>
                      </li>
                    </Stack>
                  </NavItemHasChildren>
                  <NavItemHasChildren
                    name={"Advertising"}
                    link={"/advertising"}
                  >
                    <Stack as="ul">
                      <li>
                        <Link href={"/advertising/google-ads"}>Google Ads</Link>
                      </li>
                    </Stack>
                  </NavItemHasChildren>
                  <li>
                    <Link href={"/consulting"}>Consulting</Link>
                  </li>
                </Stack>
              </NavItemHasChildren>
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
                <Button
                  onClick={() => {
                    // modelOpenHandler("contact");
                    modalCtx.forceOpenHandler("contact");
                  }}
                  // as={"span"}
                  id="lets_talk"
                >
                  Let&apos;s Talk!
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
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
      {/* <Modal
        forceOpen={forceOpen}
        modalClosedHandler={modalCloseHandler}
      ></Modal> */}
    </HeaderStyled>
  );
};

export const HeaderStyled = styled.header`
  padding-block: 0.5rem;
  background-color: #020024;
  position: fixed;
  width: 100%;
  z-index: 10;
  transform: translateY(${(props) => (props.hideHeader ? "-100px" : "")});
  transition: transform 0.4s ease;

  & a,
  & .disabled-link {
    color: var(--text-light);
  }

  .logo img {
    object-fit: contain;
  }

  .hamburger {
    display: none;
    background: none;
    border: none;
    z-index: 10;
  }

  .hamburger svg {
    fill: #fff;
    transform: ${(props) => (props.menuOpen ? "rotateZ(225deg)" : "rotate(0)")};
    transition: transform 0.4s ease;
  }

  .hamburger line {
    transition: transform 0.6s ease-in-out;
  }

  .hamburger line:nth-child(1) {
    transform: ${(props) =>
      props.menuOpen ? "rotate(-90deg) translate(-29px, 7px)" : "rotate(0deg)"};
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
`;

export default Header;
