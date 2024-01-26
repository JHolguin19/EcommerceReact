import arrayProductos from './assets/Json/Productos.json'
import { useEffect, useState } from "react";



const Productos = () =>{
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            
            resolve(arrayProductos)
        })

        promesa.then(data => {
            setProductos(data)
        })
        .catch(error => {
            setMensajeError(error);
        })
    }, []);
        return(
            <div>
                <div id="product1" className="section-p1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Modern Desing</p>
                
                {productos.map(item => (
                
                <div className="pro-container"> 
                    <div className="pro">
                                     
                
                      <img src={item.imagen} alt=""/>
                    <div className="des">
                        <span>{item.marca}</span>
                        <h5>{item.nombre}</h5>
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <h4 className="price">{item.precio}</h4>
                        <button className="normal añadircarrito">Añadir Carrito</button>
                    </div>
                    <a href="#"><i className="fal fa-shopping-cart cart añadircarrito" ></i></a>
                  </div>
                  </div> 

                
                ))}    
                </div>          
                          
            </div>
        )


}

export default Productos