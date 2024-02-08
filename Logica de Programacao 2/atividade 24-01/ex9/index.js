console.log("EXERCICIO 9")

let x = parseFloat(prompt("Informe um número real: "));
let y = parseFloat(prompt("Informe outro número real: "));
let cod = parseInt(prompt("Informe 1 para SOMA, 2 para MULTIPLICAÇÃO ou 3 para DIVISÃO: "));


switch (cod) {
    case 1:
        console.log("Resultado da soma: ", x + y)
        break;
    case 2:
        console.log("Resultado da multiplicação: ", x * y)
        break;

    case 3:
        console.log("Resultado da divisão: ", x / y)
        break;

    default:
        console.log("Código de seleção inválido!")
}