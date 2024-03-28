import React from "react";
import { UnderlineStyled } from "./styles/UnderlineStyled.styled";
import styled from "styled-components";
import QuickPublishDraft from "./QuickPublishDraft";
import RemoveFirebaseButton from "./RemoveFirebaseButton";
import { useState } from "react";
import Link from "next/link";

const DashboardPosts = (props) => {
  const [list, setList] = useState(props.blogList);

  const returnListHandler = (list) => {
    setList(list);
  };

  const editPostHandler = (postId) => {
    props.editPostsRouterHandler(postId);
  };

  return (
    <PostsTableStyled>
      <h2>Clients</h2>
      <UnderlineStyled></UnderlineStyled>
      <table>
        <caption>Wlastig Blog Posts</caption>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">Date</th>
            <th scope="col">Edit</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {list.map((post) => (
            <tr key={post.id}>
              <th scope="row">
                <Link target="_blank" href={`/blog/${post.slug}`} passHref>
                  {post.title}
                </Link>
              </th>
              <td>
                <QuickPublishDraft
                  postStatusProp={post.status}
                  postIdProp={post.id}
                ></QuickPublishDraft>
              </td>
              <td>{post.date}</td>
              <td>
                <svg onClick={() => editPostHandler(post.id)} className="icon">
                  <use
                    xlinkHref={"./img/subservices/sprite.svg#pencil-edit"}
                  ></use>
                </svg>
              </td>
              <td>
                <RemoveFirebaseButton
                  returnListHandler={returnListHandler}
                  list={props.blogList}
                  document={"blog"}
                  id={post.id}
                ></RemoveFirebaseButton>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </PostsTableStyled>
  );
};

export default DashboardPosts;

export const PostsTableStyled = styled.div`
  overflow-x: scroll;

  & a::after {
    content: none;
  }

  & a:hover {
    color: var(--secondary);
  }

  & .icon {
    width: 30px;
    height: 30px;
    cursor: pointer;
    fill: var(--background-dark);
    transition: fill 0.2s ease;
  }

  & .icon:hover {
    fill: var(--success-color);
  }

  table {
    border-collapse: collapse;
    border: 1px solid rgb(140 140 140);
    /* font-size: 0.8rem; */
    letter-spacing: 1px;
    background-color: var(--background-light);
    width: 100%;
  }

  caption {
    caption-side: bottom;
    padding: 10px;
    font-weight: bold;
  }

  thead,
  tfoot {
    background-color: var(--background-light);
  }

  th,
  td {
    border: 1px solid rgb(160 160 160);
    padding: 8px 10px;
    text-align: center;
  }

  tbody th {
    text-align: left;
  }

  td:last-of-type {
    text-align: center;
  }

  tbody > tr:nth-of-type(even) {
    background-color: var(--primary-shade);
  }

  tfoot th {
    text-align: left;
  }

  tfoot td {
    text-align: center;
  }
`;
