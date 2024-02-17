import { useEffect, useState } from 'react'
import arrayProductos from '../Json/Productos.json'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { getDoc, getFirestore, doc, where} from 'firebase/firestore'

const ItemDetailContainer = ({ id }) =>{

    const [item, setItem] = useState(null)


    useEffect(()=>{
        const db = getFirestore();
        const docRef = doc(db, "items", id);
        
        getDoc(docRef).then((snapshot)  =>  {
            if(snapshot.exists()) {
                setItem({id: snapshot.id, ...snapshot.data()})
            }
    })

    }, [])

    console.log(item)

    return(
        <>
        {            
            item !== null &&
        <ItemDetail item={item}/>
        }
        </>
        
    )



}

export default ItemDetailContainer;