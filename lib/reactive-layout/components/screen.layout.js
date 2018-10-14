"use strict";

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(["\n  font-family: \"Play\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ", ";\n  background-image: ", ";\n  background-size: cover;\n  width: ", ";\n  height: ", ";\n  overflow: hidden;\n"], ["\n  font-family: \"Play\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ", ";\n  background-image: ", ";\n  background-size: cover;\n  width: ", ";\n  height: ", ";\n  overflow: hidden;\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _navButtons = require("./scroll-top/nav-buttons.component");

var _navButtons2 = _interopRequireDefault(_navButtons);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _themeUtils = require("../api/theme-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Container = _styledComponents2.default.section.attrs({
  id: function id(props) {
    return props.id;
  }
})(_templateObject, _themeUtils.getBgColor, function (props) {
  return props.bg ? "url(" + props.bg + ")" : "none";
}, function (_ref) {
  var theme = _ref.theme;
  return theme["screen-width"] + "px";
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme["screen-height"] + "px";
});

var ChildBox = _styledComponents2.default.div(_templateObject2);

Container.defaultProps = {
  theme: {
    "screen-width": "100%",
    "screen-height": "100%"
  }
};

var Screen = function Screen(_ref3) {
  var index = _ref3.index,
      title = _ref3.title,
      noNav = _ref3.noNav,
      bg = _ref3.bg,
      children = _ref3.children,
      scrollNext = _ref3.scrollNext,
      scrollPrev = _ref3.scrollPrev,
      _ref3$primary = _ref3.primary,
      primary = _ref3$primary === undefined ? false : _ref3$primary,
      _ref3$secondary = _ref3.secondary,
      secondary = _ref3$secondary === undefined ? false : _ref3$secondary,
      _ref3$tertiary = _ref3.tertiary,
      tertiary = _ref3$tertiary === undefined ? false : _ref3$tertiary,
      id = _ref3.id;

  return _react2.default.createElement(
    Container,
    {
      bg: bg || false,
      primary: primary,
      secondary: secondary,
      tertiary: tertiary
    },
    _react2.default.createElement(
      ChildBox,
      null,
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
  bg: _propTypes2.default.string,
  primary: _propTypes2.default.bool,
  secondary: _propTypes2.default.bool,
  tertiary: _propTypes2.default.bool,
  id: _propTypes2.default.string.isRequired
} : {};

exports.default = Screen;
module.exports = exports["default"];