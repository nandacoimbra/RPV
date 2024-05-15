// 5. Utilizando função: Tendo como dados de entrada o peso (em quilogramas)
//    e a altura (em metros) de uma pessoa, 
//    crie um programa que calcule o Índice de Massa Corporal (IMC) dessa pessoa. 
// Calcule o IMC usando a fórmula: IMC = peso / (altura * altura). 
// Classifique o IMC da seguinte forma:
// - IMC < 18,5 Kg/m²: Abaixo do Peso
// - IMC >= 18,5 Kg/m² e < 24,9 Kg/m²: Peso Ideal
// - IMC >= 25 Kg/m² e < 29,9 Kg/m²: Excesso de Peso
// - IMC >= 30 Kg/m²: Obesidade
// Utilize try-catch para lidar com o caso em que os dados (peso e altura) não sejam informados no padrão correto 
// e imprima uma mensagem de erro (gere uma exceção)  apropriada.


const prompt = require('prompt-sync')();

let peso = parseFloat(prompt("Informe seu peso (em kg): "));
let altura = parseFloat(prompt("Informe sua altura (em m): "));


function calculaImc(peso, altura) {

    try {

        if (altura <= 0 || altura > 3 || isNaN(altura)) {
            throw new Error("A altura informada não é válida.");
        }
        if (peso <= 0 || isNaN(peso)) {
            throw new Error("O peso informado não é válido.");
        }

        let imc = (peso / (altura * altura)).toFixed(3);

        console.log(`IMC: ${imc}`);

        if (imc >= 30) {
            console.log(`Obesidade`);
        } else if (imc >= 25 && imc < 29.9) {
            console.log(`Excesso de peso`);
        } else if (imc >= 18.5 && imc < 24.9) {
            console.log(`Peso ideal`);
        } else {
            console.log(`Abaixo do peso`);

        }
    } catch (error) {
        console.log(`Ocorreu um erro: ${error.message}`);
    }

}


calculaImc(peso,altura);