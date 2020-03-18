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

//Заменить картинку заднего фона на другую из папки img
function stepTwo() {
    let bodyEl = document.querySelector('body');
    bodyEl.style.backgroundImage = "url('img/apple_true.jpg')";
}

//Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
function stepThree() {
    let correctedString = '';

    let divClassTitleEl = document.querySelector('.title');
    let textNode = divClassTitleEl.innerHTML;
    let search = textNode.indexOf('технику');

    correctedString = textNode.substring(0, search).concat('подлинную ')
        .concat(textNode.substring(search, textNode.length - 1));
    divClassTitleEl.innerHTML = correctedString;
}

//Удалить рекламу со страницы
function stepFour() {
    document.querySelector('.adv').remove();
}

//Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
function stepFive() {
    setTimeout(userInteract, 500);
}

function userInteract() {
    let question = prompt('Как Вы относитесь к технике Apple?', '');
    let answer = question != null ? question : '';
    const header = 'Ваше отношение к технике Apple:';
    let classPromptEl = document.querySelector('.prompt');
    let paragraphEl = document.createElement('p');

    paragraphEl.appendChild(document.createTextNode(answer));
    classPromptEl.appendChild(document.createTextNode(header));
    classPromptEl.appendChild(paragraphEl); 
}


stepOne();
stepTwo();
stepThree();
stepFour();
stepFive();