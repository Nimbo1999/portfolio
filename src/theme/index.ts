import { DefaultTheme } from 'styled-components';

const BASE_UNIT = 8;

const theme:DefaultTheme = {
    pallet: {
        white: '#FFFFFF',
        background: '#F2F3F5',
        text: '#666666',
        textHighlight: '#B3B9FF',
        title: '#2E384D',
        red: '#E83F5B',
        green: '#4CD62B',
        blue: '#5965E0',
    },
    
    breakpoint: {
        xl: '1200px',
        lg: '992px',
        md: '768px',
        sm: '576px'
    },
    
    spacing: (value: number) => `${ BASE_UNIT * value }px`,
}

export default theme;