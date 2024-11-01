import React from "react";
import { Center } from "./styles/Center.styled";
import logoColor from "../public/img/logo/Wlastig_logo_sajt_color-cut.png";
import logoWhite from "../public/img/logo/logo-white.png";
import Image from "next/image";
import Link from "next/link";

const LandingHeader = (props) => {
  console.log(props.isBlackFriday);
  return (
    <header
      style={{ background: props.isBlackFriday ? "var(--bf-black)" : "" }}
    >
      <Center>
        <Link href={"/"} className="a-exception pt-s-1 pb-s-1" passHref>
          <Image
            className="hide-in-dark"
            style={{ objectFit: "contain" }}
            width="300"
            height="80"
            src={logoColor}
            priority
            alt="logo"
          />
          <Image
            className="show-in-dark"
            style={{ objectFit: "contain" }}
            width="300"
            height="80"
            src={logoWhite}
            priority
            alt="logo"
          />
        </Link>
      </Center>
    </header>
  );
};

export default LandingHeader;
