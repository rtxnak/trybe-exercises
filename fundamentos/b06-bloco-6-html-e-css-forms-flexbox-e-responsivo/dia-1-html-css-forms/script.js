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
    dataErrorRenderingClean();
    if (validateData() === 0) {
      formRendering();
    } else {
      formErrorRendering();
      dataErrorRendering();
    }
  });
}

function homeTypeCheck() {
  let homeTypeChecked = document.querySelector('[name=home-type]:checked');
  let homeTypeLength = 0;
  if (homeTypeChecked === null) {
    homeTypeLength = 0;
  } else {
    homeTypeLength = homeTypeChecked.value
  }
  return homeTypeLength;
}

function validateData() {
  const name = document.querySelector('[name=user-name]');
  const nameMaxL = 40;
  const email = document.querySelector('[name=user-email]');
  const emailMaxL = 50;
  const cpf = document.querySelector('[name=user-cpf]');
  const cpfMaxL = 11;
  const adress = document.querySelector('[name=user-adress]');
  const adressMaxL = 200;
  const city = document.querySelector('[name=user-city]');
  const cityMaxL = 28;
  const state = document.querySelector('[name=user-state]');
  const stateMaxL = 99999;
  const homeType = homeTypeCheck();
  const cvResume = document.querySelector('[name=curriculum-resume]');
  const cvResumeMaxL = 1000;
  const post = document.querySelector('[name=user-post]');
  const postMaxL = 40;
  const postResume = document.querySelector('[name=user-post-resume]');
  const postResumeMaxL = 500;
  const starDate = document.querySelector('[name=user-start-date]');
  const starDateMaxL = 99999;

  let arrayContent = [name, email, cpf, adress, city, state, cvResume, post, postResume, starDate];

  let arrayContentMaxLength = [nameMaxL, emailMaxL, cpfMaxL, adressMaxL, cityMaxL, stateMaxL, cvResumeMaxL, postMaxL, postResumeMaxL, starDateMaxL];

  let counter = 0;
  for (let index = 0; index < arrayContent.length; index += 1) {
    if (arrayContent[index].value.length === 0 || arrayContent[index] > arrayContentMaxLength[index]) {
      counter += 1;
    }
  }
  if (homeType === 0) {
    counter += 1;
  }
  console.log(counter);
  return counter;
}

function validateDateFormat() {
  const date = document.querySelector('#start-date').value;
  const checkData = moment(date, "DD/MM/YYYY", true);
  return checkData.isValid();
}

function validateDateInfo() {
  let date = document.querySelector('#start-date');
  let splitted = date.value.split('/');
  let day = splitted[0];
  let month = splitted[1];
  let year = splitted[2];
  let erroCounter = 0;

  if (day < 01 || day > 31) {
    erroCounter += 1;
  }

  if (month < 01 || month > 12) {
    erroCounter += 1;
  }

  if (year < 1) {
    erroCounter += 1;
  }
  return erroCounter;
}

function formRendering() {

  const name = document.querySelector('[name=user-name]');
  const email = document.querySelector('[name=user-email]');
  const cpf = document.querySelector('[name=user-cpf]');
  const adress = document.querySelector('[name=user-adress]');
  const city = document.querySelector('[name=user-city]');
  const state = document.querySelector('[name=user-state]');
  const homeType = document.querySelector('[name=home-type]:checked');
  const cvResume = document.querySelector('[name=curriculum-resume]');
  const post = document.querySelector('[name=user-post]');
  const postResume = document.querySelector('[name=user-post-resume]');
  const starDate = document.querySelector('[name=user-start-date]');

  let arrayContent = [name, email, cpf, adress, city, state, homeType, cvResume, post, postResume, starDate];

  let form = document.querySelector('#curriculum-form');
  let cvSection = document.createElement('div');
  cvSection.id = "user-cv-section";
  let cvInfo = document.createElement('fieldset');
  cvInfo.id = "user-cv-info";
  form.appendChild(cvSection);
  cvSection.appendChild(cvInfo);

  for (let index = 0; index < arrayContent.length; index += 1) {
    let p = document.createElement('p');
    p.innerText = arrayContent[index].value;
    cvInfo.appendChild(p);
  }
}

function formErrorRendering() {
  let form = document.querySelector('#curriculum-form');
  let cvSection = document.createElement('div');
  cvSection.id = "user-cv-section";
  let cvInfo = document.createElement('fieldset');
  cvInfo.id = "cv-info";
  form.appendChild(cvSection);
  cvSection.appendChild(cvInfo);
  let p = document.createElement('p');
  p.className = "form-error";
  p.innerText = 'Dados do fomulário estão invalidos';
  cvInfo.appendChild(p)
}

function dataErrorRendering() {
  if (validateDateFormat() === false || validateDateInfo() !== 0) {
    cvInfo = document.querySelector('#cv-info');
    let p = document.createElement('p');
    p.className = "form-error";
    p.innerText = 'Data invalida';
    cvInfo.appendChild(p)
  }
}

function dataErrorRenderingClean() {
  let form = document.querySelector('#curriculum-form');
  if (form.length > 16) {
    let errorErase = document.querySelector('#user-cv-section');
    errorErase.remove();
  }
}

window.onload = () => {
  createState();
  submitButtonAction();
}
