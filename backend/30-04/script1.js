
// ATIVIDADE 1. Utilizando arrays: A imobiliária ABC vende apenas terrenos retangulares. 
// Crie um programa para ler as dimensões de um terreno e depois exibir a área do terreno. 

const prompt = require('prompt-sync')();

let dimensoesTerreno = [];

dimensoesTerreno.push(prompt("Informe o comprimento do terreno: "));
dimensoesTerreno.push(prompt("Informe a largura do terreno: "));

console.log(`A area do terreno é ${dimensoesTerreno[0]*dimensoesTerreno[1]} m2`);


