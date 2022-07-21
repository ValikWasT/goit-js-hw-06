const onInputRef = document.querySelector("#validation-input");
onInputRef.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length !== Number(onInputRef.dataset.length)) {
    onInputRef.classList.add("invalid");
  } else {
    onInputRef.classList.remove("invalid");
    onInputRef.classList.add("valid");
  }
});
