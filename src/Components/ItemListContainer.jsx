import arrayProductos from '../Json/Productos.json'
import { useEffect, useState } from "react";
import ItemList from './ItemList';



const ItemListContainer = () =>{
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(()=>{
                resolve(arrayProductos);
            }, 2000)
                       
        })

        promesa.then(data => {
            setItems(data)
        })
        .catch(error => {
            setMensajeError(error);
        })
    }, []);

        return(
            <ItemList items={items}/>
        )


}

export default ItemListContainer;