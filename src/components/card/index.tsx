import { CardWrapper, Title, CardParagraph, CardFooter } from './styled';

function CardComponent() {
    return (
        <CardWrapper>

            <Title>Hello you!</Title>

            <CardParagraph>
                My name is Matheus, I’m from Brazil and super engaged with software industry.
                I’ve started my studies in this area with 17 years old, Today I am Graduated in
                Analysis and systems development and working as ReactJS, RN, developer, UI/UX at AGSOFT.
            </CardParagraph>

            <CardParagraph>
                If you want to know me more, contact me in my linkedin area or in one of my social medias.
            </CardParagraph>

            <CardFooter>
                <a href="https://www.instagram.com/matheus.kns/" rel="noopener noreferrer" target="_blank">
                    <img src="/img/icons/instagram.svg" alt="Instagram profile" />
                </a>

                <a href="https://www.facebook.com/MatheusNimbo" rel="noopener noreferrer" target="_blank">
                    <img src="/img/icons/facebook.svg" alt="Facebook profile" />
                </a>

                <a href="https://github.com/Nimbo1999" rel="noopener noreferrer" target="_blank">
                    <img src="/img/icons/github.svg" alt="GitHub profile" />
                </a>

                <a href="https://www.linkedin.com/in/matheuslopes1999/" rel="noopener noreferrer" target="_blank">
                    <img src="/img/icons/linkedin.svg" alt="Linkedin profile" />
                </a>

            </CardFooter>

        </CardWrapper>
    );
}

export default CardComponent