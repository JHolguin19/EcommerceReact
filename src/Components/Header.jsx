import {Link} from "react-router-dom"
import Logo from '../assets/imagenes/logo.png'

const Header = () =>{
    
    return(
        <div id="header">
            <Link to={"/"}>
                <img src={Logo} className="#logo"/>
            </Link>
        
            <div>
                <ul id="navbar">
                    <li className="active">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"Shop"}>Shop</Link>
                    </li>
                    <li><Link to={"Blog"}>Blog</Link></li>
                    <li><Link to={"Us"}>Acerca de nosotros</Link></li>
                    <li><Link to={"Contacto"}>Contactanos</Link></li>
                    <li><Link to={"Shop"}><i className="fa-solid fa-cart-shopping"></i></Link></li>
                    
                </ul>
            </div>
        </div>



    )


}

export default Header