//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n 

let quadrado = "";
let n = 5


for (let index = 1; index <= n; index += 1) {
  quadrado += '*';
}
for (let i = 1; i <= n; i += 1) {
  console.log(quadrado)
}
