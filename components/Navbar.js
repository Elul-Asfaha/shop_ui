import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';    
import Badge from '@mui/material/Badge';
import { ShoppingCartOutlined } from '@mui/icons-material';


const Container=styled.div`
min-height: 60px;
width: 100vw;
`
const Wrapper=styled.div`
padding: 10px 20px;
display: flex;
align-items:center;
justify-content: space-between;

@media only screen and (max-width: 660px){
    display: grid;
    justify-content: center;
}
`
const Left=styled.div`
flex:1;
display: flex;
align-items:center;

`

const Language=styled.span`
font-size: 14px;
cursor: pointer;
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
`


const Center=styled.div`
flex:1;
`
const Logo=styled.h1`
font-weight: bold;
text-align: center;
`
const Right=styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;

@media only screen and (max-width: 660px){
    gap: 2rem;
}
`
const MenuItem= styled.div`
font-size: 14px;
cursor: pointer;
margin-right: 25px;   

`

const Navbar=()=>{

 
    return(
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                        <SearchIcon style={{color:'gray', fontSize:16}}/>
                    </SearchContainer>
                </Left>

                <Center>
                    <Logo>
                        LAMA.
                    </Logo>    
                </Center>
                <Right>
                    <MenuItem>
                        REGISTER
                    </MenuItem>
                    <MenuItem>
                        SIGN IN
                    </MenuItem>
                    <MenuItem>
                      <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                      </Badge>
                    </MenuItem>
                
                
                </Right>
            </Wrapper>
        </Container>
    )
}
export default Navbar