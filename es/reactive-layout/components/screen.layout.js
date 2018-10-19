import React from "react";
import PropTypes from "prop-types";
import NavButtons from "./scroll-top/nav-buttons.component";

var containerStyle = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "spaceBetween",
  alignItems: "center",
  backgroundSize: "cover",
  overflow: "hidden"
};

var childBoxStyle = {
  flex: "1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw"
};

var Screen = function Screen(_ref) {
  var index = _ref.index,
      noNav = _ref.noNav,
      children = _ref.children,
      scrollNext = _ref.scrollNext,
      scrollPrev = _ref.scrollPrev,
      id = _ref.id;

  return React.createElement(
    "div",
    { style: containerStyle, id: id },
    React.createElement(
      "div",
      { style: childBoxStyle },
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
  id: PropTypes.string.isRequired
} : {};

export default Screen;