// Crie um programa que leia os dados de um aluno: nome,
// matrícula, disciplina, nota. Se a nota do aluno for maior ou
// igual a 60 exiba no console “Aprovado”, se a nota do aluno
// for menor que 60 porém maior ou igual a 50 exiba no
// console “Em recuperação” e se a nota do aluno for menor
// que 50 exiba no console “Reprovado”.

const prompt = require('prompt-sync')();

let nome = prompt("Digite seu nome: ");
let matricula = prompt("Digite sua matrícula: ");
let disciplina = prompt("Digite o nome da disciplina: ");
let  nota = parseFloat(prompt("Digite a nota final do aluno: "));

if(nota>=60){
    console.log(`Aluno ${nome} está APROVADO em ${disciplina}!`);
}else if(nota>=50){
    console.log(`Aluno ${nome} está EM RECUPERAÇÃO em ${disciplina}!`);
}else{
    console.log(`Aluno ${nome} está REPROVADO em ${disciplina}!`);
}



