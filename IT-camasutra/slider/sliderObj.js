let slider = {
    imagesUrls: [],
    buttons: document.querySelectorAll('.itk-slider .control-slider button'),
    currentUrlIndex: 0,
    currentImg: document.getElementById('current-img'),
    statisticLabel: document.querySelector('.itk-slider .counter-slider label'),

    start: function() {

        //!!------------------------
        let that = this;
        this.buttons.forEach(button => button.addEventListener('click', function() {
            that.onButtonClick(event);
        }));
        //!!------------------------

        this.imagesUrls = [
            'https://i.pinimg.com/originals/36/05/4a/36054a4a06b9911358f7f46025c1b1e1.jpg',
            'https://i.pinimg.com/originals/5d/65/43/5d6543af55eaa710a0380903e0193cff.jpg',
            'https://digitalsynopsis.com/wp-content/uploads/2014/06/supercar-wallpapers-bugatti-1.jpg',
            'https://images.wallpaperscraft.ru/image/ferrari_krasnyj_avto_sport_95424_1920x1080.jpg',
            'https://car-pictures-download.com/wp-content/uploads/2019/03/Lamborghini-Huracan-hd-car-wallpapers-1920x1080.jpg'
        ];

        this.sliderStat();  
        this.currentImg.src = this.imagesUrls[this.currentUrlIndex];
    },

    onButtonClick: function (event) {
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
    },

    sliderStat : function() {
        if (this.imagesUrls.length != 0) {
            this.statisticLabel.innerHTML = `${this.currentUrlIndex + 1} of ${this.imagesUrls.length}`;
        }
    }
};