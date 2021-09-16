function createState() {
  let states = document.getElementById('state');
  let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let index = 0; index < stateOptions.length; index += 1) {
    let createOptions = document.createElement('option');
    states.appendChild(createOptions).innerText = stateOptions[index];
    states.appendChild(createOptions).value = stateOptions[index];
  }
}
//formula de criar estados retirado do https://app.betrybe.com/course/fundamentals/html-e-css-forms-flexbox-e-responsivo/html-css-forms-gabarito/solutions/90e2949b-be3e-4901-b17d-09266c299d51/conteudos/6333905a-2f94-4988-aef1-082e2693deef?use_case=calendar

window.onload = () => {
  createState();
}