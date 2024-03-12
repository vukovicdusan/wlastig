import React, { useState } from "react";
import { FullBackground } from "../components/styles/FullBackground.styled";
import { Region } from "../components/styles/Region.styled";
import { Wrapper } from "../components/styles/Wrapper.styled";
import styled from "styled-components";
import { InputWrapper } from "../components/styles/InputWrapper.styled";
import { Stack } from "../components/styles/Stack.styled";
import { Button } from "../components/styles/Button.styled";
import { auth } from "../public/firebase/firebase";

const Login = () => {
  const [inputData, setInputData] = useState({ email: "", password: "" });

  const inputHandler = (e) => {
    e.target.name === "email"
      ? setInputData({ ...inputData, email: e.target.value })
      : setInputData({
          ...inputData,
          password: e.target.value,
        });
  };

  console.log(inputData);

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
      });
  };

  return (
    <FullBackground className={""} background={"var(--background-light)"}>
      <Region>
        <Wrapper>
          <LoginStyled>
            <form onSubmit={(e) => submitHandler(e)}>
              <Stack>
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
              </Stack>
            </form>
          </LoginStyled>
        </Wrapper>
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
`;
