import Head from 'next/head'
import { useRouter } from 'next/router';

import { useTranslation } from '../utils/useTranslations';

export default function Home() {
	const { locale, locales, defaultLocale } = useRouter();
	const { t } = useTranslation();

	return (
		<>
			<Head>
				<title>Matheus's portfolio</title>	
			</Head>

			<div>
				<h2>{ t('hello') }</h2>
				<p>{ t('welcomeMessage') }</p>
				<br />
				<p>Current locale: {locale}</p>
				<p>Default locale: {defaultLocale}</p>
				<p>Configured locales: {locales.join(', ')}</p>
			</div>
		</>
	)
}
