import {USER_LOGIN_URL} from "./settings/api";
import {validateEmail} from "./utils/validation";
import {saveUser, saveToken} from "./utils/storage";


const inlogForm = document.querySelector("#login-content");
console.log(inlogForm);

const loginBtn = document.getElementById("loginButton-1")
console.log(loginBtn);

const emailPlace = document.getElementById("email")
console.log(emailPlace);

const emailError = document.getElementById("mail-error")
console.log(emailError);

const mailValitation = document.getElementById("email-valitation")
console.log(mailValitation);

const passwordPlace = document.getElementById("password-input")
console.log(passwordPlace);

const passwordError = document.getElementById("password-error")
console.log(passwordError);


if (inlogForm) {
inlogForm.onsubmit = function(event){
event.preventDefault();
    console.log("button pressed");

var ifEmail = false;
if (emailPlace.value.trim().length > 0){
    emailError.classList.add("hidden")
    ifEmail = true;
    
}
else {
    emailError.classList.remove("hidden")
}
}
/*
var ifEmailValid = false;
if (emailPlace.value.trim().length && validateEmail(emailPlace.value) === true) {
mailValitation.classList.add("hidden")
ifEmailValid=true;
}
else if(emailPlace.value.trim().length && validateEmail(emailPlace.value) !== true) {
//else if (validateEmail(emailPlace.value !== true)){
mailValitation.classList.remove("hidden")

}
*/
let ifEmailValid = false;

    if (emailPlace.value.trim().length && validateEmail(emailPlace.value) === true) {

        mailValitation.classList.add("hidden");

        ifEmailValid = true;

    } else if (emailPlace.value.trim().length && validateEmail(emailPlace.value) !== true) {

        mailValitation.classList.remove("hidden");

    }



}

