import { GlobalStyles } from "../components/styles/Global"
import "../components/layout/Layout"
import Layout from "../components/layout/Layout"
import Head from "next/head"
import { ModalCtxProvider } from "../public/store/ModalCtx"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link
					rel="preload"
					href="/fonts/poppins-extrabold-webfont.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/poppins-medium-webfont.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/poppins-regular-webfont.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
			</Head>
			<GlobalStyles></GlobalStyles>
			<ModalCtxProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ModalCtxProvider>
		</>
	)
}

export default MyApp
