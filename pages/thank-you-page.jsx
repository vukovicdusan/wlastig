import React, { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
import { Shapedivider } from "../components/styles/Shapedivider.styled";
import { Region } from "../components/styles/Region.styled";
import { Wrapper } from "../components/styles/Wrapper.styled";
import { FullBackground } from "../components/styles/FullBackground.styled";
import AnimationContainer from "../components/AnimationContainer";
import { Center } from "../components/styles/Center.styled";
import { StyledH1, StyledText } from "../components/styles/StyledText.styled";
import { UnderlineStyled } from "../components/styles/UnderlineStyled.styled";
import { useRouter } from "next/router";

const ThankYouPage = () => {
  let router = useRouter();
  const [fromPage, setFromPage] = useState("");
  useEffect(() => {
    setFromPage(router.query.formType);
  }, []);

  let title =
    fromPage === "contact"
      ? "Thanks for reaching out, we’ll answer your question shortly."
      : "Thank You for Requesting a Free Consultation!";
  let message =
    fromPage === "contact"
      ? "We appreciate your interest in Wlastig. We want to offer you a free consultation to discuss your business needs. Schedule using the Calendly form below."
      : "We appreciate your interest in our services. Please schedule your free consultation using the Calendly form below.";
  return (
    <FullBackground background={"white"}>
      <Region first={true}>
        <Wrapper>
          <AnimationContainer>
            <Center>
              <StyledH1
                align={"center"}
                color="var(--primary)"
                family={"var(--poppinsbold)"}
              >
                {title}
              </StyledH1>
              <UnderlineStyled />
              <StyledText
                align={"center"}
                fontSize={"var(--s2)"}
                color={"var(--primary)"}
                maxWidth={"45ch"}
              >
                {message}
              </StyledText>
            </Center>
          </AnimationContainer>
          <InlineWidget
            styles={{
              height: "700px",
              minWidth: "300px",
              marginInline: "auto",
              marginBlock: "var(--s2)",
              colorScheme: "light",
            }}
            url="https://calendly.com/wlastig/free-consultation?hide_gdpr_banner=1"
          />
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

export default ThankYouPage;
