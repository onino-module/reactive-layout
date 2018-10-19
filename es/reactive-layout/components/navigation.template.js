function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";

var fixedWrapperStyle = {
  width: "100%",
  position: "fixed",
  top: "0"
};

var containerStyle = {
  display: "flex",
  width: "100%",
  maxWidth: "1080px",
  justifyContent: "space-between",
  alignItems: "center",
  height: "45px",
  margin: "auto"
};

var rightWrapperStyle = {
  display: "flex"
};

var navOptionStyle = {
  textDecoration: "none",
  fontSize: "1em",
  width: "100px",
  textAlign: "center"
};

var selectStyle = {
  backgroundColor: "transparent",
  marginRight: "10px",
  height: "30px",
  color: "white",
  display: "none"
};

var navButtonStyle = {
  cursor: "pointer",
  padding: "5px",
  fontWeight: "900",
  fontFamily: "Play"
};

var Navigation = function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation() {
    var _temp, _this, _ret;

    _classCallCheck(this, Navigation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      slectedId: "1"
    }, _this.scroll = function (index) {
      var target = document.getElementById(_this.props.id).children[index + 1];
      _this.scrollTo(target);
    }, _this.scrollTo = function (el) {
      window.scrollTo({
        behavior: "smooth",
        left: 0,
        top: el.offsetTop
      });
    }, _this.setLanguage = function (e) {
      return _this.props.setLanguage(e.currentTarget.dataset.lng);
    }, _this.handledivChange = function (newId, prevId, e) {
      _this.setState({
        selectedId: newId
      });
      _this.scroll(parseInt(newId));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Navigation.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        navItems = _props.navItems,
        theme = _props.theme;


    return React.createElement(
      "div",
      { style: fixedWrapperStyle },
      React.createElement(
        "div",
        { style: containerStyle },
        React.createElement("div", null),
        React.createElement(
          "div",
          { style: rightWrapperStyle },
          navItems.map(function (item, index) {
            return React.createElement(
              "div",
              {
                style: navButtonStyle,
                key: "navItem" + index,
                id: index.toString(),
                onClick: function onClick() {
                  return _this2.scroll(index);
                },
                theme: theme
              },
              item.text
            );
          })
        ),
        React.createElement(
          "select",
          { style: selectStyle, onChange: this.scrollToMob },
          navItems.map(function (item, index) {
            return React.createElement(
              "option",
              {
                style: navOptionStyle,
                key: "menuItem" + index,
                "data-link": item,
                value: item
              },
              item.text
            );
          })
        )
      )
    );
  };

  return Navigation;
}(Component);

Navigation.propTypes = process.env.NODE_ENV !== "production" ? {
  navItems: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,
  id: PropTypes.string.isRequired
} : {};

export default Navigation;