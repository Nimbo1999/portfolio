import { DefaultTheme } from 'styled-components';

const BASE_UNIT = 8;

const theme:DefaultTheme = {
    pallet: {
        white: '#FFFFFF',
        background: '#FAFAFA',
        title: '#3F3F3F',
        text: '#616161',
        link: '#3EA9F5',
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