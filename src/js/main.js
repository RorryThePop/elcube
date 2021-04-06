document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  let topSlider = new Swiper(".top", {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    speed: 2000,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: ".top__pagination",
      type: "bullets",
      bulletElement: "button",
      modifierClass: "top__pagination",
      bulletClass: "top__pagination-btn",
      bulletActiveClass: "top__pagination-btn--active",
      clickable: true,
    },
  });

  let aboutSlider = new Swiper('.services__slider',{
    loop: false,
    navigation: {
      nextEl: '.services__slider-next',
      prevEl: '.services__slider-prev',
      disabledClass: 'slider-btn--disabled',
    },
  });

  let projectsSlider = new Swiper('.projects__slider',{
    loop: false,
    slidesPerView: 2,
    spaceBetween: 46,
    navigation: {
      nextEl: '.projects__btn-next',
      prevEl: '.projects__btn-prev',
    },
  });

  let partnersSlider = new Swiper('.partners__slider',{
    loop: false,
    slidesPerView: 4,
    navigation: {
      nextEl: '.partners__slider-next',
      prevEl: '.partners__slider-prev',
    },
  });
});
