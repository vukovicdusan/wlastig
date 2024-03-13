import Link from "next/link";
import { Region } from "./styles/Region.styled";
import { Wrapper } from "./styles/Wrapper.styled";
import { Stack } from "./styles/Stack.styled";

const AuthGuard = () => {
  return (
    <Region>
      <Wrapper>
        <Stack stackAlign={"center"} stackJustify={"space-between"}>
          <div>
            <p>
              Nope, you are not allowed here. Go to the
              <Link href={"/login"}> login</Link> page.{" "}
            </p>
          </div>
        </Stack>
      </Wrapper>
    </Region>
  );
};

export default AuthGuard;
