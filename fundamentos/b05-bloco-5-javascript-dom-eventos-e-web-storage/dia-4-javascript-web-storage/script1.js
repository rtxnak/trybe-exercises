const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

function addPhraseToLocalStorage() {
  const oldList = JSON.parse(localStorage.getItem('phrases'));
  const phraseText = input.value;
  oldList.push(phraseText);
  localStorage.setItem('phrases', JSON.stringify(oldList));
  insertPhraseInDOM();
};

//busca lista antiga "phrases" do locaStorage, transforma de JSON string em array.
//inclui com push o valor do input
//adiciona ao localStorage a lista atualizada transformando array em JSON string.
//aciona a função insertPhraseInDOM

function insertPhraseInDOM() {
  const phrasesList = JSON.parse(localStorage.getItem('phrases'));
  const listLength = phrasesList.length - 1;
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li');
  phrase.innerText = phraseText;
  list.appendChild(phrase);
};

//busca lista "phrases" do locaStorage, transforma de JSON string em array.
//busca o index do ultimo atributo do array
//adiciona o valor deste ultimo atributo em uma const phraseText
//cria um elemento li
//coloca o phraseText dentro do li
//adiciona como filho do phrases-list' que é a const list

function initialRenderization() {
  if (localStorage.getItem('phrases') === null) {
    localStorage.setItem('phrases', JSON.stringify([]));
  } else {
    const phrasesList = JSON.parse(localStorage.getItem('phrases'));
    const listLength = phrasesList.length - 1;
    for (let index = 0; index <= listLength; index += 1) {
      const listElement = document.createElement('li');
      listElement.innerText = phrasesList[index];
      list.appendChild(listElement);
    };
  };
};

//verifica se o localStorage é null, se for adiciona ao storage o valor [] em JSON string
//Se não, busca o phrases do localStorage,transforma em array e armazeno no phrasesList
//define o comprimento total do array e armazena no listLength
//cria um loop em que cria um elemento li , adiciona o valor do phareses list e agrega ao list, tudo conforme o index.


button.addEventListener('click', addPhraseToLocalStorage);

//click no botão aciona a função addPhraseToLocalStorage, que aciona a função insertPhraseInDOM automaticamente

window.onload = function() {
  initialRenderization();
};

//ao carregar a pagina executa a função initialRenderization pra buscar alguma lista ja existente no localStorage