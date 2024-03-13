import React from "react";
import AuthGuard from "../components/AuthGuard";
import useUser from "../hooks/useUser";
import styled from "styled-components";
import { Wrapper } from "../components/styles/Wrapper.styled";
import { Region } from "../components/styles/Region.styled";
import { Button } from "../components/styles/Button.styled";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "../public/firebase/firebase";

const Dashboard = () => {
  const [user] = useUser();
  const router = useRouter();

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {});
  };

  if (!user) {
    return <AuthGuard></AuthGuard>;
  } else if (user) {
    return (
      <Region>
        <Wrapper>
          <DashboardStyled></DashboardStyled>
          <Button onClick={signOutHandler}>Logout</Button>
        </Wrapper>
      </Region>
    );
  }
  return "";
};

export default Dashboard;

export const DashboardStyled = styled.div``;
