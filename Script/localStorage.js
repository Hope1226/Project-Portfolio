const userInfoForm = document.querySelector("#contactMeForm");
const firstName = document.querySelector("#userFirstName");
const lastName = document.querySelector("#userLastName");
const userEmail = document.querySelector('#userEmail');
const userMessage = document.querySelector('#message');


let user = {};

function storeUserData(event) {
  event.preventDefault();


}


userInfoForm.addEventListener('submit', storeUserData(user));

let userData = JSON.stringify(user);

localStorage.setItem('userData', userData);
 const dataFromStorage = localStorage.getItem('userData');


