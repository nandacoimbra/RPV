// Crie um programa para receber um número qualquer e
// exibir no console se é par ou ímpar.

const prompt = require('prompt-sync')();

let num = prompt("Digite um número: ");

if (num % 2 == 0) {
    console.log(`O número ${num} é par`);
} else {
    console.log(`O número ${num} é impar`);
}