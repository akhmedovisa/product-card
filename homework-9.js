import Modal from "./Modal.js";
import Form from "./Form.js";

const registerForm = new Form("registerForm");
const registerModal = new Modal("modal", "overlay");

// Задание 4

const emailForm = new Form('email-form');
emailForm.form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(emailForm.getValues());
  emailForm.reset();
});

// Задание 5 и 6

const openModalWindowBtn = document.getElementById("openModalBtn");

let user;

openModalWindowBtn.addEventListener("click", () => {
  registerModal.open();
});

registerForm.form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!registerForm.isValid()) {
    alert("Форма заполнена неправильно");
    return;
  };
  const password = registerForm.getValues().password;
  const repeatPassword = registerForm.getValues().repeatPassword;

  if (password !== repeatPassword) {
    alert("Пароли не совпадают");
    return;
  };
  
  user = { ...registerForm.getValues(), createdOn: new Date() };
  
  console.log(user);

  alert("Регистрация успешно завершена!");

  registerModal.close();
  registerForm.reset();
});