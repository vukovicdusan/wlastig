import Head from "next/head"
import Hero from "../components/Hero"
import Reel from "../components/Reel"
import FocusSection from "../components/FocusSection"
import Testimonials from "../components/Testimonials"
import ContactFormSection from "../components/ContactFormSection"

export default function Home() {
	return (
		<main>
			<Head>
				<title>Wlastig Analytics</title>
				<meta
					name="Wlastig Analytics - Web Analytics, Advertising and
					Consulting"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero></Hero>
			<Reel></Reel>
			<FocusSection></FocusSection>
			<Testimonials></Testimonials>
			<ContactFormSection
				title={"150+ Point Audit For Data Quality"}
				subTitle={"(3X The Industry Average)"}
			></ContactFormSection>
		</main>
	)
}
