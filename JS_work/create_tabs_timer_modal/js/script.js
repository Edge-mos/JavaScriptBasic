window.addEventListener('DOMContentLoaded', () => {

    'use strict';
    //------------------------------------------Табы---------------------------------------
    // получаем родителя табов заголовка
    let infoHeaderDiv = document.querySelector('.info-header');

    // получаем табы заголовка
    let headerTabs = infoHeaderDiv.querySelectorAll('.info-header-tab');

    // получаем дивы info-tabcontent(отображает внутрянку)
    let infoTabContentDivs = document.querySelectorAll('.info-tabcontent');


    function hideTabContent(hideIndx) {
        for (let i = hideIndx; i < infoTabContentDivs.length; i++) {
            infoTabContentDivs[i].classList.remove('show');
            infoTabContentDivs[i].classList.add('hide');
        }
    }

    hideTabContent(1); // прячем все элементы, начиная с индекса 1, кроме первого (0)


    function showTabContent(showIndx) {
        if (infoTabContentDivs[showIndx].classList.contains('hide')) {
            infoTabContentDivs[showIndx].classList.remove('hide');
            infoTabContentDivs[showIndx].classList.add('show');
        }
    }


    infoHeaderDiv.addEventListener('click', (event) => {

        let target = event.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < headerTabs.length; i++) {
                if (headerTabs[i] === target) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            }
        }
    });

    //-------------------------------------------------------------------------------------

    //------------------------------------------Таймер-------------------------------------

    let deadLineString = '2020-12-31';


    function calculateTime(deadLineString) {

        let deadLine = new Date(deadLineString.concat('T00:00:00'));
        let now = new Date();

        let difference = deadLine - now > 0 ? deadLine - now : 0;

        if (difference > 0) {
            let seconds = ((difference / 1000) % 60);
            let minutes = ((difference / (1000 * 60)) % 60);
            let hours = (difference / ((1000 * 60 * 60)) % 24);
            let days = (difference / 1000 / 60 / 60 / 24);

            return {
                difference: difference,
                seconds: getTimePart(seconds),
                minutes: getTimePart(minutes),
                hours: getTimePart(hours),
                days: getTimePart(days)
            };
        }
        return {
            difference: 0
        };
    }

    function getTimePart(units) {
        return units % 10 == units ? '0'.concat(Math.floor(units)) : Math.floor(units);
    }


    function getTimerElementsFromDoc(timerDiv) {

        //root
        let timerNumbersDiv = document.querySelector(timerDiv);
        //secons
        let secondsEl = timerNumbersDiv.querySelector('.seconds');
        //minutes
        let minutesEl = timerNumbersDiv.querySelector('.minutes');
        //hours
        let hoursEl = timerNumbersDiv.querySelector('.hours');

        let daysEl = document.createElement('span');
        daysEl.classList.add('days');
        daysEl.appendChild(document.createTextNode('0'));

        let spanColonEl = document.createElement('span');
        spanColonEl.appendChild(document.createTextNode(' : '));

        timerNumbersDiv.insertBefore(spanColonEl, hoursEl);
        timerNumbersDiv.insertBefore(daysEl, spanColonEl);

        return {
            'secondsEl': secondsEl,
            'minutesEl': minutesEl,
            'hoursEl': hoursEl,
            'daysEl': daysEl
        };
    }


    // элементы страницы, сгруппированны в отдельный объект
    let timerElementsObj = getTimerElementsFromDoc('.timer-numbers');

    let timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let timeObj = calculateTime(deadLineString);

        if (timeObj.difference > 0) {
            timerElementsObj.secondsEl.textContent = timeObj.seconds;
            timerElementsObj.minutesEl.textContent = timeObj.minutes;
            timerElementsObj.hoursEl.textContent = timeObj.hours;
            timerElementsObj.daysEl.textContent = timeObj.days > 0 ? timeObj.days : timerElementsObj.daysEl.textContent;

        } else {
            // получаем родитель таймера
            let divContainerEl = document.querySelector('#about');
            // получаем контейнер таймера
            let timerDiv = document.querySelector('.timer');
            // удаляем таймер из разметки
            divContainerEl.removeChild(timerDiv);
            // прерываем функцию
            clearInterval(timeInterval);
        }
    }

    //-------------------------модальное окно--------------------------------------

    //получаем элементы

    let buttonMore = document.querySelector('.more');
    let overlayDiv = document.querySelector('.overlay');
    let closeEl = document.querySelector('.popup-close');

    buttonMore.addEventListener('click', setDisplaySettings.bind(buttonMore));

    closeEl.addEventListener('click', setDisplaySettings.bind(buttonMore));

    function setDisplaySettings(event) {
        let classList = event.currentTarget.classList;

        overlayDiv.style.display = classList.contains('more') ? 'block' : 'none';
        if (classList.contains('more')) {
            this.classList.add('more-splash');
        } else {
            this.classList.remove('more-splash');
        }
        setOverflow.call(document, event);
    }

    function setOverflow(event) {
        this.body.style.overflow =
            event.currentTarget.classList.contains('more') ? 'hidden' : 'scroll';
    }

    //---------Привязать модальное окно к кнопкам “Узнать подробнее” в табах. ---------

});