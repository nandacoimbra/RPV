// 4. Utilizando tratamento de erros: Crie um programa que leia a largura e o comprimento de um terreno retangular, 
// calculando e mostrando a sua área em m² (largura x comprimento). 
// O programa também deve mostrar a classificação desse terreno, de acordo com a lista abaixo: 
// - Abaixo de 100m² = TERRENO POPULAR 
// - Entre 100m² e 500m² = TERRENO MASTER 
// - Acima de 500m² = TERRENO VIP
// Utilize try-catch para lidar com o caso em que os dados (largura e comprimento) não sejam informados no padrão correto 
// e imprima uma mensagem de erro (gere uma exceção)  apropriada.

const prompt = require('prompt-sync')();

let larguraTerreno = parseFloat(prompt("Digite a largura do terreno: "));
let comprimentoTerreno = parseFloat(prompt("Digite o comprimento do terreno: "));

function calculaArea(largura, comprimento) {

    try {
        if (largura < 1 || comprimento < 1) {
            throw new Error("Informe uma dimensão maior que zero");
        }
        if (isNaN(largura) || isNaN(comprimento)) {
            throw new Error("Informe uma dimensão válida de terreno");
        }

        let area = larguraTerreno * comprimentoTerreno;

        console.log(`A área do terreno é de ${area} m2.`);

        if (area > 500) {
            console.log(`TERRENO VIP!`);
        } else if (area >= 100 && area <= 500) {
            console.log(`TERRENO MASTER!`);
        } else {
            console.log(`TERRENO POPULAR!`);
        }
    } catch (error) {
        console.log(`Ocorreu um erro: ${error.message}`);
    }


}

calculaArea(larguraTerreno,comprimentoTerreno);



