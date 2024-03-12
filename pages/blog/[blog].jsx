import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { db } from "../../public/firebase/firebase";
import { Wrapper } from "../../components/styles/Wrapper.styled";
import { Region } from "../../components/styles/Region.styled";
import { FullBackground } from "../../components/styles/FullBackground.styled";

const SinglePost = ({ blog }) => {
  return (
    <FullBackground className={""} background={"var(--primary)"}>
      <Region>
        <Wrapper>
          <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
          </div>
        </Wrapper>
      </Region>
    </FullBackground>
  );
};

export const getServerSideProps = async ({ params }) => {
  /*BLOG POST SLUG AND BLOG POST ID IN FIRESTORE DOCUMENT MUST BE SAME*/
  const { blog: blogSlug } = params;
  let blogData = {};

  try {
    const blogRef = doc(db, "blog", blogSlug);
    const docSnap = await getDoc(blogRef);

    if (docSnap.exists()) {
      blogData = { id: docSnap.id, ...docSnap.data(), created_at: "" };
    }

    return {
      props: {
        blog: blogData,
      },
    };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
};

export default SinglePost;
