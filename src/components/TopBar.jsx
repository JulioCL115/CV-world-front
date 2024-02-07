import { Link } from 'react-router-dom'

function TopBar() {

    return (
        <div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/curriculums">Currículums</Link>
                <Link to="/suscripciones">Suscripciones</Link>
            </div>
            <div>
                <title>CV World</title>
                <img src="" id="illustration-login"></img>
            </div>
            <div>
                <Link to="/signin">Iniciar sesión</Link>
            </div>
        </div>
    )
};

export default TopBar; 
