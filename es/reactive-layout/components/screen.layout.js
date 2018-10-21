var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import PropTypes from "prop-types";
import ArrowButton from "./scroll-top/arrow-button";

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
  return React.createElement(
    "div",
    { style: containerStyle, id: id },
    React.createElement(
      "div",
      { style: _extends({}, childBoxStyle, newStyles) },
      children || React.createElement("div", null)
    ),
    !hideBottomNav && React.createElement(ArrowButton, {
      navButtonOptions: navButtonOptions,
      index: index,
      scrollNext: scrollNext,
      scrollPrev: scrollPrev,
      id: id
    })
  );
};

Screen.propTypes = process.env.NODE_ENV !== "production" ? {
  index: PropTypes.number.isRequired,
  hideBottomNav: PropTypes.bool,
  children: PropTypes.any,
  id: PropTypes.string.isRequired,
  bg: PropTypes.shape({
    img: PropTypes.string,
    color: PropTypes.string
  }),
  screenOptions: PropTypes.object,
  navButtonOptions: PropTypes.shape({
    size: PropTypes.number,
    color: PropTypes.string
  })
} : {};

export default Screen;