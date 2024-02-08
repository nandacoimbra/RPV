
console.log("AULA 25/01/24")
console.log("EXERCICIO 4")

/* Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes vips.
Faça um programa que calcule o valor total a ser pago por uma pessoa. O programa deverá ler
o valor total da compra efetuada e um código que identifique se o comprador é um cliente
comum (1), funcionário (2) ou vip (3).*/

let prompt = require('prompt-sync')();
console.log("CONSULTA DE DESCONTOS")


let valor = parseFloat(prompt("Informe o valor do produto: "));
console.log("1 - Cliente comum\n",
    "3 - Funcionário\n",
    "5 - Cliente Vip\n");
let cod = parseInt(prompt("Informe o código do cliente: "));

switch (cod) {
    case 1:
        console.log("Valor a ser pago: R$", valor)
        break;
    case 3:
        console.log("Valor a ser pago: R$", valor*0.9)
        break;
    case 5:
        console.log("Valor a ser pago: R$", valor*0.95)
        break;
    default:
        console.log("Código do cliente inválido")
}