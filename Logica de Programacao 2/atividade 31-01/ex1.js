let prompt = require('prompt-sync')();

console.log("PORCENTAGEM ENTRE 2 NÚMEROS")

function calcPct(x,y){
    
    return ((y/x)*100);
}

let pct;
let x = parseFloat(prompt("Digite o primero número: "));
let y = parseFloat(prompt("Digite o segundo número: "));

pct = calcPct(x,y);

console.log(`${pct}% de ${x} é ${y}`);
