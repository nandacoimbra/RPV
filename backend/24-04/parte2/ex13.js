// Tendo como dados de entrada dois valores numéricos digitados pelo
// usuário, crie um programa para uma calculadora com as seguintes
// operações: soma, subtração, multiplicação e divisão. Após a escolha da
// operação exiba no console o resultado.

const prompt = require('prompt-sync')();

let x = parseFloat(prompt("Informe o primeiro número: "));
let y = parseFloat(prompt("Informe o segundo número: "));

console.log("---------- Informe a operação ----------\n",
    "1 - Soma \n",
    "2 - Subtração \n",
    "3 - Multiplicação \n",
    "4 - Divisão \n");

let cod = parseInt(prompt("Operação: "));


switch (cod) {
    case 1:
        console.log("Resultado da soma: ", x + y)
        break;
    case 2:
        console.log("Resultado da subtração: ", x - y)
        break;
    case 3:
        console.log("Resultado da multiplicação: ", x * y)
        break;
    case 4:
        console.log("Resultado da divisão: ", x / y)
        break;

    default:
        console.log("Código de seleção inválido!")
}