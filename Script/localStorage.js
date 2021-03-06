const userInfoForm = document.querySelector('#contactMeForm');
const firstName = document.querySelector('#userFirstName');
const lastName = document.querySelector('#userLastName');
const userEmail = document.querySelector('#userEmail');
const userMessage = document.querySelector('#message');

firstName.value = '';
lastName.value = '';
userEmail.value = '';
userMessage.value = '';

function storeUserData() {
  const user = {
    userFirstName: firstName.value,
    userLastName: lastName.value,
    userEmaiAdd: userEmail.value,
    userTxtMsg: userMessage.value,
  };

  localStorage.setItem('userData', JSON.stringify(user));
}

userInfoForm.addEventListener('focusout', storeUserData);

const userObject = JSON.parse(localStorage.getItem('userData'));

firstName.value = userObject.userFirstName;
lastName.value = userObject.userLastName;
userEmail.value = userObject.userEmaiAdd;
userMessage.value = userObject.userTxtMsg;
