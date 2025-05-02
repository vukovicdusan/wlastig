import React, { useEffect, useRef, useState } from "react";
import { DisabledLink } from "./styles/DisabledLink.styled";
import SubmenuIcon from "./SubmenuIcon";
import Link from "next/link";
import styled from "styled-components";

const NavItemHasChildren = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownHandler = () => {
    setDropdownOpen(dropdownOpen ? false : true);
  };

  const renderLink = props.disabledLink ? (
    <DisabledLink className="flex" color="var(--text-light)">
      <SubmenuIcon click={true} dropdownHandler={dropdownHandler} />
      {props.name}
    </DisabledLink>
  ) : (
    <div className="flex">
      <SubmenuIcon click={true} dropdownHandler={dropdownHandler} />
      <Link href={props.link}>{props.name}</Link>
    </div>
  );

  return (
    <NavItemHasChildrenStyled>
      <li>
        {renderLink}
        <div className={`${dropdownOpen ? "open " : ""}` + "dropdown-link"}>
          <div className="dropdown">{props.children}</div>
        </div>
      </li>
    </NavItemHasChildrenStyled>
  );
};

export const NavItemHasChildrenStyled = styled.div`
  .flex {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    align-items: center;
  }
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

  .dropdown-link {
    overflow: hidden;
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.2s ease-in-out;
  }

  .dropdown-link.open {
    grid-template-rows: 1fr;
  }

  .dropdown {
    min-height: 0;
    overflow: hidden;
    width: max-content;
  }

  .dropdown-link.open > .dropdown {
    padding-block: var(--s-2);
  }
`;

export default NavItemHasChildren;
