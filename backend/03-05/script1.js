// 1. Utilizando tratamento de erros: Crie um programa que receba dois números como parâmetros e retorna a divisão do primeiro pelo segundo.
// Use try-catch para lidar com o caso em que o segundo número é zero 
// e imprima uma mensagem de erro (gere uma exceção) apropriada.


const prompt = require('prompt-sync')();



let n1 = Number(prompt("informe o primeiro número: "));
let n2 = Number(prompt("informe o segundo número: "));

function divisao(x, y) {

    try {
        if(y===0){
            throw new Error("Não é possível a divisão de um número por zero");
        }
  
        if(isNaN(x) || isNaN(y)){
            throw new Error("Informe um valor numérico");
        }
  
      
        
        console.log(`O resultado da divisão é: ${x/y}`);
        
    } catch (error) {
        console.log(`Ocorreu um erro: ${error.message}`);
    }
}

divisao(n1,n2);


