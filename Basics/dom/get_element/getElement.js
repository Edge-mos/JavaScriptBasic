"use strict";

let boxEl = document.getElementById("box");
console.log(boxEl);

let buttonsEls = document.getElementsByTagName("button");

console.log(buttonsEls);
console.log(buttonsEls[0]);

let divCircleEls =  document.getElementsByClassName("circle");

console.log(divCircleEls);

let divHeartEls = document.querySelectorAll(".heart");

console.log(divHeartEls);
console.log(divHeartEls[1]);

let firstHeartEl = document.querySelector(".heart");
console.log(firstHeartEl);