import arrayProductos from '../Json/Productos.json'
import { useEffect, useState } from "react";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'



const ItemListContainer = () =>{
    const [items, setItems] = useState([]);

    // Databased Firestore
    const {id} = useParams();

    useEffect(()=> {
        const db = getFirestore();
        const colRef = collection(db, "items")
        const query = id ? query(colRef, where("categorias", "==", id)): colRef;

        getDocs(query).then(resultado => {
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})))
        });

    }, [id])

        return(
            
            <ItemList items={items}/>
        )


}

export default ItemListContainer;