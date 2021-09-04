// Desafio 10
function techList(techN, pName) {
  if (techN.length !== 0) {
    let techO = techN.sort();
    for (let i = 0; i < techO.length; i += 1) {
      techO[i] = {
        tech: techO[i],
        name: pName,
      };
    } return techN;
  } return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(arrayList) {
  if (arrayList.length > 11 || arrayList.length < 11) {
    return 'Array com tamanho incorreto.';
  }
  if (Math.min.apply(null, arrayList) < 0 || Math.max.apply(null, arrayList) > 9) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let cont = 0;
  for (let i = 0; i < arrayList.length; i += 1) {
    for (let j = 0; j < arrayList.length; j += 1) {
      if (arrayList[i] === arrayList[j]) {
        cont += 1;
        if (cont >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    } cont = 0;
  } return `(${arrayList[0]}${arrayList[1]}) ${arrayList[2]}${arrayList[3]}${arrayList[4]}${arrayList[5]}${arrayList[6]}-${arrayList[7]}${arrayList[8]}${arrayList[9]}${arrayList[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let checkLineA = false;
  let checkLineB = false;
  let checkLineC = false;
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC) && lineA > Math.abs(lineC - lineB)) {
    checkLineA = true;
  }
  if (lineB < (lineC + lineA) && lineB > Math.abs(lineC - lineA) && lineB > Math.abs(lineA - lineC)) {
    checkLineB = true;
  }
  if (lineC < (lineB + lineA) && lineC > Math.abs(lineB - lineA) && lineC > Math.abs(lineA - lineB)) {
    checkLineC = true;
  }
  if (checkLineA === true && checkLineB === true && checkLineC === true) {
    return true;
  } return false;
}

// Desafio 13
function hydrate(drinks) {
  let waterDrinkString = drinks.match(/\d+/g);
  let waterDrinkArray = [];
  let WaterDrink = 0;
  for (let index = 0; index < waterDrinkString.length; index += 1) {
    waterDrinkArray.push(parseInt(waterDrinkString[index], 10));
  }
  for (let index = 0; index < waterDrinkArray.length; index += 1) {
    WaterDrink += waterDrinkArray[index];
  }
  if (WaterDrink > 1) {
    return `${WaterDrink} copos de água`;
  } return `${WaterDrink} copo de água`;
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
