const logo = document.querySelector(".h__logo");
const tel = document.querySelector(".h__tel");
const link = document.querySelector(".h__link");
let windowHeight = document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
  if (this.scrollY > windowHeight) {
    logo.classList.add("scroll");
    tel.classList.add("scroll");
    link.classList.add("link");
  } else {
    logo.classList.remove("scroll");
    tel.classList.remove("scroll");
    link.classList.remove("link");
  }
});
