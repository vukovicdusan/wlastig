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
import BlogSidebar from "../../components/BlogSidebar";
import { Stack } from "../../components/styles/Stack.styled";

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
              <BlogSidebar>
                <h1>Blog</h1>
                <Stack>
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
                          placeholder="blur"
                          blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAABQFJREFUSEtV1VurJFcZgOG3Tl3HVWut6t0zmUwkMiMRJOqVd/4noxKQMBqE4JmI8YCRxDggCKKTfyGYq6AgKhJhZkjcu491WNXd1YeSVd0ze3JfPLx86/so58H9+/2xP7LfdWw3LWtT0dYL2nLGenXJtrykNyu8Y0gUTUjzm2R6QlaMyZQiVYJEpIRZTBiH+JGPH3i4nosz4McnuGHdVrTVEvMs3p7xcEIqT7jQYzKtSKQgyVOiNGaUjAjCAM/ivsXfe1K+HcrbodziU9rV1VB+NOV1ubyBsOUDLkllTpInT3E/fLb8nd/1fX9kt+vYWLytMPWCppxhVldsyksOpsLrI+LogjS/gSgm5LogU/I8loQwjc7l/rncwXnw9nt9fzyy259wYyrqekFdzWhWV7TllENb4x0jovgCkU/IiwuELhAWl9m5PGQUB+eZuzh25u//4rfDg3a2fNvSmIqqWVCVM8rVFFNN2RmD28ck8RghJ0g9RhYaoXIyi4uYKA0ZJT52LF7g4HoOzvs/ffcpvt4a6rairJcsqxnL1ZSqmrNt1wOexmOkvEAXBVJrciUQMiUWEVE6YhT7BJE34I7FH/zonf54PNDtO9ptO+DLesm8mjEvZ8yrOabd4vYJIiko1AVjXaC1RA54QjLgAaPYww9dvJEtB+fBG78Zyre77YCXbcWiWTKt5lyWMz6plszXOxwSxknBTTXmRqEZa4lSGSJPSMVowMPYxQ+dAXcs/ufXfz3s+XbfYbaG1bpm3iy5rOY8Lmf8pyp5uN6Dk/JcWnBXFdzWmkmRU8iMXEYDHqf+NR70J/xPr/2qPwz4FrNtB3zaLPm4XvDfcs4HVQXrI7gpZJqXVMHdQnNLC8YqReYxmQhIUo9R7BDY8qDH9XqcP7768/5gx7LvaM74lVnyuF7wr3LBP+oG1j142YCjC76qJZ/ROROVoPMIIQLixCNKLM41/odv/Ow08zO+XNdY/GGz5G/Vkoe1gY3zDK75spbcUTk3VUKRh+QiIE09whhGIfi23O9xfv/Km9d413LCywH/oFoxb1rYuuAJyBQozee05PNacEuljPMQOeAucexc43Ys97/2k0/jm2v8L3VJ02yg8864BqV4QUteVoLnVcJFHqFEQJZ6Ax6GPX4Ani1/95Ufnrbl0GG69fCgV23Jo2bFX5uKymyh869xqbitJC9rwW2ZciFDdBaQZR5J7BKFEAQ9ng/O21//3ulC9ztM17LaNMzaksdNyYdNzbTtoAvAF5BokIoXteQLtlymTGSEFgEi9UljhyhyCOzndiy//OYbZ7yj7daUm4Z5W/GxKfln0/Cw3cFudCpPFEi7jpKXhrGkTHKLj8gtnrjEocPIfm73/K1Xv3vCD7sBrzcNi7bmf6bko8bwb3tAFnevy78kJXd0zq2n5SFywL0BD0cOvsXf/NbrA77b71gPuGHZVkxNzSNj+Pv6cMbzU3mu+IpSvKgEzw14jBYWD8gSjyRyCQMH3878x6995ym+6dY0G0PZ1szaik9My4ftgcPOXkYOsSLPFV+UdmMsnnEhYwqLZwEi9k/4yD2V/+Devb4/9uwOHZtug9kYqrZmYWouTctH6yPTARcQa14QirvKbozgpsqY5PFwpSoNEInFvXO5g/P9b987/aAPO2x5e8aXpuHKtDxaH3m8D8E9ld8Ris8qxfP2Qp+U5xEyHZ1xlyhw8X2H/wO4ArWA9xUOigAAAABJRU5ErkJggg==`}
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
                </Stack>
              </BlogSidebar>
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
  & > * {
    color: #ddd;
  }

  h1 {
    margin-bottom: var(--s1);
  }

  h2 {
    font-size: var(--s1);
    font-weight: normal;
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
