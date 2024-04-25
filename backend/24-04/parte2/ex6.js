// Crie um programa que leia os valores A, B, C e exiba no
// console os números ordenados em ordem crescente e
// depois em ordem decrescente.

const prompt = require('prompt-sync')();


function ordemCrescente([a, b, c]) {
    return [a, b, c].sort((x, y) => x - y);
}

function ordemDecrescente([a, b, c]) {
    return [a, b, c].sort((x, y) => y - x);
}

let a = prompt("Digite o primeiro número: ");
let b = prompt("Digite o segundo número: ");
let c = prompt("Digite o terceiro número: ");

let numeros = [a, b, c];

console.log(`Ordem crescente: ${ordemCrescente(numeros)}`);
console.log(`Ordem decrescente: ${ordemDecrescente(numeros)}`);



