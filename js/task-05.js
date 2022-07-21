const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const onInputTarget = (event) => {
  output.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    output.textContent = "Anonymous";
  }
};
textInput.addEventListener("input", onInputTarget);
