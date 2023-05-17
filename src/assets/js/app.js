document.addEventListener("DOMContentLoaded", () => {
  Fancybox.bind("[data-fancybox]", {});

  class QuestionDropdown {
    constructor(container) {
      this.container = container;
      this.btn = this.container.querySelector(".questions-list-item__btn");
      this.content = this.container.querySelector(".questions-list-item__content");
      this.maxHeight = 0;
      this.isOpen = false;

      if (this.container && this.btn && this.content) {
        this.init();
      }
    }

    init() {
      // this.btn.addEventListener("click", this.handleClick.bind(this));
      this.maxHeight = this.content.offsetHeight;
      this.close();
    }

    open() {
      this.isOpen = true;
      this.container.classList.add("_active");
      this.content.classList.add("_active");
      this.content.style.maxHeight = this.maxHeight * 2 + "px";
    }

    close() {
      this.isOpen = false;
      this.container.classList.remove("_active");
      this.content.classList.remove("_active");
      this.content.style.maxHeight = "0px";
    }
  }

  class QuestionDropdownController {
    constructor(dropdownList) {
      this.dropdownList = dropdownList;
      this.init();
    }

    init() {
      this.dropdownList.forEach(item => {
        item.btn.addEventListener("click", this.handleClick.bind(this, item));
      })
    }

    handleClick(activeItem) {
      this.dropdownList.forEach(item => {
        if (item !== activeItem) {
          item.close();
        } else {
          if (item.isOpen) {
            item.close();
          } else {
            item.open();
          }
        }
      })
    }
  }

  class Menu {
    constructor(menu, btn) {
      this.menu = menu;
      this.btn = btn;
      this.isOpen = false;
      if (this.menu && this.btn) {
        this.init();
      }
    }

    init() {
      this.btn.addEventListener("click", this.handleClick.bind(this));
    }

    handleClick() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }

    open() {
      this.isOpen = true;
      this.menu.classList.add("_active");
      this.btn.classList.add("_active");
    }

    close() {
      this.isOpen = false;
      this.menu.classList.remove("_active");
      this.btn.classList.remove("_active");
    }
  }

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

  const infoImages = document.querySelector(".info-images");
  if (infoImages) {
    const prevBtn = infoImages.querySelector(".info-images-btns__btn_prev");
    const nextBtn = infoImages.querySelector(".info-images-btns__btn_next");

    if (prevBtn && nextBtn) {
      new Swiper(infoImages, {
        slidesPerView: 2,
        spaceBetween: 40,
        navigation: {
          prevEl: prevBtn,
          nextEl: nextBtn,
        },
      })
    }
  }

  if (document.querySelector(".questions")) {
    const questionsContent = document.querySelector(".questions-content");
    const questionsItems = document.querySelectorAll(".questions-list-item");

    if (questionsContent && window.matchMedia("(min-width: 1025px)").matches) {
      const dropdownItems = [];
      questionsItems.forEach(item => {
        const dropdown = new QuestionDropdown(item);
        dropdownItems.push(dropdown);
        questionsContent.appendChild(dropdown.content);
      });

      new QuestionDropdownController(dropdownItems);

    }
  }

  if (window.matchMedia("(max-width: 1024px)").matches) {
    const header = document.querySelector(".header");
    const menu = document.querySelector(".header-menu");
    const menuInner = document.querySelector(".header-menu__inner");
    const menuBtn = document.querySelector(".header-menu-btn");

    new Menu(menu, menuBtn);

    const headerNav = header.querySelector(".header-nav");
    const headerInfoItems = header.querySelectorAll(".header-top__item_mob");

    menu.appendChild(headerNav);

    headerInfoItems.forEach(item => menuInner.appendChild(item));
  }
})