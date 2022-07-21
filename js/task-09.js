function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const buttonRef = document.querySelector(".change-color");
const spanColorRef = document.querySelector("p span");
buttonRef.addEventListener("click", () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanColorRef.textContent = getRandomHexColor();
});
