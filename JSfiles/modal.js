
const mod_arr = [];
const trigg_arr = [];
const btn_arr = [];

for (let i =1; i<7; i++) {
  let modal = document.querySelector(`.modal${i}`);
  mod_arr.push(modal);
  let trigger = document.querySelector(`.trigger${i}`);
  trigg_arr.push(trigger);
  let closeButton = document.querySelector(`.close-button${i}`);
  btn_arr.push(closeButton);
}
const togFunc_arr = [];

function toggleModal1() {
  mod_arr[0].classList.toggle("show-modal");
}
function toggleModal2() {
  mod_arr[1].classList.toggle("show-modal");
}
function toggleModal3() {
  mod_arr[2].classList.toggle("show-modal");
}
function toggleModal4() {
  mod_arr[3].classList.toggle("show-modal");
}
function toggleModal5() {
  mod_arr[4].classList.toggle("show-modal");
}
function toggleModal6() {
  mod_arr[5].classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === mod_arr[0]) {
        toggleModal1();
    }
    if (event.target === mod_arr[1]) {
        toggleModal2();
    }
    if (event.target === mod_arr[2]) {
        toggleModal3();
    }
    if (event.target === mod_arr[3]) {
        toggleModal4();
    }
    if (event.target === mod_arr[4]) {
        toggleModal5();
    }
    if (event.target === mod_arr[5]) {
        toggleModal6();
    }
}

trigg_arr[0].addEventListener("click", toggleModal1);
trigg_arr[1].addEventListener("click", toggleModal2);
trigg_arr[2].addEventListener("click", toggleModal3);
trigg_arr[3].addEventListener("click", toggleModal4);
trigg_arr[4].addEventListener("click", toggleModal5);
trigg_arr[5].addEventListener("click", toggleModal6);
btn_arr[0].addEventListener("click", toggleModal1);
btn_arr[1].addEventListener("click", toggleModal2);
btn_arr[2].addEventListener("click", toggleModal3);
btn_arr[3].addEventListener("click", toggleModal4);
btn_arr[4].addEventListener("click", toggleModal5);
btn_arr[5].addEventListener("click", toggleModal6);
window.addEventListener("click", windowOnClick); 