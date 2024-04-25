// Crie um programa que leia a idade de uma pessoa expressa
// em anos, meses e dias e mostre-a expressa apenas em dias.

const prompt = require('prompt-sync')();

console.log(`Informe o número da sua idade em anos, meses e dias. Exemplo: 27 anos, 2 meses, 5 dias `)
let anos = parseInt(prompt("Anos: "));
let meses = parseInt(prompt("Meses: "));
let dias = parseInt(prompt("Dias: "));

let totalDias = ((anos*365)+(meses*30)+dias);

console.log(`O resultado aproximado da idade, considerando que um ano possui 365 dias e um mês 30 dias é: ${totalDias} dias.`);