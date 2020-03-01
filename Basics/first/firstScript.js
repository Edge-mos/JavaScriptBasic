'use strict';

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;

null;
undefined;
var obj = {};

console.log(4/0);
console.log("string" * 9);

let something;
console.log(something);

let person = {
    name: "John",
    age: 25, 
    isMarried: false
};

console.log(person);

console.log(person["name"]);

let arr = ["plum.png", "orange.jpg", "apple.bmp"];
console.log(arr[1]);

// let answer = confirm("Are you here?");
// console.log("answer from confirm: " + answer);

// let question = prompt("Are you under 18?", "Yes");
// console.log(typeof(question));

console.log("Сравниваем 2");
console.log("2" == 2);      // true!!!


console.log("Сравниваем 2 строго");
console.log("2" === 2);