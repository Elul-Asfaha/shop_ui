import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcment from "../components/Announcment";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
const Container=styled.div`
`
const Title=styled.h1`
margin: 20px;
`
const FilterContainer=styled.div`
display: flex;
justify-content: space-between;
 
`
const Filter=styled.div` 
margin: 20px;
`
const ProductList=()=>{
    return(
        <Container>
            <Announcment/>
            <Navbar/>   
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    filter
                </Filter>
                <Filter>
                    filter2
                </Filter>
                <Filter>
                    filter3
                </Filter>
            
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}
export default ProductList;