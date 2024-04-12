import styled from "styled-components";

export const BlogImageWrapper = styled.div`
  & img {
    object-fit: cover;
    width: 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 0;
    transition: all 0.4s ease;
  }

  & {
    position: relative;
    aspect-ratio: 16 / 9;
    overflow: hidden;
  }

  & > div {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(3px);
    /* transition: backdrop-filter 0.4s ease; */
    padding: var(--s1);
  }

  & span {
    text-align: center;
    font-size: var(--s3) !important;
    font-weight: bold;
    text-transform: capitalize;
  }

  @media (max-width: 600px) {
    & span {
      font-size: var(--s1) !important;
    }
  }

  @media (max-width: 450px) {
    & span {
      font-size: var(--s0) !important;
    }
  }
`;
