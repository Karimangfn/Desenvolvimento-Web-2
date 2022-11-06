import React from 'react';
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div class="col-12" id="menu">
        <ul>
            <li><Link to="/">Noticias</Link></li>
            <li><Link to="/Dicas">Dicas</Link></li>
            <li><Link to="/TrabalheConosco">Trabalhe Conosco</Link></li>
            <li><Link to="/MapadoSite">Mapa Do Site</Link></li>
        </ul>
    </div>
    )
}

export default Menu;