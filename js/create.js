import {getToken} from "./utils/storage";
import {CREATE_POST_URL} from "./settings/api";

const createForm = document.querySelector("#create-form");

const title = document.querySelector("#title");

const tError = document.querySelector("#title-error");

const message = document.querySelector("#post-message");

const mError = document.querySelector("#message-error");

//const URL = CREATE_POST_URL;

createForm.addEventListener("submit", function(event) {
event.preventDefault();
let  titleValid = false;
if (title.value.trim().length >0){
    tError.classList.add("hidden");
    titleValid=true;
    console.log("Title Valid");
}
else {
tError.classList.remove("hidden");
console.log("The Title Is Not Valid Or Missing");
}

let messageValid = false;

if (message.value.trim().length > 10){
mError.classList.add("hidden")
messageValid=true;
console.log("Message Is Valid")}
else {
    mError.classList.remove("hidden")
    console.log("Message Is Not Valid")
}

let formValid = messageValid && titleValid;

if(formValid){
    console.log(title.value);
    console.log(message.value)
    const createdData = {
        "title": title.value,
        "body": message.value
    }
    console.log(createdData);
    const token = getToken();
    console.log(token);
   console.log(CREATE_POST_URL);

    (async function makeAPost() {
        const response = await fetch(CREATE_POST_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(createdData)
})
console.log(response)
if(response.ok) {
    const formData = await response.json();
    console.log("post created: ", formData);
location.href = "/homepage.html";
}
else {
    const generalError = await response.json();
    await Promise.reject(new Error("Creating Post Failed"))
}
createForm.reset();
    })().catch(generalError => {
        console.log(generalError)
    });
}
else {
    console.log("Form Is Not Valid")
}







})