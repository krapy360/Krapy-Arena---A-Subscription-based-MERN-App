import styled from "styled-components";
import { Container } from "react-bootstrap";
import ModalComponent from "../Modal/Modal";

const HeroComponent = styled.header`
padding : 1rem 15rem ;
height : 60vh;
background-image:url("https://images.unsplash.com/photo-1498673394965-85cb14905c89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
background-size: cover;
color:orange;
background-position: center;
`

const Heading =styled.h1`
font-size=3rem;
margin :0;
padding:1rem 0;
`
const SubHeading=styled.h6`
padding:0.5rem 0;
font-weight:400;
`

const HeaderContainer = styled.div`
Background-color: lightgrey;
padding :1rem;
color : black;
width: 17.5rem;
`

const Hero = () => {
    return (
        <HeroComponent>
            <Container>
                <HeaderContainer>
                    <Heading>Feed your mind with the best</Heading>
                    <SubHeading>
                        Give a smile coz a smile brings a smile . Wishing you all a very happy Diwali 
                    </SubHeading>
                    <ModalComponent text="SignUp" variant="warning" isSignupFlow={true}/>
                    <ModalComponent text="Login" variant="dark" isSignupFlow={false} />

                    </HeaderContainer>
            </Container>
        </HeroComponent>
    );

};
export default Hero;