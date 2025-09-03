import React from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Head from "next/head";
import { Region } from "../../components/styles/Region.styled";
import { Wrapper } from "../../components/styles/Wrapper.styled";
import BlogSidebar from "../../components/BlogSidebar";
import { BlogImageWrapper } from "../../components/styles/BlogImageWrapper.styled";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import { postDateFormater } from "../../helpers/postDateFormater";
import ContactFormSection from "../../components/ContactFormSection";
import { StyledText } from "../../components/styles/StyledText.styled";
import { UnderlineStyled } from "../../components/styles/UnderlineStyled.styled";
import dummy from "../../public/img/dummy-post.webp";

const client = new ApolloClient({
  uri: "https://snow-gazelle-262455.hostingersite.com/graphql",
  cache: new InMemoryCache(),
  ssrMode: true,
});


const GET_POSTS = gql`
    query GetPosts {
        posts {
            nodes {
                title
                slug
                id
                categories {
                    nodes {
                        name
                        slug
                    }
                }
            }
        }
    }
`;

const GET_POPULAR = gql`
    query GetPosts {
        posts(where: { categoryName: "popular" }) {
            nodes {
                title
                slug
                id
            }
        }
    }
`;

const GET_POSTS_SLUGS = gql`
    query GetPostSlugs {
        posts {
            nodes {
                slug
            }
        }
    }
`;

// const GET_SINGLE_POST = gql`
//   query GetSinglePost($slug: String!) {
//     postBy(slug: $slug) {
//       title
//       content
//       date
//       author {
//         node {
//           name
//         }
//       }
//       categories {
//         nodes {
//           name
//           slug
//         }
//       }
//       featuredImage {
//         node {
//           sourceUrl
//           altText
//         }
//       }
//       seo {
//         metaDesc
//         opengraphTitle
//         opengraphDescription
//         opengraphImage {
//           sourceUrl
//         }
//       }
//     }
//   }
// `;

const GET_SINGLE_POST = gql`
    query GetSinglePost($slug: String!) {
        postBy(slug: $slug) {
            title
            content
            date
            author {
                node {
                    name
                }
            }
            categories {
                nodes {
                    name
                    slug
                }
            }
            featuredImage {
                node {
                    sourceUrl
                    altText
                }
            }
            seo {
                canonicalUrl
                description
                fullHead
                title
            }
        }
    }
`;

export async function getStaticPaths() {
  try {
    const { data } = await client.query({ query: GET_POSTS_SLUGS });
    const paths = (data?.posts?.nodes || []).map(p => ({ params: { slug: p.slug } }));
    return { paths, fallback: 'blocking' }; // ⬅️ change from false
  } catch (e) {
    return { paths: [], fallback: 'blocking' };
  }
}

export async function getStaticProps({ params }) {
  try {
    const [postRes, postsRes, popularRes] = await Promise.all([
      client.query({ query: GET_SINGLE_POST, variables: { slug: params.slug } }),
      client.query({ query: GET_POSTS }),
      client.query({ query: GET_POPULAR }),
    ]);

    const post = postRes?.data?.postBy;
    if (!post) return { notFound: true, revalidate: 60 };

    return {
      props: {
        post,
        list: postsRes?.data?.posts?.nodes || [],
        popularPosts: popularRes?.data?.posts?.nodes || [],
      },
      revalidate: 60, // ISR
    };
  } catch (e) {
    return { notFound: true, revalidate: 60 };
  }
}

