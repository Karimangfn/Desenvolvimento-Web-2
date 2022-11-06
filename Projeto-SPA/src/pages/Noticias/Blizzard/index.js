import React from 'react';
import noticiablizzard1 from '../../../assets/Imagens - Pagina Inicial/blizzard noticia.jpg'
import noticiablizzard2 from '../../../assets/Imagens - Pagina Inicial/blizzard noticia2.jpg'
import noticiacod1 from '../../../assets/Imagens - Pagina Inicial/callofduty noticia.jpg'
import noticiacod2 from '../../../assets/Imagens - Pagina Inicial/callofduty noticia2.jpg'
import noticiacblol1 from '../../../assets/Imagens - Pagina Inicial/cblol noticia.jpg'
import noticiafrefas1 from '../../../assets/Imagens - Pagina Inicial/frefas noticia.jpg'
import noticiagenshin1 from '../../../assets/Imagens - Pagina Inicial/genshin noticia.jpg'
import noticiacs1 from '../../../assets/Imagens - Pagina Inicial/noticia cs.png'
import noticiaesports from '../../../assets/Imagens - Pagina Inicial/noticia E-Sports.jpg'
import noticiaps51 from '../../../assets/Imagens - Pagina Inicial/noticia ps5.jpg'
import noticiatibia1 from '../../../assets/Imagens - Pagina Inicial/noticias tibia.png'
import noticiaStyle from '../../../Styles/noticiasStyle.css'
import { Link } from 'react-router-dom'

const Blizzard = () => {
    return(
        <div className>
        <div class="col-12" id="content">
        <div class="col-9" id="contentLeft">
            <h2>Funcionários Da Activision Blizzard Organizam Outra Paralisação</h2>

            <br/>
                <div class="noticia">
                    <h4>Rodrigo Estevam - 16/09/2021</h4>
                    <img class="crop-1" source src={noticiablizzard1} style={{objectposition: "50% 50%"}}/>
                    <p>Em um novo desdobramento da batalha travada entre a Activision Blizzard e seus funcionários, que foram às redes sociais e organizaram paralisações para chamar a atenção para a conduta abusiva no ambiente de trabalho, a companhia agora está sendo acusada de cometer práticas injustas e foi novamente acionada judicialmente.
                        <br/><br/>
                        Conforme apurado pelo Vice, a documentação do novo processo sugere que a empresa "repetidamente adotou condutas injustas ao ameaçar seus empregados". O documento ainda acusa a empresa de proibir colaboradores de comentar ou discutir sobre as investigações referentes a salários, bem como aos horários e condições de trabalho.
                        <br/><br/>
                        Ainda segundo o texto, a Activision Blizzard estaria mantendo "políticas exageradamente amplas em relação às redes sociais", aplicando estas políticas a empregados que participaram de atividades combinadas protegidas, provavelmente se referindo à paralisação recentemente organizada pelos empregados.</p>     
                    <br/><br/>
                    <img class="crop-1" source src={noticiablizzard2} style={{objectposition: "50% 50%"}}/>
                    <p>Segundo o documento, a empresa é acusada ainda de coagir e "ameaçar ou aplicar medidas disciplinares a funcionários que participaram de atividades combinadas protegidas", tendo ainda supostamente monitorado e interrogado funcionários que participaram de tais atividades.
                        <br/><br/>
                        Além disso, a Activision Blizzard estaria supostamente cometendo retaliação contra empregados que tenham se pronunciado sobre as questões referentes aos problemas no ambiente de trabalho.
                        <br/><br/>
                        De acordo com o VG247, a gigante dos games estaria dando feedbacks negativos para colaboradores que até então eram avaliados positivamente. O site sugere que a empresa pode estar se preparando para demitir estes empregados, e as avaliações negativas poderiam ser uma tentativa de justificar as demissões e evitar problemas com sindicatos.</p>
                        <br/><br/>
                    <h3>Conclusão</h3>
                        <br/>
                    <p>Anteriormente, a Activision Blizzard foi acionada judicialmente pelo Estado da Califórnia, nos Estados Unidos, que acusou a empresa de permitir uma cultura de "fraternidade" no ambiente de trabalho, fazendo alusão aos grupos sociais organizados em faculdades dos EUA. No país, fraternidades são frequentemente associadas a práticas machistas e preconceituosas.
                        <br/><br/>
                        A companhia parece estar se esforçando para lidar com toda a situação referente aos problemas no ambiente de trabalho, tendo recentemente contratado uma nova Gerente de Recursos Humanos. A mudança pode ser um passo na direção certa, visto que uma das reclamações dos funcionários era de que nem mesmo o RH da empresa oferecia ajuda em casos de preconceito e assédio.
                    </p>
                        <br/><br/>
                    </div>
            
        </div>
        
        <div class="col-3" id="contentRight">
            <h2>Outras Notícias</h2>

            <br/>

            <a class="noticia-small">
                <div class="col-6">
                <Link to="/CallofDutyNews">
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
                    <img class="crop-2" source src={noticiaesports} style={{objectposition: "50% 50%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>Notícias de E-Sports</h3>
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

            <a href="#" class="noticia-small">
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

export default Blizzard;