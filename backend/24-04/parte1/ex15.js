// Crie um programa que leia o valor de um boleto que será
// pago com atraso, a quantidade de dias em atraso, calcule e
// mostre o seu novo valor com uma taxa de 1,25% ao dia.

const prompt = require('prompt-sync')();

let boleto = prompt("Informe o valor do boleto: ");
let diasAtraso = prompt("Informe a quantidade de dias de atraso: ");

console.log(`O valor a ser pago com o atraso é de: ${boleto*(1+(0.0125*diasAtraso))} reais.`);