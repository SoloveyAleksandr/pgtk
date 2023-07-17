document.addEventListener("DOMContentLoaded", () => {
  Fancybox.bind("[data-fancybox]", {});

  const startWindowSize = window.outerWidth;
  window.onresize = () => {
    if (startWindowSize > 1024 && window.outerWidth <= 1024) {
      location.reload();
    } else if (startWindowSize <= 1024 && window.outerWidth > 1024) {
      location.reload();
    }
  }

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
    constructor(menu, btn, header) {
      this.menu = menu;
      this.btn = btn;
      this.header = header;
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
      this.header.classList.add("_active-menu");
    }

    close() {
      this.isOpen = false;
      this.menu.classList.remove("_active");
      this.btn.classList.remove("_active");
      this.header.classList.remove("_active-menu");
    }
  }

  class Header {
    constructor(header) {
      this.header = header;
      this.prevPos = 0;
      if (this.header) {
        this.init();
      }
    }

    init() {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
          this.header.classList.add("_active");
          if (this.prevPos > window.scrollY) {
            this.show();
          } else {
            this.hide();
          }
        } else {
          this.header.classList.remove("_active");
        }
        this.prevPos = window.scrollY;
      })
    }

    hide() {
      if (!this.header.classList.contains("_active-menu")) {
        this.header.classList.add("_hidden");
      }
    }

    show() {
      this.header.classList.remove("_hidden");
    }
  }

  class InfoNav {
    constructor(container, btn, activeItem) {
      this.container = container;
      this.btn = btn;
      this.btnText = this.btn.querySelector(".info-nav-btn__text");
      this.activeItem = activeItem;
      this.maxHeight = 0;
      this.isOpen = false;

      if (this.container && this.btn && this.btnText && activeItem) {
        this.init();
      }
    }

    init() {
      this.btnText.textContent = this.activeItem.textContent;
      this.maxHeight = this.container.offsetHeight * 2;
      this.btn.addEventListener("click", this.handleClick.bind(this));
      this.close();
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
      this.container.classList.add("_active");
      this.btn.classList.add("_active");

      if (window.matchMedia("(max-width: 1024px)").matches) {
        this.container.style.maxHeight = this.maxHeight + "px";
      }
    }

    close() {
      this.isOpen = false;
      this.container.classList.remove("_active");
      this.btn.classList.remove("_active");
      if (window.matchMedia("(max-width: 1024px)").matches) {
        this.container.style.maxHeight = "0px";
      }
    }
  }

  class HeaderDropdown {
    constructor(container) {
      this.container = container;
      this.btn = this.container.querySelector(".header-nav-drop__btn");
      this.content = this.container.querySelector(".header-nav-drop__content");
      this.maxHeight = 0;
      this.isActive = false;

      if (this.container && this.btn && this.content) {
        this.init();
      }
    }

    init() {
      this.maxHeight = this.content.offsetHeight * 2;
      if (window.matchMedia("(max-width: 1024px)").matches) {
        this.btn.addEventListener("click", this.handleClick.bind(this));
      } else {
        this.container.addEventListener("mouseenter", this.open.bind(this));
        this.container.addEventListener("mouseleave", this.close.bind(this));
      }
      this.close();
    }

    handleClick() {
      if (this.isActive) {
        this.close();
      } else {
        this.open();
      }
    }

    open() {
      this.isActive = true;
      this.container.classList.add("_active");
      this.content.style.maxHeight = this.maxHeight + "px";
    }

    close() {
      this.isActive = false;
      this.container.classList.remove("_active");
      this.content.style.maxHeight = "0px";
    }
  }

  class UpBtn {
    constructor(btn) {
      this.btn = btn;

      if (this.btn) {
        this.init();
      }
    }

    init() {
      this.btn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      })

      document.addEventListener("scroll", () => {
        if (window.scrollY > window.outerHeight) {
          this.btn.classList.add("_active");
        } else {
          this.btn.classList.remove("_active");
        }
      })
    }
  }

  class Legal {
    constructor(container) {
      this.container = container;
      this.bg = this.container.querySelector(".legal__bg");
      this.btn = this.container.querySelector(".legal__btn");

      if (this.container && this.bg && this.btn) {
        this.init();
      }
    }

    init() {
      this.bg.addEventListener("click", this.close.bind(this));
      this.btn.addEventListener("click", this.close.bind(this));
    }

    open() {
      this.container.classList.add("_active");
    }

    close() {
      this.container.classList.remove("_active");
    }
  }

  const upBtn = document.querySelector(".up-btn");
  if (upBtn) {
    new UpBtn(upBtn);
  }

  const headerNavDropItems = document.querySelectorAll(".header-nav-drop");
  headerNavDropItems.forEach(item => new HeaderDropdown(item));

  const mainInfo = document.querySelector(".main-info");
  if (mainInfo) {
    const prevBtn = mainInfo.querySelector(".main-info-slider__btn_prev");
    const nextBtn = mainInfo.querySelector(".main-info-slider__btn_next");
    const swiperContainer = mainInfo.querySelector(".main-info-swiper");

    if (prevBtn && nextBtn && swiperContainer) {
      new Swiper(swiperContainer, {
        slidesPerView: 1,
        autoHeight: true,
        spaceBetween: 100,
        navigation: {
          prevEl: prevBtn,
          nextEl: nextBtn,
        },

        breakpoints: {
          1920: {
            slidesPerView: 3,
            spaceBetween: 90,
          },
          1025: {
            slidesPerView: 2,
            spaceBetween: 90,
          },
          501: {
            slidesPerView: 2,
            spaceBetween: 40,
          }
        }
      })
    }
  }

  const infoImages = document.querySelector(".info-images");
  if (infoImages) {
    const prevBtn = infoImages.querySelector(".info-images-btns__btn_prev");
    const nextBtn = infoImages.querySelector(".info-images-btns__btn_next");

    if (prevBtn && nextBtn) {
      new Swiper(infoImages, {
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 40,
        navigation: {
          prevEl: prevBtn,
          nextEl: nextBtn,
        },
        breakpoints: {
          501: {
            slidesPerView: 2,
          }
        }
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
    } else {
      const dropdownItems = [];
      questionsItems.forEach(item => {
        const dropdown = new QuestionDropdown(item);
        dropdownItems.push(dropdown);
      });

      new QuestionDropdownController(dropdownItems);
    }
  }

  const header = document.querySelector(".header");
  if (header) {
    new Header(header);

    if (window.matchMedia("(max-width: 1024px)").matches) {
      const menu = document.querySelector(".header-menu");
      const menuInner = document.querySelector(".header-menu__inner");
      const menuBtn = document.querySelector(".header-menu-btn");

      new Menu(menu, menuBtn, header);

      const headerNav = header.querySelector(".header-nav");
      const headerInfoItems = header.querySelectorAll(".header-top__item_mob");

      menu.appendChild(headerNav);

      headerInfoItems.forEach(item => menuInner.appendChild(item));
    }
  }

  if (document.querySelector(".main-news")) {
    const prevBtn = document.querySelector(".main-news-btns__btn_prev");
    const nextBtn = document.querySelector(".main-news-btns__btn_next");

    new Swiper(".main-news-swiper", {
      slidesPerView: 1,
      spaceBetween: 100,
      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn,
      },
      breakpoints: {
        1920: {
          slidesPerView: 4,
          spaceBetween: 77,
        },
        1500: {
          spaceBetween: 50,
          slidesPerView: 4,
        },
        1025: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        501: {
          slidesPerView: 2,
          spaceBetween: 25,
        }
      }
    })
  }

  if (document.querySelector(".main-partners")) {
    const prevBtn = document.querySelector(".main-partners-btns__btn_prev");
    const nextBtn = document.querySelector(".main-partners-btns__btn_next");

    new Swiper(".main-partners-swiper", {
      slidesPerView: 2,
      spaceBetween: 100,
      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn,
      },
      breakpoints: {
        1920: {
          slidesPerView: 6,
          spaceBetween: 60,
        },
        1500: {
          spaceBetween: 50,
          slidesPerView: 6,
        },
        1025: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
        800: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
      }
    })
  }

  if (document.querySelector(".info-nav-wrapper")) {
    const infoNavBtn = document.querySelector(".info-nav-btn");
    const infoNav = document.querySelector(".info-nav");
    const activeNavItem = infoNav.querySelector(".info-nav__link._active");

    new InfoNav(infoNav, infoNavBtn, activeNavItem);
  }

  const footerYear = document.querySelector("#footer-current-year");
  if (footerYear) {
    (async () => {
      fetch("http://worldtimeapi.org/api/ip")
        .then(response => response.json())
        .then(data => {
          footerYear.innerText = new Date(data.datetime).getFullYear()
        })
        .catch(() => {
          footerYear.innerText = new Date().getFullYear();
        });
    })();
  }

  const legalContainer = document.querySelector(".legal");
  if (legalContainer) {
    const legal = new Legal(legalContainer);

    const btns = document.querySelectorAll("[data-legal]");
    btns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        legal.open();
      });
    });
  }

})