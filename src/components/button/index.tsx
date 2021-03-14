import { ReactNode } from 'react';
import { PrimaryButton, SecondaryButton, LinkButton, DefaultButton } from './styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    bType?: 'default' | 'primary' | 'secondary' | 'link',
    size?: 'small' | 'default' | 'large',
    children: ReactNode
}

const Button = ({ bType = 'default', size = 'default', children } : ButtonProps) => {

    switch (bType) {
        case 'primary':
            return (<PrimaryButton size={size}>{children}</PrimaryButton>);
            
        case 'secondary':
            return (<SecondaryButton size={size}>{children}</SecondaryButton>);

        case 'link':
            return (<LinkButton size={size}>{children}</LinkButton>);
    
        default:
            return (<DefaultButton size={size}>{children}</DefaultButton>);
    }
}

export default Button;
