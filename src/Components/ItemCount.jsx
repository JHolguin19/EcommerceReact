import { useEffect, useState } from "react";

const ItemCount = ({stock}) => {

        const [ counter, setCounter] = useState(1);
        const [ itemStock, setItemStock] = useState(stock);
    

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

        const onAdd = () =>{
            if (counter < itemStock) {
                setItemStock( itemStock - counter)
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
            <button type="button" onClick={onAdd} className="btn btn-primary">Añadir a Carrito</button>
        </div>
        </div>
       
        </>
    )
}

export default ItemCount;