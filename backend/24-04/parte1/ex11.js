// Crie um programa que leia o tempo de duração de uma
// atividade em segundos e mostre-o expresso em horas,
// minutos e segundos.

const prompt = require('prompt-sync')();

let segundosTotais = parseInt(prompt("Informe o tempo de duração da atividade em segundos: "));

let horas = Math.floor(segundosTotais/3600);
let segundosRestantes = (segundosTotais % 3600);
let minutos = Math.floor(segundosRestantes/60);

let segundos = segundosRestantes % 60;


console.log(`O tempo total é de ${horas} horas, ${minutos} minutos e ${segundos} segundos`);