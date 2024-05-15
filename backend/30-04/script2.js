// ATIVIDADE 2. Utilizando arrays: Crie um programa que leia o nome e o preço de 8 produtos. 
// No final, mostre no console qual foi o nome e preço do maior e qual foi o nome e preço do menor preço digitados. 

const prompt = require('prompt-sync')();

let arrayProdutos = [];


for(i=1;i<=3;i++){
    const nome = prompt(`Informe o nome do produto ${i}: `)
    const preco = parseFloat(prompt(`Informe o preco do produto ${i}: `))
    arrayProdutos.push({nome:nome,preco:preco});
}

const maiorValor = Math.max(...arrayProdutos.map(produto=>produto.preco));
const produtoMaiorValor = arrayProdutos.find(produto => produto.preco === maiorValor);

const menorValor = Math.min(...arrayProdutos.map(produto=>produto.preco));
const produtoMenorValor = arrayProdutos.find(produto => produto.preco === menorValor);

console.log("Produto com o maior preço:");
console.log("Nome:", produtoMaiorValor.nome);
console.log("Preço:", produtoMaiorValor.preco);
console.log("*************************************")
console.log("Produto com o menor preço:");
console.log("Nome:", produtoMenorValor.nome);
console.log("Preço:", produtoMenorValor.preco);
