'use strct';

// setTimeout(sayHello, 3000);             // выполняется единожды через указанное время

// function sayHello() {
//     console.log('Hello World!');
// }

//------------------------------------------

// let timerId = setTimeout(sayHello, 1000);       

// clearTimeout(timerId);                    // отменяет setTimeout

// function sayHello() {
//     console.log('Hello World!');
// }

//------------------------------------------

// let timerId = setInterval(sayHello, 1000);   // выполняется постоянно через указанный интервал

// function sayHello() {
//     console.log('Hello World!');
// }

//------------------------------------------
// рекурсивный вызов setTimeout

// let timerId = setTimeout(function log() {
//     console.log('Hello');
//     setTimeout(log, 2000);
// });

// Сделать анимацию.
let buttonAnimate = document.querySelector('.btn');
let box = document.querySelector('.box');

function myAnimate(event) {
    let pos = 0;
    let timeId = setInterval(frame, 10); 

    function frame() {
        if (pos == 300) {
            clearInterval();
        } else{
            pos++;
            box.style.top = `${pos}px`;
            box.style.left = `${pos}px`;
        }
    }
}

buttonAnimate.addEventListener('click', myAnimate);

let buttonsBlock = document.querySelector('.btn-block');
let buttons = buttonsBlock.querySelectorAll('button');

buttonsBlock.addEventListener('click', function(event) {

    if (event.target && event.target.tagName === 'BUTTON') {
        console.log(event.target);
        console.log(`is contains first: ${(event.target).classList.contains('first')}`);
        console.log(event.target.dataset.action);
        
    }
    
});

// console.log(buttons2);
