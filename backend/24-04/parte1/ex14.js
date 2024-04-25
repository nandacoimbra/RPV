// Crie um programa que leia o valor da matrícula de um curso,
// calcule e mostre o seu novo valor, com 20% de desconto.

const prompt = require('prompt-sync')();

let matricula = prompt("Informe o valor da matrícula do curso: ");

console.log(`O valor da matrícula com desconto de 20% é de ${matricula*0.8} reais.`);