import styled from 'styled-components'
import Announcment from '../components/Announcment.js'
import Catagories from '../components/Catagories.js'
import Footer from '../components/Footer.js'
import Navbar from '../components/Navbar.js'
import Newsletter from '../components/Newsletter.js'
import Products from '../components/Products.js'
import Slider from '../components/Slider.js'


const Container=styled.div`
width: 100vw;
min-width: 337px;
`
const Home=()=>{
return(
    <Container>
        <Announcment/>
        <Navbar/>
        <Slider/>
        <Catagories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
)
}
export default Home