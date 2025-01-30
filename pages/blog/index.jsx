import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Region } from "../../components/styles/Region.styled";
import { Wrapper } from "../../components/styles/Wrapper.styled";
import styled from "styled-components";
import BlogSidebar from "../../components/BlogSidebar";
import { BlogImageWrapper } from "../../components/styles/BlogImageWrapper.styled";
import Image from "next/image";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { postDateFormater } from "../../helpers/postDateFormater";
import ContactFormSection from "../../components/ContactFormSection";
import dummy from "../../public/img/dummy-post.webp";
import { StyledText } from "../../components/styles/StyledText.styled";

const client = new ApolloClient({
  uri: "https://sandracvijovic.com/testing/graphql",
  cache: new InMemoryCache(),
});

const GET_POSTS = gql`
  query GetPosts($first: Int, $after: String) {
    posts(first: $first, after: $after) {
      nodes {
        title
        excerpt
        date
        slug
        id
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        author {
          node {
            name
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: GET_POSTS,
    variables: {
      first: 5, // Number of posts per page
      after: params?.after || null, // Cursor for pagination
    },
  });

  return {
    props: {
      posts: data.posts.nodes,
      pageInfo: data.posts.pageInfo,
    },
  };
}
import { useState } from "react";
import { Button } from "../../components/styles/Button.styled";

const Blog = ({ posts, pageInfo }) => {
  const [currentPosts, setCurrentPosts] = useState(posts);
  const [currentPageInfo, setCurrentPageInfo] = useState(pageInfo);
  const [loading, setLoading] = useState(false);

  const loadMorePosts = async () => {
    setLoading(true);
    const { data } = await client.query({
      query: GET_POSTS,
      variables: {
        first: 10,
        after: currentPageInfo.endCursor,
      },
    });

    setCurrentPosts([...currentPosts, ...data.posts.nodes]);
    setCurrentPageInfo(data.posts.pageInfo);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Wlastig Analytics - Blog</title>
        <meta
          name="description"
          content="Wanna hear a great story?
                   A moving story about a brave company that made use of data on her way to become a market leader and a household brand. What company are we talking about? Yours!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Region>
        <Wrapper>
          <BlogPostsStyled>
            <div>
              <h1 className="visually-hidden">Blog</h1>
            </div>
            <BlogSidebar list={currentPosts || []}>
              <div className="post-list">
                {currentPosts.map((post) => (
                  <div key={post.id}>
                    <Link
                      className="wrapper"
                      href={`/blog/${post.slug}`}
                      passHref
                    >
                      <BlogImageWrapper>
                        <div>
                          <span>{post.title}</span>
                        </div>
                        <Image
                          width={800}
                          height={350}
                          src={post.featuredImage?.node?.sourceUrl || dummy}
                          alt="blog thumbnail"
                          quality={70}
                          placeholder="blur"
                          blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAABQFJREFUSEtV1VurJFcZgOG3Tl3HVWut6t0zmUwkMiMRJOqVd/4noxKQMBqE4JmI8YCRxDggCKKTfyGYq6AgKhJhZkjcu491WNXd1YeSVd0ze3JfPLx86/so58H9+/2xP7LfdWw3LWtT0dYL2nLGenXJtrykNyu8Y0gUTUjzm2R6QlaMyZQiVYJEpIRZTBiH+JGPH3i4nosz4McnuGHdVrTVEvMs3p7xcEIqT7jQYzKtSKQgyVOiNGaUjAjCAM/ivsXfe1K+HcrboczgU9rV1VB+NOV1ubyBsOUDLkllTpInT3E/fLb8nd/1fX9kt+vYWLytMPWCppxhVldsyksOpsLrI+LogjS/gSgm5LogU/I8loQwjc7l/rncwXnw9nt9fzyy259wYyrqekFdzWhWV7TllENb4x0jovgCkU/IiwuELhAWl9m5PGQUB+eZuzh25u//4rfDg3a2fNvSmIqqWVCVM8rVFFNN2RmD28ck8RghJ0g9RhYaoXIyi4uYKA0ZJT52LF7g4HoOzvs/ffcpvt4a6rairJcsqxnL1ZSqmrNt1wOexmOkvEAXBVJrciUQMiUWEVE6YhT7BJE34I7FH/zonf54PNDtO9ptO+DLesm8mjEvZ8yrOabd4vYJIiko1AVjXaC1RA54QjLgAaPYww9dvJEtB+fBG78Zyre77YCXbcWiWTKt5lyWMz6plszXOxwSxknBTTXmRqEZa4lSGSJPSMVowMPYxQ+dAXcs/ufXfz3s+XbfYbaG1bpm3iy5rOY8Lmf8pyp5uN6Dk/JcWnBXFdzWmkmRU8iMXEYDHqf+NR70J/xPr/2qPwz4FrNtB/yyXnJZzXlczvhPVfJwvQcn5bm04K4quK01kyKnkBm5jAY8Tv1rPOhP+J9e+1V/GPAtZtsO+GVt8Tn/qUoerjfgpDyXFtxVBbe1ZlLkFDIjlxFJ6hHGcI3bsdz/2k8+jW+u8b/UJU2zgc474xqU4gUteVkJnlcJF3mEEgFZ6g14GPb4AXi2/N1XfnjalkOH6dbDg161JY+aFX9tKiqzhc6/xqXitpK8rAW3ZcqFDNFZQJZ5JLFDFEIQ9Hg+OG9//XunC93vMF3LatMwa0seNyUfNjXTtoMuAF9AokEqXtSSL9hykTKREVoEiNQnjR2iyCGwn9ux/PKbb5zxjrZbU24a5m3Fx6bkn03Dw3YHuxG4AlIF0q6j5KVhLCmT3OIjcosnLnHoMLKf2z1/69XvnvDDbsDrTcOirfmfKfmoMfzbHpDF3evyL0nJHZ1z62l5iBxwb8DDkYNv8Te/9fqA7/Y71gNuWLYVU1PzyBj+vt6f8fxUniu+ohQvKsFzAx6jhcUDssQjiVyCwMG3M//xa995im+6Nc3GULY1s7biE9PycXvgsLOXkUOsyHPFF6XdGItnXMiYwuJZgIj9Ez5yT+U/uHev7489u0PHpttgNoaqrVmYmivT8nB95PE+BPdUfkco7iq7MYLnKmOSx8OVqjRAJBb3zuUOzvfvfO/0gz7ssOXtGV+ahivT8mh95PE+BPdUfkcoPqsUz9sLfVKeR8h0dMZdosDF9x3+D+AK1APeVzgoAAAAAElFTkSuQmCC`}
                        ></Image>
                      </BlogImageWrapper>
                      <div>
                        <h2>{post.title}</h2>
                        <span className="date">
                          {postDateFormater(post.date)}
                        </span>
                      </div>
                      <div
                        className="extract"
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt,
                        }}
                      />
                    </Link>
                    <div className="category-container">
                      <svg
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width=".85em"
                        height=".85em"
                        fill="rgba(250,250,250,0.4)"
                      >
                        <path d="M0 112c0-26.51 21.49-48 48-48h110.014a48 48 0 0143.592 27.907l12.349 26.791A16 16 0 00228.486 128H464c26.51 0 48 21.49 48 48v224c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112z"></path>
                      </svg>{" "}
                      <StyledText
                        color={"rgba(250,250,250,0.4)"}
                        fontSize={"var(--s-1)"}
                      >
                        {post.categories.nodes[0].name}
                      </StyledText>
                    </div>
                  </div>
                ))}
              </div>
            </BlogSidebar>
            {currentPageInfo.hasNextPage && (
              <Button
                mt={"var(--s4)"}
                onClick={loadMorePosts}
                disabled={loading}
              >
                {loading ? "Loading..." : "Load More Posts"}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </Button>
            )}
          </BlogPostsStyled>
        </Wrapper>
      </Region>
      <ContactFormSection
        formType={"freeConsultation3"}
        shapedivider={true}
        title={"Schedule a free consultation"}
        btnId={"form_submit_consultation3"}
        subTitle={[
          "Improve your tracking and measurement of website and marketing performance. Schedule a free consultation to discuss your current website tracking setup and explore ways to gain better insights from your data.",
        ]}
      >
        {" "}
      </ContactFormSection>
    </>
  );
};

