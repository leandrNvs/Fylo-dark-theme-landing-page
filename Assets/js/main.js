const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const helper = document.querySelector(".form__helper");
  const reg = /^\S+@\S+\.\S+$/;
  const email = this.email.value;

  if (!reg.test(email)) {
    helper.textContent = "Please enter a valid email.";
    return;
  } else {
    helper.textContent = "";
  }
});
