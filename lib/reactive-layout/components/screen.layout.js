"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _navButtons = require("./scroll-top/nav-buttons.component");

var _navButtons2 = _interopRequireDefault(_navButtons);

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
      noNav = _ref.noNav,
      children = _ref.children,
      scrollNext = _ref.scrollNext,
      scrollPrev = _ref.scrollPrev,
      id = _ref.id,
      bg = _ref.bg,
      screenOptions = _ref.screenOptions;

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
    !noNav && _react2.default.createElement(_navButtons2.default, {
      index: index,
      scrollNext: scrollNext,
      scrollPrev: scrollPrev,
      id: id
    })
  );
};

Screen.propTypes = process.env.NODE_ENV !== "production" ? {
  index: _propTypes2.default.number.isRequired,
  noNav: _propTypes2.default.bool,
  children: _propTypes2.default.any,
  id: _propTypes2.default.string.isRequired,
  bg: _propTypes2.default.shape({
    img: _propTypes2.default.string,
    color: _propTypes2.default.string
  }),
  screenOptions: _propTypes2.default.object
} : {};

exports.default = Screen;
module.exports = exports["default"];