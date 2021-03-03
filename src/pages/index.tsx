import Head from 'next/head'
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

export default function Home() {
	const { locale, locales, defaultLocale } = useRouter();
	const { formatMessage } = useIntl();

	return (
		<>
			<Head>
				<title>Matheus's portfolio</title>	
			</Head>

			<div>
				<h2>{formatMessage({ id: 'hello' })}</h2>
				<p>{formatMessage({ id: 'welcomeMessage' })}</p>
				<br />
				<p>Current locale: {locale}</p>
				<p>Default locale: {defaultLocale}</p>
				<p>Configured locales: {locales.join(', ')}</p>
			</div>
		</>
	)
}
