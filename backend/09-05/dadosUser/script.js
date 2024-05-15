const nome = document.querySelector('#nome');
const sobrenome = document.querySelector('#sobrenome');
const cpf = document.querySelector('#cpf');
const sexo = document.querySelector('#sexo');
const nascimento = document.querySelector('#nascimento');
const endereco = document.querySelector('#endereco');
const telefone = document.querySelector('#telefone');
const btnExibeDados = document.querySelector('.dados');



function validaDataNascimento(data) {

    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if (!regex.test(data)) {
        return false;
    }

    const separaData = data.split('-');
    const ano = parseInt(separaData[0]);
    const mes = parseInt(separaData[1]);
    const dia = parseInt(separaData[2]);

    if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
        return false;
    }

    if (ano < 1900 || ano > 2024 || mes < 1 || mes > 12 || dia < 1 || dia > 31) {
        return false;
    }

    if (mes === 2 && dia > 29) {
        return false;
    }

    return data;
}


function validaCpf(cpf) {

    cpf = cpf.replace(/[^\d]/g, '');
    if (cpf.length !== 11) {
        return false;
    } else {
        return true;
    }
}


function validaTel(tel) {

    const regex = /^\(\d{3}\)\s\d{1}\s\d{4}-\d{4}$/;

    if (regex.test(tel)) {
        return true;
    } else {
        return false;
    }
}


btnExibeDados.addEventListener("click", () => {

    let resultado = document.querySelector(".resultado");
    let titulo = document.createElement('h3');
    titulo.textContent = "Informações do usuário"

    let nomeElement = document.createElement('span');
    nomeElement.textContent = "Nome: " + nome.value;

    let sobrenomeElement = document.createElement('span');
    sobrenomeElement.textContent = "Sobrenome: " + sobrenome.value;

    let cpfElement = document.createElement('span');

    if (validaCpf(cpf.value) == true) {

        cpfElement.textContent = "CPF: " + cpf.value;
    } else {
        cpfElement.textContent = "CPF inválido: ";
    }

    let sexoElement = document.createElement('span');
    sexoElement.textContent = "Sexo: " + sexo.value;

    let nascimentoElement = document.createElement('span');
    nascimentoElement.textContent = "Nascimento: " + nascimento.value;

    let enderecoElement = document.createElement('span');
    enderecoElement.textContent = "Endereço: " + endereco.value;

    let telefoneElement = document.createElement('span');

    if(validaTel(telefone.value)==true){
        
        telefoneElement.textContent = "Telefone: " + telefone.value;
    }else{
        telefoneElement.textContent = "Telefone inválido";
    }


    resultado.appendChild(titulo);
    resultado.appendChild(nomeElement);
    resultado.appendChild(sobrenomeElement);
    resultado.appendChild(cpfElement);
    resultado.appendChild(sexoElement);
    resultado.appendChild(nascimentoElement);
    resultado.appendChild(enderecoElement);
    resultado.appendChild(telefoneElement);

})