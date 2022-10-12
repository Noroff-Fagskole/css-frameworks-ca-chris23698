import './style.css';
import createHeaderBar from "./js/headers/header.js";
import {getUserName} from "./js/utils/storage.js";
import {clearStorage} from "./js/utils/storage";
createHeaderBar();
const userName = getUserName();
const welcome = document.querySelector("#welcome-name");



createHeaderBar();
const outBtn = document.querySelector("#logout-btn");

if (outBtn) {
    outBtn.addEventListener("click", function () {
        clearStorage();
        window.location.replace("/index.html");
    })
}
const profileBtn = document.querySelector("#profile-btn");

if (profileBtn) {
    profileBtn.addEventListener("click", function () {
        window.location.replace("/profile.html");
    })
}
const createBtn = document.querySelector("#create-btn");

if (createBtn) {
  createBtn.addEventListener("click", function () {
      window.location.replace("/createPost.html");
  })
}




 
/*
welcome.innerHTML = `
        <h1
            id="welcome-name"
            class="text-white text-3xl mb-10"
          >
            Welcome back, ${userName}!
          </h1>
        `*/