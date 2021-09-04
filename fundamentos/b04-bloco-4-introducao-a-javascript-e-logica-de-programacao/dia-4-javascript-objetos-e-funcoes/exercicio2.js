//Parte II - Funções

//Agora vamos fazer um exercício que vai deixar nítido como funções com responsabilidades bem definidas deixam o código mais bem escrito.
//A manipulação de arrays pode ser complexa em alguns momentos e por isso o JavaScript conta com diversos métodos para a sua manipulação. A documentação é sempre a nossa maior aliada, se você tiver curiosidade de ler mais sobre esses métodos, clique aqui para acessar a documentação completa. Não se preocupe em entender todos os métodos, eles serão trabalhados cada vez com mais frequência durante o curso e sempre que um método novo for necessário ele será ensinado a você.
//Spoiler-alert : para os exercícios do dia, os métodos split , join e reverse podem ser muito úteis.

//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function checkPalindrome(word) {
  return word == word.split('').reverse().join('');
}
console.log(checkPalindrome('arara'))

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maxValue(array) {
  let indice = -1;
  let atual = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > atual) {
      atual = array[i];
      indice = i;
    }
  }
  return indice;
}
console.log(maxValue([2, 3, 6, 7, 10, 1]));

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function minValue(array) {
  let indice = -1;
  let atual = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < atual) {
      atual = array[i];
      indice = i;
    }
  }
  return indice;
}
console.log(minValue([2, 4, 6, 7, 10, 0, -3]));

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maxCaract(array) {
  let result = '';
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > result.length) {
      result = array[i];
    }
  }
  return result;
}
console.log(maxCaract(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
