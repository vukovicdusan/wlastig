"use client";

import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

export default function PostLightbox() {
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);
  const zoomRef = React.useRef(null);

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
    <>
      <Lightbox
        open={open}
        plugins={[Zoom]}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        zoom={{ ref: zoomRef, maxZoomPixelRatio: 3, zoomInMultiplier: 1.5 }}
      />
      <button type="button" onClick={() => zoomRef.current?.zoomIn()}>
        Zoom In
      </button>

      <button type="button" onClick={() => zoomRef.current?.zoomOut()}>
        Zoom Out
      </button>
    </>
  );
}
