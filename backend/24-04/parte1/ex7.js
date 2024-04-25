// Crie um programa que leia 5 números e mostre o somatório
// entre eles.

const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Digite o primeiro numero: "));
let num2 = parseFloat(prompt("Digite o segundo numero: "));
let num3 = parseFloat(prompt("Digite o terceiro numero: "));
let num4 = parseFloat(prompt("Digite o quarto numero: "));
let num5 = parseFloat(prompt("Digite o quinto numero: "));

let somatorio = num1+num2+num3+num4+num5;

console.log(`O somatório dos números é ${somatorio}.`);