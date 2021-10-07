const userInfoForm = document.querySelector("#contactMeForm");
const firstName = document.querySelector("#userFirstName");
const lastName = document.querySelector("#userLastName");
const userEmail = document.querySelector('#userEmail');
const userMessage = document.querySelector('#message');


let user = {};

function storeUserData(obj) {
  obj.userName = firstName.value;
  obj.userLastName = lastName.value;
  obj.userEmail = userEmail.value;
  obj.userTxtMsg = userMessage.value;
}


userInfoForm.addEventListener('submit', storeUserData(user));

let userData = JSON.stringify(user);

localStorage.setItem('userData', userData);


