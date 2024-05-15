// 3. Utilizando tratamento de erros: Crie um programa que leia os dados de uma pessoa: 
// nome, sobrenome, CPF (11 caracteres), sexo (M, F, O), data de nascimento (Formato Data), endereço e telefone.
// Valide os dados recebidos e exiba no console. 
// Utilize try-catch para lidar com o caso em que os dados não sejam informados no padrão correto 
// e imprima uma mensagem de erro (gere uma exceção)  apropriada.

const prompt = require('prompt-sync')();


const nome = prompt(`Informe o nome da pessoa: `);
const sobrenome = prompt(`Informe o nome da pessoa: `);
const cpf = parseInt(prompt(`Informe o cpf da pessoa: `));
const arrayCpf = Array.from(cpf.toString()).map(Number);
const sexo = prompt(`Informe o sexo da pessoa (M para masculino, F para feminino, O para outro): `);
console.log("Data de nascimento da pessoa:")
const dia = prompt(`Informe o dia: `);
const mes = prompt(`Informe o mes: `);
const ano = prompt(`Informe o ano: `);
const endereco = parseInt(prompt(`Informe o endereco da pessoa: `));
const tel = parseInt(prompt(`Informe o telefone da pessoa: `));


function validaDataNascimento(dia,mes,ano) {
    
    if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
        return false; 
    }

    if (ano < 1900 || ano > 2024 || mes < 1 || mes > 12 || dia < 1 || dia > 31) {
        return false; 
    }
   
    if (mes === 2 && dia > 29) {
        return false; 
    }

    return true;

}

function validaSexo(sexo) {
    if(sexo === 'F' || sexo ==='f'|| sexo === 'M' || sexo === 'm' || sexo === 'O' || sexo === 'o') {
        return true;
    }else{
        return false;
    }
}

function validaCpf(cpf) {
    if(cpf.length!==11) {
        return false;
    }else{
        return true;
    }
}

function validaTel(tel) {
    if(isNaN(tel)) {
        return false;
    }else{
        return true;
    }
}

console.log(validaCpf(arrayCpf));
