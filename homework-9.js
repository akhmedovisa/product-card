// Задание 4

const emailForm = document.querySelector("#email-form");
emailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  emailForm.reset();
});

// Задание 5 и 6

const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const form = document.getElementById("registerForm");

let user = null;

openBtn.addEventListener("click", () => {
  modal.classList.add("modal-showed");
  overlay.style.display = "block";
});

function closeModal() {
  modal.classList.remove("modal-showed");
  overlay.style.display = "none";
};

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (form.checkValidity() === false) {
    alert("Форма заполнена неправильно");
    return
  };

  const formData = new FormData(form);
  const password = btoa(formData.get("password"));
  const repeatPassword = btoa(formData.get("repeatPassword"));

  if (password !== repeatPassword) {
    alert("Пароли не совпадают");
    return;
  };

  user = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    birthDate: formData.get("birthDate"),
    login: formData.get("login"),
    password: password,
    createdOn: new Date()
  };

  console.log(user);

  alert("Регистрация успешно завершена!");

  closeModal();
  form.reset();
});