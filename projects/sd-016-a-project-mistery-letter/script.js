// const main = document.querySelector('#main');
const input = document.querySelector('#carta-texto');
const inpButton = document.querySelector('#criar-carta');
const letter = document.querySelector('#carta-gerada');
const wordCounterP = document.querySelector('#carta-contador');

const styleArray = ['newspaper', 'magazine1', 'magazine2'];
const sizeArray = ['medium', 'big', 'reallybig'];
const rotationArray = ['rotateleft', 'rotateright'];
const inclinationArray = ['skewleft', 'skewright'];

function randomClass() {
  const styleClass = styleArray[Math.floor(Math.random() * 3)];
  const sizeClass = sizeArray[Math.floor(Math.random() * 3)];
  const rotationClass = rotationArray[Math.floor(Math.random() * 2)];
  const inclinationClass = inclinationArray[Math.floor(Math.random() * 2)];
  return `${styleClass} ${sizeClass} ${rotationClass} ${inclinationClass}`;
}

function spanCreator() {
  const spanWord = input.value.split(' ');
  for (let index = 0; index < spanWord.length; index += 1) {
    const span = document.createElement('span');
    span.innerText = spanWord[index];
    span.className = randomClass();
    letter.appendChild(span);
  }
}
function spaceCounter() {
  const spanWord = input.value.split(' ');
  let spaceCount = 0;
  for (let index = 0; index < spanWord.length; index += 1) {
    if (spanWord[index].length < 1) {
      spaceCount += 1;
    }
  }
  return spaceCount;
}

function wordsCounter() {
  const spanWord = input.value.split(' ');
  let wordcount = 0;
  for (let index = 0; index < spanWord.length; index += 1) {
    wordcount += 1;
  }
  return wordcount;
}

function wordCountInput() {
  wordCounterP.innerText = wordsCounter();
}

inpButton.addEventListener('click', () => {
  letter.innerText = '';
  const spaceCountValue = spaceCounter();
  if (input.value === '' || spaceCountValue > 1) {
    letter.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    spanCreator();
    wordCountInput();
  }
});
