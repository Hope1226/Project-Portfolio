const contactForm = document.getElementById('contactMeForm');
const emailInt = document.querySelector('#userEmail');
const errMessage = document.querySelector("#errorMessage");

contactForm.addEventListener('submit', (event)=> {
  if(emailInt.value !== emailInt.value.toLowerCase()) {
    event.preventDefault();
    errMessage.innerHTML = " * Please make sure all letters in email are lowercase";
    errMessage.setAttribute('style', 'color: red; font-size: 10px;font-family: "Inter", sans-serif; ');
    emailInt.setAttribute('style', 'border-bottom: 1px solid red;');
  }

})