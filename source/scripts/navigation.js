const navList = document.querySelector(".navigation__list");
const navToggle = document.querySelector(".header__toggle");

const initNavList = () => {
  if (navList && navToggle) {
    navToggle.addEventListener("click", () => {
      navList.classList.toggle("navigation__list--opened");
      navToggle.classList.toggle("header__toggle--opened");
    });
  }
};

export default initNavList;
