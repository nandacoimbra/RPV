// Crie um programa que efetue a soma de todos os números
// ímpares que são múltiplos de três e que se encontram no
// conjunto dos números de 1 até 100.

let soma = 0;

for (let i = 1; i <= 100; i++) {

    if ((i % 2 !== 0) && (i % 3 == 0)) {
        soma += i;
    }

}

console.log(`Soma total: ${soma}`);