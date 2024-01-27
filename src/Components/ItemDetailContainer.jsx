import { useEffect, useState } from 'react'
import arrayProductos from '../Json/Productos.json'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () =>{

    const [item, setItem] = useState([]);

    useEffect(()=>{
        const promesa = new Promise((resolve) => {
            setTimeout(()=>{
                let producto = arrayProductos.find(item=> item.id == 1);
                resolve(producto);
            }, 2000)
                       
        })

        promesa.then(data => {
            setItem(data)
        })
    }, [])

    return(
        <ItemDetail item={item}/>
    )



}

export default ItemDetailContainer;