import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';

import * as locales from '../locale';

import theme from '../theme';
import GlobalStyle from '../theme/GlobalStyles';

function MyApp({ Component, pageProps }) {
	const { locale, defaultLocale, pathname } = useRouter();

	const localeCopy = locales[locale.replace('-', '')];
	const messages = localeCopy[pathname];

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />

			<IntlProvider locale={locale} defaultLocale={defaultLocale} messages={messages}>
				<Component {...pageProps} />
			</IntlProvider>

		</ThemeProvider>
	);
}

export default MyApp;
