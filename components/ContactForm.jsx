import React, { useContext, useEffect, useState } from "react";
import { Stack } from "./styles/Stack.styled";
import { Switcher } from "./styles/Switcher.styled";
import { InputWrapper } from "./styles/InputWrapper.styled";
import { Button } from "./styles/Button.styled";
import Loader from "./Loader";
import { StyledText } from "./styles/StyledText.styled";
import { sendContactForm } from "../lib/api";
import styled from "styled-components";
import { sendToKlaviyo } from "../lib/sendToKlaviyo";
import { firebaseWriteHandler } from "../helpers/firebaseWriteHandler";
import { useRouter } from "next/router";
import { inputChecker } from "../helpers/inputChecker";
import ModalCtx from "../store/ModalCtx";

const ContactForm = (props) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    type: props.formType || "contact",
    name: "",
    email: "",
    website: "",
  });
  const [contactFormProccess, setContactFormProccess] = useState({
    success: false,
    error: false,
    loading: false,
  });
  const [contactFormError, setContactFormError] = useState({
    email: { error: true, message: "", show: false },
    name: { error: true, message: "", show: false },
    website: { error: true, message: "", show: false },
  });
  let router = useRouter();
  const modalCtx = useContext(ModalCtx);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!anyError) {
      setContactFormProccess((prev) => ({ ...prev, loading: true }));
      try {
        await Promise.all([
          sendContactForm(contactFormData),
          sendToKlaviyo(contactFormData),
          firebaseWriteHandler(contactFormData),
        ]);
        setContactFormProccess((prev) => ({
          ...prev,
          success: true,
          loading: false,
        }));
        modalCtx.modalCloseHandler();
        router.push(
          {
            pathname: "/thank-you-page",
            query: {
              formType: contactFormData.type,
            },
          },
          "/thank-you-page"
        );
      } catch (err) {
        console.log(err);
        setContactFormProccess((prev) => ({
          ...prev,
          error: true,
          loading: false,
        }));
      }
    } else {
      for (let key in contactFormData) {
        if (key !== "type")
          setContactFormError((prev) => ({
            ...prev,
            [key]: {
              error: inputChecker(key, contactFormData[key]).error,
              message: inputChecker(key, contactFormData[key]).message || "",
              show: true,
            },
          }));
      }
    }
  };

  const inputHandler = (e) => {
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value,
    });
    setContactFormError((prev) => ({
      ...prev,
      [e.target.name]: {
        ...contactFormError[e.target.name],
        error: inputChecker(e.target.name, e.target.value).error,
        message: inputChecker(e.target.name, e.target.value).message || "",
      },
    }));
  };

  const onBlurChecker = (e) => {
    setContactFormError((prev) => ({
      ...prev,
      [e.target.name]: {
        ...contactFormError[e.target.name],
        show: true,
      },
    }));
  };

  let anyError =
    contactFormError.email.error ||
    contactFormError.name.error ||
    contactFormError.website.error;

  return (
    <ContactFormStyled alignButton={props.alignButton}>
      <div>
        <Stack
          className="form-container"
          stackSpace={"var(--s2)"}
          stackJustify={"center"}
          stackAlign={"center"}
        >
          <Stack stackJustify={"center"} stackAlign={"center"}></Stack>
          <Stack
            as="form"
            stackJustify={"center"}
            stackAlign={"center"}
            onSubmit={onSubmitHandler}
            stackSpace={"var(--s3)"}
            id={contactFormData.type}
          >
            <Switcher elCount={2} flexBasis={"20rem"}>
              <InputWrapper>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoCapitalize="none"
                  autoCorrect="off"
                  autoComplete="on"
                  // required
                  onChange={inputHandler}
                  onBlur={onBlurChecker}
                />
                <label htmlFor="name">Name</label>
                <span>
                  {contactFormError.name.show ? (
                    <StyledText
                      fontSize={"var(--s-1)"}
                      color={"var(--error-color)"}
                    >
                      {contactFormError.name.message}
                    </StyledText>
                  ) : (
                    ""
                  )}
                </span>
              </InputWrapper>
              <InputWrapper>
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoCapitalize="none"
                  autoCorrect="off"
                  autoComplete="email"
                  // required
                  // pattern="[^@]+@[^\.]+\..+"
                  onChange={inputHandler}
                  onBlur={onBlurChecker}
                />
                <label htmlFor="email">Email</label>
                <span>
                  {contactFormError.email.show ? (
                    <StyledText
                      fontSize={"var(--s-1)"}
                      color={"var(--error-color)"}
                    >
                      {contactFormError.email.message}
                    </StyledText>
                  ) : (
                    ""
                  )}
                </span>
              </InputWrapper>
            </Switcher>
            <InputWrapper>
              <input
                type="text"
                name="website"
                id="website"
                autoCapitalize="none"
                autoCorrect="off"
                // required
                onChange={inputHandler}
                onBlur={onBlurChecker}
              />
              <label htmlFor="website">Company Website</label>
              <span>
                {contactFormError.website.show ? (
                  <StyledText
                    fontSize={"var(--s-1)"}
                    color={"var(--error-color)"}
                  >
                    {contactFormError.website.message}
                  </StyledText>
                ) : (
                  ""
                )}
              </span>
            </InputWrapper>
            <InputWrapper>
              <textarea
                id="comments"
                name="comments"
                rows="4"
                onChange={inputHandler}
              ></textarea>
              <label htmlFor="comments">Message (Optional)</label>
            </InputWrapper>
            <div className="button-loader">
              <Button id={props.btnId || "form_submit_contact"}>
                {props.btnName || "Contact Us!"}
                <span></span>
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
          ) : !contactFormProccess.success &&
            !contactFormProccess.error &&
            props.formType ? (
            ""
          ) : (
            ""
            // <StyledText color={"var(--success-color)"}>
            //   Thank you for your message! We will contact you ASAP!
            // </StyledText>
          )}
        </Stack>
      </div>
    </ContactFormStyled>
  );
};

export const ContactFormStyled = styled.div`
  transition: all 0.4s ease;
  .text-red {
    color: var(--secondary);
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
    justify-content: ${(props) => props.alignButton || "center"};
    align-items: center;
    gap: 3rem;
    position: relative;
    padding-block: var(--s-4);
  }

  .button-loader > span {
    position: absolute;
    right: 30px;
  }

  .calendly-container {
    width: 100%;
  }
  & button:focus {
    outline: 1px dotted var(--secondary);
    outline-offset: 0.25rem;
  }
`;

export default ContactForm;
