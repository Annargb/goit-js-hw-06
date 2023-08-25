const input = document.querySelector('#name-input');

const output = document.querySelector('#name-output');

const changeOutput = event => {
  output.textContent = event.currentTarget.value;
  if (!event.currentTarget.value.length) {
    output.textContent = 'Anonymous';
  }
};

input.addEventListener('input', changeOutput);
