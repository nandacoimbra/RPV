// Crie um programa que leia a idade de uma pessoa expressa
// em dias e mostre-a expressa em anos, meses e dias.

const prompt = require('prompt-sync')();

let diasTotais = parseInt(prompt("Informe o número da sua idade em dias: "));

let anos = Math.floor(diasTotais/365);
let diasRestantes = diasTotais % 365;
let meses = Math.floor(diasRestantes/30);

let dias = diasRestantes % 30;


console.log(`Você possui ${anos} anos, ${meses} meses e ${dias} dias`);

