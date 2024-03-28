import React, { useState } from "react";
import styled from "styled-components";
import { removeDocumentHandler } from "../helpers/removeDocumentHandler";

const RemoveFirebaseButton = (props) => {
  const [confirmation, setConfirmation] = useState(false);

  const onRemoveItemHandler = () => {
    removeDocumentHandler(props.document, props.id);
    const list = props.list.filter((item) => item.id !== props.id);
    props.returnListHandler(list);
    setConfirmation(false);
  };

  return (
    <StyledRemoveButton>
      <button onClick={() => setConfirmation(true)}>
        <svg className="icon">
          <use xlinkHref={"./img/subservices/sprite.svg#remove-folder"}></use>
        </svg>
      </button>
      {confirmation ? (
        <div className="confirmation-dialog">
          <div>
            <span>Are you sure?</span>
            <button onClick={onRemoveItemHandler}>Yes</button>
            <button onClick={() => setConfirmation(false)}>No</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </StyledRemoveButton>
  );
};

export default RemoveFirebaseButton;

export const StyledRemoveButton = styled.div`
  background-color: transparent;
  border: none;
  & .icon {
    fill: var(--background-dark);
    width: 20px !important;
    height: 20px !important;
  }

  & .icon:hover {
    fill: var(--error-color) !important;
  }

  & button {
    cursor: pointer;
  }

  & button:first-child {
    border: none;
    background-color: transparent;
  }

  .confirmation-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 101;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .confirmation-dialog div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background-light);
    padding: 3rem;
    gap: 1rem;
    border-radius: 5px;
  }

  .confirmation-dialog button {
    padding: 0.3rem 0.8rem;
  }

  .confirmation-dialog div > *:nth-child(2):hover {
    color: var(--success-color);
  }

  .confirmation-dialog div > *:nth-child(3):hover {
    color: var(--error-color);
  }
`;
