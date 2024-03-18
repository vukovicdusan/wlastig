import React, { useEffect, useState } from "react";

const WriteBlogTitle = () => {
  const headingArr = [
    "Pour your soul into this post...",
    "Open your heart...",
    "You can do it! Maybe!",
    "Be creative my dear!",
    "Embrace the blank page like you do your naked body.",
    "Every beautiful word you write is a step closer to you taking a break.",
    "Let your stomach guide your pen!",
    "Your voice matters!",
    "Share your magically unique perspective with the world!",
    "Don't wait for inspiration. Step away from the keyboard.",
    "Your words have the power to inspire!",
    "This blog is my sanctuary!",
    "This is literal war!",
  ];

  const [heading, setHeading] = useState(headingArr[0]);

  useEffect(() => {
    headingRandomizer();
  }, []);

  const headingRandomizer = () => {
    setHeading(headingArr[Math.floor(Math.random() * headingArr.length)]);
  };

  return <h2>{heading}</h2>;
};

export default WriteBlogTitle;
