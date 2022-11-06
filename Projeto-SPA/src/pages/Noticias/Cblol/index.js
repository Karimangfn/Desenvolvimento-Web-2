import React from 'react';
import noticiacblol1 from '../../../assets/Imagens - Pagina Noticias/cblol noticia.png'
import noticiacblol2 from '../../../assets/Imagens - Pagina Noticias/cblol noticia 2.png'
import noticiacod1 from '../../../assets/Imagens - Pagina Noticias/callofduty noticia.jpg'
import noticiacod2 from '../../../assets/Imagens - Pagina Noticias/callofduty noticia2.jpg'
import noticiaps51 from '../../../assets/Imagens - Pagina Noticias/noticia ps5.jpg'
import noticiafrefas1 from '../../../assets/Imagens - Pagina Noticias/frefas noticia.jpg'
import noticiagenshin1 from '../../../assets/Imagens - Pagina Noticias/genshin noticia.jpg'
import noticiacs1 from '../../../assets/Imagens - Pagina Noticias/noticia cs.png'
import noticiaesports1 from '../../../assets/Imagens - Pagina Noticias/noticia E-Sports.jpg'
import noticiablizzard from '../../../assets/Imagens - Pagina Noticias/blizzard noticia.jpg'
import noticiatibia1 from '../../../assets/Imagens - Pagina Noticias/noticias tibia.png'
import noticiaStyle from '../../../Styles/noticiasStyle.css'
import { Link } from 'react-router-dom'

const Cblol = () => {
    return(
        <div className>
            <div class="col-12" id="content">
        <div class="col-9" id="contentLeft">
            <h2>CBLOL 2022 2º Split: veja times, calendário de jogos e como assistir</h2>
            <p>Segunda etapa do CBLOL começará com duelo entre RED e paiN, finalistas da última etapa; veja datas e horários dos jogos, além de onde assistir pela Twitch e YouTube</p>

            <br/>
                <div class="noticia">
                    <h4>Victor de Abreu - 11/06/2022</h4>
                    <img class="crop-1" source src={noticiacblol1} style={{objectposition: "50% 50%"}}/>
                    <p>O Campeonato Brasileiro de League of Legends (CBLOL) 2022 retorna para seu 2° Split neste sábado (11). A atual campeã RED Canids Kalunga, paiN Gaming, KaBuM! Esports, FURIA Esports, Liberty, Miners, LOUD, Rensga Esports, Flamengo Los Grandes e INTZ estarão competindo pelo título, o prêmio de R$ 100 mil e a vaga brasileira no Mundial de LoL 2022. Os jogos acontecem aos sábados e domingos a partir de 13h. Eles serão transmitidos ao vivo pelo portal LOL Esports e também pelos canais oficiais do CBLOL na Twitch e no YouTube.
                        <br/><br/>
                        A Riot Games também abriu a venda de ingressos para os interessados em assistir toda a ação da primeira fase presencialmente na Arena CBLOL em São Paulo, mas todos eles já estão esgotados. Novos ingressos para a fase eliminatória serão colocados à venda em outro momento pela empresa. A seguir, confira mais mais informações sobre a segunda etapa da competição.
                        <br/><br/>
                    </p>
                    <h3>Times e escalações</h3>
                        <br/>
                    <p>Como o CBLOL segue utilizando o sistema de franquias, as dez equipes que jogaram as últimas competições permanecem as mesmas. Porém, duas equipes sofreram pequenas mudanças no nome para a segunda etapa. Netshoes Miners passará a ser apenas Miners por conta do conflito de interesses com a KaBuM! Esports. Netshoes e KaBuM são empresas que pertencem ao mesmo grupo Magazine Luiza, o que obrigou essa pequena mudança em um dos times.
                         <br/><br/>
                         A segunda mudança está no Flamengo Esports, que será chamado de Flamengo Los Grandes no 2° Split. No dia 10 de junho, a organização de esportes eletrônicos Los Grandes, famosa pelo Free Fire, adquiriu 100% da Simplicity Brasil, empresa que faz a gestão do Flamengo Esports. Dessa forma, agora a vaga do CBLOL é administrada pela Los Grandes e a equipe será chamada de Flamengo Los Grandes.
                         <br/><br/>
                    </p>
                    <img class="crop-1" source src={noticiacblol2} style={{objectposition: "50% 50%"}}/>
                    <h3>Formato</h3>
                        <br/>
                    <p>O formato da segunda etapa permanece o mesmo. Na primeira fase, as equipes estarão reunidas em um grupo único. Elas jogarão no formato double round robin, que é basicamente pontos corridos com turno e returno. Cada equipe jogará um total de 18 confrontos, que serão definidos em séries melhores de uma partida (MD1). Ao final dessa fase, as seis melhores equipes avançarão para a fase eliminatória, ou playoffs, enquanto as quatro últimas colocadas estarão eliminadas do torneio.
                        <br/><br/>
                        Os playoffs serão realizados em uma chave de eliminação dupla. O Top 4 da primeira fase estará classificado para as semifinais da chave superior, enquanto a 5° e a 6° colocadas precisarão passar pela primeira rodada da chave inferior. Vale destacar que a líder da primeira fase poderá escolher a 3° ou a 4° colocada para enfrentar na semifinal. Todos os duelos da fase eliminatória serão realizados em séries melhores de cinco partidas (MD5).
                        <br/><br/>
                    </p>
                    <h3>Premiação</h3>
                        <br/>
                    <p>Todas as participantes receberão um prêmio em dinheiro, mas o valor dependerá de sua colocação final. No entanto, o objetivo principal é a vaga no Mundial de LOL 2022. A última representante do Brasil foi a RED Canids Kalunga, que acabou eliminada na segunda fase do Play-in.
                        <br/><br/>
                    </p>
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
                    <img class="crop-2" source src={noticiablizzard} style={{objectposition: "50% 50%"}}/></Link>;
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

export default Cblol;