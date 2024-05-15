const numero = document.querySelector("#numero");
const btnCalcular = document.querySelector(".calcular");
const resultado = document.querySelector(".resultado");
const calculo = document.querySelector(".calc");


btnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    const num = parseInt(numero.value);

    if(num===0){
        resultado.textContent = `O fatorial de zero vale 1`;
    }else{
    let fatorial = 1;
    let calc = "";


    for (let i = num; i > 1; i--) {
        fatorial *= i;
        calc += `${i} * `;
    }

    calc += `1`;

    resultado.textContent = `= ${fatorial}`;
    calculo.textContent = `Cálculo: ${calc}`;

}

})

