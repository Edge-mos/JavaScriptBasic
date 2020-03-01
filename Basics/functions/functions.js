"use strict";

// function showFirstMessage(text) {
//     alert(text);
// }

// showFirstMessage("Hello");

function calc(a, b) {
    return (a + b);
}

console.log(calc(3, 4));

console.log(calc(8, 4));


function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);


let calc2 = (a, b) => a + b;

console.log(calc2(3, 2));