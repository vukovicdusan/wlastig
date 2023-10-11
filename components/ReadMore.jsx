import React, { useState } from "react";
import styled from "styled-components";

const ReadMore = (props) => {
  const [readMore, setReadMore] = useState(false);

  const readMoreHandler = () => {
    setReadMore(true);
  };

  return (
    <ReadMoreStyled expanded={readMore}>
      <div className="read-more-content">{props.content}</div>
      <button onClick={readMoreHandler} className="read-more-btn">
        Read More<span className="arrow">&#10549;</span>
      </button>
    </ReadMoreStyled>
  );
};

export const ReadMoreStyled = styled.div`
  .read-more-content p {
    display: -webkit-box;
    -webkit-line-clamp: ${(props) => (props.expanded ? "100" : "4")};
    -webkit-box-orient: vertical;
    overflow: ${(props) => (props.expanded ? "visible" : "hidden")};
  }
  .read-more-btn {
    display: ${(props) => (props.expanded ? "none" : "block")};
    border: 0;
    background: none;
    cursor: pointer;
    font-size: var(--s-1);
    padding: 0;
    color: var(--primary);
  }

  .arrow {
    transform: translateY(2px);
    display: inline-block;
    margin-left: 2px;
  }
`;
export default ReadMore;
