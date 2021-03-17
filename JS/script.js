$('#wave').wavify({
    height: 0.8*window.innerHeight,
    bones: 3,
    amplitude: 40,
    color: '#111',
    speed: .25
});

var swiper = new Swiper('.yearCard', {
    effect: 'cube',
    loop: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: '.slideNav',
      clickable: true,
    },
    autoplay: {
        delay: 20000,
        disableOnInteraction: false,
    },
});

var iconBox = document.querySelectorAll('.iconBox');
var contentBox = document.querySelectorAll('.contentBox');

for (var i = 0; i<iconBox.length;i++){
    iconBox[i].addEventListener('mouseover',function(){
        for(var i = 0; i < contentBox.length; i++){
            contentBox[i].className = 'contentBox';
        }
        console.log(document.getElementById(this.dataset.id).className)
        document.getElementById(this.dataset.id).className = 'contentBox active';
        console.log(document.getElementById(this.dataset.id).className)
        for(var i = 0; i < iconBox.length; i++){
            iconBox[i].className = 'iconBox';
        }
        this.className = 'iconBox active';
    })
}

var changer = document.querySelector('.changer');
var first = document.querySelector('.main.first');
var second = document.querySelector('.main.second');

changer.addEventListener('click', function(){
    changer.classList.toggle('close')
    first.classList.toggle('close');
    second.classList.toggle('close');
})

setInterval(change,5000)

function change(){
    changer.classList.toggle('close')
    first.classList.toggle('close');
    second.classList.toggle('close');
}