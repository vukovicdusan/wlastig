import React from "react";
import styled from "styled-components";
import { removeDocumentHandler } from "../helpers/RemoveDocumentHandler";

const RemoveFirebaseButton = (props) => {
  const onRemoveItemHandler = () => {
    removeDocumentHandler(props.document, props.id);
    const list = props.list.filter((item) => item.id === props.id);
    props.returnListHandler(list);
  };

  return (
    <StyledRemoveButton onClick={onRemoveItemHandler}>
      <svg className="icon">
        <use xlinkHref={"./img/subservices/sprite.svg#remove-folder"}></use>
      </svg>
    </StyledRemoveButton>
  );
};

export default RemoveFirebaseButton;

export const StyledRemoveButton = styled.button`
  background-color: transparent;
  border: none;
  & .icon {
    fill: var(--background-dark);
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  & .icon:hover {
    fill: var(--error-color) !important;
  }
`;
