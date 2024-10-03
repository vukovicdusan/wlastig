import Head from "next/head";
import Hero from "../components/Hero";
import Reel from "../components/Reel";
import FocusSection from "../components/FocusSection";
import Testimonials from "../components/Testimonials";
import ContactFormSection from "../components/ContactFormSection";
import Modal from "../components/Modal";

export default function Home() {
  return (
    <main>
      <Head>
        <title>
          Wlastig Analytics - Web Analytics, Advertising and Consulting
        </title>
        <meta
          name="description"
          content="Wanna hear a great story?
					A moving story about a brave company that made use of data on her way to become a market leader and a household brand. What company are we talking about? Yours!"
        />
        <link rel="canonical" href="https://www.wlastig.com/" key="canonical" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero></Hero>
      <Reel></Reel>
      <FocusSection></FocusSection>
      <Testimonials></Testimonials>
      <ContactFormSection
        formType={"freeConsultation"}
        shapedivider={true}
        title={"Schedule a free consultation"}
        subTitle={[
          "Are you seeing a lot of (not sets) in your reports? Purchase revenue isn’t correct? Are you struggling with reading GA4 reports? Your GA4 data is not accurate enough?",
          "If your answer to any of these questions is yes or maybe - we are here to hear you out and help you improve your tracking so you can rely on data and be confident in making data-driven decisions!",
          "We are offering a free 30-minute consultation with one of our experts to delve deeper into your specific challenges, answer any further questions you may have, and explore how Wlastig can help you achieve your goals.",
        ]}
        // cta={"Get Your FREE Audit"}
        // auditTitle={"Find Your Money Leaks For Free!"}
        // auditId={"marketing_audit"}
      ></ContactFormSection>
      <Modal></Modal>
    </main>
  );
}
