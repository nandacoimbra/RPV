console.log("TABUADA DE NÚMEROS POSITIVOS")

let prompt = require('prompt-sync')();

let valor;
valor= parseInt(prompt("Digite o valor da tabuada: "));

while(valor<=0){
    valor = parseInt(prompt("O valor precisa ser maior que zero: "));
}

for(let i=1;i<=10;i++){
    console.log(`${valor}*${i} = ${valor*i}`);
}