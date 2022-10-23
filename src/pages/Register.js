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
), url("https://images.pexels.com/photos/972887/pexels-photo-972887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;

`
const Wrapper=styled.div`
width: 40%;
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
text-align: center;
${mobile({textAlign:"center",width:"100%", fontSize: "20px"})}
`
const BackWrapper=styled.div`
margin-right: 5px;
`
const Form=styled.form`

display: flex;
flex-wrap: wrap;
`

const Input=styled.input`
outline: none;
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`

const Agreement=styled.span`
font-size: 12px;
margin: 20px 0;
`

const Button=styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;    
${mobile({margin:"0 auto"})}
`

const Register=()=>{
    return(
        <Container>
            <Wrapper>
                <Title>
                    <BackWrapper>
                        <Link to="/" style={{display: "flex", alignItem: "center"}}>
                            <ArrowBackTwoToneIcon/>
                        </Link>
                    </BackWrapper>    
                    CREATE AN ACCOUNT
                </Title>
                <Form>
                    <Input placeholder="First Name"/>
                    <Input placeholder="Last Name"/>
                    <Input placeholder="Username"/>
                    <Input placeholder="Email"/>
                    <Input placeholder="Password"/>
                    <Input placeholder="Confirm Password"/>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accourdance with <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>Create</Button>
                </Form>
            </Wrapper>


        </Container>
    )
}
export default Register;