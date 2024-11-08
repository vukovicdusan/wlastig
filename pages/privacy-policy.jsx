import React from "react";
import { Region } from "../components/styles/Region.styled";
import { Wrapper } from "../components/styles/Wrapper.styled";
import { FullBackground } from "../components/styles/FullBackground.styled";
import { Shapedivider } from "../components/styles/Shapedivider.styled";
import { Center } from "../components/styles/Center.styled";
import { StyledH1 } from "../components/styles/StyledText.styled";
import { Stack } from "../components/styles/Stack.styled";
import Head from "next/head";

const privacyPolicy = () => {
  return (
    <main style={{ position: "relative" }}>
      <Head>
        <title>Wlastig Analytics</title>
        <meta
          name="description"
          content="Wanna hear a great story?
        A moving story about a brave company that made use of data on her way to become a market leader and a household brand. What company are we talking about? Yours!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullBackground
        background={"var(--primary)"}
        flex={true}
        justify={"center"}
        align={"center"}
      >
        <Region>
          <Wrapper>
            <Center mt={"5rem"} mb={"5rem"}>
              <StyledH1 color="var(--text-light)">Privacy Policy</StyledH1>
            </Center>
          </Wrapper>
        </Region>
        <Shapedivider
          fill={"var(--background-light)"}
          position={"bottom"}
          height={"100px"}
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"></path>
          </svg>
        </Shapedivider>
      </FullBackground>
      <Region pb={"12rem"}>
        <Wrapper>
          <Stack stackSpace={"var(--s4)"}>
            <p>
              WLASTIG, (“Wlastig”), has created this privacy policy (this
              “Privacy Policy”) to demonstrate our commitment to protecting the
              privacy of users, visitors, and customers (collectively
              “Customers” or “you”) of our website located at
              <a href="https://www.wlastig.com/"> wlastig.com</a>(the
              “Website”). Privacy on our Website is of great importance to us.
              As we gather certain information from our users, this Privacy
              Policy outlines our information collection, usage, and disclosure
              practices. By accessing our Website, you acknowledge and agree to
              the practices outlined in this Privacy Policy.
            </p>
            <Stack>
              <h2>Information We Collect</h2>
              <p>
                We may require Customers who register to use services offered on
                our Website (collectively, the “Service”) to provide contact
                information, which may include, but is not limited to, your
                name, company name, address, phone number, email address,
                cookies, IP logs, and other details (collectively “Personal
                Information”). In addition to Personal Information, we may also
                collect data regarding your use of the Website.
              </p>
              <p>
                We use the information we collect to provide, maintain, and
                improve the Website. We may also use this information to contact
                you about our company, services, and offers, or to send you
                updates and promotional materials. You may be invited to receive
                email newsletters or other correspondence by providing an email
                address. Your Personal Information will not be shared with third
                parties unless it is necessary to fulfill your requests, comply
                with legal obligations, or support other business activities we
                deem appropriate.
              </p>
              <p>
                You can unsubscribe from promotional emails by clicking the
                “unsubscribe” link in those emails or by contacting us directly.
                Please note that it may take a short period of time for your
                request to be processed, and Wlastig is not liable for delays in
                processing.
              </p>
            </Stack>
            <Stack>
              <h2>Disclosure of Information</h2>
              <p>
                Except as described here or as specified when we collect
                information, we will not disclose your information to third
                parties. We may share non-identifying and aggregate usage
                information with third parties for the purpose of improving our
                services.
              </p>
            </Stack>
            <Stack>
              <h2>Collection of Information from Visitors</h2>
              <p>
                Wlastig may collect certain information from Website visitors,
                such as IP addresses. This information is used to help diagnose
                technical issues and administer our Website to improve the
                quality of our services. We may also track non-identifying and
                aggregate usage and volume statistics, which may be shared with
                third parties.
              </p>
            </Stack>
            <Stack>
              <h2>Children’s Privacy</h2>
              <p>
                Wlastig does not knowingly collect Personal Information from
                individuals under the age of 14. If you are under 14, you may
                not use the Website.
              </p>
            </Stack>
            <Stack>
              <h2>Cookies</h2>
              <p>
                We use cookies to remember your preferences and analyze site
                traffic to enhance the Website. Cookies help us compile
                aggregate data about site interactions so we can improve user
                experiences and features. This information is collected
                anonymously and does not include personally identifiable
                information unless you voluntarily provide it. This anonymous
                data is processed to generate aggregated reports on Website
                activity, which we use to optimize the Website.
              </p>
            </Stack>
            <Stack>
              <h2>Remarketing</h2>
              <p>
                Cookies may be used to display remarketing advertisements based
                on your previous visits to our Website. Remarketing ads are
                displayed through Google’s advertising network. You can opt-out
                of Google’s use of cookies at any time by visiting the Google
                Ads Preferences Manager.
              </p>
            </Stack>
            <Stack>
              <h2>Trademarks</h2>
              <p>
                Unless otherwise stated, the contents of this site, including
                text, images, and layout, are the property of Wlastig. All
                trademarks mentioned on this Website are the property of their
                respective owners. Nothing contained on this Website should be
                construed as granting any license or right to use any trademark
                or other proprietary interest of Wlastig or any third party
                without express permission. You may download, display, or print
                one copy of the materials on a single computer for personal,
                non-commercial use, provided the material remains unmodified and
                retains all copyright, trademark, and proprietary notices.
              </p>
            </Stack>
            <Stack>
              <h2>Updates to Our Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. If there
                are material changes, we will post a notice on this Website to
                inform you of the updates. We may also send an email
                notification if deemed appropriate. Please check this page
                periodically to stay informed about our privacy practices.
              </p>
            </Stack>
            <Stack>
              <h2>How to Contact Us</h2>
              <p>
                If you have any questions regarding the Wlastig privacy policy
                or information you have submitted to us, please feel free to
                email us at info@wlastig.com.
              </p>
            </Stack>
          </Stack>
        </Wrapper>
      </Region>
      <Shapedivider position={"bottom"} rotation={"0"}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </Shapedivider>
    </main>
  );
};

export default privacyPolicy;
