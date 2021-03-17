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
