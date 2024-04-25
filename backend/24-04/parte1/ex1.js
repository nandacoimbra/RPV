//Crie um programa que exiba no console uma mensagem digitada pelo usuário.

const prompt = require('prompt-sync')();
let mensagem;
mensagem = prompt("Digite sua mensagem: ");
console.log(`Sua mensagem: ${mensagem}`);