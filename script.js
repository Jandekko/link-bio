/*definindo as variaveis do login e registar*/
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClouse = document.querySelector(".icon-close");

/*As funcionalidades do login e registar*/
registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClouse.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