export default Blog;

export const BlogPostsStyled = styled.div`
  margin-top: var(--s5);
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* max-width: 60ch; */
    padding-bottom: 1rem;
    margin-bottom: 0.3rem;
    border-bottom: 1px solid var(--secondary);
    overflow: hidden;
  }

  /* button {
    margin-top: var(--s5);
    padding: var(--s-1) var(--s1);
    background-color: var(--primary);
    color: white;
    border: none;
    border-radius: var(--s-2);
    cursor: pointer;
  } */

  button:disabled {
    /* background-color: var(--secondary); */
    opacity: 0.3;
    cursor: not-allowed;
  }

  .wrapper::after {
    content: none;
    width: 100%;
  }

  .post-list {
    gap: var(--s5);
  }

  .category-container {
    display: flex;
    gap: 0.3rem;
    align-items: center;
  }

  & > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & > * {
    color: var(--theme-text-dark);
  }

  h1 {
    margin-top: var(--s3) !important;
    color: var(--theme-text-dark);
  }

  h1 + div {
    margin-bottom: var(--s3);
  }

  h2 {
    font-size: var(--s1);
    font-weight: normal;
    color: var(--theme-text-dark);
  }

  .wrapper:hover > div > img {
    transform: translateY(-50%) scale(1.1) rotate(1deg);
  }

  span {
    font-size: var(--s-1);
  }

  .date {
    color: var(--theme-text-dark);
  }

  .extract {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .extract p {
  }

  .extract > *,
  .extract > * + * {
    background-color: transparent !important;
    font-size: var(--s0) !important;
    color: var(--theme-text-dark);
  }
`;
