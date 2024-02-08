
console.log("AULA 25/01/24")
console.log("EXERCICIO 7")

/*Dado o valor do produto e a forma de pagamento.
1= à vista;
2= à prazo.
Se o produto for pago à vista aplique um desconto de 10% antes de mostrar o valor final, senão
informe o mesmo valor do produto..*/

const prompt = require('prompt-sync')();

const valorProduto = parseFloat(prompt("Digite o valor do produto: "));
const formaPagamento = prompt("Digite a forma de pagamento (1 para à vista, 2 para à prazo): ");

let valorFinal;

switch (formaPagamento) {
    case '1': // Pagamento à vista
        valorFinal = valorProduto - (valorProduto * 0.10); // Desconto de 10%
        console.log(`O valor final com desconto é: R$ ${valorFinal.toFixed(2)}`);
        break;
    case '2': // Pagamento à prazo
        valorFinal = valorProduto; // Sem desconto
        console.log(`O valor sem desconto é: R$ ${valorFinal.toFixed(2)}`);
        break;
    default:
        console.log('Forma de pagamento inválida.');
}