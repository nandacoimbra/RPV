
const prompt = require('prompt-sync')();


function distribuiNotas(valor) {
   
    const notas = [100, 50, 20, 10, 5, 2, 1];

    // Inicializa um objeto para armazenar a quantidade de cada nota
    const distribuicaoNotas = {};

    // quantidade de cada nota
    for (let nota of notas) {
        if (valor >= nota) {
            distribuicaoNotas[nota] = Math.floor(valor / nota);
            valor %= nota;
        }
    }

    // Exibe a distribuição das notas
    console.log("Distribuição das notas:");
    for (let nota of notas) {
        if (distribuicaoNotas[nota]) {
            console.log(`R$ ${nota.toFixed(2)}: ${distribuicaoNotas[nota]} nota(s)`);
        }
    }
}

let regex = /^\d+$/;
let saque = prompt("Informe o valor a ser sacado (valores quebrados não são permitidos): ");

while (!regex.test(saque)) {
    saque = prompt("Valor inválido. Digite um número inteiro sem casas decimais: ");
  }

distribuiNotas(saque);