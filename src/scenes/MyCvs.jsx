import styles from "./MyCvs.module.css"

import { Link } from "react-router-dom";

function MyCvs() {
    
    return (
        <div>
            <Link to="/createcv">
                <button >Agregar CV</button>
            </Link>
        </div>
    )
};

export default MyCvs;