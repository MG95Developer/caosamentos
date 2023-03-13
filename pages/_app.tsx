import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Navbar } from '@/src/components/Organisms/NavBar';
import Footer from '@/src/components/Organisms/Footer';

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
	colors: {
		brand: {
			100: 'green',
			// ...
			900: 'red',
		},
	},
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</ChakraProvider>
	);
}
