import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Resizer from "react-image-file-resizer";
import styled from "styled-components";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "./styles/Button.styled";
import { InputWrapper } from "./styles/InputWrapper.styled";
import WriteBlogTitle from "./WriteBlogTitle";
import { db, storage } from "../public/firebase/firebase";
import { useRouter } from "next/router";
import { formatDate } from "../helpers/formatDate";

const date = new Date();

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");

    // eslint-disable-next-line react/display-name
    return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
  },
  {
    ssr: false,
  }
);

const WriteBlog = (props) => {
  const [value, setValue] = useState("");
  const [postTitle, setPostTitleValue] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [progress, setProgress] = useState(null);
  const [postSlug, setPostSlug] = useState("");
  const [postStatus, setPostStatus] = useState("draft");
  const [editPostValues, setEditPostValues] = useState({});
  const router = useRouter();
  let quillRef = useRef(null);

  const quillModules = useMemo(
    () => ({
      toolbar: {
        container: [
          [
            { header: [1, 2, 3, 4, 5, 6, false] },
            { size: ["small", false, "large", "huge"] },
          ],
          [{ color: [] }, "bold", "italic", "underline", "strike"],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image", "video"],
          [{ align: [] }],
          [{ script: "sub" }, { script: "super" }],
        ],
        handlers: {
          image: () => handleQuillImageUpload(),
        },
      },
    }),
    [handleQuillImageUpload]
  );

  const handleQuillImageUpload = useCallback(() => {
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      await quillImageInputHandler(file);
    };
  }, [quillImageInputHandler]);

  const contentInputHandler = async (e) => {
    e.preventDefault();
    if (!editPostValues.image) {
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
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                await setDoc(doc(db, "blog", postSlug), {
                  date: formatDate(date),
                  created_at: serverTimestamp(),
                  image: downloadURL,
                  content: value,
                  title: postTitle,
                  slug: postSlug,
                  status: postStatus,
                });
                router.reload();
              }
            );
          }
        );
      } catch (err) {
        console.log(err);
      }
    } else {
      await setDoc(doc(db, "blog", postSlug), {
        date: formatDate(date),
        created_at: serverTimestamp(),
        image: editPostValues.image,
        content: value,
        title: postTitle,
        slug: postSlug,
        status: postStatus,
      });
      router.reload();
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

  const quillImageInputHandler = useCallback((file) => {
    try {
      Resizer.imageFileResizer(
        file,
        350,
        350,
        "JPEG",
        72,
        0,
        (uri) => {
          const imgName = date.getTime() + "quill";
          const storageRef = ref(storage, imgName);
          const uploadTask = uploadBytesResumable(storageRef, uri);
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
              getDownloadURL(uploadTask.snapshot.ref).then(
                async (downloadURL) => {
                  const range = quillRef.current.editor.getSelection(true);
                  if (range) {
                    quillRef.current.editor.insertEmbed(
                      range.index,
                      "image",
                      downloadURL
                    );
                    quillRef.current.editor.setSelection(range.index + 1);
                  }
                }
              );
            }
          );
        },
        "file"
      );
    } catch (err) {
      console.log(err);
    }
  });

  const titleAndSlugHandler = (e) => {
    setPostTitleValue(e.target.value);
    let slug = e.target.value.toLowerCase().split(" ").join("-");
    setPostSlug(slug);
  };

  useEffect(() => {
    if (props.postForEdit) {
      props.postForEdit.map((post) => {
        setEditPostValues({
          title: post.title,
          content: post.content,
          image: post.image,
          status: post.status,
        });
        setValue(post.content);
        setPostSlug(post.slug);
        setPostTitleValue(post.title);
        setPostStatus(post.status);
      });
    }
  }, [props.postForEdit]);

  useEffect(() => {
    const init = (quill) => {};
    const check = () => {
      if (quillRef.current) {
        init(quillRef.current);
        return;
      }
      setTimeout(check, 200);
    };
    check();
  }, [quillRef]);

  return (
    <WriteBlogStyled>
      <WriteBlogTitle></WriteBlogTitle>
      {props.postForEdit && (
        <span className="editing-label">
          <svg onClick={() => editPostHandler(post.id)} className="icon">
            <use xlinkHref={"./img/subservices/sprite.svg#pencil-edit"}></use>
          </svg>
          You Are Editing This Post
        </span>
      )}
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
            defaultValue={editPostValues ? editPostValues.title : ""}
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
        <InputWrapper
          labelTextColor={"var(--text-light)"}
          labelBgColor={"var(--primary)"}
          inputTextColor={"var(--text-light)"}
        >
          <select
            value={postStatus}
            name="status"
            id="status"
            onChange={(e) => setPostStatus(e.target.value)}
          >
            <option value="draft">Draft</option>
            <option value="published">Publish</option>
          </select>
          <label htmlFor="status">Post Status</label>
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
      {/* <ReactQuillComponent
        forwardedRef={quillRef}
        quillValueHandler={quillValueHandler}
        setValue={value}
      ></ReactQuillComponent> */}
      <ReactQuill
        forwardedRef={quillRef}
        modules={quillModules}
        placeholder={"Start your creative endeavor here..."}
        theme="snow"
        value={value}
        onChange={setValue}
      />
      <Button onClick={contentInputHandler}>
        {props.postForEdit ? "Edit Post" : "Upload Post"} <span></span>
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

  .editing-label {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    gap: var(--s-2);
    color: var(--secondary);
  }

  .icon {
    width: 30px;
    height: 30px;
    fill: var(--secondary);
  }

  & form {
    display: flex;
    flex-direction: column;
    gap: var(--s1);
  }

  & button {
    max-width: 50%;
    margin-inline: auto;
  }

  & option {
    background-color: var(--background-dark);
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
