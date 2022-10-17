import {USER_LOGIN_URL} from "./settings/api";
import {validateEmail} from "./utils/validation";
import {saveUser, saveToken} from "./utils/storage";


const inlogForm = document.querySelector("#login-content");
const loginBtn = document.getElementById("loginButton-1");
const emailPlace = document.getElementById("email");
const emailError = document.getElementById("mail-error");
const mailValitation = document.getElementById("email-valitation");
const passwordPlace = document.getElementById("password-input");
const passwordError = document.getElementById("password-error");
const generalErrorMessage = document.querySelector("#general-error-message");

if (inlogForm) {
inlogForm.onsubmit = function(event){
event.preventDefault();


var ifEmail = false;
if (emailPlace.value.trim().length > 0){
    emailError.classList.add("hidden")
    ifEmail = true;
    
}
else {
    emailError.classList.remove("hidden")
}


let ifEmailValid = false;

    if (emailPlace.value.trim().length && validateEmail(emailPlace.value) === true) {

        mailValitation.classList.add("hidden");

        ifEmailValid = true;

    } else if (emailPlace.value.trim().length && validateEmail(emailPlace.value) !== true) {

        mailValitation.classList.remove("hidden");

    }


let ifPassword = false;
if (passwordPlace.value.trim().length >=6) {
    passwordError.classList.add("hidden");
    ifPassword = true;
} else {
    passwordError.classList.remove("hidden");
}
let ifValidForm = ifEmail && ifEmailValid && ifPassword;

if (ifValidForm) {
    const validationData = {
        "email": emailPlace.value,
        "password": passwordPlace.value
    }

const LOGIN_ENDPOINT = `${USER_LOGIN_URL}`;

(async function logInTheUser() {
    const response = await fetch(LOGIN_ENDPOINT,{
        method: "POST",
        headers:{ "Content-Type": "application/json"},
        body: JSON.stringify(validationData)
});
if (response.ok) {
    const data = await response.json();
    saveToken(data.accessToken);
    const saveTheUser = {
        name: data.name,
        email: data.email
    }
    console.log(saveTheUser);
    saveUser(saveTheUser);
    location.href = "/homepage.html"
}
else {
    const tokenValidErr = await response.json();
         const tokenValidErrMessage = `A Validation Error Happened: ${tokenValidErr.message}`;
               
       throw new Error(tokenValidErrMessage);
}})().catch(tokenValidErr =>{
    generalErrorMessage.innerHTML = `Sorry !! ${tokenValidErr.message}`
});
}else {
    
}
}};
