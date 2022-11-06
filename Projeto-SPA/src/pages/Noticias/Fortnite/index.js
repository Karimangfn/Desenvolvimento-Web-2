import React from 'react';
import noticiafrefas1 from '../../../assets/Imagens - Pagina Noticias/frefas noticia.jpg'
import noticiafortnite1 from '../../../assets/Imagens - Pagina Noticias/fortnite1.jpg'
import noticiafortnite2 from '../../../assets/Imagens - Pagina Noticias/fortnite2.jpg'
import noticiafortnite3 from '../../../assets/Imagens - Pagina Noticias/fortnite3.jpg'
import noticiafortnite4 from '../../../assets/Imagens - Pagina Noticias/fortnite4.jpg'
import noticiablizzard1 from '../../../assets/Imagens - Pagina Noticias/blizzard noticia.jpg'
import noticiacod1 from '../../../assets/Imagens - Pagina Noticias/callofduty noticia2.jpg'
import noticiacblol1 from '../../../assets/Imagens - Pagina Noticias/cblol noticia.png'
import noticiatibia1 from '../../../assets/Imagens - Pagina Noticias/noticias tibia.png'
import noticiagenshin1 from '../../../assets/Imagens - Pagina Noticias/genshin noticia.jpg'
import noticiacs1 from '../../../assets/Imagens - Pagina Noticias/noticia cs.png'
import noticiaesports1 from '../../../assets/Imagens - Pagina Noticias/noticia E-Sports.jpg'
import noticiaps51 from '../../../assets/Imagens - Pagina Noticias/noticia ps5.jpg'
import noticiacod2 from '../../../assets/Imagens - Pagina Noticias/callofduty noticia.jpg'
import noticiaStyle from '../../../Styles/noticiasStyle.css'
import { Link } from 'react-router-dom'

