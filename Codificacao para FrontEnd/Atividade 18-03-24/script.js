
const v = document.querySelector('body');
//acessa a tag do botao1 
const x = document.querySelector('#botao1');
//acessa a tag do botao2
const z = document.querySelector('#botao2');
//acessa todo o elemento da classe teste1
const y = document.querySelector('ul');
//acessa a tag do botao3
const w = document.querySelector('#botao3');

const a = document.querySelector('#teste1');

//botoes atividade 12
const b = document.querySelector('#botao4');
const c = document.querySelector('#botao5');
const d = document.querySelector('#botao6');

const title = document.querySelector('h1')

//se o botao1 for pressionado, chama a função novoItem
x.onclick = novoItem;

//se o botaos for pressionado, chama a função novoItem
z.onclick = addNoFilho;
w.onclick = addCinco;
b.onclick = alteraTamanhoFonte;
c.onclick = alteraCorFonte;
d.onclick = insereTexto;

// ************* EXERCICIO 11 *************
function novoItem() {

    let newLi = document.createElement('li')
    newLi.innerHTML = 'novo item';
    y.children[0].append(newLi);
    // y.children[0].innerHTML+="<li>item</li>";
}

function addNoFilho() {
    y.children[0].innerHTML+=' novo conteudo';
}

function addCinco() {

    let i = 0;
    for (i = 0; i < 5; i++) {
        let newLi = document.createElement('li')
        newLi.innerHTML = 'novo item';
        y.appendChild(newLi);

    }

}

// ************* EXERCICIO 12 *************

function alteraTamanhoFonte(){
    title.style.fontSize = '40px';
    y.style.fontSize = '20px'
}
function alteraCorFonte(){
    title.style.color = '#D30C7B';
    v.style.color = '#094074'
}
function insereTexto(){
    let newText = document.createElement('p')
    newText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, deleniti ab ea nulla ducimus laborum perspiciatis debitis nihil repudiandae, nostrum voluptatum dignissimos consectetur quidem. Accusantium qui maiores voluptatibus eaque deserunt!';
    v.appendChild(newText);
}




