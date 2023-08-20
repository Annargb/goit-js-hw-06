const listEl = document.querySelector('#categories');
console.log(`Number of categories: ${listEl.children.length}`);

// const listArrayEl = [...listEl.children];
// console.log(listArrayEl);
// listArrayEl.forEach(item => {
//   console.log(`Category: ${item.children[0].textContent}`);
// });

const itemEl = document.querySelectorAll('.item');

itemEl.forEach(item => {
  const title = item.querySelector('h2');
  console.log(`Category: ${title.textContent}`);
  const listItemEl = item.querySelector('ul');
  console.log(`Elements: ${listItemEl.children.length}`);
});
