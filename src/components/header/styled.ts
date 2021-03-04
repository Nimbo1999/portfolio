import styled from 'styled-components';

const HeaderWrapper = styled.header`
    padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
`;

const NavBar = styled.nav`
    display: flex;
    justify-content: center;
    list-style: none;
`;

const NavItem = styled.a`
    margin: 0px ${({ theme }) => theme.spacing(1)};
    font-size: 1rem;
    padding: ${({ theme }) => `${theme.spacing(.5)} ${theme.spacing(1)}`};
    color: ${({theme}) => theme.pallet.title};
`;

const AvatarSectionWrapper = styled.section`
    margin-top: ${({theme}) => theme.spacing(3)};
`;


export {
    HeaderWrapper, NavBar, NavItem, AvatarSectionWrapper
};
