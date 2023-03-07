import { GlobalStyles } from "../components/styles/Global"
import "../components/layout/Layout"
import Layout from "../components/layout/Layout"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyles></GlobalStyles>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
