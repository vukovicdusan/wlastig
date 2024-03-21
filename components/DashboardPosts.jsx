import React from "react";
import { UnderlineStyled } from "./styles/UnderlineStyled.styled";
import styled from "styled-components";
import QuickPublishDraft from "./QuickPublishDraft";

const DashboardPosts = (props) => {
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
          </tr>
        </thead>
        <tbody>
          {props.blogList.map((post) => (
            <tr key={post.id}>
              <th scope="row">{post.title}</th>
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

  .icon {
    width: 40px;
    height: 40px;
    cursor: pointer;
    fill: #d5d6db;
    transition: fill 0.2s ease;
  }

  .icon:hover {
    fill: var(--secondary);
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

  td:last-of-type {
    text-align: center;
  }

  tbody > tr:nth-of-type(even) {
    background-color: var(--primary-shade);
  }

  tfoot th {
    text-align: center;
  }

  tfoot td {
    text-align: center;
  }
`;
