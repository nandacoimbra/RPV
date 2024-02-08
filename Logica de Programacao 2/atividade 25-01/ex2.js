
console.log("AULA 25/01/24")
console.log("EXERCICIO 2")

/* Faça um programa que calcule o “peso ideal” de um usuário de acordo com um caractere
identificador de sexo (“M” para Masculino ou “F” para Feminino) inserido pelo mesmo. A
fórmula para cada um dos dois casos está definida abaixo. Obs: O sistema deve permitir a
entrada do peso do usuário. Ao final informe a opção escolhida e informe o peso ideal (segundo
a fórmula) para usuário.*/

let prompt = require('prompt-sync')();
console.log("CÁLCULO DO PESO IDEAL")


let sexo = prompt("Informe seu sexo (F - feminino ou M - masculino): ");
let peso = parseFloat(prompt("Informe seu peso: "));


switch (sexo) {
    case "F":
        console.log("Peso ideal: ", (peso-100)*0.85);
        break;
    case "M":
        console.log("Peso ideal: ", (peso-100)*0.9);
        break;
    default:
        console.log("Sexo incorreto")
}