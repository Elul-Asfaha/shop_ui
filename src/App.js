import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cart from './pages/Cart';
import Home from './pages/Home.js'
import Register from './pages/Register';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/productList" element={<ProductList/>} />
        <Route path="/" element={<Home/>}>

      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
