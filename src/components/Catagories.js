import styled from "styled-components"
import {CatagoryItems} from '../data.js'
import CatagoryItem from "./CatagoryItem.js";
const Container=styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
@media only screen and (max-width: 660px){
display: grid
}
`;

const Catagories=()=>{

const dispItems=CatagoryItems.map(items=>
    <CatagoryItem items={items} key={items.id}/>
)
    return(
        <Container>
            {dispItems}
        </Container>
    )
}

export default Catagories