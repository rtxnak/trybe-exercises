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

function submitButtonAction() {
  const submitButton = document.querySelector('.submit-button');
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    if(validateData() === 0) {
      alert('ok');
    } else {
      alert('Esta faltando dados');
    }
  });
}

function homeTypeCheck() {
  let homeTypeChecked = document.querySelector('[name=home-type]:checked');
  let homeTypeLength = 0
  if (homeTypeChecked === null) {
    homeTypeLength = 0;
  } else {
    homeTypeLength = homeTypeChecked.value.length
  }
  return homeTypeLength;
}

function validateData() {
  let name = document.querySelector('[name=user-name]').value.length;
  let email = document.querySelector('[name=user-email]').value.length;
  let cpf = document.querySelector('[name=user-cpf]').value.length;
  let adress = document.querySelector('[name=user-adress]').value.length;
  let city = document.querySelector('[name=user-city]').value.length;
  let state = document.querySelector('[name=user-state]').value.length;
  let homeType = homeTypeCheck();
  let cvResume = document.querySelector('[name=curriculum-resume]').value.length;
  let post = document.querySelector('[name=user-post]').value.length;
  let postResume = document.querySelector('[name=user-post-resume]').value.length;
  let starDate = document.querySelector('[name=user-start-date]').value.length;

  let arrayContent = [name, email, cpf, adress, city, state, homeType, cvResume, post, postResume, starDate]
  let counter = 0;

  for (let index = 0; index < arrayContent.length; index += 1) {
    if (arrayContent[index] === 0) {
      counter += 1;
    }
  } return counter;
}

window.onload = () => {
  createState();
  submitButtonAction();
}