import React from "react";
import { db } from "../../public/firebase/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { Grid } from "../../components/styles/Grid.styled";
import Head from "next/head";
import Link from "next/link";
import { FullBackground } from "../../components/styles/FullBackground.styled";
import { Region } from "../../components/styles/Region.styled";
import { Wrapper } from "../../components/styles/Wrapper.styled";
import styled from "styled-components";
import Image from "next/image";

const index = ({ blogList }) => {
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
      <FullBackground className={""} background={"var(--primary)"}>
        <Region>
          <Wrapper>
            <BlogPostsStyled>
              <h1>Blog</h1>
              <Grid gridColumn={"365px"} gridGap={"2rem"}>
                {blogList.map((blog, index) => (
                  <Link
                    className="wrapper"
                    key={index}
                    href={`/blog/${blog.slug}`}
                    passHref
                  >
                    <div className="aspect-ratio">
                      <Image
                        width={400}
                        height={300}
                        src={blog.image}
                        alt="blog thumbnail"
                        quality={70}
                      ></Image>
                    </div>
                    <span>{blog.date}</span>
                    <h2>{blog.title}</h2>
                    <div
                      className="extract"
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                  </Link>
                ))}
              </Grid>
            </BlogPostsStyled>
          </Wrapper>
        </Region>
      </FullBackground>
    </>
  );
};

export const getServerSideProps = async () => {
  let blogData = [];

  try {
    const blogQuery = query(collection(db, "blog"));

    const blogQuerySnapshot = await getDocs(blogQuery);
    blogQuerySnapshot.forEach((doc) => {
      blogData.push({ id: doc.id, ...doc.data(), created_at: "" });
    });

    return {
      props: {
        blogList: blogData,
      },
    };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
};

export default index;

export const BlogPostsStyled = styled.div`
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--secondary);
  }

  .wrapper::after {
    content: none;
    width: 100%;
  }

  h1 {
    margin-bottom: var(--s1);
  }

  img {
    object-fit: cover;
    width: 100%;
    /* height: 100%; */
  }

  span {
    font-size: var(--s-1);
  }

  .aspect-ratio {
    aspect-ratio: 16/9;
  }

  .extract {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .extract > * {
    font-size: var(--s0) !important;
  }
`;
