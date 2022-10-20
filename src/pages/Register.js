import styled from "styled-components";
import {mobile} from '../Responsive'
const Container=styled.div`
width: 100vw;
height: 100vh;
background:
background:linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
), url("https://wallpaperset.com/w/full/5/4/d/395676.jpg") center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;

`
const Wrapper=styled.div`
width: 40%;
background-color: white;
padding: 20px;
${mobile({width: "75%"})}
`

const Title=styled.h1`
font-size: 24px;
font-weight: 300;

${mobile({textAlign:"center",width:"100%", fontSize:"20px"})}
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
                <Title>CREATE AN ACCOUNT</Title>
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