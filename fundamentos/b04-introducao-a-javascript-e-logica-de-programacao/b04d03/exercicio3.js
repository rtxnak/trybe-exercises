//3- Agora inverta o lado do triângulo. 

let quadrado = "";
let n = 4

// for (let index = 1; index <= n; index += 1) {
//   for (let index = 1; index <= n; index += 1) {
//     if (index < n) {
//       quadrado.push("V");
//     } else {
//       quadrado.push("*")
//     }
//   }
// }
// console.log(quadrado)

for (let index = 1; index <= n; index += 1) {
  for (let i = 1; i <= n; i += 1) {
    if (index <= n - i) {
      quadrado += 'M';
    } else {
      quadrado += '*';
    }
  } console.log(quadrado)
}



