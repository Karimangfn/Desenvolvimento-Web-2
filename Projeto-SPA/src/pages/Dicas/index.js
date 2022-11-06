import React from 'react';
import dicaslogo from '../../assets/Imagens - Pagina Dicas/Logo Dicas.png'
import dicasStyle from '../../Styles/dicasStyle.css'
import { Link } from 'react-router-dom'

const Dicas = () => {
    return (
        <div className>
            <div class="linha">
            <div class="bordainicio">
            </div>
                <div class="bordafim">
            </div>
            <div class="main">
                <img source src={dicaslogo} style={{Position: "relative", textalign: "center", width: "100%"}}/>
            </div>
            <div class="mainDicas">
            <h1 style={{color: "green"}}>Xbox Series X/S</h1><br/>
            <p class = "p">Assim que comprar, siga estas dicas matadoras!</p>

            <h2>1. Teste um jogo do Game Pass sem instalar</h2>

            <p>O Game Pass é um serviço de jogos do Xbox e Windows que disponibiliza uma biblioteca de mais de 100 jogos por uma taxa mensal de R$ 44,99 na assinatura “Ultimate” que inclui Xbox Live Gold (para jogos multiplayer) e acesso a títulos EA Play também.<br/><br/>
               Todos os jogos exclusivos da Microsoft estarão disponíveis no Game Pass no mesmo dia em que forem lançados, inclusive grandes franquias como Halo, Forza e Gears. Além de muitos outros jogos multiplataforma de peso que entram e saem em determinados períodos. Um deles que já fez parte do catálogo é o Red Dead Redemption 2.
               Na seção “Perks”, no aplicativo Gamepass também está incluído meses gratuitos de serviços de streaming como Disney+ e Spotify.<br/><br/>
                Em abril desse ano, a Xbox Cloud Gaming chegou ao Brasil na versão Beta. Agora, é possível testar jogos do GamePass sem instalar! Siga o passo-a-passo:<br/>
               <ol>
                  <li>Acesse a aba do Xbox Game Pass que fica na tela inicial;</li>
                  <li>Clique em "Mostrar todos" e naveguem pela biblioteca até encontrar um jogo que goste;</li>
                  <li>Se o jogo estiver disponível no Xbox Cloud Gaming, aparecerá uma opção escrita "Play" com um símbolo de nuvem próximo;</li>
                  <li>Selecione essa opção e aguarde.</li>
               </ol>
            
                </p>

            <h2>2. Baixe o Halo: Infinite Multiplayer gratuitamente</h2>

            <p>Mesmo se não tiver o Game Pass e a Live Gold, o multiplayer de Halo: Infinite é grátis para jogar. Só precisa acessar o aplicativo da Microsoft Store e pesquisar (ou abrir a seção “Free to Play”). Para aproveitar o jogo completo é necessário comprá-lo, mas o modo multiplayer é gratuito, com opções de compras de itens cosméticos, que são opcionais.<br/>
            A 343 Industries promete que o jogo receberá atualizações constantes, com novos eventos, mapas e itens.
            </p>

            <h2>3. Aproveite a retrocompatibilidade sem custos</h2>

            <p>Se você já é um antigo jogador de Xbox, provavelmente possui uma coleção de jogos mais antigos, do primeiro Xbox, 360 e até o One. A maioria deles funcionará sem problemas no Xbox Series, pela retrocompatibilidade que a Microsoft trabalhou, tudo isso sem custo adicional algum.<br/><br/>
            
            Para isso, basta pesquisar na sua biblioteca de jogos ou na própria loja e instalá-los. Um lembrete: O Series S não possui unidade de disco, então a retrocompatibilidade é apenas digital, mas se não for o caso, é possível jogar vários jogos retrocompatíveis de mídia física. </p>

            <h2>4. Confira a demo do Unreal Engine 5 com tema Matrix</h2>
            <p>A nova geração de consoles irá contar com o recente motor gráfico Unreal Engine 5, que pode ser testado baixando a demo com o tema de Matrix, o único "jogo" com essa tecnologia. <br/><br/>
                Nessa demo, é possível ver renderizações em tempo real e dirigir diversos carros na cidade que é a própria Matrix. Então aproveite e baixe na loja. É totalmente grátis.
            </p>

            <h2>5. Instale o RetroArch e emule os clássicos</h2>
            <p>O Series X e S são totalmente compatíveis com uma versão UWP (Plataforma Universal do Windows) do RetroArch, um emulador completo. 
            <br/><br/>
            Você terá que habilitar o modo de desenvolvedor (por uma pequena taxa), instalar o RetroArch e inserir suas próprias ROMs de jogos. Vale muito a pena!    
            </p>

            <h1 class="playstation">Playstation 5</h1>
            <h2>1. Gatilhos que podem ser regulados</h2>

            <p>A última versão do DualSense possui uma série de novos recursos muito úteis. Um dos principais é o controle mais preciso dos gatilhos, podendo mudar a intensidade da vibração ou desligá-la. Para isso, só precisa ir em "Acessórios", selecionar a opção "Controles" e salvar as suas preferências.</p>
    
            <h2>2. Transmitindo jogos</h2>
    
            <p>Um recurso muito interessante e útil que foi acrescentado no PS5 é a transmissão de jogos para um canal da internet de forma muito mais fácil e descomplicada. Agora, o novo Playstation conta com transmissão nativa para Twitch e Youtube. Se quiser transmitir suas gameplays, basta apertar o botão "Criar" e selecionar o ícone de transmissão, no menu de criação.</p>

            <h2>3. Joguinho extra para testar as funcionalidades do controle</h2>
    
            <p>Todos os consoles PS5 vêm com um jogo pré-instalado, o Astro's Playroom. É um jogo 3D que ajuda a testar todas as funcionalidades do controle DualSense. Depois de se divertir, é hora de aplicá-las em outros jogos!
            </p>

            <h2>4. Controle do PS5 por meio do celular</h2>
    
            <p>O novo PS tem uma interatividade muito útil com o celular. Por meio do aplicativo oficial do Playstation, é possível gerenciar diversos elementos do console, como downloads de jogos e apps, administrar o armazenamento, "hibernar" o aparelho e muito mais.</p>

            <h2>5. Usando a Playstation Store Wishlist para receber as novidades de seus jogos favoritos</h2>
    
            <p>Essa função é muito relevante para aqueles que amam ficar pesquisando diversos jogos na PS Store. Agora, a Sony disponibilizou uma lista de desejos de jogos, permitindo fazer anotações de quais jogos adquirir. Assim, dá para comparar e monitorar preços. <br/><br/>
             Quando surgir alguma novidade, como uma promoção importante por exemplo, o jogador é notificado, sem risco de perder as últimas novidades a respeito daqueles jogos.</p> 
               </div>
               <div class="mainVideos">
                <h1>Outras Dicas</h1>
                <div class="separacao">
                    <h2>1. Funções secretas no controle do Series X/S</h2><br/>
                    <iframe width="100%" height="320" src="https://www.youtube.com/embed/UQ3qEne5QmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="separacao">
                    <h2>2. Truques do PS5</h2><br/>
                    <iframe width="100%" height="320" src="https://www.youtube.com/embed/SlEDfdLhYWI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>   
                <div class="separacao">
                    <h2>3. Comparação entre os dois consoles</h2><br/>
                    <iframe width="100%" height="320" src="https://www.youtube.com/embed/Qp6PIW2HCbY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>       
            </div>
        </div>
        </div>
    )
}

export default Dicas;