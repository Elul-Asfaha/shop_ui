import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import {sliderItems} from '../data.js'

const Container= styled.div`
width: 100%;
height:100vh;
display: flex;
position: relative;
overflow: hidden;
`;

const Arrow=styled.div`
width: 50px;
height:50px;
border-radius: 50%;
background-color: #fff7f7;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
left: ${props=> props.direction==="left"&& "10px"};
right: ${props=> props.direction==="right"&& "10px"};
cursor: pointer;
opacity: 0.8;
z-index: 2;
`;

const Wrapper=styled.div`
height: 100%;
display: flex;
transform: translateX();
`;

const Slide=styled.div`
width: 100vw;
height: 100vh;
display:flex;
align-items: center;
background-color: #${props=>props.bg}
`;

const ImageContainer=styled.div`
flex: 1;
display:flex;
justify-content: center;
`;
const Image=styled.img`
width: 50%;
height: 80%;
`;
const InfoContainer=styled.div`
flex: 1;
padding: 50px;
`;

const Title= styled.h1`
font-size: 70px
`;
const Desc= styled.p`
margin: 50px 0;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;
const Button= styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`;


const Slider=()=>{

    const [slideIndex,setSlideIndex]=useState(0)
    const handleClick=(direction)=>{
            (direction==="left" && slideIndex>0)?setSlideIndex(slideIndex-100):setSlideIndex(slideIndex)
           
    }

    const displaySlides=sliderItems.map((items)=>
    <Slide key={items.id} bg={items.bg}>
        <ImageContainer>
            <Image src={items.img} alt=''/>
        </ImageContainer>
        <InfoContainer>
            <Title>{items.title}</Title>
            <Desc>{items.desc}</Desc>
            <Button>SHOP NOW</Button>
        </InfoContainer>
    </Slide>)



    return(
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
               {displaySlides}
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>



        </Container>
    )
}

export default Slider;