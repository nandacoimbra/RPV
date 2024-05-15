const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const btnCalcular = document.querySelector(".calcular")

function classificaImc(imc) {
    if (imc < 18.5) {
        return "Abaixo do Peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso Normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        return "Obesidade Grau I";
    } else if (imc >= 35 && imc < 39.9) {
        return "Obesidade Grau II";
    } else {
        return "Obesidade Grau III";
    }
}

btnCalcular.addEventListener("click",(e)=>{
    e.preventDefault();
    if(peso.value==="" || altura.value===""){
        alert("Necessário informar altura e peso");
    }

    let imc = (peso.value/(altura.value*altura.value)).toFixed(2);

    let resultado = document.querySelector(".imc");
    let classificacao = document.querySelector(".classificacao");
    resultado.textContent += imc;
    classificacao.textContent += classificaImc(imc);

})