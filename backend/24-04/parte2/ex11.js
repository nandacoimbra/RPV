// Crie um programa que calcule o que deve ser pago por um produto,
// considerando o preço normal de etiqueta e a escolha da condição de
// pagamento. Utilize os códigos da tabela a seguir para ler qual a
// condição de pagamento escolhida e efetuar o cálculo adequado.
// Código

const prompt = require('prompt-sync')();

let precoProduto = parseFloat(prompt("Digite o preco do produto: "));

console.log("********** CONDIÇÃO DE PAGAMENTO **********\n",
"1 - À vista em dinheiro ou cheque, recebe 10% de desconto. \n",
"2 - À vista no cartão de crédito, recebe 15% de desconto. \n",
"3 - Em duas vezes, preço normal de etiqueta sem juros. \n",
"4 - Em duas vezes, preço normal de etiqueta mais juros de 10%.");

let condicaoPagamento = parseInt(prompt("Informe a condição de pagamento: "));

switch(condicaoPagamento){
    case 1:
        console.log(`O preço do produto será: ${precoProduto*0.9} reais.`);
        break;
    case 2:
        console.log(`O preço do produto será: ${precoProduto*0.85} reais.`);
        break;
    case 3:
        console.log(`O preço do produto será: ${precoProduto} reais.`);
        break;
    case 4:
        console.log(`O preço do produto será: ${precoProduto*1.1} reais.`);
        break;
    default:
        console.log("Condição de pagamento inválida!")
}