const Fortnite = () => {
    return(
        <div className>
            <div class="col-12" id="content">
        <div class="col-9" id="contentLeft">
            <h2>Dicas de Fortnite</h2>

            <br/>
                <div class="noticia">
                    <h4>Raphael Nascimento - 30/06/2022</h4>
                    
                    <img class="crop-1" source src={noticiafrefas1} style={{objectposition: "50% 50%"}}/>
                    <p>Fortnite é um battle royale que, apesar de não estar mais no auge do seu sucesso, ainda recebe muitos novos jogadores. Se você é um deles que chegou agora nesse fenômeno, confira abaixo 9 dicas essenciais para você começar com tudo em Fortnite!</p>
                    <h3>1. Caia em lugares seguros</h3> 
                    <img class="crop-1" source src={noticiafortnite1} style={{objectposition: "50% 50%"}}/>
                    <p>Não importa em qual temporada Fortnite esteja, sempre existem locais mais seguros e outros mais perigosos no mapa. Isso sempre varia de acordo com a temporada, mas saiba que quanto mais no centro você saltar, mais exposto você estará. Portanto, se você é iniciante e ainda está se acostumando com as mecânicas e o ritmo de jogo, evite essas localizações.
                        <br/><br/>
                        Estratégia: observe a rota do avião e procure pular em um local afastado dela. Caso não seja viável, tente saltar nas extremidades de uma das áreas mais badaladas do mapa.
                        <br/><br/>
                    </p>
                    <h3>2. Pegue tudo o que conseguir</h3> 
                    <img class="crop-1" source src={noticiafortnite2} style={{objectposition: "50% 50%"}}/>
                    <p>Assim que os seus pés tocarem o chão, comece a lootear rapidamente. Loots são todos os equipamentos e itens que você pode coletar no mapa, desde material para construir até itens e armas. A prioridade, é claro, é pegar qualquer arma que aparecer na sua frente e, quando já puder se defender, coletar escudos, curativos, mais armas e suprimentos como pedra, madeira e ferro. Sempre que passar do lado de qualquer coisa destrutível, use sua picareta para coletar os itens!
                        <br/><br/>
                        Estratégia: assim que aterrissar, não perca nenhum segundo e corra atrás de armas. Mantenha-se atento a todos os sons ao seu redor.
                        <br/><br/>
                    </p>
                    <h3>3. Mantenha-se em movimento</h3> 
                    <img class="crop-1" source src={noticiafortnite3} style={{objectposition: "50% 50%"}}/>
                    <p>Assim como em qualquer battle royale, em Fortnite você não deve ficar parado nenhum segundo. Mesmo ao lootear, tente manter-se em movimento em todos os momentos. Ao se locomover, sempre pule o máximo possível e quando estiver sob tiro, faça mudanças bruscas na direção. É claro, inclua as construções na sua movimentação para se tornar um alvo ainda mais imprevisível. Veja a dica abaixo!
                        <br/><br/>
                        Estratégia: seja imprevisível no movimento e nunca pare em campo aberto.
                        <br/><br/>
                    </p>
                    <h3>4. Aprenda o básico sobre as construções</h3> 
                    <img class="crop-1" source src={noticiafortnite4} style={{objectposition: "50% 50%"}}/>
                    <p>Construir (e destruir) é a grande diferença de Fortnite em relação a outros games battle royale. Aqui não adianta encontrar as melhores armas e ter boa mira. Se não souber usar as construções, simplesmente não irá vencer, já que com elas você pode alcançar locais indisponíveis, se defender, conseguir vantagens de posicionamento (principalmente nos momentos finais da partida), etc.
                        <br/><br/>
                        Estratégia: pratique suas habilidades de construção mais do que sua mira! Muitos jogadores tendem a "deixar para depois" e jogam partidas sem saber construir. Quanto mais cedo você agregar isso ao seu jogo, mais rápido obterá suas primeiras vitórias.
                        <br/><br/>
                    </p>
                </div>
            
        </div>
        
        <div class="col-3" id="contentRight">
            <h2>Outras Notícias</h2>

            <br/>

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
                    <img class="crop-2" source src={noticiacod1} style={{objectposition: "50% 50%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>Notícias de Call of Duty: Modern Warfare II</h3>
                    <h4>Karima Gomes - 02/11/2022</h4>
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
                    <h4>Kariman Gomes - 04/11/2022</h4>
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
                    <h4>Kariman Gomes - 01/11/2022</h4>
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
                    <h4>Kariman Gomes - 11/10/2022</h4>
                </div>
            </a>

            <hr/>

            <a class="noticia-small">
                <div class="col-6">
                <Link to="#">
                    <img class="crop-2" source src={noticiacs1} style={{objectposition: "50% 50%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>Noticia de vitoria sobre "lendas da Imperial"</h3>
                    <h4>Kariman Gomes - 10/10/2022</h4>
                </div>
            </a>

            <hr/>

            <a class="noticia-small">
                <div class="col-6">
                <Link to="#">
                    <img class="crop-2" source src={noticiaesports1} style={{objectposition: "50% 50%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>Noticias de E-Sports</h3>
                    <h4>Kariman Gomes - 20/11/2022</h4>
                </div>
            </a>

            <hr/>

            <a class="noticia-small">
                <div class="col-6">
                <Link to="/Ps5News">
                    <img class="crop-2" source src={noticiaps51} style={{objectposition: "50% 50%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>DualSense é eleito o melhor controle de todos os tempos</h3>
                    <h4>Karla Sthefany - 29/03/2022</h4>
                </div>
            </a>

            <hr/>

            <a class="noticia-small">
                <div class="col-6">
                <Link to="/CallOfDutyNews">
                    <img class="crop-2" source src={noticiacod2} style={{objectposition: "50% 50%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>Dicas de Call of Duty - Mobile</h3>
                    <h4>Chris Hall - 19/04/2022</h4>
                </div>
            </a>

            <hr/>

        </div>
    </div>
        </div>
    )
}

export default Fortnite;