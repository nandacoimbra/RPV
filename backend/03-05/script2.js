// 2. Utilizando tratamento de erros: Crie um programa que receba um array de números e um índice como argumentos e retorna o elemento do array no índice especificado. 
// Utilize try-catch para lidar com o caso em que o índice fornecido está fora dos limites do array 
// e imprima uma mensagem de erro (gere uma exceção) apropriada.

const prompt = require('prompt-sync')();

let array = [1,2,3,4,5,6,7,8,9];

const indice = parseInt(prompt(`Informe o índice do array: `))

function retornaElemento(array,i) {

    try {
        if(i>array.length-1 || i<0){
            throw new Error("O índice fornecido não existe no array")
        }

        console.log(`O elemento no índice ${i} do array é: ${array[i]}`);
    } catch (error) {
        console.log(`Ocorreu um erro: ${error.message}`);
    }
}

retornaElemento(array,indice);