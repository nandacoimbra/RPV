let prompt = require('prompt-sync')();

console.log("CALCULO DO PREÇO DE UM IMÓVEL")

function calcPrecoImovel(m, nq) {
    const m2 = 3000;
    
    switch (nq) {
        case 1: // Casa com 1 quarto
            valor = (m * m2);
            break;
        case 2: // Casa com 2 quartos
            valor = (m * m2 * 1.2);
            break;
        case 3: // Casa com 3 quartos
            valor = (m * m2 * 1.5);
            break;
        default:
            console.log('default');
    }

    return valor;
}

let preco;
let metragem = parseFloat(prompt("Informe a metragem do imóvel em (m2): "));
let numQuartos = parseInt(prompt("Informe o número de quartos (1, 2 ou 3 quartos): "));

while (isNaN(numQuartos) || numQuartos < 1 || numQuartos > 3) {
    numQuartos = parseInt(prompt("O número de quartos deve ser 1, 2 ou 3 quartos: "));
}

preco = calcPrecoImovel(metragem, numQuartos);

console.log(`A casa custa R$ ${preco}`);
