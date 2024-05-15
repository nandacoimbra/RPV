// ATIVIDADE 3. Utilizando arrays:  Crie um programa que leia o nome, a idade e o sexo de 5 pessoas, 
// mostrando no final: 
// a) Quantos homens foram cadastrados 
// b) Quantas mulheres foram cadastradas 
// c) A média de idade do grupo 
// d) A média de idade dos homens 
// e) Quantas mulheres tem mais de 20 anos 

const prompt = require('prompt-sync')();


let pessoas = [];

let mulheres = 0;
let homens = 0;
let idadeTotalPessoas = 0;
let idadeTotalHomens = 0;
let mulheresMais20 = 0;


for(i=1;i<=5;i++){
    const nome = prompt(`Informe o nome da pessoa ${i}: `)
    const idade = parseInt(prompt(`Informe a idade da pessoa ${i}: `))
    const sexo = prompt(`Informe o sexo da pessoa ${i} (m para masculino, f para feminino): `)
    pessoas.push({nome,idade,sexo});
}

for(let pessoa of pessoas) {

    idadeTotalPessoas += pessoa.idade;

    if (pessoa.sexo === 'm') {
        homens++;
        idadeTotalHomens += pessoa.idade;
    } else if (pessoa.sexo === 'f') {
        mulheres++;
        if (pessoa.idade > 20) {
            mulheresMais20++;
        }
    }
}

const mediaIdadePessoas = idadeTotalPessoas / 5;
const mediaIdadeHomens = idadeTotalHomens / homens;


console.log("Quantidade de homens cadastrados:", homens);
console.log("Quantidade de mulheres cadastradas:", mulheres);
console.log("Média de idade do grupo:", mediaIdadePessoas.toFixed(2));
console.log("Média de idade dos homens:", mediaIdadeHomens.toFixed(2));
console.log("Quantidade de mulheres com mais de 20 anos:", mulheresMais20);