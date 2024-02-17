import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {

        const [ counter, setCounter] = useState(1);
        const [ itemStock, setItemStock] = useState(stock);
        const [ itemAdded, setItemAdded] = useState(false);
    

        const incrementar = () =>{
            if ( counter < itemStock){
                setCounter(counter + 1)
            }
        }

        const decrementar = () =>{
            if (counter > 1){
                setCounter(counter - 1)
            }
        }

        const addToCart = () =>{
            if (counter < itemStock) {
                setItemStock( itemStock - counter)
                setItemAdded(true)
                onAdd(counter)
                setCounter(1)
                }
            }
    useEffect(()=> {
        setItemStock(stock)
    }, [stock])
    return(
        <>
        <div className="row">
            <div className="col">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" onClick={decrementar} className="btn btn-primary">-</button>
                    <button type="button" className="btn btn-primary">{counter}</button>
                    <button type="button" onClick={incrementar} className="btn btn-primary">+</button>
                </div>
            </div>
            <div className="col">
            { itemAdded ? <Link to={"/cart"} className="btn btn-primary">Terminar Mi Compra </Link> : <button type="button" onClick={addToCart} className="btn btn-primary"> Añadir a Carrito </button>}
        </div>
        </div>
       
        </>
    )
}

export default ItemCount;