import { useContext } from 'react'
import IconCart from '../assets/cart.svg'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom';

const CartWidget = () =>{

    const{CanTotalProductos} = useContext(CartContext);

    
return(
    CanTotalProductos() > 0 ? <Link to={"/cart"} type="button" className="btn btn-outline-primary position-relative">
        <img src={IconCart} alt="" width={24} /> 
             <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {CanTotalProductos()}</span> 
    </Link>: ""
)

}

export default CartWidget;