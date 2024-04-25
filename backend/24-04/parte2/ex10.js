// Faça um programa que leia a largura e o comprimento de um terreno
// retangular, calculando e mostrando a sua área em m2 (largura x
// comprimento). O programa também deve mostrar a classificação desse
// terreno, de acordo com a lista abaixo:
// - Abaixo de 100m2 = TERRENO POPULAR
// - Entre 100m2 e 500m2 = TERRENO MASTER
// - Acima de 500m2 = TERRENO VIP

const prompt = require('prompt-sync')();

let larguraTerreno = parseFloat(prompt("Digite a largura do terreno: "));
let comprimentoTerreno = parseFloat(prompt("Digite o comprimento do terreno: "));

let area = larguraTerreno * comprimentoTerreno;

console.log(`A área do terreno é de ${area} m2.`);

if (area > 500) {
    console.log(`TERRENO VIP!`);
} else if (area >= 100 && area <= 500) {
    console.log(`TERRENO MASTER!`);
} else {
    console.log(`TERRENO POPULAR!`);
}



