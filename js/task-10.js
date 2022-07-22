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

refs.createBtn.addEventListener("click", () => {
  for (let i = 1; i <= refs.input.value; i += 1) {
    firstWidth += 10;
    firstHeight += 10;
    const newDiv = document.createElement("div");
    newDiv.style.width = `${firstWidth}px`;
    newDiv.style.height = `${firstHeight}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.classList.add("for-remove");
    createdDivs.push(newDiv);
    // refs.boxes.append(newDiv);
  }
  refs.boxes.append(...createdDivs);
});

// console.log(refs.boxesToRemove);
// const boxesToRemove = refs.boxes.children;
refs.destroyBtn.addEventListener("click", () => {
  const boxesToRemove = document.querySelectorAll(".for-remove");
  boxesToRemove.remove();
});
