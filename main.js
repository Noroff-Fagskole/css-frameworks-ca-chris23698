import './style.css';

const menuBtn = document.querySelector("#menu-btn");

function Menu() {
  let list = document.querySelector('ul');
  menuBtn.name === 'menu' ? (menuBtn.name = 'close', list.classList.add('top-[80px]') , list.classList.add('opacity-100')) : (menuBtn.name = 'menu' , list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'));
}
menuBtn.addEventListener("click", Menu);


window.addEventListener
('DOMContentLoaded', () => {
  const overlay = document.querySelector
  ('#overlay');
  const openModal = document.querySelector
  ('#modal');
  if (openModal) {
    openModal.addEventListener('click', () => {
      overlay.classList.remove('hidden');
      overlay.classList.add('flex');
    });
  }
});

const box = document.querySelector('.b');

document.addEventListener('click', function(event) {

  if (event.target.closest('.b'))
    return box.classList.add('hidden');
});

export { Menu };
