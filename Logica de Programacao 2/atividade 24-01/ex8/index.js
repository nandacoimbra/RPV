console.log("EXERCICIO 8")

let nomeAluno = prompt("Informe o nome do aluno: ");
let p1 = parseFloat(prompt("Informe a nota da prova 1: "));
let p2 = parseFloat(prompt("Informe a nota da prova 2: "));
let p3 = parseFloat(prompt("Informe a nota da prova 3: "));

let media = (p1 + p2 + p3) / 3

if (media >= 8) {
    console.log("Nome do aluno: ", nomeAluno)
    console.log("Media final: ", media)
    console.log("Resultado: Aprovado")
} else {
    console.log("Nome do aluno: ", nomeAluno)
    console.log("Media final: ", media)
    console.log("Resultado: Reprovado")

}