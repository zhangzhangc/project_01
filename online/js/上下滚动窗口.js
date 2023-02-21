let topBox = document.querySelector('#first');
let sliderBar = document.querySelector('.slider-bar');
// var topBoxTop = topBox.offsetTop;      //被卷去头部的大小
// console.log(topBoxTop);


document.addEventListener('scroll', () => {

    // console.log(window.pageYOffset);

    if (window.pageYOffset >= 500) {
        // sliderBar.style.position = 'fixed';
        sliderBar.style.top = 500 + window.pageYOffset + 'px';


    }
    else {
        // sliderBar.style.position = 'absolute';
        sliderBar.style.top = 500 + 'px';


    }
    // sliderBar.style.top = 500 + window.pageYOffset + 'px';






})