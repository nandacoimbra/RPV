// 1. Utilizando objeto: Crie um programa que leia os dados de um usuário: 
//     nome, sobrenome, CPF, sexo, data de nascimento, endereço e telefone e exiba no console.

// 2. Utilizando objeto: Crie um programa que leia os dados de um aluno: nome, matrícula,
//      disciplina, nota. 
//    - Se a nota do aluno for maior ou igual a 60 exiba no console “Aprovado”.
//    - Se a nota do aluno for menor que 60 porém maior ou igual a 50 
//    exiba no console “Em recuperação” 
//    - Se a nota do aluno for menor que 50 exiba no console “Reprovado”.
//    criar nova propriedade chamada situacao para o aluno.

const prompt = require('prompt-sync')();

// let pessoa = {
//     nome: "",
//     sobrenome: "",
//     cpf: "",
//     sexo: "",
//     dataNascimento: "",
//     endereco: "",
//     telefone: ""

// };

// console.log(`Informe seus dados: `);

// pessoa.nome = prompt("Digite seu nome: ");
// pessoa.sobrenome = prompt("Digite seu sobrenome: ");
// pessoa.cpf = prompt("Digite seu CPF: ");
// pessoa.sexo = prompt("Digite seu sexo: ");
// pessoa.dataNascimento = prompt("Digite sua data de nascimento: ");
// pessoa.endereco = prompt("Digite seu endereço: ");
// pessoa.telefone = prompt("Digite seu telefone: ");

// console.log(pessoa);


// const aluno = {
//     nome: "",
//     matricula: "",
//     disciplina: "",
//     nota: "",

//     recolheDados: function () {
//         this.nome = prompt("Digite o nome do aluno: ");
//         this.matricula = prompt("Digite o número de matrícula do aluno: ");
//         this.disciplina = prompt("Digite a disciplina: ");
//         this.nota = prompt("Digite a nota: ");
//     },

//     calculaNota: function () {
//         if (this.nota >= 60) {
//             console.log(`Aluno ${this.nome} APROVADO`);
//         } else if (this.nota >= 50 && this.nota < 60) {
//             console.log(`Aluno ${this.nome} EM RECUPERAÇÃO`);
//         } else {
//             console.log(`Aluno ${this.nome} REPROVADO`);
//         }

//     }
// };



// aluno.recolheDados();
// aluno.calculaNota();

// aluno.nome = prompt("Digite o nome do aluno: ");
// aluno.matricula = prompt("Digite o número de matrícula do aluno: ");
// aluno.disciplina = prompt("Digite a disciplina: ");
// aluno.nota = prompt("Digite a nota: ");

// if (aluno.nota >= 60) {
//     console.log(`Aluno ${aluno.nome} APROVADO`);
// } else if (aluno.nota >= 50 && aluno.nota < 60) {
//     console.log(`Aluno ${aluno.nome} EM RECUPERAÇÃO`);
// } else {
//     console.log(`Aluno ${aluno.nome} REPROVADO`);
// }

let frutas = ["f", "j", "y", "d", "e"];

// console.log(frutas.sort());
// console.log(frutas.reverse());

// for(let i in frutas){
//     console.log()
// }

// frutas.forEach((e)=> {
//     console.log(e);
// }
// )

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log("\n|"+matriz[0]+'|');
console.log("\n|"+matriz[1]+"|");
console.log("\n|"+matriz[2]+'|');