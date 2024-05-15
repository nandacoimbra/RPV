const nome = document.querySelector("#nome");
const matricula = document.querySelector("#matricula");
const disciplina = document.querySelector("#disciplina");
const nota = document.querySelector("#nota");
const btnEnviar = document.querySelector(".enviar");

function limpaForm() {
    nome.value = "";
    matricula.value = "";
    disciplina.value = "";
    nota.value = "";
}

function classificaNota(nota) {
    if (nota >= 60) {
        return "Aprovado";
    } else if (nota < 60 || nota >= 50) {
        return "Em recuperacao";
    } else {
        return "Reprovado";
    }
}

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();

    let aluno = document.querySelector(".nome-aluno");
    let situacao = document.querySelector(".situacao");

    situacao.textContent = "Situação: ";
    aluno.textContent = "Aluno: ";

    situacao.textContent += classificaNota(nota.value);
    aluno.textContent += nome.value;

    limpaForm();

})