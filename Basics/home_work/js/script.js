'use strict';

//Восстановить порядок в меню, добавить пятый пункт
function stepOne() {

    let classMenuItems = document.querySelectorAll('.menu .menu-item');
    let arrayMenuItems = ['пер', 'вто', 'тре', 'чет'];

    function addToArray(arrayMenuItems, str, val) {
        arrayMenuItems.map((value, index, array) => {
            if (value === str) {
                array[index] = val;
            }
        });
    }

    classMenuItems.forEach(val => {
        addToArray(arrayMenuItems, val.innerHTML.substring(0, 3).toLowerCase(), val);
    });

    let clone = classMenuItems[0].cloneNode();
    clone.innerHTML = 'Пятый пункт';
    arrayMenuItems.push(clone);

    classMenuItems.forEach(val => val.remove());

    let classMenu = document.querySelector('.menu');
    arrayMenuItems.forEach(val => classMenu.appendChild(val));
}

stepOne();