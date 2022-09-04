const button = document.getElementById('button')
const nome = document.getElementById('nome')
const cpf = document.getElementById('cpf')
const dt_nasc = document.getElementById('dt_nasc')
const email = document.getElementById('email')
const fone = document.getElementById('fone')
const cep = document.getElementById('cep')

button.addEventListener('click', (e) => {
    e.preventDefault()

    checkInputs()
})


export class variavelSaida {
    constructor(nomeValue, cpfValue, dt_nascValue, emailValue, foneValue, cepValue) {
        if (nomeValue != '' && cpfValue != '' && dt_nascValue != '' && emailValue != '' && foneValue != '' && cepValue != '') {
            alert('Dados do Cadastro: ' + '\n' + 'Nome: ' + nomeValue + '\n' + 'CPF: ' + cpfValue + '\n' + 'Data de Nascimento: '
                + dt_nascValue + '\n' + 'Email: ' + emailValue + '\n' + 'Telefone: ' + foneValue + '\n' + 'CEP: ' + cepValue + '\n\n' +
                'Obrigado pelo Cadastro!')
        } else {
            alert('Dados do Cadastro: ' + '\n' + 'Nome: ' + nomeValue + '\n' + 'CPF: ' + cpfValue + '\n' + 'Data de Nascimento: '
                + dt_nascValue + '\n' + 'Email: ' + emailValue + '\n' + 'Telefone: ' + foneValue + '\n' + 'CEP: ' + cepValue + '\n\n' +
                'Preencha todos os Campos!')
        }
    }
}


export default function checkInputs() {
    const nomeValue = nome.value.trim()
    const nomeTamanho = nome.value.length
    const cpfValue = cpf.value.trim()
    const dt_nascValue = dt_nasc.value.trim()
    const emailValue = email.value.trim()
    const foneValue = fone.value.trim()
    const cepValue = cep.value.trim()

    //Validação Nome
    if (nomeValue === '') {
        nome.classList.add("errorInput")
    } else if (nomeTamanho < 3) { //Nomes tem que ter no minimo 3 letras
        nome.classList.add("errorInput")
    } else if (!nomeValue.match(/[a-zA-Z]/)) { //Nomes não podem conter Numeros
        nome.classList.add("errorInput")
    } else {
        nome.classList.remove("errorInput")
    }

    //Validação CPF
    if (cpfValue === '') {
        cpf.classList.add("errorInput")
    } else if (cpfValue < 3) {
        cpf.classList.add("errorInput")
    } else {
        cpf.classList.remove("errorInput")
    }

    //Validação Data de Nascimento
    if (dt_nascValue === '') {
        dt_nasc.classList.add("errorInput")
    } else {
        dt_nasc.classList.remove("errorInput")
    }

    //Validação Email
    if (emailValue === '') {
        email.classList.add("errorInput")
    }
    else if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".")) - (email.value.indexOf("@")) == 1) {
        email.classList.add("errorInput") //Email tem que estar no formato algumacoisa@algumacoisa.algumacoisa
    } else {
        email.classList.remove("errorInput")
    }

    //Validação Telefone
    if (foneValue === '') {
        fone.classList.add("errorInput")
    } else {
        fone.classList.remove("errorInput")
    }

    //Validação CEP
    if (cepValue === '') {
        cep.classList.add("errorInput")
    } else {
        cep.classList.remove("errorInput")
    }

    new variavelSaida(nomeValue, cpfValue, dt_nascValue, emailValue, foneValue, cepValue)

}
