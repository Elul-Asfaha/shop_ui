import styled from "styled-components";
const Container=styled.div`
flex:1;
margin: 3px;
height: 70vh;
position: relative;
`
const Image=styled.img`
width:100%;
height: 100%;
object-fit:cover;
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
`
const Button=styled.button``
const CatagoryItem=(items)=>{
    console.log(items)
    return(
    <Container>
        <Image src={items.items.img} alt=''/>
        <Info>
            <Title>{items.items.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
)
}
export default CatagoryItem;