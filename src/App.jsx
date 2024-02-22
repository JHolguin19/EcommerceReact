import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css'
import Header from './Components/Header';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Blog from './Components/Blog';
import Us from './Components/Us';
import Contacto from './Components/Contacto';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Footer from './Components/Footer';
import Register from './Components/Register';
import Cart from './Components/Cart';
import CartContextProvider from './Components/CartContext';
import Checkout from './Components/Checkout';
function App() {
  

  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
      <Header/>
    
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/Shop" element={<ItemListContainer/>}/>
          <Route path="/categoria/:id" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/Us" element={<Us/>}/>
          <Route path="/Contacto" element={<Contacto/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Checkout" element={<Checkout/>}/>

        </Routes>
      <Register/> 
      <Footer/>
     </BrowserRouter>
     </CartContextProvider>
    </>
  )
}

export default App
