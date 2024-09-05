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
              <Stack stackAlign={"center"}>
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
                      href="https://www.g2.com/products/wlastig/reviews"
                      title="G2"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <svg
                        height="2500"
                        viewBox="-36.72 -19.24 748.01 780.17"
                        width="2454"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        className="social-icon"
                      >
                        <g fill="#ff492c">
                          <path d="m501.22 521c26.9 46.68 53.5 92.83 80.08 138.93-117.7 90.11-300.82 101-436.38-2.77-156-119.51-181.64-323.43-98.12-470.22 96.06-168.84 275.82-206.18 391.56-178.8-3.13 6.8-72.45 150.61-72.45 150.61s-5.48.36-8.58.42c-34.21 1.45-59.69 9.41-87 23.53a206.93 206.93 0 0 0 -109.84 159.76 201.71 201.71 0 0 0 13.68 100.29c11 26.82 26.56 50.64 47.42 70.75 32 30.88 70.08 50 114.22 56.33 41.8 6 82 .06 119.67-18.87 14.13-7.09 26.15-14.92 40.2-25.66 1.79-1.16 3.38-2.63 5.54-4.3z" />
                          <path d="m501.48 111.61c-6.83-6.72-13.16-12.92-19.46-19.16-3.76-3.72-7.38-7.59-11.23-11.22-1.38-1.31-3-3.1-3-3.1s1.31-2.78 1.87-3.92c7.37-14.79 18.92-25.6 32.62-34.2a90.65 90.65 0 0 1 50.72-14.01c22.93.45 44.25 6.16 62.24 21.54 13.28 11.35 20.09 25.75 21.29 42.94 2 29-10 51.21-33.83 66.71-14 9.12-29.1 16.17-44.24 24.52-8.35 4.61-15.49 8.66-23.65 17-7.18 8.37-7.53 16.26-7.53 16.26l108.47-.14v48.31h-167.43v-4.67c-.64-23.74 2.13-46.08 13-67.64 10-19.78 25.54-34.26 44.21-45.41 14.38-8.59 29.52-15.9 43.93-24.45 8.89-5.27 15.17-13 15.12-24.21 0-9.62-7-18.17-17-20.84-23.58-6.36-47.58 3.79-60.06 25.37-1.82 3.15-3.68 6.28-6.04 10.32zm209.81 358.04-91.41-157.86h-180.89l-92 159.49h182.22l89.92 157.11z" />
                        </g>
                      </svg>
                      <span className="sr-only">G2</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="a-exception"
                      href="https://www.linkedin.com/company/wlastig/"
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
                      href="https://www.instagram.com/wlastig/"
                      title="Instagram"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        className="social-icon"
                        width="52"
                        height="53"
                        viewBox="0 0 52 53"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="instagram-1 1" clipPath="url(#clip0_125_835)">
                          <path
                            id="Vector"
                            d="M26.0304 52.7968C20.0228 52.7927 14.2014 50.7144 9.55207 46.9139C4.90278 43.1135 1.71145 37.8246 0.518644 31.9429C-0.67416 26.0613 0.204901 19.9486 3.00693 14.6402C5.80896 9.33193 10.3617 5.15425 15.8939 2.81487C22.2529 0.155901 29.4078 0.123378 35.7907 2.72444C42.1737 5.3255 47.2642 10.348 49.9468 16.6914C52.6294 23.0349 52.6854 30.182 50.1024 36.5665C47.5195 42.9511 42.5083 48.0525 36.1668 50.753C32.9601 52.1086 29.5124 52.8036 26.0304 52.7968ZM20.2168 12.6312C18.1814 12.6372 16.2309 13.4475 14.7917 14.8853C13.3523 16.323 12.5411 18.2714 12.5351 20.3046V32.7655C12.5411 34.7988 13.3523 36.7471 14.7917 38.1849C16.2309 39.6226 18.1814 40.433 20.2168 40.439H32.691C34.7265 40.433 36.6769 39.6226 38.1163 38.1849C39.5555 36.7471 40.3667 34.7988 40.3727 32.7655V20.3046C40.3667 18.2714 39.5555 16.323 38.1163 14.8853C36.6769 13.4475 34.7265 12.6372 32.691 12.6312H20.2168ZM32.691 37.9741H20.2168C18.837 37.9692 17.5151 37.4195 16.5395 36.4448C15.5638 35.4702 15.0135 34.1497 15.0085 32.7714V20.3046C15.0135 18.9263 15.5638 17.6058 16.5395 16.6313C17.5151 15.6566 18.837 15.1069 20.2168 15.102H32.691C34.0719 15.1053 35.3953 15.6543 36.3722 16.6292C37.3492 17.604 37.9003 18.9253 37.9052 20.3046V32.7655C37.9018 34.1459 37.3513 35.4688 36.3743 36.4448C35.3972 37.4208 34.0729 37.9707 32.691 37.9741ZM26.4529 19.3721C24.5504 19.3721 22.7257 20.1271 21.3804 21.4709C20.0351 22.8148 19.2793 24.6375 19.2793 26.538C19.2793 28.4386 20.0351 30.2613 21.3804 31.6051C22.7257 32.949 24.5504 33.704 26.4529 33.704H26.4588C28.3614 33.704 30.1861 32.949 31.5314 31.6051C32.8767 30.2613 33.6325 28.4386 33.6325 26.538C33.6325 24.6375 32.8767 22.8148 31.5314 21.4709C30.1861 20.1271 28.3614 19.3721 26.4588 19.3721H26.4529ZM33.9292 17.2792C33.5103 17.2797 33.1046 17.4252 32.7812 17.6911C32.4576 17.957 32.2365 18.3266 32.1554 18.7372C32.0742 19.1477 32.1381 19.5735 32.3361 19.9423C32.5342 20.311 32.8541 20.5997 33.2413 20.7591C33.4593 20.8498 33.6931 20.8966 33.9292 20.8966C34.4095 20.8966 34.87 20.706 35.2095 20.3668C35.5491 20.0276 35.7398 19.5676 35.7398 19.0879C35.7398 18.6082 35.5491 18.1482 35.2095 17.809C34.87 17.4698 34.4095 17.2792 33.9292 17.2792ZM26.4539 31.2342C25.2066 31.2342 24.0103 30.7392 23.1283 29.8581C22.2462 28.9771 21.7508 27.7821 21.7508 26.5361C21.7508 25.2901 22.2462 24.095 23.1283 23.214C24.0103 22.3329 25.2066 21.838 26.4539 21.838H26.4588C27.7062 21.838 28.9025 22.3329 29.7844 23.214C30.6665 24.095 31.162 25.2901 31.162 26.5361C31.162 27.7821 30.6665 28.9771 29.7844 29.8581C28.9025 30.7392 27.7062 31.2342 26.4588 31.2342H26.4539Z"
                            fill="#E1306C"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_125_835">
                            <rect width="52" height="53" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="a-exception"
                      href="https://www.facebook.com/wlastig"
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
              </Stack>
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
