import { mask } from './modules/mask.js'
import { valid } from './modules/valid.js'
import { $campoCEP, $campoUf } from './modules/camposViaCep.js'
import { $campoUID, $campoUF, $campoEstado, $campoCasos } from './modules/camposAPICovid.js'
import { $campoMortes, $campoSuspeitos, $campoRecusas, $campoHorario } from './modules/camposAPICovid.js'

// Mascara
function checkmask() {
    return new Promise((resolve, reject) => {
        const mascara = document.querySelectorAll('input')
        if (mascara !== "") {
            resolve (
                mascara.forEach(($input) => {
                    const field = $input.dataset.js

                    $input.addEventListener('input', (e) => {
                        e.target.value = mask[field](e.target.value)
                    }, false)
                })
            );
        } else {
            reject (
                console.log('Erro, Mascara Invalida')
            )
        }
    })

}

// Validação
function checkvalid() {
    return new Promise((resolve, reject) => {
        const validacao = document.querySelectorAll('input')
        if (validacao !== "") {
            resolve (
                validacao.forEach(($input) => {
                    const field = $input.dataset.js
            
                    $input.addEventListener('input', (e) => {
                        let isValid = valid[field](e.target.value)
                        if (isValid) {
                            e.target.classList.remove('errorInput')
                        } else {
                            e.target.classList.add('errorInput')
                        }
                    }, false)
                })
            )
        } else {
            reject (
                console.log('Erro, Validação Invalida')
            )
        }
    })
}

// Executando função da Mascara e da Validação
async function executar() {
    const checkmaskResponse = await checkmask();
    const checkInputsResponde = await checkvalid();
}

executar();

// API do CEP
let CepPromise = new Promise((resolve, reject) => {
    if ($campoCEP !== "") {
        resolve($campoCEP)
    } else {
        reject("CEP Vazio")
    }
})

CepPromise.then((message) => {
    $campoCEP.addEventListener("blur", () => {
        const cep = message.value

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(function (resposta) {
                return resposta.json()
            })
            .then(function (dadosCEP) {
                $campoUf.value = dadosCEP.uf
            })
    })
}).catch((err) => {
    console.log(err);
})


//API do COVID-19
let APICovidPromise = new Promise((resolve, reject) => {
    if ($campoUf !== "") {
        resolve($campoUf)
    } else {
        reject("UF Vazio")
    }
})

APICovidPromise.then((message) => {
    $campoUf.addEventListener("blur", () => {
        const uf = message.value

        fetch(`https://covid19-brazil-api.vercel.app/api/report/v1/brazil/uf/${uf}`)
            .then(function (resposta) {
                return resposta.json()
            })
            .then(function (dadosUF) {
                $campoUID.value = dadosUF.uid
                $campoUF.value = dadosUF.uf
                $campoEstado.value = dadosUF.state
                $campoCasos.value = dadosUF.cases
                $campoMortes.value = dadosUF.deaths
                $campoSuspeitos.value = dadosUF.suspects
                $campoRecusas.value = dadosUF.refuses
                $campoHorario.value = dadosUF.datetime
            })
    })
}).catch((err) => {
    console.log(err);
})