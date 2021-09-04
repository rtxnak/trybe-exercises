const a = 2;
const b = 2;
const c = 4;
const d = -5;

//1.Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

//adicao
console.log("Adição=", a + b);

//subtração
console.log("Subtração=", a - b);

//multiplicação
console.log("Multiplicação=", a * b);

//Divisão
console.log("Divisão=", a / b);

//Modulo
console.log("Modulo=", a % b)

//2.Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

if (a > b) {
  console.log("valor maior é a", a);
}

else if (a < b) {
  console.log("valor maior é b=", b);
}

else {
  console.log("Numero igual");
}

//3.Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

if (a > b && a > c) {
  console.log("valor maior é a", a);
}

else if (a < b && c < b) {
  console.log("valor maior é b=", b);
}

else if (c > a && c > b) {
  console.log("valor maior é c=", c);
}

else {
  console.log("Numero igual");
}

//4.Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

if (d > 0) {
  console.log("positive");
}

else if (d < 0) {
  console.log("negative");
}

else {
  console.log("zero");
}

//5.Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const alpha = 90
const beta = 60
const gama = 30

if (alpha + beta + gama == 180) {
  console.log(true);
}

else if (alpha + beta + gama > 180) {
  console.log(false);
}

else if (alpha + beta + gama < 180) {
  console.log(false);
}

else {
  console.log("erro");
}

//6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let chessman = "ROOKS";

switch (chessman.toLowerCase()) {
  case "king":
    console.log("move one square in any direction (horizontally, vertically, or diagonally)");
    break;
  case "queen":
    console.log("can be moved any number of unoccupied squares in a straight line vertically, horizontally, or diagonally,");
    break;
  case "rooks":
    console.log("moves horizontally or vertically, through any number of unoccupied squares");
    break;
  case "bishops":
    console.log("has no restrictions in distance for each move, but is limited to diagonal movement.");
    break;
  case "knights":
    console.log("t may move two squares vertically and one square horizontally, or two squares horizontally and one square vertically (with both forming the shape of an L).");
    break;
  case "pawns":
    console.log("Unlike the other pieces, pawns cannot move backwards. Normally a pawn moves by advancing a single square, but the first time a pawn moves, it has the option of advancing two squares. ");
    break;
  default:
    console.log("valor não identificado")
}

//7.Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F

let nota = 40

if (nota > 100) {
  console.log("nota não existe");
} else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else if (nota < 50 && nota > 0) {
  console.log("F");
} else if (nota < 0) {
  console.log("nota não existe");
} else {
  console.log("erro");
}

//8.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
//Bonus: use somente um if.

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
}

//9.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
//Bonus: use somente um if .

if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
  console.log(true);
} else {
  console.log(false);
}

//10.Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
//Atente que, sobre o custo do produto, incide um imposto de 20%.
//Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

const valorCusto = 10
const valorVenda = 35
const impostoSobreOCusto = valorCusto * 0.2

let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal;

console.log("Valor do custo total=", valorCustoTotal, "lucro=", lucro)

// 11.Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

//  IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let salario = 3000;
let inss = "";
let iR = "";
let deducaoIr = "";
let valorInss = salario * inss;
let salarioComInss = salario - valorInss;
let valorIr = salarioComInss * iR;
let valorIrTotal = valorIr - deducaoIr;
let salarioBase = salarioComInss - valorIrTotal;

if (salario <= 1556.94) {
  inss = 0.08;
} else if (salario <= 2594.92 && salario >= 1556.95) {
  inss = 0.09;
} else if (salario <= 5189.82 && salario >= 2594.93) {
  inss = 0.11;
} else {
  inss = 570.88;
}

if (salarioComInss <= 1903.98) {
  iR = 0, deducaoIr = 0;
} else if (salarioComInss <= 2826.65 && salarioComInss >= 1903.99) {
  iR = 0.075, deducaoIr = 142.8;
} else if (salarioComInss <= 3751.05 && salarioComInss >= 2826.66) {
  iR = 0.15, deducaoIr = 354.80;
} else if (salarioComInss <= 4664.68 && salarioComInss >= 3751.06) {
  iR = 0.225, deducaoIr = 636.13;
} else {
  iR = 0.275, deducaoIr = 869.36;
}

console.log("Salario base=",salarioBase)

