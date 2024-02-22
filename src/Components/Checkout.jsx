import { useContext, useState } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"
import { addDoc, getFirestore, collection } from "firebase/firestore"

const Checkout = () =>{
    const[nombre, setNombre]= useState()
    const[email, setEmail]= useState()
    const[telefono, setTelefono]=useState()
    const[orderId, setOrderId]=useState()

    const {cart, clear,  SumaTotalProductos} = useContext(CartContext)

 
    const generateOrden = () =>{
        if(nombre.length ===0 ){
            return false;
        }
        if(email.length ===0 ){
            return false;
        }
        if(telefono.length ===0 ){
            return false;
        }

        const buyer = {
            name:nombre, email:email, phone:telefono};
        const items = cart.map(item => ({id:item.id, title:item.nombre, price:item.precio}))
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`
        const total = SumaTotalProductos()

        const order = {buyer:buyer, items:items, date:date, total:total}

        const db = getFirestore();
        const colRef = collection(db, "order")
        addDoc(colRef, order).then(resultado => {
            
            console.log(resultado)
            clear()
            setOrderId(resultado.id)

        })
            
    }
    


    return(
        <div className="container">
                <div className="row">
                    <div className="col text-center p-5">
                        <h1>Finalizar Compra</h1>
                    </div>  
                </div>
                <div className="row">
                    <div className="col">
                    <form>
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e)=>{setNombre(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Telefono</label>
                            <input type="text" className="form-control" onInput={(e)=>{setTelefono(e.target.value)}}/>
                        </div>
        
                    <button type="button" className="btn btn-primary" onClick={generateOrden}>Generar Orden</button>
                    </form>
                    </div>
                    <div className="col">
                        <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Marca</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Total</th>
                                    
                                
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
                                        </tr>  
                                        
                                    )}  
                                    <tr>
                                        <td colSpan={4}>Suma Total</td>
                                        <td>${SumaTotalProductos()}</td>
                
                                    </tr> 
                                                   
                                </tbody>
                                </table>
                    </div>
                    
                </div>  

                <div className="row my-5">
                    <div className="col text-center">
                        {orderId ? <div className="alert alert-success" role="alert">
                            <h1>Gracias por la Compra!!</h1>
                            <p>El Id de tu compra es: <b>{orderId}</b></p>
                        </div> : ""}
                    </div>
                </div>    
                        
             </div>

    )




    
}


export default Checkout