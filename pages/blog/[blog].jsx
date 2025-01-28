import React from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://sandracvijovic.com/testing/graphql",
  cache: new InMemoryCache(),
});

const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        title
        content
        date
        slug
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  }
`;

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_POSTS });

  return {
    props: {
      posts: data.posts.nodes,
    },
  };
}

const SinglePost = () => {
  return <div>SinglePost</div>;
};

export default SinglePost;
