import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 87.5%;
        @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
            font-size: 93.75%;
        }
        @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}) {
            font-size: 100%;
        }
    }

    body {
        background-color: ${({ theme }) => theme.pallet.background};
        color: ${({ theme }) => theme.pallet.text};
    }

    button {
        cursor: pointer;
    }

    a {
        color: ${({theme}) => theme.pallet.link};
        text-decoration: none;
    }
`;

export default GlobalStyle;