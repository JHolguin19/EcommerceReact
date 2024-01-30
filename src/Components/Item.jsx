import { Link } from "react-router-dom"

const Item = ({item}) =>{


    return(
        <div className="pro">
            <Link to={"/item/" + item.id} className="text-decoration-none">
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
                    <h4 className="price">${item.precio}</h4>
                    <button className="normal añadircarrito">Ver más</button>
                </div>
                    <i className="fal fa-shopping-cart cart" ></i>
            </Link>
    
           
            </div> 
         
              

)

}

export default Item