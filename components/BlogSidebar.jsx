import React from "react";
import logo from "../public/img/logo/Wlastig_logo_sajt_color.png";
import Image from "next/image";
import styled from "styled-components";
import { InputWrapper } from "./styles/InputWrapper.styled";
import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";

const BlogSidebar = (props) => {
  const [list, setList] = useState("");
  const [filteredList, setFilteredList] = useState("");

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("posts"));
    setList(posts);
  }, []);

  const inputHandler = (e) => {
    const term = e.target.value;

    const searchedList = list.filter((post) =>
      post.title.toLowerCase().includes(term.toLowerCase())
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
              {filteredList.map((item, index) => (
                <li key={index}>
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

  & form {
    position: relative;
  }

  .search-list {
    position: absolute;
    top: 100%;
    width: 100%;
    height: min-content;
    background-color: var(--background-light);
    color: var(--text-dark);
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

  & > * {
    color: #ddd;
  }

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

  & label,
  & input {
    background-color: var(--primary) !important;
    color: var(--text-light);
  }
`;
