const value = document.querySelector('#value');
let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const onDecrementBtnClick = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const onIncrementBtnClick = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);
