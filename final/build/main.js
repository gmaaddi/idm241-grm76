// Flip card animation
const flipBtn = document.querySelector(".front-button");
const backBtn = document.querySelector(".back-button");
const inner = document.querySelector(".pet-card");

// Click purple rectangular button on front of card to flip
flipBtn.addEventListener("click", function () {
  inner.classList.toggle('is-flipped');
});

// Click purple rectangular button on back of card to flip
backBtn.addEventListener("click", function () {
  inner.classList.toggle('is-flipped');
});

// Cat images 1-4
let box1 = document.getElementById("image1");
let box2 = document.getElementById("image2");
let box3 = document.getElementById("image3");
let box4 = document.getElementById("image4");

// Dots/pawprints 1-4
let a1 = document.querySelector(".a1");
let a2 = document.querySelector(".a2");
let a3 = document.querySelector(".a3");
let a4 = document.querySelector(".a4");

// Dots/pawprints group 1
let topDot1 = document.querySelector(".top-dot1");
let bottomDot1 = document.querySelector(".bottom-dot1");

// Dots/pawprints group 2
let topDot2 = document.querySelector(".top-dot2");
let bottomDot2 = document.querySelector(".bottom-dot2");

// Dots/pawprints group 3
let topDot3 = document.querySelector(".top-dot3");
let bottomDot3 = document.querySelector(".bottom-dot3");

// Dots/pawprints group 4
let topDot4 = document.querySelector(".top-dot4");
let bottomDot4 = document.querySelector(".bottom-dot4");

// Click on dot/pawprint group 1
a1.onclick = function () {
  box1.style.opacity = 1;
  box2.style.opacity = 0;
  box3.style.opacity = 0;
  box4.style.opacity = 0;

  topDot1.style.opacity = 1;
  bottomDot1.style.opacity = 0;

  topDot2.style.opacity = 0;
  topDot3.style.opacity = 0;
  topDot4.style.opacity = 0;

  bottomDot2.style.opacity = 1;
  bottomDot3.style.opacity = 1;
  bottomDot4.style.opacity = 1;
}

// Click on dot/pawprint group 2
a2.onclick = function () {
  box1.style.opacity = 0;
  box2.style.opacity = 1;
  box3.style.opacity = 0;
  box4.style.opacity = 0;

  topDot2.style.opacity = 1;
  bottomDot2.style.opacity = 0;

  topDot1.style.opacity = 0;
  topDot3.style.opacity = 0;
  topDot4.style.opacity = 0;

  bottomDot1.style.opacity = 1;
  bottomDot3.style.opacity = 1;
  bottomDot4.style.opacity = 1;
}

// Click on dot/pawprint group 3
a3.onclick = function () {
  box1.style.opacity = 0;
  box2.style.opacity = 0;
  box3.style.opacity = 1;
  box4.style.opacity = 0;

  topDot3.style.opacity = 1;
  bottomDot3.style.opacity = 0;

  topDot1.style.opacity = 0;
  topDot2.style.opacity = 0;
  topDot4.style.opacity = 0;

  bottomDot1.style.opacity = 1;
  bottomDot2.style.opacity = 1;
  bottomDot4.style.opacity = 1;
}

// Click on dot/pawprint group 4
a4.onclick = function () {
  box1.style.opacity = 0;
  box2.style.opacity = 0;
  box3.style.opacity = 0;
  box4.style.opacity = 1;

  topDot4.style.opacity = 1;
  bottomDot4.style.opacity = 0;

  topDot1.style.opacity = 0;
  topDot2.style.opacity = 0;
  topDot3.style.opacity = 0;

  bottomDot1.style.opacity = 1;
  bottomDot2.style.opacity = 1;
  bottomDot3.style.opacity = 1;
}

// Click on heart icon
let icon = document.querySelector('ion-icon');
icon.onclick = function(){
  icon.classList.toggle('active');
}    