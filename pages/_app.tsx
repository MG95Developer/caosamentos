import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Navbar } from '@/src/components/Organisms/NavBar';
import Footer from '@/src/components/Organisms/Footer';

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: '#F7FAFC',
			},
			a: {
				color: '#424242', // affects mobile only
				_visited: {
					color: 'orange', // affects mobile only
				},
				_hover: {
					color: '#707070', // affects mobile only
				},
			},
		},
	},
	fonts: {
		body: 'Rubik',
		heading: 'Rubik',
		mono: 'Rubik',
	},
	fontSizes: {
		xs: '0.75rem',
		sm: '0.875rem',
		md: '1rem',
		lg: '1.125rem',
		xl: '1.25rem',
		'2xl': '1.5rem',
	},
	fontWeights: {
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
	},
	lineHeights: {
		shorter: 1.25,
		short: 1.375,
		base: 1.5,
	},
	colors: {
		black: '#000',
		white: '#fff',
		brand: {
			lightBlack: '#424242',
		},
	},
	letterSpacings: {
		wide: '0.025em',
		wider: '0.05em',
		widest: '0.1em',
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
