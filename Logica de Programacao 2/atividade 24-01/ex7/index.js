console.log("EXERCICIO 7")

let valor = parseFloat(prompt("Informe o valor do produto a vista: "));
let parcelas = parseInt(prompt("Informe o numero de prestacoes (1, 3 ou 5): "));


switch (parcelas) {
    case 1:
        console.log("Valor final do produto para pagamento a vista: ", valor)
        console.log("Valor da prestacao: ", (valor / parcelas))

        break;
    case 3:
        console.log("Valor final do produto em 3x: ", valor * 1.1)
        console.log("Valor da prestacao: ", ((valor * 1.1) / parcelas))
        break;

    case 5:
        console.log("Valor final do produto em 5x: ", valor * 1.2)
        console.log("Valor da prestacao: ", ((valor * 1.2 / parcelas)))
        break;

    default:
        console.log("Número de prestações inválido")
}