import {
    HeaderWrapper, NavItem, NavBar, AvatarSectionWrapper
} from './styled';

import HeaderAvatar from '../headerAvatar';

export default function Header() {
    return (
        <HeaderWrapper>
            <NavBar>
                <NavItem href="https://www.facebook.com/MatheusNimbo" target="_blank" rel="noopener noreferrer">Facebook</NavItem>
                <NavItem href="https://www.linkedin.com/in/matheuslopes1999/" target="_blank" rel="noopener noreferrer">Linkedin</NavItem>
                <NavItem href="https://www.instagram.com/matheus.kns/" target="_blank" rel="noopener noreferrer">Instagram</NavItem>
            </NavBar>

            <AvatarSectionWrapper>

                <HeaderAvatar
                    label="Front-end Developer"
                    bgColor="#C1FFD3"
                    src="/img/mobile-avatar/front-end-avatar.svg"
                    align="flex-end"
                    textSide="left"
                    alt="Front-end design"
                />

                <HeaderAvatar
                    label="SEO improvement"
                    bgColor="#AFE7F3"
                    src="/img/mobile-avatar/seo-avatar.svg"
                    align="flex-start"
                    textSide="right"
                    alt="SEO improvement"
                />

                <HeaderAvatar
                    label="Responsive web design"
                    bgColor="#F3D0AF"
                    src="/img/mobile-avatar/responsive-web-design-avatar.svg"
                    align="flex-end"
                    textSide="left"
                    alt="Responsive web design"
                />

                <HeaderAvatar
                    label="Mobile first methodology"
                    bgColor="#F2AFF3"
                    src="/img/mobile-avatar/mobile-first-avatar.svg"
                    align="flex-start"
                    textSide="right"
                    alt="Mobile first methodology"
                />

            </AvatarSectionWrapper>
        </HeaderWrapper>
    );
}