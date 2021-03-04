import styled, { css } from 'styled-components';

interface KnologeBallonWrapperI {
    align?: 'flex-start' | 'flex-end',
}

const KnologeBallonWrapper = styled.div<KnologeBallonWrapperI>`
    display: flex;
    justify-content: ${({ align }) => align ? align : 'flex-start'};
`;

const KnologeBallon = styled.div<KnologeBallonWrapperI>`
    position: relative;
    width: 207px;
    height: 166px;

    display: flex;
    justify-content: ${({ align }) => align ? align : 'flex-start'};
`;

interface KBTextContentI {
    textSide?: 'left' | 'right',
    bgColor?: string,
}

const KBTextContent = styled.div<KBTextContentI>`
    position: absolute;
    ${({ textSide }) => textSide ? css`
        ${textSide}: 0;
    ` : css`
        left: 0;
    ` }
    bottom: 0;

    width: 112px;
    height: 112px;
    background: ${({ bgColor, theme }) => bgColor ? bgColor : theme.pallet.white };
    border-radius: 50%;

    display: flex;
    align-items: center;

    transform: translate(0, 25%);

    span {
        text-transform: uppercase;
        font-weight: 600;
        text-align: center;
        font-size: 1rem;
    }
`;

export { KBTextContent, KnologeBallon, KnologeBallonWrapper };
