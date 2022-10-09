import styled from "styled-components"
import {CatagoryItems} from '../data.js'
import CatagoryItem from "./CatagoryItem.js";
const Container=styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
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