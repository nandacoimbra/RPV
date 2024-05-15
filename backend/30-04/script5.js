const prompt = require('prompt-sync')();



const aluno = {
    matricula: prompt("Informe a matrícula do aluno: "),
    nome: prompt("Informe o nome completo do aluno: "),
    curso: prompt("Informe o nome do curso: "),
    disciplinas: []
};

function lerNotasDisciplina(nomeDisciplina) {
    const notas = [];
    console.log(`Informe as notas da disciplina ${nomeDisciplina}:`);
    for (let i = 1; i <= 5; i++) {
        const nota = parseFloat(prompt(`Nota ${i}: `));
        notas.push(nota);
    }
    return notas;
}


function calcularMedia(notas) {
    const soma = notas.reduce((total, nota) => total + nota, 0);
    return soma / notas.length;
}


for (let i = 1; i <= 3; i++) {
    const nomeDisciplina = prompt(`Informe o nome da disciplina ${i}: `);
    const notasDisciplina = lerNotasDisciplina(nomeDisciplina);
    aluno.disciplinas.push({ nome: nomeDisciplina, notas: notasDisciplina });
}


let somaNotasGeral = 0;

for (const disciplina of aluno.disciplinas) {
    const mediaDisciplina = calcularMedia(disciplina.notas);
    somaNotasGeral += mediaDisciplina;
}

const mediaGeral = somaNotasGeral / aluno.disciplinas.length;


console.log(`\nMédia geral do aluno ${aluno.nome} no curso de ${aluno.curso}: ${mediaGeral.toFixed(2)}`);