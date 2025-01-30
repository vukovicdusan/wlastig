import React from "react";
import logo from "../public/img/logo/Wlastig_logo_sajt_color.png";
import Image from "next/image";
import styled from "styled-components";
import { InputWrapper } from "./styles/InputWrapper.styled";
import { useState } from "react";
import Link from "next/link";
import { StyledText } from "./styles/StyledText.styled";

const BlogSidebar = (props) => {
  const [filteredList, setFilteredList] = useState("");

  const inputHandler = (e) => {
    const term = e.target.value;

    /* Search by title and/or category */
    const searchedList = props.list.filter(
      (post) =>
        post.title.toLowerCase().includes(term.toLowerCase()) ||
        post.categories.nodes[0].slug.includes(term.toLowerCase())
    );

    setFilteredList(term !== "" ? searchedList : "");
  };

  return (
    <BlogSidebarStyled>
      {props.children}
      <div className="sidebar">
        <form>
          <InputWrapper>
            <input
              onChange={(e) => inputHandler(e)}
              name="search"
              type="text"
            />
            <label htmlFor="search">Search</label>
          </InputWrapper>
          {filteredList !== "" ? (
            <ul className="search-list">
              {filteredList.map((item) => (
                <li key={item.id}>
                  <Link
                    onClick={() => setFilteredList("")}
                    href={`/blog/${item.slug}`}
                    passHref
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </form>

        <Image alt="logo" width={150} src={logo}></Image>
        <StyledText color={"var(--theme-text-dark)"}>
          Unlocking the power of data, one story at a time – explore our
          insights on analytics, strategy, and business intelligence.
        </StyledText>
      </div>
    </BlogSidebarStyled>
  );
};

export default BlogSidebar;

export const BlogSidebarStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* margin-inline: auto;
  justify-content: center; */
  gap: 4rem;

  & > :last-child {
    flex-grow: 1;
    flex-basis: 30%;
  }

  & > :first-child {
    flex-basis: 0;
    flex-grow: 999;
    min-inline-size: 60%;
    display: flex;
    flex-direction: column;
  }

  & form {
    position: relative;
    width: 100%;
  }

  & > * {
    color: #ddd;
  }

  .search-list {
    position: absolute;
    top: 100%;
    width: 100%;
    height: min-content;
    background-color: var(--background-light);
    color: var(--text-dark);
    border: 1px solid;
  }

  .search-list li {
    padding: 0.5rem;
    cursor: pointer;
  }

  .search-list li a {
    font-size: var(--s-1);
    width: 100%;
    height: 100%;
    display: block;
  }

  .search-list li:hover {
    background-color: var(--testimonial-frames);
  }

  .search-list li a::after {
    content: none;
    font-size: var(--s-1);
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  .sidebar img {
    object-fit: contain;
  }

  & label,
  & input {
    /* background-color: var(--primary) !important; */
    color: var(--theme-text-dark);
  }
`;
