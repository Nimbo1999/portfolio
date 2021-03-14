import styled from 'styled-components';

const SingleProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.pallet.white};
    max-width: 90vw;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing(2)};

    h4 {
        font-size: 1.2rem;
        margin-bottom: ${({ theme }) => theme.spacing(1)};
    }

    p {
        color: ${({ theme }) => theme.pallet.text};
    }
`;

const Footer = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export { SingleProjectWrapper, Content, Footer };
