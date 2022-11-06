import React from 'react';
import noticiaps51 from '../../../assets/Imagens - Pagina Noticias/noticia ps5.jpg'
import noticiacod1 from '../../../assets/Imagens - Pagina Noticias/callofduty noticia.jpg'
import noticiacod2 from '../../../assets/Imagens - Pagina Noticias/callofduty noticia2.jpg'
import noticiacblol1 from '../../../assets/Imagens - Pagina Noticias/cblol noticia.png'
import noticiafrefas1 from '../../../assets/Imagens - Pagina Noticias/frefas noticia.jpg'
import noticiagenshin1 from '../../../assets/Imagens - Pagina Noticias/genshin noticia.jpg'
import noticiacs1 from '../../../assets/Imagens - Pagina Noticias/noticia cs.png'
import noticiaesports1 from '../../../assets/Imagens - Pagina Noticias/noticia E-Sports.jpg'
import noticiablizzard1 from '../../../assets/Imagens - Pagina Noticias/blizzard noticia.jpg'
import noticiatibia1 from '../../../assets/Imagens - Pagina Noticias/noticias tibia.png'
import noticiaStyle from '../../../Styles/noticiasStyle.css'
import { Link } from 'react-router-dom'

const Ps5 = () => {
    return(
        <div className>
            <div class="col-12" id="content">
        <div class="col-9" id="contentLeft">
            <h2>DualSense é eleito o melhor controle de todos os tempos!</h2>

            <br/>
                <div class="noticia">
                    <h4>Karla Sthefany - 28/03/2022</h4>
                    <img class="crop-1" source src={noticiaps51} style={{objectposition: "50% 50%"}}/>
                    <p>Os modelos de controles para games foram sendo lançados nas mais diversas formas, ao longo dos anos, e a pergunta que nos questionamos às vezes é: qual é o melhor? Bom, de acordo com uma votação realizada pela BAFTA Games, o DualSense é o vencedor da categoria.
                        <br/><br/>
                        O novo controle da Sony que acompanha o PS5 venceu com o melhor controle de todos os tempos, e até o próprio Twitter oficial do BAFTA compartilhou a vitória nas redes sociais. Foi mostrado ainda todos os controles que concorreram com o ganhador.
                        <br/><br/>
                        Mas não pense que o caminho até a vitória foi simples, já que o DualSense precisou concorrer com o controle do Nintendo 64 e depois com o Nintendo Wii e o Nintendo GameCube. No final, o campeão ainda bateu de frente com o DualShock, mas ganhou de qualquer forma.
                        <br/><br/>
                        Um detalhes curioso é que o Kinect da Microsoft perdeu logo no começo, assim como o Nintendo Joy-Con. O BAFTA Games Awards vai ser realizado no próximo dia 7 de abril. Anota na agenda pra não perder!
                    </p>
                        <br/><br/>
                    </div>
            
        </div>
        
        <div class="col-3" id="contentRight">
            <h2>Outras Notícias</h2>

            <br/>

            <a class="noticia-small">
                <div class="col-6">
                <Link to="/CallOfDutyNews">
                    <img class="crop-2" source src={noticiacod1} style={{objectposition: "50% 50%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>Dicas de Call of Duty - Mobile</h3>
                    <h4>Chris Hall - 19/04/2022</h4>
                </div>
            </a>

            <hr/>

            <a class="noticia-small">
                <div class="col-6">
                <Link to="#">
                    <img class="crop-2" source src={noticiacod2} style={{objectposition: "50% 50%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>Notícias de Call of Duty: Modern Warfare II</h3>
                    <h4>Kariman Gomes - 1 de abril de 2022</h4>
                </div>
            </a>

            <hr/>

            <a class="noticia-small">
                <div class="col-6">
                <Link to="/CblolNews">
                    <img class="crop-2" source src={noticiacblol1} style={{objectposition: "50% 50%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>CBLOL 2022 2o split: Veja times, calendários de jogos e como assistir...</h3>
                    <h4>Kariman Gomes - 1 de abril de 2022</h4>
                </div>
            </a>

            <hr/>

            <a class="noticia-small">
                <div class="col-6">
                <Link to="/FortniteNews">
                    <img class="crop-2" source src={noticiafrefas1} style={{objectposition: "50% 50%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>Dicas de Fortnite</h3>
                    <h4>Raphael Nascimento - 30/06/2022</h4>
                </div>
            </a>

            <hr/>

            <a class="noticia-small">
                <div class="col-6">
                <Link to="#">
                    <img class="crop-2" source src={noticiagenshin1} style={{objectposition: "50% 50%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>Dicas de Genshin Impact</h3>
                    <h4>Kariman Gomes - 1 de abril de 2022</h4>
                </div>
            </a>

            <hr/>

            <a class="noticia-small">
                <div class="col-6">
                <Link to="#">
                    <img class="crop-2" source src={noticiacs1} style={{objectposition: "50% 50%"}}/></Link>
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
                    <img class="crop-2" source src={noticiaesports1} style={{objectposition: "50% 50%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>Notícias de E-Sports</h3>
                    <h4>Kariman Gomes - 1 de abril de 2022</h4>
                </div>
            </a>

            <hr/>

            <a class="noticia-small">
                <div class="col-6">
                <Link to="/BlizzardNews">
                    <img class="crop-2" source src={noticiablizzard1} style={{objectposition: "50% 50%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>Funcionários Da Activision Blizzard Organizam Outra Paralisação</h3>
                    <h4>Rodrigo Estevam - 16/09/2021</h4>
                </div>
            </a>

            <hr/>

            <a class="noticia-small">
                <div class="col-6">
                <Link to="#">
                    <img class="crop-2" source src={noticiatibia1} style={{objectposition: "50% 50%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>Teaser de conteúdo 2/4 SU 2022</h3>
                    <h4>Kariman Gomes - 01 de Abril de 2022</h4>
                </div>
            </a>

            <hr/>

        </div>
    </div>
        </div>
    )
}

export default Ps5;