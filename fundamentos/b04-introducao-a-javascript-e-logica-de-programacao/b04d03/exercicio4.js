//4- Depois, faça uma pirâmide com n asteriscos de base:

let n = 6;

for (let i = 1; i <= n; i += 2) {
  let line = '';
  for (let s = 0; s < Math.ceil((n - i) / 2); s++) {
    line += ' ';
  }
  for (let c = 0; c < i; c++) {
    line += '*';
  }
  console.log(line);
}
