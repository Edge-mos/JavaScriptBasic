
// 'use strict';

// 1) Просто вызов функции - window/undefined
function showThis(a, b) {
    console.log(this);                      // будет контекст window

    function sum() {
        console.log('inner sum: ', this);   // функция внутри функции так же контекст window
        return this.a + this.b;             // у window нет переменных а и b для замыкания нужно убрать this
    }
    console.log('sum result: ', sum());     // NaN 
}

// showThis(4, 5);

// 2) Метод объекта - this = объект
let obj = {
    a: 20,
    b: 15,
    sum: function() {                                   // ЕСЛИ БУДЕТ СТРЕЛОЧНАЯ ФУНКЦИЯ. КОНТЕКСТ ПОТЕРЯЕТСЯ И БУДЕТ WINDOW
        console.log(this);                              // сам объект контекст вызова, всё нормально
        console.log('func res: ', this.a + this.b);     //

        function shout() {                              // функция внутри функции - снова контекст window
            console.log('shout inner: ', this);
        }
        shout();
    }

};

// obj.sum();

// 3) Конструктор (new) - this = новый созданный объект
//......


// 4) Привязка контекста вручную. Указание конкретного контекста - call, apply, bind

let user = {
    name: 'John'
};


function sayName(surname) {
    console.log('context: ', this);
    console.log('this.name: ', `${this.name} ${surname}`);
}

console.log(sayName.call(user, 'Smith'));
console.log(sayName.apply(user, ['Show']));


function count(number) {
    return this * number;
}

let double = count.bind(2); // 2 теперь попадёт на место this. bind создаёт новую функцию.
console.log('вызов double:', double(3));


// Работа контекста в document

let buttonEl = document.querySelector('button');

buttonEl.addEventListener('click', function(event) {
    console.log('button context: ', this);
    this.style.backgroundColor = 'red';

    function showThis() {                                   // функция внутри функции - снова контекст window
        console.log('inner this: ', this);
    }
    showThis();
});