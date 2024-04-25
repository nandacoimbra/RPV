// Crie um programa que leia a idade de 10 pessoas, exibindo
// ao final do programa:
// - Qual é a média de idade do grupo
// - Quantas pessoas tem mais de 20 anos
// - Quantas pessoas tem menos de 10 anos
// - Qual foi a maior idade lida
// - Qual foi a menor idade lida

const prompt = require('prompt-sync')();

//calc media
function mediaIdade(idades) {
    let soma = 0;

    idades.forEach(element => {
        soma += element;
        console.log(element);
    });

    return soma / idades.length;
}

function maiorVinte(idades) {
    let cont = 0;

    idades.forEach(element => {
        if (element > 20) {
            cont++;
        }

    });

    return cont;
}
function menorDez(idades) {

    let cont = 0;
    idades.forEach(element => {
        if (element < 10) {
            cont++;
        }

    });

    return cont;
}

let idades = [];

//le idades
for (i = 1; i <= 5; i++) {
    idades.push(parseInt(prompt(`Digite a idade ${i}: `)));
}

console.log(`A média das idades do grupo é: ${mediaIdade(idades)}`);
console.log(`Número de pessoas maiores de 20 anos: ${maiorVinte(idades)}`);
console.log(`Número de pessoas menores de 10 anos: ${menorDez(idades)}`);
console.log(`Maior idade lida: ${Math.max(...idades)}`);
console.log(`Menor idade lida: ${Math.min(...idades)}`);





// console.log(`Ordem crescente: ${ordemCrescente(numeros)}`);
// console.log(`Ordem decrescente: ${ordemDecrescente(numeros)}`);
