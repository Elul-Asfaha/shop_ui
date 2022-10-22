import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';    
import Badge from '@mui/material/Badge';
import { ShoppingCartOutlined } from '@mui/icons-material';
import {mobile} from '../Responsive.js'
import {Link} from 'react-router-dom'
const Container=styled.div`
min-height: 60px;
width: 100%;
    ${mobile({height: "50px"})}
`

const Wrapper=styled.div`
padding: 10px 20px;
display: flex;
align-items:center;
justify-content: space-between;
${mobile({padding: "10px 0px"})}
`
const Left=styled.div`
flex:1;
display: flex;
align-items:center;

`

const Language=styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display: "none"})}

`
const SearchContainer=styled.div`
display: flex;
align-items: center;
border: 0.5px solid lightgray;
margin-left: 25px;
padding:5px;

`
const Input=styled.input`
border: none;
outline:none;
${mobile({width: "50px"})}

`


const Center=styled.div`
flex:1;
${mobile({marginLeft:"5px"})}
`
const Logo=styled.h1`
font-weight: bold;
text-align: center;
${mobile({fontSize: "24px"})}
`
const Right=styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;

${mobile({flex: 2, justifyContent:"center"})}
`
const MenuItem= styled.div`
font-size: 14px;
cursor: pointer;
margin-right: 25px;   
${mobile({flex: 2,fontSize:"12px", marginLeft:"10px"})}
`
const Navbar=()=>{

 
    return(
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <SearchIcon style={{color:'gray', fontSize:16}}/>
                    </SearchContainer>
                </Left>

                <Center>
                    <Logo translate='no'>
                        <Link to="/">
                            LAMA.
                        </Link>
                    </Logo>    
                </Center>
                <Right>
                    <MenuItem>
                        <Link to="/register" >
                            REGISTER
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/Login">
                                SIGN IN
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/Cart">
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                       </Link>
                    </MenuItem>
                   
                </Right>
            </Wrapper>
        </Container>
    )
}
export default Navbar