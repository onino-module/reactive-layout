var _templateObject = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  position: fixed;\n  top: 0;\n  background-color: ", ";\n"], ["\n  width: 100%;\n  position: fixed;\n  top: 0;\n  background-color: ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  height: 45px;\n  max-width: 1080px;\n  margin: auto;\n"], ["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  height: 45px;\n  max-width: 1080px;\n  margin: auto;\n"]),
    _templateObject3 = _taggedTemplateLiteralLoose(["\n  display: ", ";\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n"], ["\n  display: ", ";\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n"]),
    _templateObject4 = _taggedTemplateLiteralLoose(["\n  text-decoration: none;\n  color: ", ";\n  font-size: 1em;\n  width: 100px;\n  text-align: center;\n"], ["\n  text-decoration: none;\n  color: ", ";\n  font-size: 1em;\n  width: 100px;\n  text-align: center;\n"]),
    _templateObject5 = _taggedTemplateLiteralLoose(["\n  height: 16px;\n  margin-left: 10px;\n  cursor: pointer;\n"], ["\n  height: 16px;\n  margin-left: 10px;\n  cursor: pointer;\n"]),
    _templateObject6 = _taggedTemplateLiteralLoose(["\n  display: ", ";\n  background-color: transparent;\n  margin-right: 10px;\n  height: 30px;\n  color: white;\n"], ["\n  display: ", ";\n  background-color: transparent;\n  margin-right: 10px;\n  height: 30px;\n  color: white;\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React, { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import enFlag from "./../images/flags/uk.png";
import frFlag from "./../images/flags/fr.png";
import { isPc } from "../api/theme-utils";

import scrollTo from "./../api/scroll-to";

var MOVE_BORDER_COLOR_DEFAULT = "#9A9A9A";

var FixedWrapper = styled.div(_templateObject, function (_ref) {
  var bgColor = _ref.bgColor;
  return bgColor;
});

var Container = styled.div(_templateObject2);

var Nav = styled.nav(_templateObject3, isPc("flex", "none"));

var NavButton = styled.a(_templateObject4, function (_ref2) {
  var textColor = _ref2.textColor;
  return textColor;
});

var NavOption = NavButton.withComponent("option");

var Flag = styled.img(_templateObject5);

var Select = styled.select(_templateObject6, isPc("none", "inline"));

var Navigation = function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation() {
    var _temp, _this, _ret;

    _classCallCheck(this, Navigation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.scrollRequest = function (e) {
      e.preventDefault();
      var link = e.currentTarget.dataset.link;
      var target = document.getElementById(link);
      scrollTo(target);
    }, _this.scrollToMob = function (e) {
      e.preventDefault();
      var value = e.currentTarget.value;
      var target = document.getElementById(value);
      scrollTo(target);
    }, _this.setLanguage = function (e) {
      return _this.props.setLanguage(e.currentTarget.dataset.lng);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Navigation.prototype.componentDidMount = function componentDidMount() {};

  Navigation.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        navItems = _props.navItems,
        bgColor = _props.bgColor,
        textColor = _props.textColor;

    return React.createElement(
      FixedWrapper,
      { bgColor: bgColor },
      React.createElement(
        Container,
        null,
        React.createElement(
          "div",
          null,
          React.createElement(Flag, {
            src: enFlag,
            "data-lng": "en",
            onClick: this.setLanguage,
            alt: "uk flag"
          }),
          React.createElement(Flag, {
            src: frFlag,
            "data-lng": "fr",
            onClick: this.setLanguage,
            alt: "fr flag"
          })
        ),
        React.createElement(
          Nav,
          { id: "navigation" },
          navItems.map(function (item, index) {
            return React.createElement(
              NavButton,
              {
                href: item,
                "data-link": item,
                key: "navItem" + index,
                id: "navItem-" + index,
                textColor: textColor,
                onClick: _this2.scrollRequest
              },
              item
            );
          })
        ),
        React.createElement(
          Select,
          { onChange: this.scrollToMob },
          navItems.map(function (item, index) {
            return React.createElement(
              NavOption,
              {
                key: "menuItem" + index,
                "data-link": item,
                value: item
              },
              item
            );
          })
        )
      )
    );
  };

  return Navigation;
}(Component);

Navigation.defaultProps = {
  bgColor: "none",
  textColor: "white",
  borderColor: MOVE_BORDER_COLOR_DEFAULT
};

Navigation.propTypes = process.env.NODE_ENV !== "production" ? {
  navItems: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,
  setLanguage: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
} : {};

export default Navigation;