const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const allEl = [];

const oneEl = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");
  allEl.push(itemEl);
});
// console.log(...allEl);
const list = document.querySelector("#ingredients");
list.append(...allEl);
// console.log(list);
