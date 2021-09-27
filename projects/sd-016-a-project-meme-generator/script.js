const memeTextField = document.getElementById('meme-text');
const textInput = document.getElementById('text-input');
const memeImage = document.getElementById('meme-image');
const memeInsert = document.getElementById('meme-insert');
const memeImgContainer = document.getElementById('meme-image-container');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const memeSuggenstion = document.getElementById('memes-suggestions');

// https://developer.mozilla.org/en-US/docs/Web/API/FileReader
const reader = new FileReader();

function updateText() {
  memeTextField.textContent = textInput.value;
}

textInput.addEventListener('keyup', updateText);

function imageLoad() {
  // pega o arquivo enviado e guarda nesta variavel
  const userImage = memeInsert.files[0];

  // Usa a função do objeto leitor de arquivos, que lê o arquivo, e consegue reaproveita-lo para usar o arquivo como uma URL
  reader.readAsDataURL(userImage);

  // Após leitura da imagem (evento load), a função de callback define o valor do src da imagem de prévia com o valor do resultado da leitura do leitor de arquivos
  reader.addEventListener('load', (load) => {
    memeImage.src = load.target.result;
  });
}
/* imageLoad retirada a ideia do site https://codepen.io/vanessametonini/pen/zLmzNY */

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
memeInsert.addEventListener('change', imageLoad);

function applyFireBorder() {
  memeImgContainer.style.border = '3px dashed red';
}
fireButton.addEventListener('click', applyFireBorder);

function applyWaterBorder() {
  memeImgContainer.style.border = '5px double blue';
}
waterButton.addEventListener('click', applyWaterBorder);

function applyEarthBorder() {
  memeImgContainer.style.border = '6px groove green';
}
earthButton.addEventListener('click', applyEarthBorder);

memeSuggenstion.addEventListener('click', (event) => {
  memeImage.src = event.target.src;
});
