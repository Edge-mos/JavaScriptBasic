'use strict';
let imagesUrls = [
    'https://i.pinimg.com/originals/36/05/4a/36054a4a06b9911358f7f46025c1b1e1.jpg',
    'https://i.pinimg.com/originals/5d/65/43/5d6543af55eaa710a0380903e0193cff.jpg',
    'https://digitalsynopsis.com/wp-content/uploads/2014/06/supercar-wallpapers-bugatti-1.jpg',
    'https://images.wallpaperscraft.ru/image/ferrari_krasnyj_avto_sport_95424_1920x1080.jpg',
    'https://car-pictures-download.com/wp-content/uploads/2019/03/Lamborghini-Huracan-hd-car-wallpapers-1920x1080.jpg'
];

let pathToButtons = '.itk-slider .control-slider button';
let imgId = 'current-img';
let pathToStatisticLbl = '.itk-slider .counter-slider .counter-label';

let slider = new Slider(imagesUrls, pathToButtons, imgId, pathToStatisticLbl);
slider.start();
