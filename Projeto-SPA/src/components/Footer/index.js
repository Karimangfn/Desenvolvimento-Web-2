import React from 'react';
import logosite from '../../assets/Imagens - Header/Logo Site.png'
import logofooter from '../../assets/Imagens - Footer/ifsp-logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div class="col-12" id="bar">
        </div>

        <div class="col-12" id="footer">
            <div class="col-4" id="col1Footer">
                <img id="imgFooter" source src={logosite}/>
             </div>
              <div class="col-4" id="col2Footer">
                 <h3>Notícias, novidades, e muito mais, sobre diversos jogos... Acompanhe e fique ligado!</h3><br/>
                      <h3>©️ 2022 Gamer Zone - Política de Privacidade e Cookies. </h3>
              </div>
              <div class="col-1" id="col3Footer">
                   <a href="https://spo.ifsp.edu.br/"><img class="crop-3" id="ifsp" source src={logofooter}/></a>
             </div>
              <div class="col-3" id="col4Footer">
                  <ul>
                      <li><Link to="/">Noticias</Link></li>
                      <li><Link to="/Dicas">Dicas</Link></li>
                      <li><Link to="/TrabalheConosco">TrabalheConosco</Link></li>
                      <li><Link to="/MapadoSite">Mapa Do Site</Link></li>
                  </ul>
               </div>
            </div>
        </div>
    )
}
export default Footer;