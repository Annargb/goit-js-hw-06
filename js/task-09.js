function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const colorEl = document.querySelector('.color');
const buttonChange = document.querySelector('.change-color');

buttonChange.addEventListener('click', changeColor);

function changeColor(event) {
  colorEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = colorEl.textContent;
}
