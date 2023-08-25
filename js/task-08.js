const formEl = document.querySelector('.login-form');

const submitForm = event => {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (!email.length || !password.length) {
    alert('All fields must be filled!');
  } else {
    const currentFormValues = {
      email,
      password,
    };
    console.log(currentFormValues);
    form.reset();
  }
};

formEl.addEventListener('submit', submitForm);
