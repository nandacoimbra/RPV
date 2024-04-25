// Tendo como dados de entrada o peso (em quilogramas) e a altura (em
//     metros) de uma pessoa, crie um programa que calcule o Índice de
//     Massa Corporal (IMC) dessa pessoa.
//     Calcule o IMC usando a fórmula: IMC = peso / (altura * altura).
//     Classifique o IMC da seguinte forma:
//     - IMC < 18,5 Kg/m2: Abaixo do Peso
//     - IMC >= 18,5 Kg/m2 e < 24,9 Kg/m2: Peso Ideal
//     - IMC >= 25 Kg/m2 e < 29,9 Kg/m2: Excesso de Peso
//     - IMC >= 30 Kg/m2: Obesidade

const prompt = require('prompt-sync')();

let peso = parseFloat(prompt("Informe seu peso (em kg): "));
let altura = parseFloat(prompt("Informe sua altura (em m): "));

let imc = peso / (altura * altura);

console.log(`IMC: ${imc}`);

if (imc >= 30) {
    console.log(`Obesidade`);
} else if (imc >= 25 && imc < 29.9) {
    console.log(`Excesso de peso`);
}else if(imc >= 18.5 && imc < 24.9){
    console.log(`Peso ideal`);
}else{
    console.log(`Abaixo do peso`);
    
}