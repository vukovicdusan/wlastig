import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../public/firebase/firebase";

const QuickPublishDraft = (props) => {
  const [postStatus, setPostStatus] = useState(props.postStatusProp);
  const [success, setSuccess] = useState(false);

  const publishDraftPostHandler = (e) => {
    setPostStatus(e.target.value);
  };

  const postStatusChangeHandler = async (e, id) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, "blog", id), {
        status: postStatus,
      });
      setSuccess(true);
    } catch (error) {
      console.log("Update failed: ", error);
      setSuccess(false);
    }
  };

  let hasChanged = props.postStatusProp !== postStatus;

  return (
    <QuickPublishDraftStyled
      onSubmit={(e) => postStatusChangeHandler(e, props.postIdProp)}
    >
      <select
        defaultValue={props.postStatusProp}
        name="status"
        id="status"
        onChange={(e) => publishDraftPostHandler(e)}
      >
        <option value="draft">Draft</option>
        <option value="published">Publish</option>
      </select>
      {/* <svg className="chevron">
        <use xlinkHref={"./img/subservices/sprite.svg#chevron-down"}></use>
      </svg> */}
      <label className="visually-hidden" htmlFor="status">
        Post Status
      </label>
      <div className="button-wrapper">
        {hasChanged && !success ? (
          <button>
            <svg className="check-icon">
              <use xlinkHref={"./img/subservices/sprite.svg#sync-check"}></use>
            </svg>
          </button>
        ) : (
          ""
        )}
      </div>
    </QuickPublishDraftStyled>
  );
};

export default QuickPublishDraft;

export const QuickPublishDraftStyled = styled.form`
  display: flex;
  gap: var(--s0);
  justify-content: center;
  align-items: center;
  position: relative;

  .button-wrapper {
    width: 30px;
    height: 30px;
  }

  .chevron {
    width: 15px;
    height: 15px;
    fill: var(--text-light);
  }

  .check-icon {
    width: 30px;
    height: 30px;
    cursor: pointer;
    fill: #4bb543;
    transition: transform 0.2s ease;
  }

  .check-icon:hover {
    transform: rotate(-25deg);
  }

  & button {
    background-color: transparent;
    border: none;
  }

  & select {
    appearance: revert !important;
    min-width: revert !important;
    border: none;
    cursor: pointer;
    background-color: transparent;
    z-index: 100;
  }

  & option {
    background-color: var(--background-dark);
    cursor: pointer;
  }

  & label {
    cursor: pointer;
  }

  @media (max-width: 500px) {
    .button-wrapper {
      width: 20px;
      height: 20px;
    }

    .check-icon {
      width: 20px;
      height: 20px;
    }
  }
`;
