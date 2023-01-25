import Head from "next/head";
import { ThemeProvider,CssBaseline } from "@material-ui/core";
import theme from '../ui/Theme'
import {Header,Footer} from '../components'

export default function App({ Component, pageProps }) {
  return (
		<>
			<Head>My Page</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header/>
				<Component {...pageProps} />
				<Footer/>
			</ThemeProvider>
		</>
	);
}
