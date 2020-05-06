'use strict';

let box = document.querySelector('.box');
let button = document.querySelector('button');

let clientWidth = box.clientWidth;
let clientHeight = box.clientHeight;

// с полосами прокрутки
let offsetWidth = box.offsetWidth;
let offsetHeight = box.offsetHeight;

// реальные размеры с прокруткой
let scrollWidth = box.scrollWidth;
let scrollHeight = box.scrollHeight;

console.log('clientWidth: ' + clientWidth);
console.log('clientHeight: ' + clientHeight);

console.log('--------------------\n');

console.log('offsetWidth: ' + offsetWidth);
console.log('offsetHeight: ' + offsetHeight);

console.log('--------------------\n');

console.log('scrollWidth: ' + scrollWidth);
console.log('scrollHeight: ' + scrollHeight);

// сколько пикселей от верха ЭЛЕМЕНТА открутили (отступ) - то расстояние, которое мы не видим
// let scrollTop = box.scrollTop;

let buttonUp = document.querySelector('#scroll-up');


button.addEventListener('click', (event) => {
    console.log(`scrollTop: ${box.scrollTop}`);
    box.style.height = `${scrollHeight}px`;
});

buttonUp.addEventListener('click', (event) => {

    let currentPoint = box.scrollTop;
    let speed = 0;

    setTimeout(function scrollUp() {
        if (currentPoint <= 0) {
            clearTimeout();
        } else {
            box.scrollTop = currentPoint -= 1 + speed;
            speed += 2;
            setTimeout(scrollUp, 20);
        }
    });
});

console.log(box.getBoundingClientRect());

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);

// сколько пикселей от верха открутили (отступ) ВСЕГО ДОКУМЕНТА - то расстояние, которое мы не видим
console.log(document.documentElement.scrollTop);
