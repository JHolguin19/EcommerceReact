import ItemCount from "./ItemCount";

const ItemDetail = ({item}) =>{

    return(
        <div id="prodetails" className="section-p1">
            <div className="single-pro-image">
            <img src={item.imagen} width="100%" id="MainImage"/>
        
            <div className="small-img-group">
            <div className="small-img-col">
                <img src={item.imagen} width="100%" className="small-img" alt=""/>
            </div>
            <div className="small-img-col">
                <img src={item.imagen} width="100%" className="small-img" alt=""/>
            </div>
            <div className="small-img-col">
                <img src={item.imagen} width="100%" className="small-img" alt=""/>
            </div>
            <div className="small-img-col">
                <img src={item.imagen} width="100%" className="small-img" alt=""/>
                </div>
            </div>
        </div>

    <div className="single-pro-details product1"> 
        <h6>{item.categoria} + {item.marca}</h6>
        <h4>{item.nombre}</h4>
        <h2>{item.precio}</h2>
        <select>
            <option>Select Size</option>
            <option>Xl</option>
            <option>M</option>
            <option>L</option>
            <option>S</option>
        </select>
        <ItemCount stock={item.stock}/>
        <h4>Products Details</h4>
        <span>{item.detalles}</span>

    </div>
    </div>
    )



}

export default ItemDetail;