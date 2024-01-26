import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css'
import Header from './Components/Header';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Blog from './Components/Blog';
import Us from './Components/Us';
import Contacto from './Components/Contacto';
function App() {
  

  return (
    <>
    <BrowserRouter>
      <Header/>
    
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/Shop" element={<Shop/>}/>
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/Us" element={<Us/>}/>
          <Route path="/Contacto" element={<Contacto/>}/>

        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
