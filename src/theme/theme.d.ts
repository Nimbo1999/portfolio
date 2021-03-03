import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        pallet: {
            white:  string,
            background:  string,
            title:  string,
            text:  string,
            link:  string,
        },
    
        breakpoint: {
            xl: string,
            lg: string,
            md: string,
            sm: string,
        },
    
        spacing: (value:number) => string,
    }
}