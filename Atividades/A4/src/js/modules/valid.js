export const valid = {
    cep(value) {
        //Validação CEP
        if (value === '') {
            return false;
        }
        if (value.length < 9) {
            return false; // CEP tem que ter no minimo 9 caracters contanto o traço no formato XXXXX-XXX
        } else {
            return true;
        }
    }
}