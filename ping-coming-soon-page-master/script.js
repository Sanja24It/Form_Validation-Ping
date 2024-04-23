let btn = document.querySelector(".btn");
let mess_error_p = document.querySelector(".mess_error");
let input_err = document.querySelector(".input");
let form = document.querySelector(".form");
const emailLetter =
  /^[a-zA-Z0-9.!$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btn.addEventListener("click", function () {
  if (input_err.value !== emailLetter) {
    input_err.style.borderColor = "#ff5263";
    form.innerHTML += ` <span class="formMessage"><p class="mess_error ">Please provide a valid email address</span></p>`;
  }
});
