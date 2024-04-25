// Crie um programa que leia o tempo de duração de uma
// atividade em horas, minutos e segundos e mostre-o expresso
// em segundos.

const prompt = require('prompt-sync')();

console.log(`Informe o número de horas, minutos e segundos: `)
let horas = parseInt(prompt("Horas: "));
let minutos = parseInt(prompt("Minutos: "));
let segundos = parseInt(prompt("Segundos: "));

let totalSegundos = ((horas*3600)+(minutos*60)+segundos);

console.log(`O tempo total é de: ${totalSegundos} segundos.`);