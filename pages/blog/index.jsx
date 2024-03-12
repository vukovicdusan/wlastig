import React from "react";
import { db } from "../../public/firebase/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { Grid } from "../../components/styles/Grid.styled";
import Head from "next/head";
import Link from "next/link";
import { FullBackground } from "../../components/styles/FullBackground.styled";
import { Region } from "../../components/styles/Region.styled";
import { Wrapper } from "../../components/styles/Wrapper.styled";

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
            <Grid>
              {blogList.map((blog) => (
                <>
                  <Link href={`/blog/${blog.slug}`} passHref>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                  </Link>
                </>
              ))}
            </Grid>
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
