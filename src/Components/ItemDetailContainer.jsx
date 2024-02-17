import { useEffect, useState } from 'react'
import arrayProductos from '../Json/Productos.json'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = ({}) => {

    const [item, setItem] = useState([]);


    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "items", id)
        getDoc(producto).then(producto => {
            setItem({id:producto.id, ...producto.data()})
        });
        
    }, [id]);

    return(
        <ItemDetail item={item}/>
    )



}

export default ItemDetailContainer;