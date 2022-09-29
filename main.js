import './style.css';
const inlogForm = document.querySelector("#login-content");
console.log(inlogForm);

const loginBtn = document.getElementById("loginButton-1")
console.log(loginBtn);

inlogForm.onsubmit = function(event){
event.preventDefault();
    console.log("submitted");
}