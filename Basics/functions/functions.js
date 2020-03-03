"use strict";

// let num = 20;

// function showFirstMessage(text) {
//     alert(text);
//     num = 10;
// }

// showFirstMessage("Hello World!");
// console.log(num);

function calc(a, b) {   // Это function declaration - создаётся до начала кода, как и var, можно обращаться из любого места
    return a + b;
}

console.log(calc(3, 4));

function retVar() {
    let num = 50;
    return num;
}

let anotherVar = retVar();
console.log(anotherVar);

let calc2 = function (a, b) { // Это function expression - классический пример, функция доступна после объявления
    return a * b;
};

console.log("Calc2: " + calc2(2, 2));

let calc3 = (a, b) => a + b;

console.log("Calc3: " + calc3(3, 7));

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());

let twelve = "12";
console.log(Math.round(twelve));

let number = "13abc";
console.log(parseInt(number));

let number2 = "14.02abc";
console.log(parseFloat(number2));





