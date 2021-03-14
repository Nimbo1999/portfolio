import styled, { css } from 'styled-components';

interface ButtonProps {
    size?: 'small' | 'default' | 'large',
}

const smallSize = css`
    padding: ${({ theme }) => `${theme.spacing(.5)} ${theme.spacing(1)}`};
    font-size: .86rem;
`;

const largeSize = css`
    padding: ${({ theme }) => `${theme.spacing(1.5)} ${theme.spacing(2.5)}`};
    font-size: 1.14rem;
`;

const defaultSize = css`
    padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
`;

const BaseButton = styled.button<ButtonProps>`
    appearance: none;
    outline: none;

    ${({ size }) => {
        switch (size) {
            case 'small':
                return smallSize;

            case 'large':
                return largeSize;
        
            default:
                return defaultSize;
        }
    }}

    border: none;
    letter-spacing: .3px;
`;

const PrimaryButton = styled(BaseButton)`
`;

const SecondaryButton = styled(BaseButton)`
`;

const LinkButton = styled(BaseButton)`
    color: ${({ theme }) => theme.pallet.link};
    background: none;
`;

const DefaultButton = styled(BaseButton)`
`;

export { PrimaryButton, SecondaryButton, LinkButton, DefaultButton }
