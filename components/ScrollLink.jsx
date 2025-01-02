import Link from "next/link";
import React from "react";

const ScrollLink = ({ children, ...props }) => {
  const handleScroll = (e) => {
    e.preventDefault();

    const targetId = e.currentTarget.href.replace(/.*#/, ""); // Extract the target id from the href
    const elem = document.getElementById(targetId);

    if (elem) {
      // Get the element's position relative to the document
      const offsetTop = elem.getBoundingClientRect().top + window.scrollY;
      console.log(offsetTop);
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <Link
      id={props.id}
      className="a-exception"
      {...props}
      onClick={handleScroll}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