const SinglePost = ({ post, list, popularPosts }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <p>Loading...</p>;
    }
    // console.log(post.seo.fullHead);
    return (
        <>
        <Head>
            <title>
                {(post?.seo?.title ?? `Wlastig Analytics - ${post.title}`)}
            </title>

            {post?.seo?.description && (
                <meta name="description" content={post.seo.description} />
            )}

            {post?.seo?.canonicalUrl && (
                <link rel="canonical" href={post.seo.canonicalUrl} />
            )}

            {/* Optional basic OG/Twitter tags (build from your data) */}
            <meta property="og:title" content={(post?.seo?.title ?? post.title)} />
            {post?.seo?.description && (
                <meta property="og:description" content={post.seo.description} />
            )}
            {post?.featuredImage?.node?.sourceUrl && (
                <meta property="og:image" content={post.featuredImage.node.sourceUrl} />
            )}
            <meta name="twitter:card" content="summary_large_image" />

            <link rel="icon" href="/favicon.ico" />
        </Head>

            <Region>
                <Wrapper>
                    <SinglePostStyled>
                        <nav>
                            <ol>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/blog">Blog</Link>
                                </li>
                                <li>{post.title}</li>
                            </ol>
                        </nav>
                        <BlogSidebar popularList={popularPosts} list={list}>
                            <div className="post-content">
                                <BlogImageWrapper>
                                    <div>
                                        <span>{post.title}</span>
                                    </div>
                                    <Image
                                        className="cover"
                                        width={800}
                                        height={350}
                                        src={
                                            post.featuredImage?.node
                                                .sourceUrl || dummy
                                        }
                                        alt={
                                            post.featuredImage?.node.altText ||
                                            ""
                                        }
                                        placeholder="blur"
                                        blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAABQFJREFUSEtV1VurJFcZgOG3Tl3HVWut6t0zmUwkMiMRJOqVd/4noxKQMBqE4JmI8YCRxDggCKKTfyGYq6AgKhJhZkjcu491WNXd1YeSVd0ze3JfPLx86/so58H9+/2xP7LfdWw3LWtT0dYL2nLGenXJtrykNyu8Y0gUTUjzm2R6QlaMyZQiVYJEpIRZTBiH+JGPH3i4nosz4McnuGHdVrTVEvMs3p7xcEIqT7jQYzKtSKQgyVOiNGaUjAjCAM/ivsXfe1K+HcrbodziU9rV1VB+NOV1ubyBsOUDLkllTpInT3E/fLb8nd/1fX9kt+vYWLytMPWCppxhVldsyksOpsLrI+LogjS/gSgm5LogU/I8loQwjc7l/rncwXnw9nt9fzyy259wYyrqekFdzWhWV7TllENb4x0jovgCkU/IiwuELhAWl9m5PGQUB+eZuzh25u//4rfDg3a2fNvSmIqqWVCVM8rVFFNN2RmD28ck8RghJ0g9RhYaoXIyi4uYKA0ZJT52LF7g4HoOzvs/ffcpvt4a6rairJcsqxnL1ZSqmrNt1wOexmOkvEAXBVJrciUQMiUWEVE6YhT7BJE34I7FH/zonf54PNDtO9ptO+DLesm8mjEvZ8yrOabd4vYJIiko1AVjXaC1RA54QjLgAaPYww9dvJEtB+fBG78Zyre77YCXbcWiWTKt5lyWMz6plszXOxwSxknBTTXmRqEZa4lSGSJPSMVowMPYxQ+dAXcs/ufXfz3s+XbfYbaG1bpm3iy5rOY8Lmf8pyp5uN6Dk/JcWnBXFdzWmkmRU8iMXEYDHqf+NR70J/xPr/2qPwz4FrNtB3zaLPm4XvDfcs4HVQXrI7gpZJqXVMHdQnNLC8YqReYxmQhIUo9R7BDY8qDH9XqcP7768/5gx7LvaM74lVnyuF7wr3LBP+oG1j142YCjC76qJZ/ROROVoPMIIQLixCNKLM41/odv/Ow08zO+XNdY/GGz5G/Vkoe1gY3zDK75spbcUTk3VUKRh+QiIE09whhGIfi23O9xfv/Km9d413LCywH/oFoxb1rYuuAJyBQozee05PNacEuljPMQOeAucexc43Ys97/2k0/jm2v8L3VJ02yg8864BqV4QUteVoLnVcJFHqFEQJZ6Ax6GPX4Ani1/95Ufnrbl0GG69fCgV23Jo2bFX5uKymyh869xqbitJC9rwW2ZciFDdBaQZR5J7BKFEAQ9ng/O21//3ulC9ztM17LaNMzaksdNyYdNzbTtoAvAF5BokIoXteQLtlymTGSEFgEi9UljhyhyCOzndiy//OYbZ7yj7daUm4Z5W/GxKfln0/Cw3cFudCpPFEi7jpKXhrGkTHKLj8gtnrjEocPIfm73/K1Xv3vCD7sBrzcNi7bmf6bko8bwb3tAFnevy78kJXd0zq2n5SFywL0BD0cOvsXf/NbrA77b71gPuGHZVkxNzSNj+Pv6cMbzU3mu+IpSvKgEzw14jBYWD8gSjyRyCQMH3878x6995ym+6dY0G0PZ1szaik9My4ftgcPOXkYOsSLPFV+UdmMsnnEhYwqLZwEi9k/4yD2V/+Devb4/9uwOHZtug9kYqrZmYWouTctH6yPTARcQa14QirvKbozgpsqY5PFwpSoNEInFvXO5g/P9b987/aAPO2x5e8aXpuHKtDxaH3m8D8E9ld8Ris8qxfP2Qp+U5xEyHZ1xlyhw8X2H/wO4ArWA9xUOigAAAABJRU5ErkJggg==`}
                                    ></Image>
                                </BlogImageWrapper>
                                <div>
                                    <StyledText
                                        as={"h1"}
                                        color={"var(--theme-text-dark)"}
                                        align={"start"}
                                    >
                                        {post.title}
                                    </StyledText>
                                    <UnderlineStyled
                                        underlineMargin={"var(--s-1)"}
                                    ></UnderlineStyled>
                                    {/* <StyledText
                    color={"var(--theme-text-dark)"}
                    fontSize={"var(--s-1)"}
                    align={"start"}
                  >
                    {postDateFormater(post.date)}
                  </StyledText> */}
                                    {/* <div className="category-container">
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
                  </div> */}
                                </div>
                                <div
                                    className="post-content"
                                    dangerouslySetInnerHTML={{
                                        __html: post.content,
                                    }}
                                />
                            </div>
                        </BlogSidebar>
                    </SinglePostStyled>
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

export default SinglePost;

export const SinglePostStyled = styled.div`
    margin-top: var(--s3);

    .post-content {
        color: var(--theme-text-dark);
    }

    .category-container {
        display: flex;
        gap: 0.3rem;
        align-items: center;
    }

    .post-content {
        gap: var(--s2);
    }

    nav {
        padding-block: 0.5rem;
        font-size: 14px;
    }

    ol {
        display: flex;
        gap: 0.5rem;
        color: var(--theme-text-dark);
    }

    nav li::after {
        content: ">";
        margin-left: 5px;
        color: var(--secondary);
    }

    nav li:last-child::after {
        content: "";
    }

    .cover {
        margin: 0 !important;
    }

    & img {
        margin-inline: auto;
        margin-block: var(--s0);
    }

    .draft-warning {
        color: var(--secondary);
        font-size: var(--s-1);
        text-transform: uppercase;
    }

    .ql-align-center > * {
        margin-inline: auto;
    }
`;
