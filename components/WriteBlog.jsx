import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import Resizer from "react-image-file-resizer";
import styled from "styled-components";
import { useState } from "react";
import { Button } from "./styles/Button.styled";
import { InputWrapper } from "./styles/InputWrapper.styled";
import WriteBlogTitle from "./WriteBlogTitle";
import { db, storage } from "../public/firebase/firebase";
import { useRouter } from "next/router";

const date = new Date();

const formatDateForBlog = (date) => {
  let writeDate = date.toLocaleDateString("sr-RS").split(". ");
  let yearArr = writeDate[writeDate.length - 1].split("");
  yearArr.pop();
  let year = yearArr.join("");
  writeDate.pop();
  writeDate.push(year);
  return writeDate.join("/");
};

const WriteBlog = () => {
  const [value, setValue] = useState("");
  const [postTitle, setPostTitleValue] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [progress, setProgress] = useState(null);
  const [postSlug, setPostSlug] = useState("");
  const router = useRouter();

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote"],
      [{ color: [] }],
      [{ list: "ordered" }],
      [{ list: "bullet" }],
      ["link", "image", "video"],
      [{ align: [] }],
    ],
  };

  const contentInputHandler = (e) => {
    e.preventDefault();
    try {
      const imgName = date.getTime() + "blog";
      const storageRef = ref(storage, imgName);
      const uploadTask = uploadBytesResumable(storageRef, blogImage);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              break;
            case "running":
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // setDoc(doc(db, "data", "one")
            await setDoc(doc(db, "blog", postSlug), {
              //   author: author,
              date: formatDateForBlog(date),
              created_at: serverTimestamp(),
              image: downloadURL,
              content: value,
              title: postTitle,
              slug: postSlug,
            });
            router.reload();
          });
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const imageInputHandler = (e) => {
    try {
      Resizer.imageFileResizer(
        e.target.files[0],
        800,
        800,
        "JPEG",
        72,
        0,
        (uri) => {
          setBlogImage(uri);
        },
        "file"
      );
    } catch (err) {
      console.log(err);
    }
  };

  const titleAndSlugHandler = (e) => {
    setPostTitleValue(e.target.value);
    let slug = e.target.value.toLowerCase().split(" ").join("-");
    setPostSlug(slug);
  };

  return (
    <WriteBlogStyled>
      <WriteBlogTitle></WriteBlogTitle>
      <form>
        <InputWrapper
          labelTextColor={"var(--text-light)"}
          labelBgColor={"var(--primary)"}
          inputTextColor={"var(--text-light)"}
        >
          <input
            name="title"
            id="title"
            onChange={(e) => titleAndSlugHandler(e)}
            type="text"
            required
            autoCorrect="off"
          />
          <label htmlFor="title">Post Title</label>
        </InputWrapper>
        <InputWrapper
          labelTextColor={"var(--text-light)"}
          labelBgColor={"var(--primary)"}
          inputTextColor={"var(--text-light)"}
        >
          <input
            name="file"
            id="file"
            onChange={imageInputHandler}
            type="file"
            required
            autoCorrect="off"
          />
          <label htmlFor="file">Add Cover Image</label>
        </InputWrapper>
        {progress && (
          <div className="[ d-flex-c ] progress-bar--container">
            <span
              className="progress-bar"
              style={{
                width: progress + "%",
                backgroundColor:
                  (progress < 30 && "red") ||
                  (progress < 65 && "yellow") ||
                  (progress > 65 && "green"),
              }}
            ></span>
            <p>{Math.floor(progress)}%</p>
          </div>
        )}
      </form>
      <ReactQuill
        modules={quillModules}
        placeholder={"Start your creative endeavor here..."}
        theme="snow"
        value={value}
        onChange={setValue}
      />
      <Button onClick={contentInputHandler}>
        Upload Post <span></span>
        <span></span>
        <span></span>
        <span></span>{" "}
      </Button>
    </WriteBlogStyled>
  );
};

export default WriteBlog;

export const WriteBlogStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s1);
  margin-top: var(--s2);
  max-width: 60ch;
  margin-inline: auto;

  & form {
    display: flex;
    flex-direction: column;
    gap: var(--s1);
  }

  & button {
    max-width: 50%;
    margin-inline: auto;
  }

  /* QUILL */
  .quill {
    background: var(--text-light);
  }

  .ql-editor p {
    color: #1c2334 !important;
  }

  .ql-editor {
    min-height: 20rem !important;
  }
`;
