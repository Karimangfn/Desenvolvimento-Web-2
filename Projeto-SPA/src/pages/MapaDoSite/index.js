import React from 'react';
import imagemMapa from '../../assets/Imagens - Pagina Mapa do Site/Imagem-MapadoSite.png'
import sobregz from '../../assets/Imagens - Pagina Mapa do Site/Sobre GamerZone.png'
import quemsomos from '../../assets/Imagens - Pagina Mapa do Site/QuemSomos.png'
import oquefazemos from '../../assets/Imagens - Pagina Mapa do Site/OqueFazemos.png'
import contato from '../../assets/Imagens - Pagina Mapa do Site/contato.png'
import mapaDoSiteStyle from '../../Styles/mapaDoSiteStyle.css'
import { Link } from 'react-router-dom'


const MapaDoSite = () => {
    return (
        <div className>
            <div class="barralateral">
            </div>

            <div class="main">
                <img source src={imagemMapa} style={{Position: "relative", width: "100%"}}/>
            </div>

            <div class="mainMapa">
                <div class="mainAssuntos">
                    <div class="corSubTopicos">
                        <h1 >Assuntos</h1>
                        <span id="mensagem1">Veja as Noticias mais Atualizadas do Momento!</span>
                    </div>
                    <div class="SubAssuntos">
                        <div class="col-12" id="menuSub">
                            <ul>
                                <li><Link to="/">Notícias</Link></li>
                                <ul>
                                    <li><Link to="/BlizzardNews">Blizzard</Link></li>
                                    <li><Link to="/Ps5News">Ps5</Link></li>
                                    <li><Link to="/CblolNews">CBLOL</Link></li>
                                    <li><Link to="/CallOfDutyNews">CallOfDuty</Link></li>
                                    <li><Link to="/FortniteNews">Fortnite</Link></li><br/>
                                </ul>
                                <li><Link to="/Dicas">Dicas</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="mainSobre">
                    <div class="corSubTopicos">
                        <h1>Sobre</h1>
                        <span id="mensagem2">Conheça mais Sobre a GamerZone e sobre Nosso Site!</span>
                    </div>
                    <div class="SubSobre">
                        <div class="col-12" id="menuSub">
                            <ul>
                                <li><Link to="/MapaDoSite">Mapa do Site</Link></li><br/>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="mainOutros">
                    <div class="corSubTopicos">
                        <h1>Outros Links</h1>
                        <span id="mensagem3">Envie seu Curriculo ainda Hoje!</span>
                    </div>
                    <div class="SubOutros">
                        <div class="col-12" id="menuSub">
                            <ul>
                                <li><Link to="/TrabalheConosco">Trabalhe Conosco</Link></li><br/>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="Sobre">
                    <img source src={sobregz} style={{Position: "relative", width: "100%"}}/>
                </div>
                <div class="col2-1">
                    <img source src={quemsomos} style={{Position: "relative", width: "100%"}}/>
                </div>
                <div class="col2-1">
                    <img source src={oquefazemos} style={{Position: "relative", width: "100%"}}/>
                </div>
                <div class="col2-2">
                    <img source src={contato} style={{Position: "relative", width: "100%"}}/>
                </div>
            </div>

            <div class="barralateral">
            </div>
        </div>
    )
}

export default MapaDoSite;
