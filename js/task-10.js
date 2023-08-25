function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const box = document.querySelector('#boxes');
const input = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

function createBoxes(amount) {
  let width = 20;
  let height = 20;
  const elements = [];
  for (let i = 0; i < amount; i += 1) {
    width += 10;
    height += 10;

    const div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;

    elements.push(div);
  }
  return box.append(...elements);
}

btnCreate.addEventListener('click', createElement);
function createElement(event) {
  createBoxes(input.value);
}

btnDestroy.addEventListener('click', destroyElement);
function destroyElement() {
  box.innerHTML = '';
}
