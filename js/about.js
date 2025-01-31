const aboutBtn = document.querySelector('.about__btn');
const aboutMore = document.querySelector('.about__more');

aboutBtn.addEventListener('click', function() {
    aboutMore.classList.add('about__more--show')
});