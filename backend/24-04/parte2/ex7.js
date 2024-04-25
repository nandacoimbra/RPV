// Crie um programa que leia dois valores inteiros A e B se os
// valores forem iguais deverá se somar os dois, caso contrário
// multiplique A por B. Ao final de qualquer um dos cálculos
// deve-se atribuir o resultado para uma variável C e mostrar
// seu conteúdo no console.

const prompt = require('prompt-sync')();


let a = parseInt(prompt("Digite o primeiro número inteiro: "));
let b = parseInt(prompt("Digite o segundo número inteiro: "));
let c = 0;

if (a == b) {
    c = a + b;
    console.log(`Resultado da soma entre a e b: ${c}`);
} else {
    c = a * b;
    console.log(`Resultado da multiplicacao entre a e b: ${c}`);
}





