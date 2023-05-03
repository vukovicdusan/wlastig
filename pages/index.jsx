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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero></Hero>
      <Reel></Reel>
      <FocusSection></FocusSection>
      <Testimonials></Testimonials>
      <ContactFormSection
        shapedivider={true}
        title={"150+ Point Audit For Data Quality"}
        subTitle={"(3X The Industry Average)"}
      ></ContactFormSection>
      <Modal></Modal>
    </main>
  );
}
