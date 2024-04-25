// Crie um programa que leia os dados de um aluno: matrícula,
// nome, sobrenome, CPF, sexo, data de nascimento, endereço
// e telefone e exiba no console.

const prompt = require('prompt-sync')();

let matricula = prompt("Digite sua matrícula: ");
let nome = prompt("Digite seu nome: ");
let sobrenome = prompt("Digite seu sobrenome: ");
let cpf = prompt("Digite seu cpf: ");
let sexo = prompt("Digite seu sexo: ");
let nascimento = prompt("Digite sua data de nascimento: ");
let endereco = prompt("Digite seu endereço: ");
let telefone = prompt("Digite seu telefone: ");

console.log(`Olá, ${nome} ${sobrenome}!`);
console.log(`Matrícula: ${matricula}`);
console.log(`CPF: ${cpf}`);
console.log(`Sexo: ${sexo}`);
console.log(`Data de nascimento: ${nascimento}`);
console.log(`Endereco: ${endereco}`);
console.log(`Telefone: ${telefone}`);

