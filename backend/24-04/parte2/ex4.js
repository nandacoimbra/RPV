// Crie um programa que leia um valor inicial A e exiba a
// sequência de valores do cálculo de A! e o seu resultado.
// Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120

const prompt = require('prompt-sync')();

let num = prompt("Digite um número: ");

let fatorial = num;

for(let i=num-1;i>0;i--){

    console.log(`${fatorial} * ${i}`);
    fatorial *= i;
    
}

console.log(`O fatorial do número ${num} é: ${fatorial}`);
