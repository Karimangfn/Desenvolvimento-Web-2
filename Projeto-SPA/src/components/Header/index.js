import React from 'react';
import logosite from '../../assets/Imagens - Header/Logo Site.png'

const Header = () => {
    return (
    <div class="col-12" id="header">
        <img id="imgHeader" source src={logosite}/>
    </div>
    )
}

export default Header;