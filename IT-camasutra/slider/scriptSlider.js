'use strict';
//-----------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------

let buttons = document.querySelectorAll('.itk-slider .control-slider button');
let currentImg = document.getElementById('current-img');
let statisticLabel = document.querySelector('.itk-slider .counter-slider label');
let imagesUrls = [];
let currentUrlIndex = 0;

function sliderInitial() {
    imagesUrls = [
        'https://i.pinimg.com/originals/36/05/4a/36054a4a06b9911358f7f46025c1b1e1.jpg',
        'https://i.pinimg.com/originals/5d/65/43/5d6543af55eaa710a0380903e0193cff.jpg',
        'https://digitalsynopsis.com/wp-content/uploads/2014/06/supercar-wallpapers-bugatti-1.jpg',
        'https://images.wallpaperscraft.ru/image/ferrari_krasnyj_avto_sport_95424_1920x1080.jpg',
        'https://car-pictures-download.com/wp-content/uploads/2019/03/Lamborghini-Huracan-hd-car-wallpapers-1920x1080.jpg'
    ];

    currentImg.src = imagesUrls[currentUrlIndex];
}

function onButtonClick(event) {
    let fromElement = event.currentTarget;

    currentUrlIndex = fromElement.id.includes('next') ? ++currentUrlIndex : --currentUrlIndex;

    if (currentUrlIndex > imagesUrls.length - 1) {
        currentUrlIndex = 0;
    }

    if (currentUrlIndex < 0) {
        currentUrlIndex = imagesUrls.length - 1;
    }

    currentImg.src = imagesUrls[currentUrlIndex];
    sliderStat();
}

function sliderStat() {
    if (imagesUrls.length != 0) {
        statisticLabel.innerHTML = `${currentUrlIndex + 1} of ${imagesUrls.length}`;
    }
}

sliderInitial();
buttons.forEach(button => button.addEventListener('click', onButtonClick));
sliderStat();