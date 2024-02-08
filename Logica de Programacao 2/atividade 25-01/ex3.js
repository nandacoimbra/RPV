
console.log("AULA 25/01/24")
console.log("EXERCICIO 3")

/* Desenvolva um programa que simule as 4 operações matemáticas básicas.
Desenvolva uma calculadora utilizando a estrutura Switch, permita a entrada pelo usuário de 2
operandos que participarão efetivamente da operação e escolha uma das 4 operações
disponíveis.*/

let prompt = require('prompt-sync')();
console.log("OPERAÇÕES MATEMÁTICAS BÁSICAS")


let x = parseFloat(prompt("Informe o primeiro valor: "));
let y = parseFloat(prompt("Informe o segundo valor: "));
console.log("1 - SOMA",
    "2 - SUBTRACAO",
    "3 - MULTIPLICAÇÃO",
    "4 - DIVISÃ0");
let cod = parseInt(prompt("Informe o código da operação: "));


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
        console.log("Código da operação incorreto")
}