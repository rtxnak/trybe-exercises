/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/

const testParam = 'Leandrão, o Lobo Solitário';

const createStudent = (string) => ({
  name: string,
  feedback: () => 'Eita pessoa boa!',
});

// params => ({foo: "a"}) // returning the object {foo: "a"}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// função dentro de objeto => https://stackoverflow.com/questions/10378341/functions-inside-objects/48645842

module.exports = createStudent;
