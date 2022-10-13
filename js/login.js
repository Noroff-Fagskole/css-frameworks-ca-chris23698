import { USER_LOGIN_URL } from './settings/api';
import { validateEmail } from './utils/validation';
import { saveUser, saveToken } from './utils/storage';


const inlogForm = document.querySelector('#login-content');

const loginBtn = document.getElementById('loginButton-1');

const emailPlace = document.getElementById('email');

const emailError = document.getElementById('mail-error');

const mailValidation = document.getElementById('email-validation');

const passwordPlace = document.getElementById('password-input');

const passwordError = document.getElementById('password-error');


if (inlogForm) {
  inlogForm.onsubmit = function(event) {
    event.preventDefault();

    let ifEmail = false;
    if (emailPlace.value.trim().length > 0) {
      emailError.classList.add('hidden');
      ifEmail = true;
    } else {
      emailError.classList.remove('hidden');
    }
  };
  let ifEmailValid = false;

  if (emailPlace.value.trim().length && validateEmail(emailPlace.value) === true) {

    mailValidation.classList.add('hidden');
    ifEmailValid = true;
  } else if (emailPlace.value.trim().length && validateEmail(emailPlace.value) !== true) {

    mailValidation.classList.remove('hidden');
  }
}
