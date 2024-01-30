import Item from "./Item";
import {Link} from "react-router-dom"

const ItemList = ({items}) => {

return(

    <div>
        <div id="product1" className="section-p1">
    <h2>Featured Products</h2>
    <p>Summer Collection New Modern Desing</p>
    <div className="btn-group" role="group" aria-label="Basic example">
        <Link to={"/categoria/camisa"}><button type="button" className="btn btn-primary" >Camisas</button></Link>
        <Link to={"/categoria/pantalon"}><button type="button" className="btn btn-primary" >Pantalones</button></Link>
        <Link to={"/categoria/chamarra"}><button type="button" className="btn btn-primary" >Chamarras</button></Link>
        <Link to={"/categoria/blusa"}><button type="button" className="btn btn-primary">Blusas</button></Link>
    </div>
    <div className="pro-container"> 
        
        {items.map(item => (
        <Item key ={item.id} item={item}/>))}
    
    </div>
    </div>
    </div>
)
}
export default ItemList;