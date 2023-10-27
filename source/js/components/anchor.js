// Подключение плавной прокрутки к якорям
// https://github.com/cferdinandi/smooth-scroll
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 800,
//   offset: 50
// });

const heroSection = document.querySelector('.hero-section');

if (heroSection) {
  const btn = heroSection.querySelector('.hero-section__btn');

  btn.addEventListener('click', function(e){
    e.preventDefault();
     const nextSection = heroSection.nextElementSibling;

     if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  })
}


