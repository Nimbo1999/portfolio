import Head from 'next/head'
import styled from 'styled-components';

import Header from '../components/header';

import { useTranslation } from '../utils/useTranslations';

const HomepageWrapper = styled.div`
	height: 100%;
	position: relative;
`;

const ImageTop = styled.img`
	position: absolute;
	width: 100%;
	top: 0;
	z-index: -1;
`;

const ImageBottom = styled.img`
	position: absolute;
	width: 100%;
	bottom: 0;
	transform: rotate(180deg);
	z-index: -1;
`;

export default function Home() {
	const { t } = useTranslation();

	return (
		<>
			<Head>
				<title>{ t('headTitle') }</title>	
			</Head>

			<HomepageWrapper>
				<ImageTop
					src="/img/misc/mobile-bg.svg"
					alt="background rect"
				/>
				<ImageBottom
					src="/img/misc/mobile-bg.svg"
					alt="background rect"
				/>

				<Header />

			</HomepageWrapper>
		</>
	)
}
