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

/* **********************COUNTER******************** */

var a = 0;
$(window).scroll(function() {

  var oTop = $('.counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 5000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

/* ************************* MENU DEROULANT ************************ */


/* let faMenu = document.querySelector('#faMenu');
let nav = document.querySelector('.nav');

nav.style.display='none';

faMenu.addEventListener('click', function() {
    if(nav.style.display=='flex'){
        nav.style.display='none';
    }else{
        nav.style.display='flex';

    };
}); */

