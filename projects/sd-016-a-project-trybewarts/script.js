const emailFieldElement = document.querySelector('#email');
const passwordFieldElement = document.querySelector('#password');
const loginButtonElement = document.querySelector('#loginInsert');
const padraoEmail = 'tryber@teste.com';
const padraoSenha = '123456';

function loginInsert() {
  if (emailFieldElement.value === padraoEmail && passwordFieldElement.value === padraoSenha) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginButtonElement.addEventListener('click', loginInsert);

const raitingElement = document.querySelector('#rating');
function createRate() {
  for (let index = 1; index <= 10; index += 1) {
    const item = document.createElement('input');
    item.type = 'radio';
    item.name = 'rate';
    item.value = index;

    const label = document.createElement('label');
    label.innerHTML = index;

    raitingElement.appendChild(item);
    raitingElement.appendChild(label);
  }
}
createRate();

// Função para carregar a pagina com botão desabilitado

const formSubmitElement = document.querySelector('#submit-btn');

window.onload = () => {
  formSubmitElement.disabled = true;
};

/* Informação de button.disabled retirado do:
https://stackoverflow.com/questions/13831601 disabling-and-enabling-a-html-input-button/13831737 */

// Função para habilitar o botão caso checkbox esteja marcado

const checkBox = document.querySelector('#agreement');
const checkBoxVerify = () => {
  if (checkBox.checked) {
    formSubmitElement.disabled = false;
  } else {
    formSubmitElement.disabled = true;
  }
};

checkBox.addEventListener('click', checkBoxVerify);

/* inforção de checked do input checkbox retirado do:
https://pt.stackoverflow.com/questions/113439/d%C3%BAvida-com-checkbox-value-true-e-checked */

// funcao de contagem de caracteres

const counter = document.querySelector('#counter');
counter.innerHTML = 500;

const textAreaElement = document.querySelector('textarea');

const countCaracteres = () => {
  const caracteres = textAreaElement.value.length;
  counter.innerHTML = 500 - caracteres;
};

textAreaElement.addEventListener('keyup', countCaracteres);

// funcao substitui os preenchimentos ao click do enviar

function subjectPrint() {
  const iMaterias = document.querySelectorAll('[class=subject]');
  const materiasArray = [];
  for (let index = 0; index < iMaterias.length; index += 1) {
    if (iMaterias[index].checked) {
      materiasArray.push(` ${iMaterias[index].value}`);
    }
  }
  return materiasArray;
}

/* funcao para retirar valores de checkbox:
https://stackoverflow.com/questions/20068487/getting-multiple-selected-checkbox-values-in-a-string-
in-javascript-and-php */

function inputForm() {
  const firstName = document.querySelector('#input-name').value;
  const LastName = document.querySelector('#input-lastname').value;
  const iName = `Nome: ${firstName} ${LastName}`;
  const iEmail = `Email: ${document.querySelector('#input-email').value}`;
  const iCasa = `Casa: ${document.querySelector('#house').value}`;
  const ifamily = `Família: ${document.querySelector('[name=family]:checked').value}`;
  const iMateria = `Matérias: ${subjectPrint()}`;
  const iAvalia = `Avaliação: ${document.querySelector('[name=rate]:checked').value}`;
  const iObs = `Observações: ${document.querySelector('#textarea').value}`;
  const array = [iName, iEmail, iCasa, ifamily, iMateria, iAvalia, iObs];
  return array;
}

function changeInfo(event) {
  event.preventDefault();
  const infoArray = inputForm();
  const DivResult = document.createElement('div');
  for (let index = 0; index < infoArray.length; index += 1) {
    const pCreation = document.createElement('p');
    pCreation.innerText = infoArray[index];
    DivResult.appendChild(pCreation);
  }
  DivResult.id = 'evaluation-form';
  DivResult.className = 'newDiv';
  const main = document.querySelector('main');
  const formDelete = document.querySelector('#evaluation-form');
  main.removeChild(formDelete);
  main.appendChild(DivResult);
}
formSubmitElement.addEventListener('click', changeInfo);
