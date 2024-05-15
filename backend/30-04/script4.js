// ATIVIDADE 4. Utilizando arrays: Crie um programa que leia o peso e a altura de 7 pessoas, 
// mostrando no final: 
// a) Qual foi a média de altura do grupo 
// b) Quantas pessoas pesam mais de 90Kg 
// c) Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m 
// d) Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg. 

const prompt = require('prompt-sync')();

const pessoas = [];

let numPessoas = 0;
let pessoasMais90 = 0;
let pessoasMenor50e160 = 0;
let pessoasMaior190e100 = 0;
let totalAlturaGrupo = 0;

for (let i = 1; i <= 7; i++) {
    const peso = parseFloat(prompt(`Informe o peso da pessoa ${i} (em Kg): `));
    const altura = parseFloat(prompt(`Informe a altura da pessoa ${i} (em metros): `));

    pessoas.push({ peso, altura });
}

for (const pessoa of pessoas) {
    numPessoas++;
    totalAlturaGrupo += pessoa.altura;

    if (pessoa.peso > 90) {
        pessoasMais90++;
    }

    if (pessoa.peso < 50 && pessoa.altura < 1.6) {
        pessoasMenor50e160++;
    }

    if (pessoa.altura > 1.9 && pessoa.peso > 100) {
        pessoasMaior190e100++;
    }
}

const mediaAlturaGrupo = totalAlturaGrupo / numPessoas;

console.log("Média de altura do grupo:", mediaAlturaGrupo.toFixed(2), "m");
console.log("Quantidade de pessoas que pesam mais de 90Kg:", pessoasMais90);
console.log("Quantidade de pessoas que pesam menos de 50Kg e têm menos de 1.60m:", pessoasMenor50e160);
console.log("Quantidade de pessoas que medem mais de 1.90m e pesam mais de 100Kg:", pessoasMaior190e100);
