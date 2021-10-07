// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const result = names.reduce((acc, name) => {
    return acc + name.toUpperCase().split('').reduce((accum, letter) => (letter === 'A' ? accum + letter : accum)).length;
  },0);
  return result;
}

console.log(containsA());