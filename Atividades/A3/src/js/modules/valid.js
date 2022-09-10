export const valids = {
    nome(value) {
        //Validação Nome
        if (value == '') {
            return false;
        }
        if (value.length < 4) {
            return false; //Nome tem que ter no minimo 4 Letras
        }
        if (!value.match(/[a-zA-Z]/)) {
            return false; //Nome não pode conter numeros
        } else {
            return true;
        }
    },


    date(value) {
        //Validação Data de Aniversario
        if (value == '') {
            return false;
        }
        if (value.length < 10) {
            return false; //Aniversario tem que ter no minimo 10 Caracteres (contando as barras)
        }
        const data = value.split('/');

        if (data[0] < 1 || data[0] > 31) {
            return false; //Impede que uma data com menos de 0 e maior que 31 seja posta
        }

        if (data[1] < 1 || data[1] > 12) {
            return false; //Impede que um mes com menos de 1 e maior que 12 seja posta
        }
        if (data[2] < 1900 || data[2] > 2100) {
            return false; //Só anos entre 1900 a 2100 são validos
        } else {
            return true;
        }
    },

    cpf(value) {
        //Validação CPF
        if (value == '') {
            return false;
        }
        if (value.length < 14) {
            return false;  // CPF tem que ter no minimo 14 caracteres contando os 2 pontos e o traço
        } else {
            return true;
        }
    },

    email(value) {
        //Validação Email
        if (value == '') {
            return false;
        }
        else if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".")) - (email.value.indexOf("@")) == 1) {
            return false; //Email tem que estar no formato algumacoisa@algumacoisa.algumacoisa
        } else {
            return true;
        }
    },

    fone(value) {
        //Validação Telefone
        if (value == '') {
            return false;
        }
        if (value.length < 14) {
            return false; // Telefone tem que ter no minimo 14 caracteres para telefone residencial formato XXXX-XXXX ou celular XXXXX-XXXX
        } else {
            return true;
        }
    },

    cep(value) {
        //Validação CEP
        if (value == '') {
            return false;
        }
        if (value.length < 9) {
            return false; // CEP tem ue ter no minimo 9 caracters contanto o traço no formato XXXXX-XXX
        } else {
            return true;
        }
    }
}
