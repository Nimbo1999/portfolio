import { HeaderWrapper, List, ListItem, NavBar } from './styled';

export default function Header() {
    return (
        <HeaderWrapper>
            <NavBar>
                <List>
                    <ListItem>Facebook</ListItem>
                    <ListItem>Linkedin</ListItem>
                    <ListItem>Instagram</ListItem>
                </List>
            </NavBar>
        </HeaderWrapper>
    );
}