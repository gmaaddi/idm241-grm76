let img = document.querySelector('img');

let box1 = document.getElementById("image1");
let box2 = document.getElementById("image2");
let box3 = document.getElementById("image3");
let box4 = document.getElementById("image4");

let a1 = document.querySelector(".a1");
let a2 = document.querySelector(".a2");
let a3 = document.querySelector(".a3");
let a4 = document.querySelector(".a4");

let btnA = document.getElementById('btnA');
let btnB = document.getElementById('btnB');
let btnC = document.getElementById('btnC');
let btnD = document.getElementById('btnD');

// testmeclicking = function(imNum){

//     box1.style.opacity = 0;
//     box2.style.opacity = 0;
//     box3.style.opacity = 0;
//     box4.style.opacity = 0;


//     btnA.src = 'card_images/dot.png';
//     btnB.src = 'card_images/dot.png';
//     btnC.src = 'card_images/dot.png';
//     btnD.src = 'card_images/dot.png';

//     switch(imNum){
//         case 1:
//             box1.style.opacity = 1;
//             btnA.src = 'card_images/pawprint.png';
//             img.src = 'card_images/pet-photo_1.png';
//             alert("IN CASE 1");
//             break;

//         case 2:

//             box2.style.opacity = 1;
//             btnB.src = 'card_images/pawprint.png';
//             img.src = 'card_images/pet-photo_2.png';
//             alert("IN CASE 2");
//             break;

//         case 3:
//             box3.style.opacity = 1;
//             btnC.src = 'card_images/pawprint.png';
//             img.src = 'card_images/pet-photo_3.png';
//             alert("IN CASE 3");
//             break;

//         case 4:
//             box2.style.opacity = 1;
//             btnD.src = 'card_images/pawprint.png';
//             img.src = 'card_images/pet-photo_4.png';
//             alert("IN CASE 4");
//             break;

//         default:
//             box1.style.opacity = 1;
//             btnA.src = 'card_images/pawprint.png';
//             img.src = 'card_images/pet-photo_1.png';
//             break;
//     }
// }

// a1.onclick = function(){
//     testmeclicking(1);
// }

// a2.onclick = function(){
//     testmeclicking(2);
// }

// a3.onclick = function(){
//     testmeclicking(3);
// }

// a4.onclick = function(){
//     testmeclicking(4);
// }

a1.onclick = function () {
    box1.style.opacity = 1;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 0;

    img.src = 'card_images/pet-photo_1.png';
    btnA.src = 'card_images/pawprint.png';
    btnB.src = 'card_images/dot.png';
    btnC.src = 'card_images/dot.png';
    btnD.src = 'card_images/dot.png';
}

a2.onclick = function () {
    box1.style.opacity = 0;
    box2.style.opacity = 1;
    box3.style.opacity = 0;
    box4.style.opacity = 0;

    img.src = 'card_images/pet-photo_2.png';
    btnA.src = 'card_images/dot.png';
    btnB.src = 'card_images/pawprint.png';
    btnC.src = 'card_images/dot.png';
    btnD.src = 'card_images/dot.png';
}

a3.onclick = function () {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 1;
    box4.style.opacity = 0;

    img.src = 'card_images/pet-photo_3.png';
    btnA.src = 'card_images/dot.png';
    btnB.src = 'card_images/dot.png';
    btnC.src = 'card_images/pawprint.png';
    btnD.src = 'card_images/dot.png';
}

a4.onclick = function () {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 1;

    img.src = 'card_images/pet-photo_4.png';
    btnA.src = 'card_images/dot.png';
    btnB.src = 'card_images/dot.png';
    btnC.src = 'card_images/dot.png';
    btnD.src = 'card_images/pawprint.png';
}

let icon = document.querySelector('ion-icon');
icon.onclick = function(){
  icon.classList.toggle('active');
}