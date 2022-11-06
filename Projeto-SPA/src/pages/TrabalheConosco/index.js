import React from 'react';
import logoTrabalheConosco from '../../assets/Imagens - Pagina Trabalhe Conosco/Logo TrabalheConosco.png'
import trabalheConoscoStyle from '../../Styles/trabalheConoscoStyle.css'
import { Link } from 'react-router-dom'

const TrabalheConosco = () => {
    return (
        <div className>
    <div class="bordainicio1">
    </div>
    <div class="bordafim1">
    </div>
    <div class="main">
       <img source src={logoTrabalheConosco} style={{Position: "relative", textalign: "center", width: "100%"}}/>
    </div>

    <div class="mainSetores">
        <h1>Conheça mais Sobre os Setores Disponiveis</h1>
        <div class="separacao">
            <h1>Recursos Humanos</h1>
            <iframe width="100%" height="280" src="https://www.youtube.com/embed/3mXoOojqvDw" title="O PROFISSIONAL DE RECURSOS HUMANOS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
        <div class="separacao">
            <h1>Analista de Sistemas</h1>
            <iframe width="100%" height="280" src="https://www.youtube.com/embed/5K7OGSsWlzU" title="O que um Analista de Sistemas faz?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>   
        <div class="separacao">
            <h1>Programador Web</h1>
            <iframe width="100%" height="280" src="https://www.youtube.com/embed/8ArPvUY1v58" title="Desenvolvimento web - Será que vale a pena ser um programador web?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>       
    </div>

    <div class="mainFormulario">
        <h1>Formulário</h1><br/>
        <form name="Formulario">
        <h3><label for="primeironome">Primeiro nome:</label><br/>
            <input type="text" id="primeironome"  required name="primeironome"/><br/><br/></h3>

            <h3><label for="ultimonome">Último nome:</label><br/>
            <input type=" text" id="ultimonome"  required name="ultimonome"/><br/><br/></h3>
            
            <h3><label for="nasc">Nascimento:</label><br/>
            <input type="date" id="nasc" name="nasc" max="1979-01-01" min="2000-01-01"/><br/><br/></h3>

            
            <h3><label for="email">Email:</label><br/>
            <input type="email" id="email"  required name="email"/><br/><br/></h3>

            <h3><label for="estado">Estado:</label><br/>
            <input type="text" id="estado" name="estado"/><br/><br/></h3>

            <h3><label for="lsetor">Setor Preferencial:</label><br/></h3>
            <input type="checkbox" id="Recursos Humanos" name="Recursos Humanos" value="Recursos Humanos"/>
            <label for="Recursos Humanos">Recursos Humanos</label><br/>
            <input type="checkbox" id="Analista de Sistemas" name="Analista de Sistemas" value="Analista de Sistemas"/>
            <label for="Analista de Sistemas">Analista de Sistemas</label><br/>
            <input type="checkbox" id="Programador Web" name="Programador Web" value="Programador Web"/>
            <label for="Programador Web">Programador Web</label><br/><br/>

            <h3><label for="periodo">Disponibilidade de Horario:</label><br/></h3>
            <input type="radio" id="manha"  required name="disponibilidade" value="manha"/>
            <label for="manha"> Manha</label><br/>
            <input type="radio" id="tarde" name="disponibilidade" value="tarde"/>
            <label for="tarde"> Tarde</label><br/>
            <input type="radio" id="noite" name="disponibilidade" value="noite"/>
            <label for="noite"> Noite</label><br/>
            <input type="radio" id="total" name="disponibilidade" value="total"/>
            <label for="total">Disponibilidade Total</label><br/><br/>

            <h3><label for="qtd">Anos de Experiência (entre 0 e 20):</label></h3>
            <input type="number" id="qtd"  required name="qtd" min="0" max="20"/><br/><br/>

            <h3><label>Conte um pouco da sua Experiência:</label></h3>
            <textarea row="6" style={{width: "100%", height: "150px"}}  id="experiencia" required name="experiencia"></textarea><br/><br/>
           
            <h5>Nós da GamerZone estamos comprometidos em resguardar sua privacidade. Ao preencher o formulário acima, Você, Titular de Dados, 
                consente e autoriza que a GamerZone realize o tratamento dos seus dados pessoais informados para a finalidade específica de recrutamento 
                para participação em processos de admissão para compor o nosso quadro de funcionários.</h5>
            <input type="checkbox" id="termos"  required name="termos" value="termos"/>
            <label for="temos">Li e Aceito os Termos Acima</label><br/><br/>

            <input type="submit" value="Enviar"/><br/>
            </form>
    </div>
    </div> 
    )
}

export default TrabalheConosco;