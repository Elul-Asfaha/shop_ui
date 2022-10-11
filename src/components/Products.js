import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./product";

const Container=styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
`;
const Products=()=>{

    const dispItems=popularProducts.map(items=>
        <Product items={items} key={items.id} />
        )
    return(
        <Container>
            {dispItems}
        </Container>
    )
}
export default Products;