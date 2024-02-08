
console.log("AULA 25/01/24")
console.log("EXERCICIO 1")

/* Suponha que você esteja desenvolvendo o sistema de um hotel que deva exibir mensagens
na recepção para diferentes ações dos hospedes. Incremente o sistema incluindo a solicitação
de entrada do nome hóspede. Segue abaixo algumas sugestões de opções a ser utilizada na
aplicação:
Fazer Check-in
Chamar serviço de quarto
Fazer pedido
Fazer Check-out*/

let prompt = require('prompt-sync')();
console.log("Olá!!")


let nomeCliente = prompt("Informe seu nome: ");
let quarto = parseInt(prompt("Informe o número do seu quarto: "));
console.log("1 - Fazer Check-in\n",
    "2 - Chamar serviço de quarto\n",
    "3 - Fazer pedido\n",
    "4 - Fazer Check-out\n");
let cod = parseInt(prompt("Informe o código do serviço desejado: "));


switch (cod) {
    case 1:
        console.log("Hóspede ",nomeCliente,"do quarto ", quarto, "deseja fazer check-in.");
        break;
    case 2:
        console.log("Hóspede ",nomeCliente,"do quarto ", quarto, "solicitando serviço de quarto.");
        break;
    case 3:
        console.log("Hóspede ",nomeCliente,"do quarto ", quarto, "deseja fazer um pedido.");
        break;
    case 4:
        console.log("Hóspede ",nomeCliente,"do quarto ", quarto, "deseja fazer check-out.");
        break;
    default:
        console.log("Código do serviço incorreto!")
}