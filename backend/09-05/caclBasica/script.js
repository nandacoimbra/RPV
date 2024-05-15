const num1 = document.querySelector("#n1");
const num2 = document.querySelector("#n2");
const operacao = document.querySelector("#operacao");
const btnCalcular = document.querySelector("#btn-calc");
const divResultado = document.querySelector("#resultado");


function limpaForm() {
    num1.value="";
    num2.value="";
}

btnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let resultado = 0;

    let n1 = parseFloat(num1.value);
    let n2 = parseFloat(num2.value);

    if(isNaN(n1) || isNaN(n2)){
        window.alert("Informe um valor numérico.");
       limpaForm();
       return;
    }

    switch (operacao.value) {
        case "1":
            resultado = n1 + n2;
            break;
        case "2":
            resultado = n1 - n2;
            break;
        case "3":
            if (n2 === 0) {
                window.alert("Impossível a divisão por zero!");
                num2.value = "";
                return;
            }
            resultado = n1 / n2;
            break;
        case "4":
            resultado = n1 * n2;
            break;
        // default:
        //     window.alert("Operação inválida!");
        //     return;
    }

    divResultado.innerHTML = "";

    let span = document.createElement('span');
    span.textContent = "Resultado: " + resultado.toFixed(3);
    divResultado.appendChild(span);
    limpaForm();
    

})