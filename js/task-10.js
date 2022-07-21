function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createdDivs = [];
const refs = {
  input: document.querySelector("div input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

let firstWidth = 20;
let firstHeight = 20;
let amount = 0;
const createBoxes = (amount) => {
  for (let i = 1; i <= amount; i += 1) {
    firstWidth += 10;
    firstHeight += 10;
    const newDiv = document.createElement("div");
    newDiv.style.width = `${firstWidth}px`;
    newDiv.style.height = `${firstHeight}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    refs.boxes.append(newDiv);
  }
};
refs.input.addEventListener("input", (event) => {
  const secondAmount = 0;
  console.log(event.currentTarget.value);
  secondAmount = event.currentTarget.value;
  return secondAmount;
});

refs.createBtn.addEventListener("click", createBoxes(amount));
// console.log(createBoxes(10));
// const numbers = 10;
