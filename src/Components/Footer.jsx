import pays from '../assets/imagenes/pays/pay.png'

const Footer = () => {

    return( 
            <div className="section-p1">
            <div className="footer">    
            <div className="col">
                <img src="imgenes/logo.jpg" alt="" className="logo"/>
                <h4>contact</h4>
                <p><strong>Dirección:</strong> Calle 7 # 10-11</p>
                <p><strong>Telefono:</strong> 3152508939</p>
                <p><strong>Atención:</strong> 8:00 - 17:00, Lunes a Domingo</p>
            
            <div className="follow">
                <h4>Siguenos:</h4>
                <div className="icon">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-whatsapp"></i>
                </div>
            </div>
            </div>
            <div className="col">
                <h4>About</h4>
                <a href="">About us</a>
                <a href="">Delivery Information</a>
                <a href="">Privacy Policy</a>
                <a href="">Terminos y condiciones</a>
                <a href="">Contact us</a>
            </div>
            <div className="col">
                <h4>My account</h4>
                <a href="">Ingresar</a>
                <a href="">Mi Carrito</a>
                <a href="">Mi lista de deseos</a>
                <a href="">Seguir mi orden</a>
                <a href="">Ayuda</a>
            </div>
            <div className="col install">
                <div className="row">
                    <h4>Security Payment Gateways</h4>
                    <img src={pays} alt=""/>
                </div>
            </div>
        <div className="copyright">
            <p>© 2023, Holguin - E-commerce WildWheel.</p>
        </div>
        </div>
        </div>
)


}

export default Footer;