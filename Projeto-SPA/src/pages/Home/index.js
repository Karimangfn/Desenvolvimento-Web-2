import React from 'react';
import noticiablizzard1 from '../../assets/Imagens - Pagina Inicial/blizzard noticia.jpg'
import noticiablizzard2 from '../../assets/Imagens - Pagina Inicial/blizzard noticia2.jpg'
import noticiablizzard3 from '../../assets/Imagens - Pagina Inicial/blizzard noticia3.jpg'
import noticiacod1 from '../../assets/Imagens - Pagina Inicial/callofduty noticia.jpg'
import noticiacod2 from '../../assets/Imagens - Pagina Inicial/callofduty noticia2.jpg'
import noticiacblol1 from '../../assets/Imagens - Pagina Inicial/cblol noticia.jpg'
import noticiacblol2 from '../../assets/Imagens - Pagina Inicial/cblol noticia2.jpg'
import noticiacblol3 from '../../assets/Imagens - Pagina Inicial/cblol noticia3.jpg'
import noticiafrefas1 from '../../assets/Imagens - Pagina Inicial/frefas noticia.jpg'
import noticiagenshin1 from '../../assets/Imagens - Pagina Inicial/genshin noticia.jpg'
import noticiacs1 from '../../assets/Imagens - Pagina Inicial/noticia cs.png'
import noticiaesports from '../../assets/Imagens - Pagina Inicial/noticia E-Sports.jpg'
import noticiaps51 from '../../assets/Imagens - Pagina Inicial/noticia ps5.jpg'
import noticiaps52 from '../../assets/Imagens - Pagina Inicial/noticia ps52.jpg'
import noticiaps53 from '../../assets/Imagens - Pagina Inicial/noticia ps53.jpg'
import noticiatibia1 from '../../assets/Imagens - Pagina Inicial/noticias tibia.png'
import noticiawow1 from '../../assets/Imagens - Pagina Inicial/noticias wow.png'
import noticiapokemon1 from '../../assets/Imagens - Pagina Inicial/pokemon noticia.jpg'
import noticiaStyle from '../../Styles/homeStyle.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className>
        <div class="col-12" id="content">
        <div class="col-4" id="contentLeft">
            <h2>Jogos Mobile</h2>

            <br/>

            <a class="noticia">
            <Link to="/BlizzardNews">        
                <img class="crop-1" id="imagem" source src={noticiablizzard1} style={{objectPosition: "50% 0%"}}/>
                <img class="crop-1" id="imagem" source src={noticiablizzard2} style={{objectPosition: "50% 0%", display: "none"}}/>
                <img class="crop-1" id="imagem" source src={noticiablizzard3} style={{objectPosition: "50% 0%", display: "none"}}/></Link>    
                <h3>Funcionários Da Activision Blizzard Organizam Outra Paralisação</h3>
                <h4>Kariman Gomes - 1 de abril de 2022</h4>
            </a>

            
            <hr/>

            <a class="noticia-small">
                <div class="col-6">
                <Link to="/CallOfDutyNews"> 
                    <img class="crop-2" source src={noticiacod1} style={{objectPosition: "50% 100%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>Dicas de Call of Duty - Mobile</h3>
                    <h4>Kariman Gomes - 1 de abril de 2022</h4>
                </div>
            </a>

            <hr/>

            <a class="noticia-small">
                <div class="col-6">
                <Link to="/FortniteNews">
                    <img class="crop-2" source src={noticiafrefas1} style={{objectPosition: "50% 0%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>Dicas de Fortnite</h3>
                    <h4>Kariman Gomes - 1 de abril de 2022</h4>
                </div>
            </a>

            <hr/>

            <a class="noticia-small">
                <div class="col-6">
                <Link to="#">
                    <img class="crop-2" source src={noticiagenshin1} style={{objectPosition: "50% 50%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>Dicas de Genshin Impact</h3>
                    <h4>Kariman Gomes - 1 de abril de 2022</h4>
                </div>
            </a>
            
            
        </div>
        <div class="col-4" id="contentCentre">
            <h2>Notícias</h2>

            <br/>
            
            <a class="noticia">
            <Link to="/Ps5News">
                <img class="crop-1" id="imagem2" source src={noticiaps51} style={{objectPosition: "50% 0%"}}/>
                <img class="crop-1" id="imagem2" source src={noticiaps52} style={{objectPosition: "50% 0%", display: "none"}}/>
                <img class="crop-1" id="imagem2" source src={noticiaps53} style={{objectPosition: "50% 0%", display: "none"}}/></Link>
                <h3>DualSense do PS5 é eleito o melhor controle de todos os tempos!</h3>
                <h4>Kariman Gomes - 1 de abril de 2022</h4>
            </a>

            <hr/>

            <a class="noticia-small">
                <div class="col-6">
                <Link to="#">
                    <img class="crop-2" source src={noticiaesports} style={{objectPosition: "50% 100%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>Notícias de E-Sports</h3>
                    <h4>Kariman Gomes - 1 de abril de 2022</h4>
                </div>
            </a>

            <hr/>

            <a class="noticia-small">
                <div class="col-6">
                <Link to="#">
                    <img class="crop-2" source src={noticiacod2} style={{objectPosition: "50% 50%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>Notícias de Call of Duty: Modern Warfare II</h3>
                    <h4>Kariman Gomes - 1 de abril de 2022</h4>
                </div>
            </a>

            <hr/>

            <a class="noticia-small">
                <div class="col-6">
                <Link to="#">
                    <img class="crop-2" source src={noticiapokemon1} style={{objectPosition: "50% 50%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>Notícias da TV Pokémon</h3>
                    <h4>Kariman Gomes - 1 de abril de 2022</h4>
                </div>
            </a>

        </div>
        <div class="col-4" id="contentRight">
            <h2>Jogos Online</h2>

            <br/>

            <a class="noticia">
            <Link to="/CblolNews">
                <img class="crop-1" id="imagem3" source src={noticiacblol1} style={{objectPosition: "50% 0%"}}/>
                <img class="crop-1" id="imagem3" source src={noticiacblol2} style={{objectPosition: "50% 0%", display: "none"}}/>
                <img class="crop-1" id="imagem3" source src={noticiacblol3} style={{objectPosition: "50% 0%", display: "none"}}/></Link>
                <h3>CBLOL 2022 2o split: Veja times, calendários de jogos e como assistir...</h3>
                <h4>Kariman Gomes - 1 de abril de 2022</h4>
            </a>

            <hr/>

            <a class="noticia-small">
                <div class="col-6">
                <Link to="#">
                    <img class="crop-2" source src={noticiatibia1} style={{objectPosition: "50% 100%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>Teaser de conteúdo 2/4 SU 2022</h3>
                    <h4>Kariman Gomes - 1 de abril de 2022</h4>
                </div>
            </a>

            <hr/>

            <a class="noticia-small">
                <div class="col-6">
                <Link to="#">
                    <img class="crop-2" source src={noticiacs1} style={{objectPosition: "50% 50%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>Notícias de vitória sobre "lendas da Imperial"</h3>
                    <h4>Kariman Gomes - 1 de abril de 2022</h4>
                </div>
            </a>

            <hr/>

            <a class="noticia-small">
                <div class="col-6">
                <Link to="#">
                    <img class="crop-2" source src={noticiawow1} style={{objectPosition: "50% 50%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>Eventos de Bônus: Campos de Batalha</h3>
                    <h4>Kariman Gomes - 1 de abril de 2022</h4>
                </div>
            </a>

        </div>
        </div>
        </div>
    )
}

export default Home;