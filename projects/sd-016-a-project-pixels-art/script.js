const main = document.querySelector('main');

function randomRGB() {
  const r = Math.ceil(Math.random() * 256);
  const g = Math.ceil(Math.random() * 256);
  const b = Math.ceil(Math.random() * 256);

  return [r, g, b];
}
const color1 = `rgb(${randomRGB()})`;
const color2 = `rgb(${randomRGB()})`;
const color3 = `rgb(${randomRGB()})`;
const colors = ['black', color1, color2, color3];

function addColorPalette() {
  const colorPallete = document.getElementById('color-palette');
  const colorLength = colors.length - 1;
  for (let index = 0; index <= colorLength; index += 1) {
    const listElement = document.createElement('div');
    listElement.className = 'color';
    listElement.style.backgroundColor = colors[index];
    colorPallete.appendChild(listElement);
  }
}

function pixelFrameCreator(pixelHW) {
  const pixelFrameSection = document.createElement('section');
  pixelFrameSection.id = 'pixel-board';
  main.appendChild(pixelFrameSection);

  for (let index = 0; index < pixelHW; index += 1) {
    const pixelFrameLine = document.createElement('div');
    pixelFrameLine.className = 'pixel-line';
    pixelFrameSection.appendChild(pixelFrameLine);

    for (let i = 0; i < pixelHW; i += 1) {
      const pixelSquare = document.createElement('div');
      pixelSquare.className = 'pixel';
      pixelFrameLine.appendChild(pixelSquare);
      pixelSquare.style.backgroundColor = 'white';
    }
  }
}

function blackSelected() {
  const blackColorPalette = document.getElementsByClassName('color');
  blackColorPalette[0].className = 'color selected';
}

function deleteSelectColorOnPalette() {
  const ColorPalette = document.getElementsByClassName('color');
  for (let index = 0; index < ColorPalette.length; index += 1) {
    ColorPalette[index].className = 'color';
  }
}

function selectColorOnPalette() {
  const colorPallete = document.getElementById('color-palette');
  colorPallete.addEventListener('click', (clicked) => {
    const event = clicked;
    deleteSelectColorOnPalette();
    event.target.className = 'color selected';
  });
}

function framePainting() {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.addEventListener('click', (clicked) => {
    const event = clicked;
    const currentSelected = document.querySelector('.selected');
    const currentColor = currentSelected.style.backgroundColor;
    if (event.target.className === 'pixel') {
      event.target.style.backgroundColor = currentColor;
    }
  });
}

function clearButton() {
  const buttonCreation = document.createElement('button');
  buttonCreation.id = 'clear-board';
  buttonCreation.innerText = 'Limpar';
  main.appendChild(buttonCreation);
  buttonCreation.addEventListener('click', () => {
    const ColorPalette = document.querySelectorAll('.pixel');
    for (let index = 0; index < ColorPalette.length; index += 1) {
      ColorPalette[index].style.backgroundColor = 'white';
    }
  });
}

function pixelInputBox() {
  const inputCreation = document.createElement('input');
  inputCreation.id = 'board-size';
  inputCreation.min = 1;
  inputCreation.type = 'number';
  main.appendChild(inputCreation);
  const inputButtonCreation = document.createElement('button');
  inputButtonCreation.id = 'generate-board';
  inputButtonCreation.innerText = 'VQV';
  main.appendChild(inputButtonCreation);
}

function deleteCurrentFrame() {
  const currentFrame = document.getElementById('pixel-board');
  currentFrame.remove();
}

function numberInput() {
  const inputButton = document.querySelector('#generate-board');
  inputButton.addEventListener('click', () => {
    const input = document.getElementById('board-size').value;
    if (input === '') {
      alert('Board inválido!');
    } else if (input > 50) {
      deleteCurrentFrame();
      pixelFrameCreator(50);
    } else if (input < 5) {
      deleteCurrentFrame();
      pixelFrameCreator(5);
    } else {
      deleteCurrentFrame();
      pixelFrameCreator(input);
    }
    framePainting();
  });
}

function buttonSectionCreate() {
  const input = document.querySelector('#board-size');
  const inputButton = document.querySelector('#generate-board');
  const clarButton = document.querySelector('#clear-board');
  const buttonSection = document.createElement('section');
  buttonSection.id = 'buttons';
  main.appendChild(buttonSection);
  buttonSection.appendChild(input);
  buttonSection.appendChild(inputButton);
  buttonSection.appendChild(clarButton);
}

window.onload = function onload() {
  blackSelected();
};
addColorPalette();
pixelFrameCreator(5);
deleteSelectColorOnPalette();
selectColorOnPalette();
framePainting();
pixelInputBox();
numberInput();
clearButton();
buttonSectionCreate();
