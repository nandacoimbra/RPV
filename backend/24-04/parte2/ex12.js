// Tendo como dados de entrada a altura e o sexo de uma pessoa, crie um
// programa que calcule seu peso ideal, utilizando as seguintes fórmulas:
// para homens: (72.7 * h) - 58; para mulheres: (62.1 * h) - 44.7.

const prompt = require('prompt-sync')();

let altura = parseFloat(prompt("Informe a altura: "));

console.log("---------- Informe o sexo ----------\n",
"1 - Feminino \n",
"2 - Masculino");

let sexo = parseInt(prompt("Informe o sexo: "));

switch(sexo){
    case 1:
        console.log(`Seu peso ideal é: ${(62.1*altura)-44.7} kg.`);
        break;
    case 2:
        console.log(`Seu peso ideal é: ${(72.7*altura)-58} kg.`);
        break;
    default:
        console.log("Sexo inválido!")
}