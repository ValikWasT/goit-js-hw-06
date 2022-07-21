const form = document.querySelector(".login-form");
const formValue = {
  email: "",
  password: "",
};
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Помилка! Форма не заповнена.");
  } else {
    formValue.email = email.value;
    formValue.password = password.value;
    console.log(formValue);
    event.currentTarget.reset();
  }
});
