import styled from "styled-components";
import {mobile,tablet} from '../Responsive'
import { Link } from "react-router-dom";
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
const Container=styled.div`
width: 100%;
height: 100vh;
background:linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
),
 url("https://wallpaperset.com/w/full/5/4/d/395676.jpg") center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`

const Wrapper=styled.div`
width: 25%;
background-color: white;
padding: 20px;
${tablet({width: "50%"})}
${mobile({width: "75%"})}
`

const Title=styled.h1`
font-size: 24px;
font-weight: 300;
display: flex;
align-items: center;
`

const BackWrapper=styled.div`
margin-right: 5px;
`
const Form=styled.form`

display: flex;
flex-direction: column;

`

const Input=styled.input`
outline: none;
flex: 1;
min-width: 40%;
margin: 10px 0;
padding: 10px;
`


const Button=styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom: 10px;    
`
const LinkR=styled.a`
margin: 5px 0;
font-size: 12px;
text-decoration: underlined !important;
cursor: pointer;
`
const Login=()=>{
    return(
        <Container>
           
            <Wrapper>
               
                <Title>
                    <BackWrapper>
                        <Link to="/" style={{display: "flex", alignItems: "center"}}>
                            <ArrowBackTwoToneIcon/>
                        </Link>
                    </BackWrapper>
                    SIGN IN
                </Title>
                <Form>
                    <Input placeholder="Username"/>
                    <Input placeholder="Password"/>
                    <Button>Login</Button>
                    <LinkR>DO NOT REMEMBER THE PASSWORD?</LinkR>
                    <LinkR>CREATE A NEW ACCOUNT</LinkR>
                </Form>
                
            </Wrapper>


        </Container>
    )
}
export default Login;
