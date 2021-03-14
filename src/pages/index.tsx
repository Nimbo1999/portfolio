import Head from 'next/head'
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import CardComponent from '../components/card';
import SingleProject from '../components/single-project';

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

const MainContent = styled.main`
	padding: ${({theme}) => theme.spacing(4)} 0px;
`;

const RelativeContent = styled.div<{ height: number }>`
	position: relative;
	height: ${({ height }) => `${height}px`};
`;

const FloatingContent = styled.div`
	position: absolute;

	left: ${({theme}) => `-${theme.spacing(1)}`};
`;

export default function Home() {
	const { t } = useTranslation();

	const floatingRef = useRef<HTMLDivElement>(null);

	const [ floatingElementHeight, setFloatingElementHeight ] = useState<number>(0);

	function getFloatingRefHeight(divElement: HTMLDivElement):number {

		const { clientHeight } = divElement;

		return clientHeight;
	}

	useEffect(() => {
		const { current } = floatingRef;
		if (current) {
			setFloatingElementHeight(getFloatingRefHeight(current));
		}

	}, [floatingRef.current]);

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

				<MainContent>

					<RelativeContent height={ floatingElementHeight }>
						<FloatingContent ref={ floatingRef } >

							<CardComponent />

						</FloatingContent>
					</RelativeContent>

					<section>
						<h2>Last Project</h2>

						<SingleProject />
					</section>

				</MainContent>

			</HomepageWrapper>
		</>
	)
}
