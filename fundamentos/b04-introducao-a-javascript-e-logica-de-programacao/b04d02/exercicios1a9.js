let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (let numero of numbers) {
	console.log(numero);
}
console.log()
//2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma = 0;
for (let i in numbers) {
	soma += numbers[i];
}
console.log('soma = ', soma);

console.log()
//3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let media = 0;

media = soma / numbers.length

console.log('media = ', media);

console.log()
//4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media > 20) {
	console.log("valor maior que 20");
} else {
	console.log("valor menor que 20");
}

console.log()
//5.Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maiorValor = 0;
for (let indexMaiorValor = 0; indexMaiorValor < numbers.length; indexMaiorValor += 1) {
	if (numbers[indexMaiorValor] > maiorValor) {
		maiorValor = numbers[indexMaiorValor];
	}
}
console.log('maior valor da array: ' + maiorValor)
console.log()
//6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let valorImparQtd = 0;
for (let indexValorImpar = 0; indexValorImpar < numbers.length; indexValorImpar += 1) {
	if (numbers[indexValorImpar] % 2 != 0) {
		valorImparQtd += 1;
	}
}
let valorImparQtdResposta = 0;
if (valorImparQtd < 0) {
	valorImparQtdResposta = 'nenhum valor ímpar encontrado';
} else {
	valorImparQtdResposta = valorImparQtd;
}

console.log('Possui valor impar ? ' + valorImparQtdResposta);
console.log()
//7.Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menorValor = maiorValor;
for (let indexMenorValor = 0; indexMenorValor < numbers.length; indexMenorValor += 1) {
	if (numbers[indexMenorValor] < menorValor) {
		menorValor = numbers[indexMenorValor];
	}
}
console.log('menor valor da array: ' + menorValor)
console.log()

//8.Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let newNumber = 0;
let newArray = []
for (let newIndex = 0; newIndex < 25; newIndex += 1) {
	newArray.push (newNumber +=1);
}
console.log(newArray)
console.log()


//9.Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for (let lastIndex = 0; lastIndex < newArray.length; lastIndex += 1) {
	let newDivision = newArray[lastIndex] / 2;
	console.log(newDivision)
}