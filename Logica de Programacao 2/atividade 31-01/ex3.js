let prompt = require('prompt-sync')();

console.log("QUADRADO DE UM NÚMERO")

function calcQuad(x){
    
    return (x*x);
}

let quadrado;
let x = parseFloat(prompt("Digite um número: "));

quadrado = calcQuad(x);

console.log(`O quadrado de ${x} de é ${quadrado}`);
