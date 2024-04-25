// Crie um programa que leia o salário de um funcionário,
// calcule e mostre o seu novo salário, com 27,50% de aumento.

const prompt = require('prompt-sync')();

let salario = prompt("Digite o salário do funcionário: ");

console.log(`O salário do funcionário(a) com aumento é de ${salario*1.275} reais.`);