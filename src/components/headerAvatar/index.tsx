import { KBTextContent, KnologeBallon, KnologeBallonWrapper } from './styled';

interface ComponentProps {
    align?: 'flex-start' | 'flex-end',
    textSide?: 'left' | 'right',
    bgColor?: string,
    label: string,
    src: string,
    alt: string
}

function HeaderAvatar({ align, textSide, bgColor, label, src, alt }: ComponentProps) {
    return (
        <KnologeBallonWrapper align={align}>

            <KnologeBallon align={align}>

                <img src={src} alt={alt} />

                <KBTextContent textSide={textSide} bgColor={bgColor}>

                    <span>{label}</span>

                </KBTextContent>

            </KnologeBallon>

        </KnologeBallonWrapper>
    );
}

export default HeaderAvatar;
