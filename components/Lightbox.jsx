"use client";

import { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function PostLightbox() {
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Find all images inside the WP content
    const images = document.querySelectorAll(".post-content img");

    images.forEach((img, i) => {
      img.style.cursor = "zoom-in";

      img.addEventListener("click", () => {
        setSlides(
          Array.from(images).map((x) => ({
            src: x.src,
          }))
        );
        setIndex(i);
        setOpen(true);
      });
    });
  }, []);

  return (
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      slides={slides}
      index={index}
    />
  );
}
