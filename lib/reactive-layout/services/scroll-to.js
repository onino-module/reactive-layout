"use strict";

exports.__esModule = true;
var scrollTo = function scrollTo(target) {
  window.scrollTo({
    "behavior": "smooth",
    "left": 0,
    "top": target.offsetTop
  });
};

exports.default = scrollTo;
module.exports = exports["default"];