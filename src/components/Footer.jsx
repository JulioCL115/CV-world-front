import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div>
                <div>
                    <title>CV World</title>
                    <img src="Logo-White.png" alt="logo-white" />
                </div>
                <p>Mantenete al tanto de nuestras novedades y lanzamientos
                    suscribiéndote a nuestro newsletter.</p>
                <div>
                    <input value=""/>
                    <button>Aceptar</button>
                </div>
                <p>Al suscribirte estás aceptando nuestras Políticas de Privacidad y accediendo a
                    recibir novedades de nuestra compañía.</p>
            </div>
            <div>
                <div>
                    <h1>Páginas</h1>
                    <Link to="/">Home</Link>
                    <Link to="/curriculums">Currículums</Link>
                    <Link to="/suscripciones">Suscripciones</Link>
                </div>
                <div>
                    <h1>Seguinos</h1>
                    <div>
                        <button>Twitter</button>
                    </div>
                    <div>
                        <button>Instagram</button>
                    </div>
                    <div>
                        <button>TikTok</button>
                    </div>
                </div>
                <div>
                    <h1>Contactanos</h1>
                    <div>
                        <p>cvworld@gmail.com</p>
                    </div>
                    <div>
                        <p>+54 9 11 1234-5678</p>
                    </div>
                    <div>
                        <p>Calle Ejemplo 1234, CABA</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer; 
