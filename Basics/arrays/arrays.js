"use strict"

let arr = [1, 2, 3, "four", "five"];
console.log(arr);

//---------------------------------------------------------------------
// push() - добавляет элемент в конец массива
// pop() - удаляет элемент из хвоста массива и получает его
// shift() - удаляет элемент из начала массива и получает его
// unshift("1") - добавляет элемент в начало массива
//---------------------------------------------------------------------

// let last = arr.pop();  pop - удаляет элемент из хвоста массива

// console.log(last);
// console.log(arr);

// console.log("new length: " + arr.push("3"));  push - добавляет элемент в конец
// console.log(arr);

// console.log("First element remove and return: " + arr.shift());
// arr.unshift("1");
// console.log(arr);

// arr.unshift(-2, -1, 0);     // arr.unshift([-2, -1, 0]);

// console.log(arr);

// console.log(typeof(arr)); // object

//---------------------------------------------------------------------

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
// }

// arr[10] = 99;

// console.log("INIT: " + arr.length);
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if (element == undefined) {
//         arr.shift(element);
//     }
//     console.log(element);
// }
// console.log(arr);
// console.log("AFTER: " + arr.length);

//---------------------------------------------------------------------
//КОЛБЕКИ
// arr.forEach(function(item, index, array) {
//     console.log(" index: " + index + " item: " + item + " array: " + array);
// });


// arr.forEach((value, index, array) => console.log("value: " + value + " index: " + index + " array: " + array));

// console.log("----------------");

// let changeArrVal = function(value, index, array) {
//     if(value === "four") {
//         array[index] = 444;
//         array.push("new");
//     }
// };

// let doArrWork = (value, index, array) => {
//     if (value === "four") {
//         array[index] = 444;
//         array.push("new");
//     }
// };

// arr.forEach(doArrWork);

// console.log(arr);

//---------------------------------------------------------------------
// наполнение массива из prompt и разделение значений элементом

// let splitSymbol = ',';
// let answer = prompt("Введите значения для сохранения через " + splitSymbol + " : ", "");
// let arrAnsw = [];

// arrAnsw = answer.split(",");
// console.log(arrAnsw);

//---------------------------------------------------------------------
// создать строку из массива посредством join

// let array = ["Это", "целая", "фраза", "в массиве"];
// let joinedString;
// joinedString = array.join(", ");
// console.log(joinedString);

//---------------------------------------------------------------------
//отсортировать массив
let array = [7, 1, 3, 5, 4, 2, 6];
console.log(array.sort(function(a, b) {
    return a - b;
}));

//---------------------------------------------------------------------
