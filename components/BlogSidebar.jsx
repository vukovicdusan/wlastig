import React from "react";
import logo from "../public/img/logo/Wlastig_logo_sajt_color.png";
import Image from "next/image";
import styled from "styled-components";
import { InputWrapper } from "./styles/InputWrapper.styled";

const BlogSidebar = (props) => {
  const inputHandler = () => {};
  return (
    <BlogSidebarStyled>
      {props.children}
      <div className="sidebar">
        <form>
          <InputWrapper>
            <input onChange={inputHandler} name="search" type="text" />
            <label htmlFor="search">Search</label>
          </InputWrapper>
        </form>
        <Image alt="logo" width={150} src={logo}></Image>
      </div>
    </BlogSidebarStyled>
  );
};

export default BlogSidebar;

export const BlogSidebarStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-inline: auto;
  justify-content: center;
  gap: 2rem;

  .sidebar {
    /* flex-grow: 1; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  .sidebar img {
    object-fit: contain;
  }

  & > *:first-child {
    flex-basis: 0;
    flex-grow: 999;
    min-inline-size: 60%;
    max-width: 60ch;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & input {
    background-color: var(--primary);
  }

  & label {
    background-color: var(--primary) !important;
  }
`;
