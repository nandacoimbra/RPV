const escola = {
    nome: 'CEFET-MG Campus 3',
    localizacao: 'Leopoldina-MG',
    alunos: [
      { matricula: '2021001', nome: 'João' },
      { matricula: '2021002', nome: 'Maria' },
      
    ],
    professores: [
      { id: 1, nome: 'Prof. Silva', disciplina: 'Matemática' },
      { id: 2, nome: 'Profa. Souza', disciplina: 'História' },
      
    ],
    aulasMinistradas: [
      { disciplina: 'Matemática', professorId: 1, sala: 'Sala 101', horario: '10:00' },
      { disciplina: 'História', professorId: 2, sala: 'Sala 201', horario: '14:00' },
      
    ],
}

console.log(escola.alunos[0]);
console.log(escola.nome);
console.log(escola.professores[1]['nome']);