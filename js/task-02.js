const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingradientsListEl = document.querySelector('#ingredients');
// console.log(ingradientsListEl);

ingredients.forEach(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  console.log(item);
  ingradientsListEl.append(item);
});
