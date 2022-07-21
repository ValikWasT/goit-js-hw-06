const textRef = document.querySelector("#text");
const headRef = document.querySelector("head");
const onInputRange = document.querySelector("#font-size-control");
onInputRange.addEventListener("input", (event) => {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
});
