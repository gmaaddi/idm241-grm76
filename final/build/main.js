// const card = document.querySelector(".front-button");

// const inner = document.querySelector(".card__inner");

// card.addEventListener("click", function (e) {
//   inner.classList.toggle('is-flipped');
// });

const flipBtn = document.querySelector(".front-button");
const backBtn = document.querySelector(".back-button");
const inner = document.querySelector(".pet-card");

flipBtn.addEventListener("click", function (e) {
  inner.classList.toggle('is-flipped');
});

backBtn.addEventListener("click", function (e) {
  inner.classList.toggle('is-flipped');
});

// EXISTING JS
let img = document.querySelector('img');

let box1 = document.getElementById("image1");
let box2 = document.getElementById("image2");
let box3 = document.getElementById("image3");
let box4 = document.getElementById("image4");

let a1 = document.querySelector(".a1");
let a2 = document.querySelector(".a2");
let a3 = document.querySelector(".a3");
let a4 = document.querySelector(".a4");

a1.onclick = function () {
  box1.style.opacity = 1;
  box2.style.opacity = 0;
  box3.style.opacity = 0;
  box4.style.opacity = 0;

  a1.src = 'card_images/pawprint.png';
  a2.src = 'card_images/dot.png';
  a3.src = 'card_images/dot.png';
  a4.src = 'card_images/dot.png';
}

a2.onclick = function () {
  box1.style.opacity = 0;
  box2.style.opacity = 1;
  box3.style.opacity = 0;
  box4.style.opacity = 0;

  a1.src = 'card_images/dot.png';
  a2.src = 'card_images/pawprint.png';
  a3.src = 'card_images/dot.png';
  a4.src = 'card_images/dot.png';
}

a3.onclick = function () {
  box1.style.opacity = 0;
  box2.style.opacity = 0;
  box3.style.opacity = 1;
  box4.style.opacity = 0;

  a1.src = 'card_images/dot.png';
  a2.src = 'card_images/dot.png';
  a3.src = 'card_images/pawprint.png';
  a4.src = 'card_images/dot.png';
}

a4.onclick = function () {
  box1.style.opacity = 0;
  box2.style.opacity = 0;
  box3.style.opacity = 0;
  box4.style.opacity = 1;

  a1.src = 'card_images/dot.png';
  a2.src = 'card_images/dot.png';
  a3.src = 'card_images/dot.png';
  a4.src = 'card_images/pawprint.png';
}

let icon = document.querySelector('ion-icon');
icon.onclick = function(){
  icon.classList.toggle('active');
}    