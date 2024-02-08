
console.log("AULA 25/01/24")
console.log("EXERCICIO 5")

/*Escreva um programa utilizando o comando switch que imprima um mês de acordo com o
número digitado pelo usuário.*/

let prompt = require('prompt-sync')();
console.log("CONSULTA DE MÊS")

let num = parseInt(prompt("Digite um número (1-12) para escolher um mês: "));

switch (num) {
    case 1:
        console.log('Janeiro');
        break;
    case 2:
        console.log('Fevereiro');
        break;
    case 3:
        console.log('Março');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Maio');
        break;
    case 6:
        console.log('Junho');
        break;
    case 7:
        console.log('Julho');
        break;
    case 8:
        console.log('Agosto');
        break;
    case 9:
        console.log('Setembro');
        break;
    case 10:
        console.log('Outubro');
        break;
    case 11:
        console.log('Novembro');
        break;
    case 12:
        console.log('Dezembro');
        break;
    default:
        console.log('Número inválido. Por favor, digite um número de 1 a 12.');
}
