import {getToken} from "./utils/storage";
import {CREATE_POST_URL} from "./settings/api";

const createForm = document.querySelector("#create-form");

const title = document.querySelector("#title");

const tError = document.querySelector("#title-error");

const message = document.querySelector("#post-message");

const mError = document.querySelector("#message-error");

const media = document.querySelector("#media-post");

const URL = CREATE_POST_URL;

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
}

let messageValid = false;

if (message.value.trim().length > 10){
mError.classList.add("hidden")
messageValid=true;}
else {
    mError.classList.remove("hidden")
}


let formValid = messageValid && titleValid;

if(formValid){
    const createdData = {
        "title": title.value,
        "body": message.value,
    }
    const token = getToken();

    (async function makeAPost() {
        const response = await fetch(URL, {
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
location.href = "/homepage.html";
}
else {
    const generalError = await response.json();
    await Promise.reject(new Error("Creating Post Failed"))
}
createForm.reset();
    })().catch(generalError => {
    });
}
else {
    console.log("Form Is Not Valid")
}
})