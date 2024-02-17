import arrayProductos from '../Json/Productos.json'
import { useEffect, useState } from "react";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore'



const ItemListContainer = () =>{
    const [items, setItems] = useState([]);

    // Databased Firestore
    const {id} = useParams();

    useEffect(()=> {
        const db = getFirestore();
        const colRef = collection(db, "items")

        getDocs(colRef).then((snapshot) => {
            const data = snapshot.docs.map(doc =>({id: doc.id, ...doc.data()}))
            setItems(data)
            console.log(data)

        })
    }, [id])





        return(
            
            <ItemList items={items}/>
        )


}

export default ItemListContainer;