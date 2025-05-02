import React, { useState } from "react";

function SubmenuIcon(props) {
  const [isOpen, setIsOpen] = useState(false);
  let onClickHandler = props.click
    ? () => {
        setIsOpen(!isOpen);
        props.dropdownHandler();
      }
    : () => {
        return;
      };

  return (
    <span onClick={onClickHandler}>
      <svg
        className={
          `${props.click && isOpen ? "display-none " : ""}` + "icon-closed"
        }
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
        className={
          `${props.click && !isOpen ? "display-none " : ""}` + "icon-open"
        }
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
    </span>
  );
}

export default SubmenuIcon;
