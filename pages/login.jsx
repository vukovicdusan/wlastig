import React, { useState } from "react";
import { FullBackground } from "../components/styles/FullBackground.styled";
import { Region } from "../components/styles/Region.styled";
import { Wrapper } from "../components/styles/Wrapper.styled";
import styled from "styled-components";
import { InputWrapper } from "../components/styles/InputWrapper.styled";
import { Stack } from "../components/styles/Stack.styled";
import { Button } from "../components/styles/Button.styled";
import { auth } from "../public/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { Shapedivider } from "../components/styles/Shapedivider.styled";

const Login = () => {
  const [inputData, setInputData] = useState({ email: "", password: "" });
  const [error, setError] = useState();
  const router = useRouter();

  const inputHandler = (e) => {
    e.target.name === "email"
      ? setInputData({ ...inputData, email: e.target.value })
      : setInputData({
          ...inputData,
          password: e.target.value,
        });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, inputData.email, inputData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.push("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error: ", errorCode);
        setError({ code: errorCode, message: errorMessage });
      });
  };

  console.log(error);
  return (
    <FullBackground className={""} background={"var(--background-light)"}>
      <Region>
        <Wrapper>
          <LoginStyled>
            <form onSubmit={(e) => submitHandler(e)}>
              <Stack stackAlign={"center"}>
                <h1>Login</h1>
                <InputWrapper>
                  <input
                    onChange={inputHandler}
                    name="email"
                    type="text"
                    required
                  />
                  <label htmlFor="email">Email</label>
                </InputWrapper>
                <InputWrapper>
                  <input
                    onChange={inputHandler}
                    name="password"
                    type="password"
                    required
                  />
                  <label htmlFor="name">Password</label>
                </InputWrapper>
                <Button>
                  Login<span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </Button>
                {error ? <p className="error-message">{error.message}</p> : ""}
              </Stack>
            </form>
          </LoginStyled>
        </Wrapper>
        <Shapedivider position={"bottom"} rotation={"0"} height={"80px"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </Shapedivider>
      </Region>
    </FullBackground>
  );
};

export default Login;

export const LoginStyled = styled.div`
  text-align: center;
  max-width: 40ch;
  margin-inline: auto;
  margin-top: 5rem;
  & form {
    margin-inline: auto;
  }

  .error-message {
    color: var(--error-color);
  }
`;
