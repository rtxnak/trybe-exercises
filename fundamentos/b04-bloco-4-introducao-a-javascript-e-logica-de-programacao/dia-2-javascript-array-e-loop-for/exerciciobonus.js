let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1.Ordene o array numbers em ordem crescente e imprima seus valores;

for (let index = 1; index < numbers.length; index += 1) {
	for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
		if (numbers[index] < numbers[secondIndex]) {
			let position = numbers[index];
			numbers[index] = numbers[secondIndex];
			numbers[secondIndex] = position;
		}
	}
} console.log(numbers)

//2.Ordene o array numbers em ordem decrescente e imprima seus valores;

let newNumbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < newNumbers.length; index += 1) {
	for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
		if (newNumbers[index] > newNumbers[secondIndex]) {
			let position = newNumbers[index];
			newNumbers[index] = newNumbers[secondIndex];
			newNumbers[secondIndex] = position;
		}
	}
} console.log(newNumbers)