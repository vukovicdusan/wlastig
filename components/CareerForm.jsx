import React, { useEffect, useState } from "react";
import { Stack } from "./styles/Stack.styled";
import { Switcher } from "./styles/Switcher.styled";
import { InputWrapper } from "./styles/InputWrapper.styled";
import { Button } from "./styles/Button.styled";
import { StyledText } from "./styles/StyledText.styled";
import Loader from "./Loader";
import styled from "styled-components";
import { sendContactForm } from "../lib/api";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../public/firebase/firebase";

const CareerForm = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [contactFormData, setContactFormData] = useState({ type: "career" });
  const [contactFormProccess, setContactFormProccess] = useState({
    success: false,
    error: false,
    loading: false,
  });
  const [honeypot, setHoneypot] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (honeypot) {
      return;
    }
    setContactFormProccess((prev) => ({ ...prev, loading: true }));
    try {
      const storageRef = ref(storage, contactFormData.cv.name);
      uploadBytes(storageRef, contactFormData.cv).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          sendContactForm({ ...contactFormData, cv: downloadURL });
          setContactFormProccess((prev) => ({
            ...prev,
            success: true,
            loading: false,
          }));
        });
      });
    } catch (err) {
      console.log(err);
      setContactFormProccess((prev) => ({
        ...prev,
        error: true,
        loading: false,
      }));
    }
  };

  const inputHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setContactFormData({
          ...contactFormData,
          email: e.target.value,
        });
        break;
      case "name":
        setContactFormData({ ...contactFormData, name: e.target.value });
        break;
      case "cover":
        setContactFormData({
          ...contactFormData,
          cover: e.target.value,
        });
        break;
      case "cv":
        setContactFormData({
          ...contactFormData,
          cv: e.target.files[0],
        });
        break;
      default:
        "";
    }
  };

  return (
    <CareerFormStyled>
      {" "}
      <Stack
        stackSpace={"var(--s2)"}
        stackJustify={"center"}
        stackAlign={"center"}
      >
        <h2>Apply</h2>
        <Stack
          as="form"
          stackJustify={"center"}
          stackAlign={"center"}
          onSubmit={onSubmitHandler}
        >
          <Switcher elCount={2} flexBasis={"20rem"}>
            <InputWrapper>
              <input
                type="text"
                name="name"
                id="name"
                autoCapitalize="none"
                autoCorrect="off"
                autoComplete="email"
                required
                onChange={inputHandler}
              />
              <label htmlFor="name">Name</label>
            </InputWrapper>
            <InputWrapper>
              <input
                type="text"
                name="email"
                id="email"
                autoCapitalize="none"
                autoCorrect="off"
                autoComplete="email"
                required
                pattern="[^@]+@[^\.]+\..+"
                onChange={inputHandler}
              />
              <label htmlFor="email">Email</label>
            </InputWrapper>
          </Switcher>
          <InputWrapper>
            <input
              onChange={inputHandler}
              accept="application/pdf"
              type="file"
              name="cv"
              id="cv"
            />
            <label htmlFor="cv">Upload Your CV</label>
          </InputWrapper>
          <InputWrapper>
            <textarea
              id="cover"
              name="cover"
              rows="4"
              onChange={inputHandler}
            ></textarea>
            <label htmlFor="cover">Cover Letter</label>
          </InputWrapper>
          <input
            onChange={() => setHoneypot(true)}
            type="text"
            className="hidden"
            name="honeypot"
          />
          <div className="button-loader">
            <Button>
              Submit <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Button>
            {contactFormProccess.loading ? <Loader></Loader> : null}
          </div>
        </Stack>
        {!contactFormProccess.success && contactFormProccess.error ? (
          <StyledText color={"var(--error-color)"}>
            Something went wrong. Message was not sent.
          </StyledText>
        ) : !contactFormProccess.success && !contactFormProccess.error ? (
          ""
        ) : (
          <StyledText color={"var(--success-color)"}>
            Thank you for your message!
          </StyledText>
        )}
      </Stack>
    </CareerFormStyled>
  );
};

export const CareerFormStyled = styled.div`
  position: relative;
  background-color: var(--background-light);
  padding: var(--s3) var(--s2);
  border-radius: 5px;
  margin: 0.5rem;

  .hidden {
    display: none;
  }

  h2 {
    color: var(--primary);
  }

  .text-red {
    color: var(--secondary);
  }

  .form-container p,
  .form-container .text-red {
    font-family: var(--poppinsbold);
  }

  ul li {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }

  .success {
    color: var(--success-color);
  }

  .error {
    color: var(--error-color);
  }

  .button-loader {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
`;

export default CareerForm;
