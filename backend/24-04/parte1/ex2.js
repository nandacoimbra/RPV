// Crie um programa que leia o nome de uma pessoa e mostre
// uma mensagem de boas-vindas para ela.

const prompt = require('prompt-sync')();
let nome;
nome = prompt("Digite seu nome: ");
console.log(`Seja bem vindo(a), ${nome}!`);