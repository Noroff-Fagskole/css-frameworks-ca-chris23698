import './style.css';
import createHeaderBar from "./js/headers/header.js";
import { getUserName } from "./js/utils/storage.js";
import { clearStorage } from "./js/utils/storage";

createHeaderBar();

const userName = getUserName();
const welcome = document.querySelector("#welcome-name");

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

const menuBtn = document.querySelector("#menu-btn");

function Menu(menuBtn) {
  console.log("here")
  let list = document.querySelector('ul');
  menuBtn.name === 'menu'
    ? ((menuBtn.name = 'close'),
      list.classList.add('top-[80px]'),
      list.classList.add('opacity-100'))
    : ((menuBtn.name = 'menu'),
      list.classList.remove('top-[80px]'),
      list.classList.remove('opacity-100'));
}

menuBtn.addEventListener("click", Menu);

window.addEventListener(
  'DOMContentLoaded',
  () => {
    const overlay =
      document.querySelector('#overlay');
    const openModal =
      document.querySelector('#modal');
      if(openModal) {
        openModal.addEventListener(
          'click',
          () => {
            overlay.classList.remove('hidden');
            overlay.classList.add('flex');
          },
      );
      }
  },
);

const box = document.querySelector('.b');

document.addEventListener(
  'click',
  function (event) {
    if (event.target.closest('.b'))
      return box.classList.add('hidden');
  },
);
