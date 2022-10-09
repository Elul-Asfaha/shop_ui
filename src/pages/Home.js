import styled from 'styled-components'
import Announcment from '../components/Announcment.js'
import Catagories from '../components/Catagories.js'
import Navbar from '../components/Navbar.js'
import Slider from '../components/Slider.js'


const Container=styled.div`
width: 100vw;`
const Home=()=>{
return(
    <Container>
        <Announcment/>
        <Navbar/>
        <Slider/>
        <Catagories/>
    </Container>
)
}
export default Home