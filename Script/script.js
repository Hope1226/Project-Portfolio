const openBtn = document.querySelector("#menuBtn");
const closeBtn = document.querySelector("#closeBtn");
const mobMenu = document.querySelector("#mob-navigation");

function createOpenClass(element, className) {
  element.classList.add(className);
};

openBtn.addEventListener("click", ()=> createOpenClass(mobMenu, 'menu-open'));