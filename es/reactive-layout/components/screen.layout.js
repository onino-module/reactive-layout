var _templateObject = _taggedTemplateLiteralLoose(["\n  font-family: \"Play\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ", ";\n  background-image: ", ";\n  background-size: cover;\n  width: ", ";\n  height: ", ";\n  overflow: hidden;\n"], ["\n  font-family: \"Play\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ", ";\n  background-image: ", ";\n  background-size: cover;\n  width: ", ";\n  height: ", ";\n  overflow: hidden;\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from "react";
import PropTypes from "prop-types";

import NavButtons from "./scroll-top/nav-buttons.component";
import styled from "styled-components";
import { getBgColor } from "../api/theme-utils";

var Container = styled.section.attrs({
  id: function id(props) {
    return props.id;
  }
})(_templateObject, getBgColor, function (props) {
  return props.bg ? "url(" + props.bg + ")" : "none";
}, function (_ref) {
  var theme = _ref.theme;
  return theme["screen-width"] + "px";
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme["screen-height"] + "px";
});

var ChildBox = styled.div(_templateObject2);

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

  return React.createElement(
    Container,
    {
      bg: bg || false,
      primary: primary,
      secondary: secondary,
      tertiary: tertiary
    },
    React.createElement(
      ChildBox,
      null,
      children || React.createElement("div", null)
    ),
    !noNav && React.createElement(NavButtons, {
      index: index,
      scrollNext: scrollNext,
      scrollPrev: scrollPrev,
      id: id
    })
  );
};

Screen.propTypes = process.env.NODE_ENV !== "production" ? {
  index: PropTypes.number.isRequired,
  noNav: PropTypes.bool,
  children: PropTypes.any,
  bg: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  id: PropTypes.string.isRequired
} : {};

export default Screen;