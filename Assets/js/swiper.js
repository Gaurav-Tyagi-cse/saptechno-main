var swiper = new Swiper('.mySwiper', {
    loop: true,
    effect: 'fade',  // Use fade effect for smooth transitions
    fadeEffect: {
        crossFade: true  // Make sure the fade effect is cross-fading
    },
    autoplay: {
        delay: 5000,  // Delay between slides (5 seconds)
        disableOnInteraction: false  // Continue autoplay even after user interaction
    },
    speed: 1000,  // Transition speed (1 second)
    pagination: {
        el: '.swiper-pagination',
        clickable: true,  // Enable clickable pagination
    },
    navigation: {
        nextEl: '.swiper-button-next',  // Next button
        prevEl: '.swiper-button-prev',  // Previous button
    }
});