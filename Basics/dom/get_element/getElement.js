"use strict";

let boxEl = document.getElementById("box");
// console.log(boxEl);

let buttonsEls = document.getElementsByTagName("button");

// console.log(buttonsEls);
// console.log(buttonsEls[0]);

let divCircleEls =  document.getElementsByClassName("circle");

// console.log(divCircleEls);

let divHeartEls = document.querySelectorAll(".heart");

// console.log(divHeartEls);
// console.log(divHeartEls[1]);

let firstHeartEl = document.querySelector(".heart");
// console.log(firstHeartEl);

//------------------------2 часть----------------------------------

//поменять background
boxEl.style.backgroundColor = "blue";

//делаем 2 кнопку овалом
buttonsEls[1].style.borderRadius = "100%";

//сделать из кругов светофор
let colors = ["red", "yellow", "green"];
let index = 0;
// for (const circle of divCircleEls) {
//     circle.style.backgroundColor = colors[index++];
// }
for (let i = 0; i < colors.length; i++) {
    divCircleEls[i].style.backgroundColor = colors[i];
}

// for (let i = 0; i < divHeartEls.length; i++) {                  //это nodeList
//     divHeartEls[i].style.backgroundColor = "blue";
// }

divHeartEls.forEach(val => val.style.backgroundColor = "blue");


//создать элемент
let divCreate = document.createElement("div");
divCreate.style.width = "300px";
divCreate.style.backgroundColor = "black";
divCreate.classList.add("black");

console.log(divCreate);

document.body.appendChild(divCreate);

let text = document.createTextNode("Тут был я");





