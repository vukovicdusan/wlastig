import Link from "next/link";
import { Region } from "./styles/Region.styled";
import { Wrapper } from "./styles/Wrapper.styled";
import { Stack } from "./styles/Stack.styled";
import styled from "styled-components";
import { StyledText } from "./styles/StyledText.styled";

const AuthGuard = () => {
  return (
    <Region>
      <Wrapper>
        <Stack stackAlign={"center"} stackJustify={"space-between"}>
          <AuthGuardStyled>
            <StyledText align={"center"}>
              Sorry, you are not allowed here.<br></br> If you think you do
              belong here, try the
              <Link className="login-link" href={"/login"}>
                {" "}
                login
              </Link>{" "}
              page.{" "}
            </StyledText>
          </AuthGuardStyled>
        </Stack>
      </Wrapper>
    </Region>
  );
};

export default AuthGuard;

export const AuthGuardStyled = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    font-size: var(--s2);
  }

  .login-link {
    color: var(--secondary);
  }
`;
