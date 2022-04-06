let offset = 0;
const sliderLine = document.querySelector('.slider_line');

document.querySelector('.slider_next').addEventListener('click', function() {
    offset = offset + 720;
    if(offset > 4000) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';

})


document.querySelector('.slider_prev').addEventListener('click', function() {
    offset = offset - 720;
    if(offset < 0) {
        offset = 4000;
    }
    sliderLine.style.left = -offset + 'px';
})