import React from 'react';
import noticiacod1 from '../../../assets/Imagens - Pagina Inicial/callofduty noticia.jpg'
import noticiacod2 from '../../../assets/Imagens - Pagina Noticias/cod noticia.png'
import noticiacod3 from '../../../assets/Imagens - Pagina Noticias/cod noticia 2.png'
import noticiacod4 from '../../../assets/Imagens - Pagina Noticias/callofduty noticia2.jpg'
import noticiablizzard1 from '../../../assets/Imagens - Pagina Noticias/blizzard noticia.jpg'
import noticiacblol1 from '../../../assets/Imagens - Pagina Noticias/cblol noticia.png'
import noticiafrefas1 from '../../../assets/Imagens - Pagina Noticias/frefas noticia.jpg'
import noticiagenshin1 from '../../../assets/Imagens - Pagina Noticias/genshin noticia.jpg'
import noticiacs1 from '../../../assets/Imagens - Pagina Noticias/noticia cs.png'
import noticiasports1 from '../../../assets/Imagens - Pagina Noticias/noticia E-Sports.jpg'
import noticiaps51 from '../../../assets/Imagens - Pagina Noticias/noticia ps5.jpg'
import noticiatibia1 from '../../../assets/Imagens - Pagina Noticias/noticias tibia.png'
import noticiaStyle from '../../../Styles/noticiasStyle.css'
import { Link } from 'react-router-dom'

