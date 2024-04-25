// Crie um programa que leia o preço de um produto, calcule e
// mostre o seu preço promocional, com 15% de desconto.

const prompt = require('prompt-sync')();


let preco = parseFloat(prompt("Informe o valor do produto: "));

let precoDesconto = preco*0.85;

console.log(`O preco com desconto é de: ${precoDesconto} reais.`);