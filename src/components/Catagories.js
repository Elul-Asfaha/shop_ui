import styled from "styled-components"
import {CatagoryItems} from '../data.js'
import CatagoryItem from "./CatagoryItem.js";
import {mobile} from '../Responsive'
const Container=styled.div`
margin: 0;
padding: 0;
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({padding: "0", flexDirection:"column"})}
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