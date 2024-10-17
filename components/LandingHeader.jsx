import React from "react";
import { Center } from "./styles/Center.styled";
import logo from "../public/img/logo/Wlastig_logo_sajt_color.png";
import Image from "next/image";
import Link from "next/link";

const LandingHeader = () => {
  return (
    <Center>
      <Link href={"/"} className="a-exception" passHref>
        <Image
          style={{ objectFit: "contain" }}
          width="300"
          height="100"
          src={logo}
          priority
          alt="logo"
        />
      </Link>
    </Center>
  );
};

export default LandingHeader;
