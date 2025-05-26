'use strict';

const button = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function () {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  });
}

close.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
  }
});
