const valueEl = document.querySelector("#value");
valueEl.textContent = 0;

const onBtndecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const onBtnIncrement = document.querySelector(
  'button[data-action="increment"]'
);

const onDecrementFn = () => {
  valueEl.textContent -= 1;
};

const onIncrementFn = () => {
  valueEl.textContent -= -1;
};

onBtndecrement.addEventListener("click", onDecrementFn);
onBtnIncrement.addEventListener("click", onIncrementFn);