const CallofDuty = () => {
    return(
        <div className>
            <div class="col-12" id="content">
        <div class="col-9" id="contentLeft">
            <h2>Dicas Para Call of Duty - Mobile</h2>

            <br/>
                <div class="noticia">
                    <h4>Chris Hall - 19/04/2022</h4>
                    <img class="crop-1" source src={noticiacod1} style={{objectposition: "50% 50%"}}/>
                    <p>Call of Duty Mobile traz uma mistura de ação, tanto no jogo multiplayer quanto no jogo de batalha royale.
                        <br/><br/>
                        Mas se você é novo no jogo, há muito o que fazer para começar e ganhar partidas e aumentar a sua EXP. Então vamos mergulhar em como você pode obter o máximo do Call of Duty: Mobile em nossas extensas dicas e truques.
                        <br/><br/>
                    </p>
                    <h3>Configurando o Call of Duty Mobile e seu Telefone</h3>
                        <br/>
                    <ul>
                        <li>Requisitos do sistema Call of Duty Mobile para iPhone: Funciona em telefones a partir do iPhone 6S; funciona no iPad Air 2 em diante.</li>
                        <li>Requisitos do sistema Call of Duty Mobile para Android: Requer Android 4.3 ou posterior e seu telefone precisa de pelo menos 2GB de RAM.</li>
                    </ul>
                    <br/><br/>
                    <img class="crop-1" source src={noticiacod2} style={{objectposition: "50% 50%"}}/>
                    <p>Preparar o armazenamento do dispositivo: Você precisará de cerca de 1,6GB de armazenamento para instalar o CoD: Móvel e para dados de jogos, então você pode ter que limpar algo. Se você estiver bem no limite, seu telefone não funcionará tão bem, e este é um jogo exigente. COD:M decompõe os arquivos para que você só precise baixar o que precisa - a coisa toda pode chegar a 12GB!
                        <br/><br/>
                        Encerrar atividades de fundo e alertas: Se você tem um modo de jogo em seu aparelho, então agora é o momento de usá-lo para reduzir as notificações que você não quer e para matar outros processos que possam estar diminuindo o desempenho de seu telefone. Para obter o melhor do CoD:M você precisa que seu telefone esteja funcionando o melhor possível.
                        <br/><br/>
                        Use o Facebook ou o login da conta Call of Duty: Infelizmente não há login com nome de usuário/senha, você tem que usar o Facebook, sua conta de Call of Duty Activision ou jogar como convidado. Se você usar o login do Facebook, você poderá então mover seu perfil para um dispositivo diferente se você receber um novo telefone ou quiser jogar em um tablet, por exemplo, como você fará com uma conta Activision.</p>
                        <br/><br/>
                    <p>Dica Pro: Ocasionalmente há incentivos para usar um tipo diferente de login - talvez você possa obter um personagem diferente para se conectar à sua conta Call of Duty, o que vale a pena procurar.
                        <br/><br/>
                        Conecte seus fones de ouvido: A trilha sonora para Call of Duty: Mobile é excelente - e também ajuda você a ficar mais consciente do que está acontecendo ao seu redor. Você será capaz de apontar os passos, ouvir a tosse de um fuzil de franco-atirador silencioso e muito mais se você puder ouvi-los claramente. Brincar com fones de ouvido é um movimento profissional - ou aumente o volume dos alto-falantes, se você tiver alto-falantes estéreo.
                        <br/><br/>
                        Você precisará de uma conexão à Internet: Sim, como este é um modo multiplayer ao vivo não há modo offline - você precisará estar conectado para jogar. Observe sua permissão de dados, ou fique ligado ao Wi-Fi, embora o jogo não use muitos dados.</p>     
                    <br/><br/>
                    <p>Socorro, minha jogabilidade está atrasada! Se você parece estar congelando ou se movendo repetidamente sobre a mesma área, é provavelmente porque sua conexão está caindo fora. Tente ligar ou desligar o Wi-Fi, ou reiniciar seu roteador ou telefone para resolver o problema. Às vezes mudamos para dados móveis quando o Wi-Fi está funcionando.
                        <br/><br/>
                    Aumente a luminosidade: O que você vê é o que você atira. Quanto mais brilhante melhor, então desligue o brilho automático, aumente os níveis e certifique-se de que o "modo noturno" ou o "filtro de luz azul" não esteja ligado, pois isso irá distorcer o visual. Se você tiver um modo de jogo em seu telefone, faça-o para desativar o brilho automático.
                        <br/><br/>
                    Conecte seu controlador Xbox ou PS: Você pode conectar um controlador de console para jogar em seu celular. Você será emparelhado com outras pessoas usando controladores quando você jogar, para não obter uma vantagem injusta. Primeiro conecte a controladora ao seu dispositivo via Bluetooth, depois entre em configurações - controladora e você poderá ver quando a controladora estiver conectada e personalizar as coisas.</p>     
                        <br/><br/>
                    <h3>Call of Duty Mobile melhores configurações e controles</h3>
                        <br/>
                    <p>Há uma riqueza de configurações e opções para Call of Duty: Móvel e o melhor depende muito de como você gosta de jogar e em que telefone ou tablet você está jogando. Vale a pena testar todas as opções.
                        <br/><br/>
                        Escolha o modo Avançado: Existem dois métodos de controle, simples ou avançado, que serão apresentados no início do jogo. Simples é fogo automático quando você está apontando para alguém, mas Avançado lhe dá controle total e é o último que você deve escolher - mesmo que isso signifique obter um pouco mais de prática. Você nunca chegará a lugar algum em controles simples.
                        <br/><br/>
                        Personalize seus controles: Do lobby, toque na engrenagem das configurações e você abrirá todas as configurações para o jogo. Em Controles você terá a opção de Simples e Avançado, como acima, mas em Avançado você tem o botão personalizar - toque nisto e você pode arrastar os elementos de controle para novos locais. Esteja ciente de que o multiplayer e o royale de batalha têm docas ligeiramente diferentes, portanto, personalize ambos.
                        <br/><br/>
                        Ligue o botão de inclinação para habilitar o dropshotting: Uma mudança recente como foi a adição da opção de ir direto para a prona (deitado) em vez de ter que apertar por muito tempo o botão de agachamento. O botão de inclinação está desligado por padrão, mas se você o ligar, poderá cair no chão e continuar lutando - um movimento chamado dropshotting. É popular no PUBG e está ficando muito comum no COD:M desde aquela adição da nova opção de controle. As opções estão em configurações - controles básicos - botão de esconder.
                        <br/><br/>
                    </p>
                    <img class="crop-1" source src={noticiacod3} style={{objectposition: "50% 50%"}}/>
                        <br/><br/>
                    <p>Mude o modo de disparo: Na mesma área como acima, em Avançado, você pode mudar como diferentes tipos de armas atiram. Você pode atirar do quadril, mirar para baixo (ADS) ou selecionar personalizado. Isto permitirá mudar o comportamento dos grupos de armas - para que você possa atirar com espingardas do quadril, por exemplo (o que vale a pena fazer).
                        <br/><br/>
                        Mudar a qualidade gráfica: Seu dispositivo detectará automaticamente as configurações de seu telefone na primeira partida, mas se você quiser alterá-las, nas configurações, toque em Áudio e Gráficos. Aqui você pode selecionar a qualidade e a taxa de quadros, assim como outras opções. Jogue para obter a jogabilidade mais suave possível, pois configurá-lo muito alto lhe causará problemas se ele se soltar. Aqui é onde você encontrará o modo Ultra - 120Hz - mas esteja ciente de que ele pode baixar a qualidade gráfica para jogar com a taxa de quadros mais rápida.
                        <br/><br/>
                        Ajuste a sensibilidade: Dispositivos diferentes respondem um pouco diferente e em Sensibilidade você pode mudar os ajustes para como você se move, bem como o quão sensíveis são os movimentos através dos escopos usando o giroscópio do telefone. Estes também podem ser alterados para multiplayer e battle royale separadamente - assim como alterados para magnificações de escopo individual, pois você pode querer mais sensibilidade no zoom inferior e menor sensibilidade no zoom superior para mantê-lo estável.
                        <br/><br/>
                        Teste suas configurações com Practice vs AI: Vá em multiplayer e toque no botão de seleção (logo acima do início) para escolher o tipo de jogo. Aqui você verá "praticar" e "praticar vs AI". Esta é uma ótima maneira de testar armas, configurações e controles para ver como eles se sentem e se isso vai funcionar para você. Você pode mudar as configurações na hora e este é o lugar para fazer isso.
                        <br/><br/>
                        Veja seus amigos brincando: Você pode observar o que seus amigos estão fazendo, entrando em sua lista de amigos e tocando o botão dos olhos - você pode vê-los jogar em tempo real.
                    </p>     
                    <br/><br/>
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
                    <img class="crop-2" source src={noticiacod4} style={{objectposition: "50% 50%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>Notícias de Call of Duty: Modern Warfare II</h3>
                    <h4>Kariman Gomes - 14/11/2022</h4>
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
                    <h4>Kariman Gomes - 22/11/2022</h4>
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
                    <h4>Kariman Gomes - 14/11/2022</h4>
                </div>
            </a>

            <hr/>

            <a class="noticia-small">
                <div class="col-6">
                <Link to="#">
                    <img class="crop-2" source src={noticiacs1} style={{objectposition: "50% 50%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>Notícias de vitória "lendas da Imperial"</h3>
                    <h4>Kariman Gomes - 11/10/2022</h4>
                </div>
            </a>

            <hr/>

            <a class="noticia-small">
                <div class="col-6">
                <Link to="#">
                    <img class="crop-2" source src={noticiasports1} style={{objectposition: "50% 50%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>Notícias de E-Sports</h3>
                    <h4>Kariman Gomes - 20/10/2022</h4>
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
                <Link to="#">
                    <img class="crop-2" source src={noticiatibia1} style={{objectposition: "50% 50%"}}/></Link>
                </div>
                <div class="col-6">
                    <h3>Teaser de conteúdo 2/4 SU 2022</h3>
                    <h4>Kariman Gomes - 05/11/2022</h4>
                </div>
            </a>

            <hr/>

        </div>
    </div>
        </div>
    )
}

export default CallofDuty;