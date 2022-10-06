import './style.css';
import createHeaderBar from "./js/headers/header.js";
import {getUserName} from "./js/utils/storage.js";
createHeaderBar();
const userName = getUserName();
const welcome = document.querySelector("#welcome-name");




/*
welcome.innerHTML = `
        <h1
            id="welcome-name"
            class="text-white text-3xl mb-10"
          >
            Welcome back, ${userName}!
          </h1>
        `*/