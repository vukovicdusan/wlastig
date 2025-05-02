import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Wrapper } from "./styles/Wrapper.styled";
import { Region } from "./styles/Region.styled";
import { Stack } from "./styles/Stack.styled";
import { TextMedium } from "./styles/TextMedium.styled";
import NavItemHasChildrenMobile from "./NavItemHasChildrenMobile";

const MobileMenu = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    props.menuOpen
      ? (document.body.style.overflow = "hidden") && setShowMenu(true)
      : (document.body.style.overflow = "auto") &&
        setTimeout(() => {
          setShowMenu(false);
        }, 500);
  }, [props.menuOpen]);

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
                  {/* <Stack as={"ul"} stackAlign={"flex-end"}> */}
                  <NavItemHasChildrenMobile
                    disabledLink={true}
                    name={"Services"}
                  >
                    <Stack as="ul" stackAlign={"flex-end"}>
                      <NavItemHasChildrenMobile
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
                      </NavItemHasChildrenMobile>
                      <NavItemHasChildrenMobile
                        name={"Advertising"}
                        link={"/advertising"}
                      >
                        <Stack as="ul" stackAlign={"flex-end"}>
                          <li>
                            <Link href={"/advertising/google-ads"}>
                              Google Ads
                            </Link>
                          </li>
                        </Stack>
                      </NavItemHasChildrenMobile>
                      <li>
                        <Link href={"/consulting"}>Consulting</Link>
                      </li>
                    </Stack>
                  </NavItemHasChildrenMobile>
                  {/* </Stack> */}
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
  );
};

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
  /* z-index: 10; */

  a {
    color: var(--text-light);
  }

  nav {
    padding-bottom: var(--s4);
  }

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
`;

export default MobileMenu;
