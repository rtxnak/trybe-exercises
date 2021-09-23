/* function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);*/


/* 1 - Modifique a estrutura da função para que ela seja uma arrow function .

Modifique as concatenações para template literals .*/

const testingScope = (escopo) => (
  escopo === true ? `Não devo ser utilizada fora do meu escopo (if)` : `Não devo ser utilizada fora meu escopo (else)`
);
console.log(testingScope(true));

/* 2- faça uma função que retorne o array oddsAndEvens em ordem crescente. */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = array => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
}

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(sortedArrayBonus);