import IconCart from '../assets/cart.svg'

const CartWidget = () =>{

    
return(

    <button type="button" className="btn btn-outline-primary position-relative">
        <img src={IconCart} alt="" width={24} /> 
             <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          99+
             <span className="visually-hidden">unread messages</span>
            </span>
    </button>

    
        
    
        
    
    
)

}

export default CartWidget