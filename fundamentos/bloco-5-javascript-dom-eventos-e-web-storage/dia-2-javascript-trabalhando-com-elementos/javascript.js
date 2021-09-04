//1.Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

const body = document.querySelector('body');
const h1create = document.createElement('h1');

body.appendChild(h1create);

//2.Adicione a tag main com a classe main-content como filho da tag body ;

const mainCreate = document.createElement('main');
mainCreate.className = 'main-content';
body.appendChild(mainCreate);

//3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const sectionCreate = document.createElement('section');
sectionCreate.className = 'center-content';
const main = document.querySelector('main');
main.appendChild(sectionCreate);

//4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

const pCreate = document.createElement('p');
const section = document.querySelector('section');
section.appendChild(pCreate);
pCreate.innerText = 'algum texto';

//5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

const sectionLeftCreate = document.createElement('section');
sectionLeftCreate.className = 'left-content';
main.appendChild(sectionLeftCreate);

//6.Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

const sectionRightCreate = document.createElement('section');
sectionRightCreate.className = 'right-content';
main.appendChild(sectionRightCreate);

//7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

const imgCreate = document.createElement('img');
imgCreate.src = 'https://picsum.photos/200';
imgCreate.className = 'small-image';
const sectionLeft = document.querySelector('.left-content');
sectionLeft.appendChild(imgCreate);

//8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

const ulCreate = document.createElement('ul');
ulCreate.className = 'unorder-list';
const sectionRight = document.querySelector('.right-content');
sectionRight.appendChild(ulCreate);

let arrayList = []
arrayList = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

const ul = document.querySelector('.unorder-list');

for (let i = 0; i < arrayList.length; i += 1) {

  let list = arrayList[i];

  let liCreate = document.createElement('li');
  liCreate.innerHTML = list;

  ul.appendChild(liCreate);
}

//9.Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

for (let i = 1; i <= 3; i += 1) {
  let h3Create = document.createElement('h3');
  //Adicione a classe description nas 3 tags h3 criadas;
  h3Create.className = 'description';
  main.appendChild(h3Create);
}

//Adicione a classe title na tag h1 criada;
h1create.className = 'title';

//Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
main.removeChild(sectionLeft);

//Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
sectionRight.style.marginRight = "auto";

//Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
// const colorChange = document.parentNode('.center-content');
main.style.backgroundColor = "green";

//Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
