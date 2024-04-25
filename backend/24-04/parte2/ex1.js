// Crie um programa que gera e escreve os números ímpares
// entre 0 e 50. No início da 30a iteração o sistema deve sair do
// laço de repetição.


for (let i = 0; i <= 50; i++) {

    if(i==29){
        break;
    }

    if (i % 2 !== 0) {
        console.log(i);
        
    }
    
}
