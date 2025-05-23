'use strict';

const button = document.querySelectorAll('.show-modal')
const modal = document.querySelector(".modal")


for (let i = 0; i < button.length; i++ ) {
button[i].addEventListener("click", function(){
modal.classList.toggle("hidden")
})
}

