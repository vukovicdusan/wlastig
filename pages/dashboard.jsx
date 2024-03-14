import React, { useState } from "react";
import AuthGuard from "../components/AuthGuard";
import useUser from "../hooks/useUser";
import styled from "styled-components";
import { Wrapper } from "../components/styles/Wrapper.styled";
import { Region } from "../components/styles/Region.styled";
import { Button } from "../components/styles/Button.styled";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "../public/firebase/firebase";
import { Shapedivider } from "../components/styles/Shapedivider.styled";
import { DisabledLink } from "../components/styles/DisabledLink.styled";
import Clients from "../components/Clients";
import WriteBlog from "../components/WriteBlog";

const Dashboard = () => {
  const [user] = useUser();
  const router = useRouter();
  const [navSelector, setNavSelector] = useState("clients");

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {});
  };

  const dashboardNavHandler = (e) => {
    setNavSelector(e.target.textContent);
  };

  if (!user) {
    return <AuthGuard></AuthGuard>;
  } else if (user) {
    return (
      <DashboardStyled>
        <Region>
          <Wrapper>
            <div className="dashboard-header">
              <nav>
                <ul>
                  <li>
                    <DisabledLink
                      onClick={(e) => dashboardNavHandler(e)}
                      value="write"
                    >
                      New Blog Post
                    </DisabledLink>
                  </li>
                  <li>
                    <DisabledLink
                      onClick={(e) => dashboardNavHandler(e)}
                      value="users"
                    >
                      Clients
                    </DisabledLink>
                  </li>
                </ul>
              </nav>
              <Button onClick={signOutHandler}>
                Logout <span></span>
                <span></span>
                <span></span>
                <span></span>{" "}
              </Button>
            </div>
            <div className="dahsboard-body">
              {navSelector.toLowerCase() === "clients" ? (
                <Clients></Clients>
              ) : (
                <WriteBlog></WriteBlog>
              )}
            </div>
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
      </DashboardStyled>
    );
  }
  return "";
};

export default Dashboard;

export const DashboardStyled = styled.div`
  position: relative;

  .dashboard-header {
    width: 100%;
    padding-block: 0.5rem;
    display: flex;
    align-items: center;
  }

  .dashboard-header button {
    display: block;
    margin-left: auto;
  }

  & ul {
    list-style: none;
    display: flex;
    gap: 2rem;
  }
`;
