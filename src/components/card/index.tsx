import { CardWrapper, Title, CardParagraph, CardFooter } from './styled';
import { useTranslation } from '../../utils/useTranslations';

interface CardComponentProps {
}

function CardComponent({}: CardComponentProps) {
    const { t } = useTranslation();

    return (
        <CardWrapper>

            <Title>{ t('resume_information_cart_title') }</Title>

            <CardParagraph>{ t('resume_information_cart_paragraph_1') }</CardParagraph>

            <CardParagraph>{ t('resume_information_cart_paragraph_2') }</CardParagraph>

            <CardFooter>
                <a href="https://www.instagram.com/matheus.kns/" rel="noopener noreferrer" target="_blank" aria-label="Instagram profile">
                    <img src="/img/icons/instagram.svg" alt="Instagram profile" title="Instagram profile" />
                </a>

                <a href="https://www.facebook.com/MatheusNimbo" rel="noopener noreferrer" target="_blank" aria-label="Facebook profile">
                    <img src="/img/icons/facebook.svg" alt="Facebook profile" title="Facebook profile" />
                </a>

                <a href="https://github.com/Nimbo1999" rel="noopener noreferrer" target="_blank" aria-label="GitHub profile">
                    <img src="/img/icons/github.svg" alt="GitHub profile" title="GitHub profile" />
                </a>

                <a href="https://www.linkedin.com/in/matheuslopes1999/" rel="noopener noreferrer" target="_blank" aria-label="Linkedin profile">
                    <img src="/img/icons/linkedin.svg" alt="Linkedin profile" title="Linkedin profile" />
                </a>

            </CardFooter>

        </CardWrapper>
    );
}

export default CardComponent