import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcment from "../components/Announcment";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Container=styled.div`
`
const Wrapper=styled.div`
padding: 20px;
`
const Title=styled.h1`
font-weight: 300;
text-align: center;
`
const Top=styled.div`
display: flex;
align-items: center; 
justify-content: space-between;
padding: 20px;
`
const TopButton=styled.button`
padding: 10px; 
font-weight: 600;
cursor: pointer;        
border: ${props=>props.type==='filled' && "none"};
background-color: ${props=>props.type==="filled"? "black": "transparent"};
color: ${props=>props.type==="filled" && "white"};
`
const TopTexts=styled.div` 
`
const TopText=styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0 10px; 
`

const Bottom=styled.div`
display: flex;
justify-content: space-between;
`
const Info=styled.div`
flex: 3;
`
const Product=styled.div`
display: flex;
justify-content: spapce-between;
`
const ProductDetail=styled.div`
flex: 2;
display: flex;

`
const Image=styled.img`
width: 200px;

`
const Details=styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductName=styled.div`
`
const ProductId=styled.div`
`

const ProductColor=styled.div`
width: 20px;
height: 20px;
border-radus: 50%;
background-color: ${props=>props.color}
`

const ProductSize=styled.div`
`
const PriceDetail=styled.div` 
flex: 1;
display: flex;
flex-direction: column; 
align-items: center;
justify-content: center;
`

const ProductAmountContainer=styled.div` 
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount=styled.div`
font-size: 24px;
margin: 5px;
`
const ProductPrice=styled.div` 
font-size: 30px;
font-weight: 200;
`
const Hr=styled.hr`
background-color: #eee;
border: none;
height: 1px;
`
const Summary=styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
max-height: 50vh;   
`
const SummaryTitle=styled.h1` 
font-weight: 200;
`

const SummaryItem=styled.div` 
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type==="total" && "500"};
font-size: ${props=>props.type==="total" && "500"}

`
const SummaryItemText=styled.span` 
`
const SummaryItemPrice=styled.span` 
`
const SummaryButton=styled.button` 
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`
const Cart=()=>{
return(
    <Container>
        <Navbar/>
        <Announcment/>
        <Wrapper>
            <Title>
                YOUR BAG
            </Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Whishlist(0)</TopText>
                    </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.S5VJwlGKz3TOV7I8KbMTBwHaHa%26pid%3DApi&f=1&ipt=44ad74af6465b265e667ceb2d64f3bd3131ac76e57edddff34e99cee215a3627&ipo=images"></Image>
                            <Details>
                                <ProductName>
                                    <b>product:</b>JESSIE THUNDER SHOES
                                </ProductName>
                                
                                <ProductId>
                                    <b>ID:</b>542321235
                                </ProductId>
                                
                                <ProductColor color="black"/>
                                
                                <ProductSize>
                                    <b>Size:</b>37.5
                                </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>

                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                                <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.P8DBsU0KTbXUVYNjXYrulAHaGY%26pid%3DApi&f=1&ipt=95c14b493b15b4942b93070975fea65e113ffc7c8c74d1d11a6ddeef55e5db95&ipo=images"/>
                                <Details>
                                <ProductName>
                                    <b>product:</b>HAKURA T-SHIRT
                                </ProductName>
                                
                                <ProductId>
                                    <b>ID:</b>6565650655
                                </ProductId>
                                
                                <ProductColor color="gray"/>
                                
                                <ProductSize>
                                    <b>Size:</b>37.5
                                </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 20</ProductPrice>
                        </PriceDetail>

                    </Product>

                </Info>
                <Summary>
                    <SummaryTitle>
                        ORDER SUMMARY
                    </SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>
                            Subtotal: 
                        </SummaryItemText>
                        <SummaryItemPrice>
                            $ 50
                        </SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>
                            Estimated Shipping: 
                        </SummaryItemText>
                        <SummaryItemPrice>
                            $ 5.90
                        </SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>
                            Shipping Discount: 
                        </SummaryItemText>
                        <SummaryItemPrice>
                            $ -5.90
                        </SummaryItemPrice>
                        
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >
                            Total: 
                        </SummaryItemText>
                        <SummaryItemPrice>
                            $ 80
                        </SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton>CHECKOUT NOW</SummaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>

    </Container>
)
}
export default Cart;