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
          Wlastig Analytics - Web Analytics, Advertising, and Consulting
        </title>
        <meta
          name="description"
          content="Wlastig: Your trusted partner for web analytics, advertising, and consulting. Maximize your digital performance with expert GA4 tracking, GTM solutions, and tailored strategies for success!"
        />
        <link rel="canonical" href="https://www.wlastig.com/" key="canonical" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero></Hero>
      <Reel></Reel>
      <FocusSection></FocusSection>
      <Testimonials sidebarLayout={true}></Testimonials>
      <ContactFormSection
        formType={"freeConsultation"}
        shapedivider={true}
        title={"Schedule a free consultation"}
        subTitle={[
          "Let’s discuss how Wlastig can support your business with effective marketing strategies and website tracking solutions. Book a free consultation to discuss your goals and see how Wlastig can help you achieve them.",
        ]}
        // cta={"Get Your FREE Audit"}
        // auditTitle={"Find Your Money Leaks For Free!"}
        // auditId={"marketing_audit"}
      ></ContactFormSection>
      <Modal></Modal>
    </main>
  );
}
