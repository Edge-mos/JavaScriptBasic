'use strict';

function Slider(imagesUrls, pathTobuttons, imgId, pathToStatisticLbl) {
    this.imagesUrls = imagesUrls;
    this.buttons = document.querySelectorAll(pathTobuttons);
    this.currentUrlIndex = 0;
    this.currentImg = document.getElementById(imgId);
    this.statisticLabel = document.querySelector(pathToStatisticLbl);

    this.start = function() {

        //!!------------------------
        let that = this;
        this.buttons.forEach(button => button.addEventListener('click', function() {
            that.onButtonClick(event);
        }));
        //!!------------------------

        this.sliderStat();  
        this.currentImg.src = this.imagesUrls[this.currentUrlIndex];
    };

    this.onButtonClick = function (event) {
        let fromElement = event.currentTarget;

        this.currentUrlIndex = fromElement.id.includes('next') ? ++this.currentUrlIndex : --this.currentUrlIndex;

        if (this.currentUrlIndex > this.imagesUrls.length - 1) {
            this.currentUrlIndex = 0;
        }

        if (this.currentUrlIndex < 0) {
            this.currentUrlIndex = this.imagesUrls.length - 1;
        }

        this.currentImg.src = this.imagesUrls[this.currentUrlIndex];
        this.sliderStat();  
    };

    this.sliderStat  = function() {
        if (this.imagesUrls.length != 0) {
            this.statisticLabel.innerHTML = `${this.currentUrlIndex + 1} of ${this.imagesUrls.length}`;
        }
    };
}