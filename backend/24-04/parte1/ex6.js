// Crie um programa que leia o nome e o salário de um
// funcionário, mostrando no final uma mensagem.

const prompt = require('prompt-sync')();

let nome = prompt("Digite o nome do funcionário: ");
let salario = prompt("Digite o salário do funcionário: ");


console.log(`O salário do funcionário(a) ${nome} é ${salario} reais.`);