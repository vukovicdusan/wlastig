import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const ReactQuillComponent = (props) => {
  //   const [value, setValue] = useState("");

  //   props.quillValueHandler(value);

  const quillModules = {
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
        image: handleImageUpload,
      },
    },
  };

  const handleImageUpload = () => {};
  return (
    <ReactQuill
      ref={props.forwardedRef}
      modules={quillModules}
      placeholder={"Start your creative endeavor here..."}
      theme="snow"
      value={props.setValue}
      onChange={(e) => props.quillValueHandler(e)}
    />
  );
};

export default ReactQuillComponent;
