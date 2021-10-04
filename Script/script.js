const openBtn = document.querySelector("#menuBtn");
const closeBtn = document.querySelector("#closeBtn");
const mobMenu = document.querySelector("#mob-navigation");

function createOpenClass(element, className) {
  element.classList.add(className);
};
function createCloseClass(element, className){
    element.classList.remove(className);
}

openBtn.addEventListener('click', ()=> createOpenClass(mobMenu, 'menu-open'));
closeBtn.addEventListener('click', ()=> createCloseClass(mobMenu, 'menu-open'));

const navBtns = document.querySelectorAll(".nav-btn");
navBtns.forEach((button) => {
  button.addEventListener("click", () => createCloseClass(mobMenu, "menu-open"));
});