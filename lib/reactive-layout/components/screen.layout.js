"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _arrowButton = require("./scroll-top/arrow-button");

var _arrowButton2 = _interopRequireDefault(_arrowButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var containerStyle = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "spaceBetween",
  alignItems: "center",
  backgroundSize: "cover",
  overflow: "hidden",
  position: "relative"
};

var childBoxStyle = {
  flex: "1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%"
  // height: "100%",
};

var Screen = function Screen(_ref) {
  var index = _ref.index,
      hideBottomNav = _ref.hideBottomNav,
      children = _ref.children,
      scrollNext = _ref.scrollNext,
      scrollPrev = _ref.scrollPrev,
      id = _ref.id,
      bg = _ref.bg,
      navButtonOptions = _ref.navButtonOptions;

  var newStyles = {
    backgroundColor: bg.color || "transparent",
    backgroundImage: "url(" + bg.img + ")" || "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };
  return _react2.default.createElement(
    "div",
    { style: containerStyle, id: id },
    _react2.default.createElement(
      "div",
      { style: _extends({}, childBoxStyle, newStyles) },
      children || _react2.default.createElement("div", null)
    ),
    !hideBottomNav && _react2.default.createElement(_arrowButton2.default, {
      navButtonOptions: navButtonOptions,
      index: index,
      scrollNext: scrollNext,
      scrollPrev: scrollPrev,
      id: id
    })
  );
};

Screen.propTypes = process.env.NODE_ENV !== "production" ? {
  index: _propTypes2.default.number.isRequired,
  hideBottomNav: _propTypes2.default.bool,
  children: _propTypes2.default.any,
  id: _propTypes2.default.string.isRequired,
  bg: _propTypes2.default.shape({
    img: _propTypes2.default.string,
    color: _propTypes2.default.string
  }),
  screenOptions: _propTypes2.default.object,
  navButtonOptions: _propTypes2.default.shape({
    size: _propTypes2.default.number,
    color: _propTypes2.default.string
  })
} : {};

exports.default = Screen;
module.exports = exports["default"];