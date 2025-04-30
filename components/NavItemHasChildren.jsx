import React, { useEffect, useRef, useState } from "react";
import { DisabledLink } from "./styles/DisabledLink.styled";
import SubmenuIcon from "./SubmenuIcon";
import Link from "next/link";
import styled from "styled-components";

const NavItemHasChildren = (props) => {
  const [dropdownHeight, setDropdownHeight] = useState("");
  const dropdownRef = useRef();

  useEffect(() => {
    setDropdownHeight(dropdownRef.current.scrollHeight);
  }, []);

  const renderLink = props.disabledLink ? (
    <DisabledLink color="var(--text-light)">
      {props.name}
      <SubmenuIcon />
    </DisabledLink>
  ) : (
    <Link href={props.link}>
      {props.name}
      <SubmenuIcon />
    </Link>
  );

  return (
    <NavItemHasChildrenStyled dropdownHeight={dropdownHeight}>
      <li className="dropdown-link">
        {renderLink}
        <div className="dropdown" ref={dropdownRef}>
          {props.children}
        </div>
      </li>
    </NavItemHasChildrenStyled>
  );
};

export const NavItemHasChildrenStyled = styled.div`
  .dropdown & {
    width: 100%;
  }

  .dropdown-link {
    position: relative;
    cursor: pointer;
    width: 100%;
  }

  .dropdown-link > * {
    display: flex;
    gap: 0.5rem;
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

  .dropdown .dropdown {
    left: 100%;
    top: 0;
  }

  .dropdown-link:hover > .dropdown {
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

  .dropdown-link:hover > * > .icon-closed {
    display: none;
  }

  .dropdown-link:hover > * > .icon-open {
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
`;

export default NavItemHasChildren;
