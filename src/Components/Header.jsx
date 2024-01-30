import {Link, NavLink} from "react-router-dom"
import Logo from '../assets/imagenes/logo.png'
import CartWidget from "./CartWidget"

const Header = () =>{
    
    return(
        <div id="header">
            <Link to={"/"}>
                <img src={Logo} className="#logo"/>
            </Link>
        
            <div>
                <ul id="navbar">
                    <li className="active">
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"Shop"}>Shop</NavLink>
                    </li>
                    <li><NavLink to={"Blog"}>Blog</NavLink></li>
                    <li><NavLink to={"Us"}>Acerca de nosotros</NavLink></li>
                    <li><NavLink to={"Contacto"}>Contactanos</NavLink></li>
                    <li><NavLink to={"Shop"}><CartWidget/></NavLink></li>
                    
                </ul>
            </div>
        </div>



    )


}

export default Header