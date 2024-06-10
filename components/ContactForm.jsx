import React, { useEffect, useState } from "react";
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

const ContactForm = (props) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    type: props.formType || "contact",
  });
  const [contactFormProccess, setContactFormProccess] = useState({
    success: false,
    error: false,
    loading: false,
  });
  let router = useRouter();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setContactFormProccess((prev) => ({ ...prev, loading: true }));
    try {
      await sendContactForm(contactFormData);
      await sendToKlaviyo(contactFormData);
      await firebaseWriteHandler(contactFormData);
      setContactFormProccess((prev) => ({
        ...prev,
        success: true,
        loading: false,
      }));
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
      case "website":
        setContactFormData({
          ...contactFormData,
          website: e.target.value,
        });
        break;
      case "comments":
        setContactFormData({
          ...contactFormData,
          comments: e.target.value,
        });
        break;
      default:
        "";
    }
  };

  return (
    <ContactFormStyled alignButton={props.alignButton}>
      <div>
        <Stack
          className="form-container"
          stackSpace={"var(--s2)"}
          stackJustify={"center"}
          stackAlign={"center"}
        >
          <Stack stackJustify={"center"} stackAlign={"center"}>
            {/* <h2>Reach Out!</h2>
          <span>
            <a href="mailto: info@wlastig.com">
              <StyledText
                family={"var(--poppinsbold)"}
                color={"var(--secondary)"}
              >
                info@wlastig.com
              </StyledText>
            </a>
          </span> */}
            {/* <span>
            <a href="tel: +38169123456">
              <StyledText
                family={"var(--poppinsbold)"}
                color={"var(--secondary)"}
              >
                +38169123456
              </StyledText>
            </a>
          </span> */}
          </Stack>
          <Stack
            as="form"
            stackJustify={"center"}
            stackAlign={"center"}
            onSubmit={onSubmitHandler}
            stackSpace={"var(--s2)"}
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
                type="text"
                name="website"
                id="website"
                autoCapitalize="none"
                autoCorrect="off"
                required
                onChange={inputHandler}
              />
              <label htmlFor="website">Company Website</label>
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
              <Button>
                Send My Message <span></span>
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
            <StyledText color={"var(--success-color)"}>
              Thank you for your message! We will contact you ASAP!
            </StyledText>
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
  }

  .button-loader > span {
    position: absolute;
    right: 30px;
  }

  .calendly-container {
    width: 100%;
  }
`;

export default ContactForm;
