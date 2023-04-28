document.addEventListener("DOMContentLoaded", () => {
  Fancybox.bind("[data-fancybox]", {});

  const mainInfo = document.querySelector(".main-info");
  if (mainInfo) {
    const prevBtn = mainInfo.querySelector(".main-info-slider__btn_prev");
    const nextBtn = mainInfo.querySelector(".main-info-slider__btn_next");
    const swiperContainer = mainInfo.querySelector(".main-info-swiper");

    if (prevBtn && nextBtn && swiperContainer) {
      new Swiper(swiperContainer, {
        slidesPerView: 3,
        autoHeight: true,
        spaceBetween: 90,
        navigation: {
          prevEl: prevBtn,
          nextEl: nextBtn,
        },
      })
    }
  }
})