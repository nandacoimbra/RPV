// Crie um programa que leia uma disciplina, um aluno e as
// quatro notas desse aluno naquela disciplina. Ao final, mostre
// na tela a média do aluno na disciplina.

const prompt = require('prompt-sync')();

let aluno = prompt("Digite o nome do aluno: ");
let nota1 = parseFloat(prompt("Digite a nota da prova 1: "));
let nota2 = parseFloat(prompt("Digite a nota da prova 2: "));
let nota3 = parseFloat(prompt("Digite a nota da prova 3: "));
let nota4 = parseFloat(prompt("Digite a nota da prova 4: "));

let media = (nota1+nota2+nota3+nota4)/4;

console.log(`A média do aluno(a) ${aluno} é ${media}.`);