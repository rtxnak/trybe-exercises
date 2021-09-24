// 1. Crie uma função que receba um número e retorne seu fatorial.

const fatoracao = (n) => {
  let resultado = n;
  for (let i = 1; i < n; i += 1) {
    resultado *= i;
  }
  return resultado;
}
console.log(fatoracao(4));

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.
const myPhrase = 'Antônio foi no banheiro e não sabemos o que aconteceu';

const longestWord = phrase => {
  let splittedPhrase = phrase.split(' ');
  let maxLength = 0;
  let result = '';

  for(const word of splittedPhrase){
    if(word.length > maxLength) {
      maxLength = word.length
      result = word 
    }
  }
  return result; 
}

console.log(longestWord(myPhrase));

/* 3 . Crie uma página que contenha:
Um botão ao qual será associado um event listener ;

Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;

Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada. */

const countIndex = document.querySelector('#count');
const countButton = document.querySelector('#botao');
let clickCount = 0;

countButton.addEventListener("click", () => countIndex.innerHTML = clickCount += 1);