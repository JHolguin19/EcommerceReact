import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"
import trash from "../assets/recycle.svg"

const Cart = () => {

    const {cart, removeItem, clear, CanTotalProductos, SumaTotalProductos} = useContext(CartContext)

    if(CanTotalProductos() == 0){
        return(
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-success mt-5" role="alert">No ha seleccionado ningun producto en el carrito</div>
                        <Link to={"/"} className="btn btn-success">Volver a la pagina principal</Link>
                    </div>
                </div>
            </div>
        )
    }


    return(
        <div className="container">
                <div className="row">
                    <div className="col text-center p-5">
                        <h1>Productos Seleccionados para Compra:</h1>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Total</th>
                                <th scope="col"><a href="#" onClick={()=> {clear()}} className="btn btn-danger"><img src={trash} alt="" width={15}/></a></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(product => 
                                    <tr key={product.id}>
                                        <td>{product.cantidad}</td>
                                        <td>{product.marca}</td>
                                        <td>{product.nombre}</td>
                                        <td>${product.precio}</td>
                                        <td>${product.cantidad * product.precio}</td>
                                        <td><a href="#" onClick={()=> {removeItem(product.id)}} className="btn btn-danger">X</a></td>
                                        
                                    </tr>  
                                     
                                )}  
                                <tr>
                                    <td colSpan={5}>Suma Total</td>
                                    <td>${SumaTotalProductos()}</td>
            
                                </tr> 
                                <tr>
                                    <td colSpan={6} className="text-end"><Link to={"/Checkout"} className="btn btn-success">Finalizar</Link></td>
                                </tr>                         
                            </tbody>
                            </table>
                    </div>
                </div>
            </div>
    )




    
}

export default Cart