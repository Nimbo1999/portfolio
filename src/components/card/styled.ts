import styled from 'styled-components';

const CardWrapper = styled.div`
    padding: ${({theme}) => `${theme.spacing(3)} ${theme.spacing(3)} ${theme.spacing(3)} ${theme.spacing(4)}`};
    background: ${({theme}) => theme.pallet.white};
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    max-width: 90%;
`;

const Title = styled.h2`
    font-size: 1.25rem;
    margin-bottom: ${({theme}) => theme.spacing(2)};
    text-transform: uppercase;
`;

const CardParagraph = styled.p`
    font-size: 1rem;
    margin-bottom: ${({theme}) => theme.spacing(2)};
    font-weight: 400;
`;

const CardFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export {
    CardWrapper, Title, CardParagraph, CardFooter
};
