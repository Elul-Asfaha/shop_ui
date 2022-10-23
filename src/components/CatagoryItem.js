import styled from "styled-components";
import {mobile} from "../Responsive"
import { Link } from "react-router-dom";
const Container=styled.div`
flex:1;
margin: 3px 0;
height: 70vh;
position: relative;
`
const Image=styled.img`
width: 100%;
height: 100%;
object-fit:cover;
${mobile({height: "30vh"})}
`
const Info=styled.div`
position: absolute;
top: 0;
left: 0;
height:100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`
const Title=styled.h1`
color:white;
margin-bottom: 20px;
`
const Button=styled.button`
border: none;
padding:10px;
background-collor: white;
cursor: pointer;
color: gray;
font-size: 16px;
&:hover{
    color: white;
    background: black;
}
`;



const CatagoryItem=(items)=>{


        return(
    <Container>
        <Image src={items.items.img} alt=''/>
        <Info>
            <Title>{items.items.title}</Title>
            <Link to="/productList">
                <Button>
                        SHOP NOW
                </Button>
            </Link>

        </Info>
    </Container>
)
}
export default CatagoryItem;