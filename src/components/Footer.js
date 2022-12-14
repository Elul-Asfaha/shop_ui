import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import styled from "styled-components";
import {mobile} from '../Responsive'
const Container=styled.div`
display: flex;
${mobile({flexDirection:"column"})}
`
const Left=styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px
`

const Logo=styled.h1`
`
const Desc=styled.p`
margin: 20px 0;
`
const SocialContainer=styled.div`
display: flex;

`

const SocialIcon=styled.div` 
width: 40px;
height: 40px;
border-radius: 50%;
background-color: #${props=>props.color};
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;

`
const Center=styled.div`
flex:1;
padding: 20px;
${mobile({display: "none"})}
`
const Title=styled.h3` 
margin-bottom: 30px;
`
const List=styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap; 
`
const ListItem=styled.li` 
width: 50%;
margin-bottom: 10px;

`
const Right=styled.div`
flex:1; 
padding: 20px;
${mobile({backgroundColor: "eee"})}
`
const ContactItem=styled.div` 
display: flex;
align-items: center;
margin-bottom: 20px;
`

const Footer=()=>{
    return(
        <Container>
            <Left>
                <Logo translate="no">LAMA.</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam             
                </Desc>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color='E60023'>
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{color: 'red', paddingRight: '10px'}}/> Next to Helzer Tower, 3rd Floor
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{paddingRight: '10px'}} /> ElulAsfahaKahsai@gmail.com
                </ContactItem>
                <ContactItem>
                    <Phone style={{paddingRight: '10px'}}/> 0909791112
                </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer;