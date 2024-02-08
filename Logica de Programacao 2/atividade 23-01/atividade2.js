console.log("VERIFICA MAIOR NÚMERO")
let x = 20;
let y = 10;

if (x > y) {
    console.log("X é maior que Y")
} else if (x < y) {
    console.log("X é menor que Y")
} else {
    console.log("X é igual a Y")
}

console.log("---------------------------------------")

console.log("VERIFICA SEXO")
sexo = "F"
if (sexo === "F") {
    console.log("Sexo feminino")
} else if (sexo === "M") {
    console.log("Sexo masculino")
} else {
    console.log("Valor inválido")
}

console.log("---------------------------------------")

console.log("CALCULA MÉDIA")

nota1 = 7;
nota2 = 10;

media = (nota1+nota2)/2
console.log("Media: ",media)

if (media == 10) {
    console.log("APROVADO COM DISTINCAO")
} else if(media >= 7) {
    console.log("APROVADO ")
} else{
    console.log("REPROVADO")
}