import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcment from "../components/Announcment";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import {mobile} from '../Responsive'
const Container=styled.div`
`
const Wrapper=styled.div` 
padding: 50px;
display: flex;
${mobile({padding:"10px", flexDirection:"column"})}
`
const ImageContainer=styled.div`
flex: 1;
`
const Image=styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({height: "40vh"})}
`
const InfoContainer=styled.div`
flex: 1;
padding: 0 50px;
${mobile({padding: "10px"})}
`
const Title=styled.h1`
font-weight: 200;
`
const Desc=styled.p`
margin: 20px 0px;
`
const Price=styled.span`
font-weight: 100;
font-size: 40px;
`
const FilterContainer=styled.div`
width: 50%;
margin: 30px 0;
display: flex;
justify-content: space-between;
${mobile({width: "100%"})}
`
const Filter=styled.div`
display: flex;
align-items: center;
`
const FilterTitle=styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor=styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};   
margin: 0 5px; 
cursor: pointer;
`
const FilterSize=styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption=styled.option`
`
const AddContainer=styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({width: "100%"})}
`
const AmountContainer=styled.div`
width: 50%;
display: flex;
align-items: center;
font-weight: 700;
`
const Amount=styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`
const Button=styled.button`
padding: 15px;
border: 2px solid teal;
cursor: pointer;
background-color: white;
font-weight: 500;

&:hover {
background-color: #f8f4f4;
}
`


const Product=()=>{
    return(
        <Container>
            <Navbar/>
            <Announcment/>
            <Wrapper>
                <ImageContainer>
                    <Image src="https://api.lorem.space/image/fashion?w=150&h=150"/>    
                </ImageContainer>
                <InfoContainer>
                    <Title>Denim Top</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Desc>
                    <Price>$20</Price>
                
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>
                                Color:
                            </FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>
                                Size:
                            </FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption  >
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper> 
            <Newsletter/>
            <Footer/>

        </Container>
    )
}
export default Product;