"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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
    function Menu(menu, btn, header) {
      _classCallCheck(this, Menu);
      this.menu = menu;
      this.btn = btn;
      this.header = header;
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
        this.header.classList.add("_active-menu");
      }
    }, {
      key: "close",
      value: function close() {
        this.isOpen = false;
        this.menu.classList.remove("_active");
        this.btn.classList.remove("_active");
        this.header.classList.remove("_active-menu");
      }
    }]);
    return Menu;
  }();
  var Header = /*#__PURE__*/function () {
    function Header(header) {
      _classCallCheck(this, Header);
      this.header = header;
      this.prevPos = 0;
      if (this.header) {
        this.init();
      }
    }
    _createClass(Header, [{
      key: "init",
      value: function init() {
        var _this2 = this;
        window.addEventListener("scroll", function () {
          if (window.scrollY > 200) {
            _this2.header.classList.add("_active");
            if (_this2.prevPos > window.scrollY) {
              _this2.show();
            } else {
              _this2.hide();
            }
          } else {
            _this2.header.classList.remove("_active");
          }
          _this2.prevPos = window.scrollY;
        });
      }
    }, {
      key: "hide",
      value: function hide() {
        if (!this.header.classList.contains("_active-menu")) {
          this.header.classList.add("_hidden");
        }
      }
    }, {
      key: "show",
      value: function show() {
        this.header.classList.remove("_hidden");
      }
    }]);
    return Header;
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
  var UpBtn = /*#__PURE__*/function () {
    function UpBtn(btn) {
      _classCallCheck(this, UpBtn);
      this.btn = btn;
      if (this.btn) {
        this.init();
      }
    }
    _createClass(UpBtn, [{
      key: "init",
      value: function init() {
        var _this3 = this;
        this.btn.addEventListener("click", function () {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        });
        document.addEventListener("scroll", function () {
          if (window.scrollY > window.outerHeight) {
            _this3.btn.classList.add("_active");
          } else {
            _this3.btn.classList.remove("_active");
          }
        });
      }
    }]);
    return UpBtn;
  }();
  var upBtn = document.querySelector(".up-btn");
  if (upBtn) {
    new UpBtn(upBtn);
  }
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
  var header = document.querySelector(".header");
  if (header) {
    new Header(header);
    if (window.matchMedia("(max-width: 1024px)").matches) {
      var menu = document.querySelector(".header-menu");
      var menuInner = document.querySelector(".header-menu__inner");
      var menuBtn = document.querySelector(".header-menu-btn");
      new Menu(menu, menuBtn, header);
      var headerNav = header.querySelector(".header-nav");
      var headerInfoItems = header.querySelectorAll(".header-top__item_mob");
      menu.appendChild(headerNav);
      headerInfoItems.forEach(function (item) {
        return menuInner.appendChild(item);
      });
    }
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
  var footerYear = document.querySelector("#footer-current-year");
  if (footerYear) {
    _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            fetch("http://worldtimeapi.org/api/ip").then(function (response) {
              return response.json();
            }).then(function (data) {
              footerYear.innerText = new Date(data.datetime).getFullYear();
            }).catch(function () {
              footerYear.innerText = new Date().getFullYear();
            });
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  }
});