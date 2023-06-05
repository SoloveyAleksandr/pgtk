"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
document.addEventListener("DOMContentLoaded", function () {
  Fancybox.bind("[data-fancybox]", {});
  var startWindowSize = window.outerWidth;
  window.onresize = function () {
    if (startWindowSize > 1024 && window.outerWidth <= 1024) {
      location.reload();
    } else if (startWindowSize <= 1024 && window.outerWidth > 1024) {
      location.reload();
    }
  };
  var QuestionDropdown = /*#__PURE__*/function () {
    function QuestionDropdown(container) {
      _classCallCheck(this, QuestionDropdown);
      this.container = container;
      this.btn = this.container.querySelector(".questions-list-item__btn");
      this.content = this.container.querySelector(".questions-list-item__content");
      this.maxHeight = 0;
      this.isOpen = false;
      if (this.container && this.btn && this.content) {
        this.init();
      }
    }
    _createClass(QuestionDropdown, [{
      key: "init",
      value: function init() {
        // this.btn.addEventListener("click", this.handleClick.bind(this));
        this.maxHeight = this.content.offsetHeight;
        this.close();
      }
    }, {
      key: "open",
      value: function open() {
        this.isOpen = true;
        this.container.classList.add("_active");
        this.content.classList.add("_active");
        this.content.style.maxHeight = this.maxHeight * 2 + "px";
      }
    }, {
      key: "close",
      value: function close() {
        this.isOpen = false;
        this.container.classList.remove("_active");
        this.content.classList.remove("_active");
        this.content.style.maxHeight = "0px";
      }
    }]);
    return QuestionDropdown;
  }();
  var QuestionDropdownController = /*#__PURE__*/function () {
    function QuestionDropdownController(dropdownList) {
      _classCallCheck(this, QuestionDropdownController);
      this.dropdownList = dropdownList;
      this.init();
    }
    _createClass(QuestionDropdownController, [{
      key: "init",
      value: function init() {
        var _this = this;
        this.dropdownList.forEach(function (item) {
          item.btn.addEventListener("click", _this.handleClick.bind(_this, item));
        });
      }
    }, {
      key: "handleClick",
      value: function handleClick(activeItem) {
        this.dropdownList.forEach(function (item) {
          if (item !== activeItem) {
            item.close();
          } else {
            if (item.isOpen) {
              item.close();
            } else {
              item.open();
            }
          }
        });
      }
    }]);
    return QuestionDropdownController;
  }();
  var Menu = /*#__PURE__*/function () {
    function Menu(menu, btn) {
      _classCallCheck(this, Menu);
      this.menu = menu;
      this.btn = btn;
      this.isOpen = false;
      if (this.menu && this.btn) {
        this.init();
      }
    }
    _createClass(Menu, [{
      key: "init",
      value: function init() {
        this.btn.addEventListener("click", this.handleClick.bind(this));
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        if (this.isOpen) {
          this.close();
        } else {
          this.open();
        }
      }
    }, {
      key: "open",
      value: function open() {
        this.isOpen = true;
        this.menu.classList.add("_active");
        this.btn.classList.add("_active");
      }
    }, {
      key: "close",
      value: function close() {
        this.isOpen = false;
        this.menu.classList.remove("_active");
        this.btn.classList.remove("_active");
      }
    }]);
    return Menu;
  }();
  var InfoNav = /*#__PURE__*/function () {
    function InfoNav(container, btn, activeItem) {
      _classCallCheck(this, InfoNav);
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
    _createClass(InfoNav, [{
      key: "init",
      value: function init() {
        this.btnText.textContent = this.activeItem.textContent;
        this.maxHeight = this.container.offsetHeight * 2;
        this.btn.addEventListener("click", this.handleClick.bind(this));
        this.close();
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        if (this.isOpen) {
          this.close();
        } else {
          this.open();
        }
      }
    }, {
      key: "open",
      value: function open() {
        this.isOpen = true;
        this.container.classList.add("_active");
        this.btn.classList.add("_active");
        if (window.matchMedia("(max-width: 1024px)").matches) {
          this.container.style.maxHeight = this.maxHeight + "px";
        }
      }
    }, {
      key: "close",
      value: function close() {
        this.isOpen = false;
        this.container.classList.remove("_active");
        this.btn.classList.remove("_active");
        if (window.matchMedia("(max-width: 1024px)").matches) {
          this.container.style.maxHeight = "0px";
        }
      }
    }]);
    return InfoNav;
  }();
  var HeaderDropdown = /*#__PURE__*/function () {
    function HeaderDropdown(container) {
      _classCallCheck(this, HeaderDropdown);
      this.container = container;
      this.btn = this.container.querySelector(".header-nav-drop__btn");
      this.content = this.container.querySelector(".header-nav-drop__content");
      this.maxHeight = 0;
      this.isActive = false;
      if (this.container && this.btn && this.content) {
        this.init();
      }
    }
    _createClass(HeaderDropdown, [{
      key: "init",
      value: function init() {
        this.maxHeight = this.content.offsetHeight * 2;
        if (window.matchMedia("(max-width: 1024px)").matches) {
          this.btn.addEventListener("click", this.handleClick.bind(this));
        } else {
          this.container.addEventListener("mouseenter", this.open.bind(this));
          this.container.addEventListener("mouseleave", this.close.bind(this));
        }
        this.close();
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        if (this.isActive) {
          this.close();
        } else {
          this.open();
        }
      }
    }, {
      key: "open",
      value: function open() {
        this.isActive = true;
        this.container.classList.add("_active");
        this.content.style.maxHeight = this.maxHeight + "px";
      }
    }, {
      key: "close",
      value: function close() {
        this.isActive = false;
        this.container.classList.remove("_active");
        this.content.style.maxHeight = "0px";
      }
    }]);
    return HeaderDropdown;
  }();
  var headerNavDropItems = document.querySelectorAll(".header-nav-drop");
  headerNavDropItems.forEach(function (item) {
    return new HeaderDropdown(item);
  });
  var mainInfo = document.querySelector(".main-info");
  if (mainInfo) {
    var prevBtn = mainInfo.querySelector(".main-info-slider__btn_prev");
    var nextBtn = mainInfo.querySelector(".main-info-slider__btn_next");
    var swiperContainer = mainInfo.querySelector(".main-info-swiper");
    if (prevBtn && nextBtn && swiperContainer) {
      new Swiper(swiperContainer, {
        slidesPerView: 1,
        autoHeight: true,
        spaceBetween: 100,
        navigation: {
          prevEl: prevBtn,
          nextEl: nextBtn
        },
        breakpoints: {
          1920: {
            slidesPerView: 3,
            spaceBetween: 90
          },
          1025: {
            slidesPerView: 2,
            spaceBetween: 90
          },
          501: {
            slidesPerView: 2,
            spaceBetween: 40
          }
        }
      });
    }
  }
  var infoImages = document.querySelector(".info-images");
  if (infoImages) {
    var _prevBtn = infoImages.querySelector(".info-images-btns__btn_prev");
    var _nextBtn = infoImages.querySelector(".info-images-btns__btn_next");
    if (_prevBtn && _nextBtn) {
      new Swiper(infoImages, {
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 40,
        navigation: {
          prevEl: _prevBtn,
          nextEl: _nextBtn
        },
        breakpoints: {
          501: {
            slidesPerView: 2
          }
        }
      });
    }
  }
  if (document.querySelector(".questions")) {
    var questionsContent = document.querySelector(".questions-content");
    var questionsItems = document.querySelectorAll(".questions-list-item");
    if (questionsContent && window.matchMedia("(min-width: 1025px)").matches) {
      var dropdownItems = [];
      questionsItems.forEach(function (item) {
        var dropdown = new QuestionDropdown(item);
        dropdownItems.push(dropdown);
        questionsContent.appendChild(dropdown.content);
      });
      new QuestionDropdownController(dropdownItems);
    } else {
      var _dropdownItems = [];
      questionsItems.forEach(function (item) {
        var dropdown = new QuestionDropdown(item);
        _dropdownItems.push(dropdown);
      });
      new QuestionDropdownController(_dropdownItems);
    }
  }
  if (window.matchMedia("(max-width: 1024px)").matches) {
    var header = document.querySelector(".header");
    var menu = document.querySelector(".header-menu");
    var menuInner = document.querySelector(".header-menu__inner");
    var menuBtn = document.querySelector(".header-menu-btn");
    new Menu(menu, menuBtn);
    var headerNav = header.querySelector(".header-nav");
    var headerInfoItems = header.querySelectorAll(".header-top__item_mob");
    menu.appendChild(headerNav);
    headerInfoItems.forEach(function (item) {
      return menuInner.appendChild(item);
    });
  }
  if (document.querySelector(".main-news")) {
    var _prevBtn2 = document.querySelector(".main-news-btns__btn_prev");
    var _nextBtn2 = document.querySelector(".main-news-btns__btn_next");
    new Swiper(".main-news-swiper", {
      slidesPerView: 1,
      spaceBetween: 100,
      navigation: {
        prevEl: _prevBtn2,
        nextEl: _nextBtn2
      },
      breakpoints: {
        1920: {
          slidesPerView: 4,
          spaceBetween: 77
        },
        1500: {
          spaceBetween: 50,
          slidesPerView: 4
        },
        1025: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 25
        },
        501: {
          slidesPerView: 2,
          spaceBetween: 25
        }
      }
    });
  }
  if (document.querySelector(".main-partners")) {
    var _prevBtn3 = document.querySelector(".main-partners-btns__btn_prev");
    var _nextBtn3 = document.querySelector(".main-partners-btns__btn_next");
    new Swiper(".main-partners-swiper", {
      slidesPerView: 2,
      spaceBetween: 100,
      navigation: {
        prevEl: _prevBtn3,
        nextEl: _nextBtn3
      },
      breakpoints: {
        1920: {
          slidesPerView: 6,
          spaceBetween: 60
        },
        1500: {
          spaceBetween: 50,
          slidesPerView: 6
        },
        1025: {
          slidesPerView: 6,
          spaceBetween: 30
        },
        800: {
          slidesPerView: 4,
          spaceBetween: 25
        }
      }
    });
  }
  if (document.querySelector(".info-nav-wrapper")) {
    var infoNavBtn = document.querySelector(".info-nav-btn");
    var infoNav = document.querySelector(".info-nav");
    var activeNavItem = infoNav.querySelector(".info-nav__link._active");
    new InfoNav(infoNav, infoNavBtn, activeNavItem);
  }
});