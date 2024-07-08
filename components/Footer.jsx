import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../public/img/logo/Wlastig_logo_sajt_color-cut.png";
import Link from "next/link";
import { Wrapper } from "./styles/Wrapper.styled";
import { Region } from "./styles/Region.styled";
import { Switcher } from "./styles/Switcher.styled";
import { Stack } from "./styles/Stack.styled";
import { FullBackground } from "./styles/FullBackground.styled";
import { Shapedivider } from "./styles/Shapedivider.styled";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <FullBackground>
      <Shapedivider rotation={"0"}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </Shapedivider>
      <FooterStyled>
        <Region>
          <Wrapper>
            <Switcher elCount={5} gap={"var(--s3)"} flexBasis={"40rem"}>
              <Stack exceptionChild={1}>
                <Link href={"/"} className="a-exception">
                  <Image src={logo} width={150} alt="logo"></Image>
                </Link>
                <p>Wanna hear a great story?</p>
                <p>
                  A moving story about a brave company that made use of data on
                  her way to become a market leader and a household brand. What
                  company are we talking about? Yours!
                </p>
              </Stack>
              <Stack stackAlign={"center"}>
                <h4>Contact Us:</h4>
                <Link className="a-exception" href={"/contact"}>
                  <svg
                    className="letterIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    preserveAspectRatio="none"
                  >
                    <path d="M374.6 492a10 10 0 000 20 10 10 0 000-20z"></path>
                    <path d="M509 168.9l-71-70.6V40c0-22-18-40-40-40H114C92 0 74 18 74 40v57.8l-71 71a10 10 0 00-3 7.2v256.5A79.6 79.6 0 0079.5 512h250.4a10 10 0 000-20H79.5a59.1 59.1 0 01-31.8-9.3L66.4 464H220a10 10 0 000-20H86.4l119.3-119.3a71.2 71.2 0 01100.6 0l158 158a59.1 59.1 0 01-31.8 9.3H419a10 10 0 000 20h13.5a79.2 79.2 0 0054-21.2l.4-.4c15.4-14.5 25.1-35.1 25.1-57.9V176c0-2.7-1-5.3-3-7.1zm-71-42.4l49.8 49.5-49.8 49.8v-99.3zm-364-.4v99.7L24.1 176 74 126zM32.8 469.3c-8-10.1-12.8-23-12.8-36.8V200.1l141 141L32.8 469.3zm287.6-158.7a91.3 91.3 0 00-128.8 0L175 327 94 245.8V40c0-11 9-20 20-20h284c11 0 20 9 20 20v205.8L336.9 327l-16.5-16.4zM492 432.5c0 13.9-4.8 26.7-12.8 36.8L351 341.1l141-141v232.4z"></path>
                    <path d="M262 92H161.5a10 10 0 000 20H262a10 10 0 000-20zM315.4 95c-1.9-2-4.4-3-7-3a10 10 0 00-10 10 10 10 0 0010 10c2.6 0 5.1-1 7-3a10 10 0 000-14zM350.5 164h-189a10 10 0 000 20h189a10 10 0 000-20zM350.5 236h-189a10 10 0 000 20h189a10 10 0 000-20z"></path>
                  </svg>
                </Link>
              </Stack>
              <Stack stackAlign={"center"}>
                <h4>Services:</h4>
                <Stack as="ul" stackAlign={"center"} stackSpace={"var(--s0)"}>
                  <li>
                    <Link href={"/web-analytics"}>Web Analytics</Link>
                  </li>
                  <li>
                    <Link href={"/advertising"}>Advertising</Link>
                  </li>
                  <li>
                    <Link href={"/consulting"}>Consulting</Link>
                  </li>
                </Stack>
              </Stack>
              {/* <Stack stackAlign={"center"}>
                <h4>Follow Us:</h4>
                <ul>
                  <li>
                    <a
                      className="a-exception"
                      href="https://clutch.co/profile/wlastig"
                      title="Clutch"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        className="social-icon clutch"
                        height="50"
                        width="50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 87.86099999999999 25"
                      >
                        <g fill="#fff">
                          <path d="M22.861 0h4v25h-4zM40.861 17.025c0 3.826-3.217 4.131-4.174 4.131-2.391 0-2.826-2.238-2.826-3.588V8h-4v9.548c0 2.37.744 4.326 2.048 5.63 1.152 1.153 2.878 1.783 4.748 1.783 1.326 0 3.204-.413 4.204-1.326V25h4V8h-4zM52.861 2h-4v6h-3v4h3v13h4V12h3V8h-3zM68.458 19.917c-.871.783-2.021 1.217-3.283 1.217-2.782 0-4.825-2.043-4.825-4.848s1.978-4.762 4.825-4.762c1.24 0 2.412.413 3.305 1.196l.607.522 2.697-2.696-.675-.609C69.522 8.504 67.415 7.7 65.174 7.7c-5 0-8.631 3.608-8.631 8.565 0 4.936 3.718 8.673 8.631 8.673 2.283 0 4.412-.804 5.979-2.26l.652-.609-2.739-2.694zM86.061 9.482C84.909 8.33 83.559 7.7 81.689 7.7c-1.326 0-2.828.413-3.828 1.325V0h-4v25h4v-9.365c0-3.826 2.718-4.13 3.675-4.13 2.391 0 2.325 2.239 2.325 3.587V25h4v-9.887c0-2.37-.495-4.326-1.8-5.631" />
                        </g>
                        <path
                          d="M65.043 13.438a2.891 2.891 0 1 1 0 5.784 2.891 2.891 0 0 1 0-5.784"
                          fill="#ff3d2e"
                        />
                        <path
                          d="M17.261 18.721c-1.521 1.565-3.587 2.413-5.761 2.413-4.456 0-7.696-3.5-7.696-8.304 0-4.826 3.24-8.326 7.696-8.326 2.153 0 4.196.847 5.74 2.391l.608.609 2.674-2.674-.587-.609C17.718 1.938 14.718.7 11.5.7 4.935.7 0 5.917 0 12.851 0 19.764 4.957 24.96 11.5 24.96c3.24 0 6.24-1.26 8.457-3.543l.587-.609-2.652-2.717z"
                          fill="#fff"
                        />
                      </svg>
                      <span className="sr-only">Clutch</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="a-exception"
                      href="https://www.linkedin.com/company/wlastig"
                      title="LinkedIn"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        className="social-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#0072b1"
                          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"
                        />
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="a-exception"
                      href="https://www.facebook.com/profile.php?id=100076072928612"
                      title="Facebook"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        className="social-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#4267B2"
                          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
                        />
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </a>
                  </li>
                </ul>
              </Stack> */}
            </Switcher>
          </Wrapper>
        </Region>
        <div className="footers-footer">
          {" "}
          <p>
            Copyright © {year} Wlastig | Website made by{" "}
            <a
              href="https://www.dusanvukovic.com/"
              rel="noopener"
              target="__blank"
            >
              Dušan Vuković
            </a>{" "}
          </p>
        </div>
      </FooterStyled>
    </FullBackground>
  );
};

export const FooterStyled = styled.footer`
  padding-block-start: calc(var(--s5) + 3rem);
  @media (max-width: 715px) {
    padding-block-start: calc(var(--s5));
  }

  h4 {
    padding-block-start: 0.5rem;
  }

  .letterIcon {
    width: var(--s5);
    height: var(--s5);
    position: relative;
    display: block;
    fill: var(--secondary);
  }

  ul {
    display: flex;
    gap: 1rem;
  }

  .social-icon {
    width: 45px;
    height: 45px;
    transition: opacity 0.2s ease;
  }

  .social-icon:hover,
  .a-exception:hover {
    opacity: 0.8;
  }

  .clutch.social-icon {
    border-radius: 1000px;
    background-color: #000;
  }

  .footers-footer {
    background-color: var(--primary);
    color: var(--text-light);
    font-size: var(--s-2);
    text-align: center;
    margin-block-start: auto;
  }

  .footers-footer a {
    text-decoration: underline;
  }

  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    overflow: hidden !important;
    margin: -1px !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }
`;

export default Footer;
