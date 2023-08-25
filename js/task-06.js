const input = document.querySelector('#validation-input');
const validationNumbers = Number(input.dataset.length);

const inputOutFocus = event => {
  if (event.currentTarget.value.length === validationNumbers) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
};

input.addEventListener('blur', inputOutFocus);
