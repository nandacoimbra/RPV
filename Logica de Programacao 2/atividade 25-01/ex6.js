
console.log("AULA 25/01/24")
console.log("EXERCICIO 6")

/*A taxa de natalidade e a taxa de mortalidade são indicadores estatísticos de fundamental
importância por ajudar a compreender aquilo que os especialistas chamam de dinâmica
populacional e a entender sua relação com variáveis que influenciam o desenvolvimento, como
qualidade de vida, migrações, , fatores socioeconômicos e localização. Sabendo disso, crie um
programa que calcule os dois indicadores utilizando o comando switch.
Observação: A taxa de natalidade é calculada pela seguinte fórmula: taxa de natalidade =
(número de crianças nascidas x 1000) / número de habitantes;
Enquanto que, a taxa de mortalidade = (números de óbitos x 1000) /número de habitantes.*/

let prompt = require('prompt-sync')();
console.log("TAXA DE NATALIDADE E MORTALIDADE")

let num = parseInt(prompt("Digite o número 1 para calcular a taxa de natalidade e 2 para a taxa de mortalidade: "));

switch (num) {
    case 1:
        //número de crianças nascidas
        let ncn = parseFloat(prompt("Informe o número de crianças nascidas: "));
        //número de habitantes
        let nh = parseFloat(prompt("Informe o número de habitantes: "));  
        console.log("A taxa de natalidade é: ", (ncn*1000)/nh);
        break;
    case 2:
        //número de óbitos
        let no = parseFloat(prompt("Informe o número de óbitos: "));
        //número de habitantes
        let nh2 = parseFloat(prompt("Informe o número de habitantes: "));  
        console.log("A taxa de mortalidade é: ", (no*1000)/nh2);
        break;

    default:
        console.log("Código inválido!!");
}
