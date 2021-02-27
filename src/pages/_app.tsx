import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import GlobalStyle from '../theme/GlobalStyles';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />

			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
