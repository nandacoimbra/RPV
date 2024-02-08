// Definindo a estrutura do objeto biblioteca

let prompt = require('prompt-sync')();
let flag = false;


const biblioteca = {
    nome: 'Biblioteca Senai Cataguases',
    anoFundação: 1990,
    livrosDisponiveis: [
        { id: 4, titulo: 'JavaScript: O Guia Definitivo', autor: 'David Flanagan' },
        { id: 5, titulo: 'Python Fluente', autor: 'Luciano Ramalho' },
        { id: 6, titulo: 'Clean Code: A Handbook of Agile Software Craftsmanship', autor: 'Robert C. Martin' },
        { id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien' },
        { id: 2, titulo: 'Dom Casmurro', autor: 'Machado de Assis' },
        { id: 3, titulo: '1984', autor: 'George Orwell' },

    ],
    alunosMatriculados: [
        { curso: 'fullstack', matricula: '2021001', nome: 'Fernanda' },
        { curso: 'fullstack', matricula: '2021002', nome: 'Juliana' },
        { curso: 'fullstack', matricula: '2021003', nome: 'Carlos' },
        { curso: 'fullstack', matricula: '2021004', nome: 'Talita' },
        { curso: 'fullstack', matricula: '2021005', nome: 'Rafael' },

    ],

    livrosEmprestados: [
        { id: 7, titulo: 'Eloquent JavaScript', autor: 'Marijn Haverbeke' },
        { id: 8, titulo: 'The Pragmatic Programmer', autor: 'Andrew Hunt, David Thomas' },

    ]

}

console.log("Livros disponiveis:");
for (let i = 0; i < biblioteca.livrosDisponiveis.length; i++) {
    console.log(`Título: ${biblioteca.livrosDisponiveis[i].titulo}  Id: ${biblioteca.livrosDisponiveis[i].id}`);
}

let idLivro = parseInt(prompt("Informe o id do livro que deseja: "));

for (i = 0; i < biblioteca.livrosDisponiveis.length; i++) {
    if (idLivro == biblioteca.livrosDisponiveis[i].id) {
        biblioteca.livrosEmprestados.push(biblioteca.livrosDisponiveis[i]);
        biblioteca.livrosDisponiveis.splice(i, 1);
        flag = true;
        break;
    } else {
        flag = false;
    }
}

console.log("***********Livros Disponiveis:***********");
for (let i = 0; i < biblioteca.livrosDisponiveis.length; i++) {
    console.log(`Título: ${biblioteca.livrosDisponiveis[i].titulo}  Id: ${biblioteca.livrosDisponiveis[i].id}`);
}

console.log("**********Livros Emprestados***********");
for (let i = 0; i < biblioteca.livrosEmprestados.length; i++) {
    console.log(`Título: ${biblioteca.livrosEmprestados[i].titulo}  Id: ${biblioteca.livrosEmprestados[i].id}`);
}
