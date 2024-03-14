import Link from "next/link";
import { Region } from "./styles/Region.styled";
import { Wrapper } from "./styles/Wrapper.styled";
import { Stack } from "./styles/Stack.styled";
import styled from "styled-components";
import { StyledText } from "./styles/StyledText.styled";
import { Shapedivider } from "./styles/Shapedivider.styled";

const AuthGuard = () => {
  return (
    <AuthGuardStyled>
      <Region>
        <Wrapper>
          <div className="container">
            <Stack stackAlign={"center"} stackJustify={"space-between"}>
              <StyledText align={"center"}>
                Sorry, you are not allowed here.<br></br> If you think you do
                belong here, try the
                <Link className="login-link" href={"/login"}>
                  {" "}
                  login
                </Link>{" "}
                page.{" "}
              </StyledText>
            </Stack>
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
    </AuthGuardStyled>
  );
};

export default AuthGuard;

export const AuthGuardStyled = styled.div`
  position: relative;

  .container {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & p {
    font-size: var(--s2);
  }

  .login-link {
    color: var(--secondary);
  }
`;
