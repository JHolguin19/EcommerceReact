import Item from "./Item";

const ItemList = ({items}) => {

return(

    <div>
        <div id="product1" className="section-p1">
    <h2>Featured Products</h2>
    <p>Summer Collection New Modern Desing</p>
    <div className="pro-container"> 
        
        {items.map(item => (
        <Item key ={item.id} item={item}/>))}
    
    </div>
    </div>
    </div>
)
}
export default ItemList;