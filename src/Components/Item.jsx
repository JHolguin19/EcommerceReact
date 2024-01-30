const Item = ({item}) =>{


    return(
    <div>
    
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
            <a href="#"><i className="fal fa-shopping-cart cart" ></i></a>

    </div> 
         
              

)

}

export default Item