import Swiper from 'swiper';
import { Navigation, Pagination, Grid, EffectCreative, EffectFade, Autoplay, Parallax } from 'swiper/modules';

import vars from "../_vars";
import {addCustomClass,removeCustomClass} from '../functions/customFunctions';

const {balanceSlider,ratingSliders, choiceSlider} = vars;

if(balanceSlider){
  const swiper = new Swiper(balanceSlider.querySelector('.balance-slider__container'), {
    modules: [Navigation, Pagination],
    slidesPerView: 2.2,
    spaceBetween: 20,
    observer: true,
    observeParents: true,

      
    pagination: {
      el: '.balance-slider__pagination',
      type: "bullets",

    },
    navigation: {
      nextEl: '.balance-slider__next',
      prevEl: '.balance-slider__prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 'auto',
      },
    },
  });
  }

  
if(choiceSlider){
  const swiper = new Swiper(choiceSlider.querySelector('.choice-slider__container'), {
    modules: [Navigation, Pagination,Grid],
    slidesPerView: 6,
    spaceBetween: 23,
    observer: true,
    observeParents: true,
    grid: {
      fill: 'row',
      rows: 2,
    },
   
    pagination: {
      el: '.choice-slider__pagination',
      type: "bullets",
      clickable: true,

    },
    navigation: {
      nextEl: '.choice-slider__next',
      prevEl: '.choice-slider__prev',
    },

    breakpoints: {
              320: {
                slidesPerView: 'auto',
              },
              768:{
                initialSlide: 4,
              },
              1240:{
                slidesPerView: 6,
              },

              1800:{
                slidesPerView: 'auto',
              }
            },
   
  });
  }


  function initSwiper(slider, pagination, nextBtn, prevBtn) {
    const mySwiper = new Swiper(slider.querySelector('.rating-slider__container'), {
      modules: [Navigation, Pagination,EffectCreative],
      spaceBetween: 0,
      observer: true,
      observeParents: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      effect: 'creative',
      pagination: {
        el: pagination,
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      breakpoints: {
        320: {
          speed: 500,
          creativeEffect: {
          
              prev: {
                translate: ["-55%", 0, -250]
              },
              next: {
                translate: ["55%", 0, -250]
              }
            },
        },
   
      768: {
          slidesPerView: 'auto',
          creativeEffect: {
            perspective: false,
          },
        },
      1125: {
        creativeEffect: {
          prev: {
            translate: ["-55%", 0, -250]
          },
          next: {
            translate: ["55%", 0, -250]
          }
        },
      },
      },
    });
  
    function showSwiper() {
      slider.style.display = 'block'; 
    }
  
    function hideSwiper() {
      slider.style.display = 'none';
    }
  
    document.querySelectorAll('[data-tab]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        hideSwiper();
        showSwiper();
      });
    });
  }
  
  ratingSliders && ratingSliders.forEach(function(ratingSlider) {
    const nextBtn = ratingSlider.querySelector('.rating-slider__next');
    const prevBtn = ratingSlider.querySelector('.rating-slider__prev');
    const pagination = ratingSlider.querySelector('.rating-slider__pagination');
  
    initSwiper(ratingSlider, pagination, nextBtn, prevBtn);
  });
  