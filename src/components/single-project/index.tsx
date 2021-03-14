import { SingleProjectWrapper, Content, Footer } from './styled';
import Button from '../button';

export default function SingleProject() {

    return (
        <SingleProjectWrapper>
            <img
                src="https://silvrback.s3.amazonaws.com/uploads/df397458-d2f5-47df-902f-02ffb22dbb93/html5-web-applications-by-ewaycorp-small_large.jpg"
                alt="Project one"
            />

            <Content>
                <h4>Project 01</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur nibh
                    tempor nulla viverra mauris enim. Malesuada pellentesque amet sit semper
                    dictumst turpis est, sem. Libero nunc ut lectus nulla donec. Vitae,
                    facilisi sem elit nunc ornare porta tristique nibh.
                </p>
                <Footer>
                    <Button bType="link">View</Button>
                </Footer>
            </Content>
        </SingleProjectWrapper>
    );
}
