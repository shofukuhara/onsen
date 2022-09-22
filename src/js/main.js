const logo = document.querySelector(".h__logo");
const tel = document.querySelector(".h__tel");
const link = document.querySelector(".h__link");
let windowHeight = window.innerHeight;
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

const concept = document.querySelector(".concept__img");
const inn = document.querySelector(".inn__img");
const spring = document.querySelector(".spring__img");
const meal = document.querySelector(".meal__img");
let one = false;

const fade = (target) => {
  const position = target.getBoundingClientRect().top;
  if (position <= windowHeight && one !== true) {
    once = true;
    target.classList.add("fade");
  }
};

window.addEventListener("scroll", () => {
  fade(concept);
  fade(inn);
  fade(spring);
  fade(meal);
});
