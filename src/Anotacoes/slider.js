class sliderPort {
    constructor(id) {
        this.slider = document.querySelector(`[data-slider="${id}"]`);
        this.active = 0;
        console.log(this
            .slider);
        this.activeSlide(2);
    }
    activeSlide(index){
        this.active = index;
        this.items = this.slider.querySelectorAll('.slide-items > *')
        this.items[index].classList.add('active');
    }
}

new sliderPort('slider')