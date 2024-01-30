import f1 from '../assets/imagenes/features/f1.png'
import f2 from '../assets/imagenes/features/f2.png'
import f3 from '../assets/imagenes/features/f3.png'
import f4 from '../assets/imagenes/features/f4.png'
import f5 from '../assets/imagenes/features/f5.png'
import f6 from '../assets/imagenes/features/f6.png'
import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'


const Home = () =>{
    return(

        <div>
            <div id="hero">
                <h4>Trade-in-offer</h4>
                <h2>Super value deals</h2>
                <h1>On all products</h1>
                <p>Save more with coupons and up to 70% off!</p>
                <button>Shop now</button>
            </div>
            <div id="feature" className="section-p1">
                <div className="fe-box">
                    <img src={f1} alt=""/>
                    <h6>Free Shiping</h6>
                </div>
                <div className="fe-box">
                    <img src={f2} alt=""/>
                    <h6>Online Order</h6>
                </div>
                <div className="fe-box">
                    <img src={f3} alt=""/>
                    <h6>Save Money</h6>
                </div>
                <div className="fe-box">
                    <img src={f4} alt=""/>
                    <h6>Promotions</h6>
                </div>
                <div className="fe-box">
                    <img src={f5} alt=""/>
                    <h6>Free Shiping</h6>
                </div>
                <div className="fe-box">
                    <img src={f6} alt=""/>
                    <h6>Happy Sell</h6>
                </div>
            </div>
            <ItemListContainer/>         
        </div>



    )

}


export default Home