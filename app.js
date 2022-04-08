let img_slider= document.getElementsByClassName('image_slider');

let step= 0;

let prev = document.querySelector('.precedent');
let next = document.querySelector('.suivant');

function removeActiveImage() {
    for (let i = 0; i < img_slider.length; i++) {
        img_slider[i].classList.remove('active');  
    }
}

next.addEventListener('click',function(){
    step++;
    if (step>= img_slider.length) {
        step = 0;
    }
    removeActiveImage();
    img_slider[step].classList.add('active');
})

prev.addEventListener('click',function(){
    step--;
    if (step< 0) {
        step = img_slider.length -1;
    }
    removeActiveImage();
    img_slider[step].classList.add('active');
})

setInterval(function() {
    step++;
    if (step>= img_slider.length) {
        step = 0;
    }
    removeActiveImage();
    img_slider[step].classList.add('active');
},3000)