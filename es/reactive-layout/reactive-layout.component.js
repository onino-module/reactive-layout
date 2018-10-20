function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import Navigation from "./components/navigation.template";
import Screen from "./components/screen.layout";
import computeOptions from "./services/compute-options";

var ReactiveLayout = function (_Component) {
  _inherits(ReactiveLayout, _Component);

  function ReactiveLayout() {
    _classCallCheck(this, ReactiveLayout);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.handleTabChange = function (newId, prevId, e) {
      _this.setState({
        selectedId: newId
      });
      _this.scroll(parseInt(newId));
    };

    _this.scroll = function (index) {
      var target = document.getElementById(_this.props.id).children[index + 1];
      window.scrollTo({
        behavior: "smooth",
        left: 0,
        top: target.offsetTop
      });
    };

    _this.scrollNext = function () {
      var selectedId = parseInt(_this.state.selectedId);
      var newId = selectedId + 1;
      _this.setState({
        selectedId: newId.toString()
      });
      _this.scroll(newId);
    };

    _this.scrollPrev = function () {
      var selectedId = parseInt(_this.state.selectedId);
      var newId = selectedId - 1;
      _this.setState({
        selectedId: newId.toString()
      });
      _this.scroll(newId);
    };

    _this.openDetails = function (index) {
      _this.setState({
        isDetailOpen: true,
        detailIndex: index
      });
    };

    _this.closeDetails = function () {
      _this.setState({
        isDetailOpen: false
      });
    };

    _this.submitForm = function (e) {
      e.preventDefault();
    };

    _this.state = {
      isDetailOpen: false,
      detailIndex: 0,
      selectedId: "0",
      screenOptions: computeOptions()
    };
    return _this;
  }

  ReactiveLayout.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    window.addEventListener("resize", function () {
      _this2.setState({
        screenOptions: computeOptions()
      });
    });
  };

  ReactiveLayout.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        navItems = _props.navItems,
        components = _props.components,
        navBarStyles = _props.navBarStyles,
        bgs = _props.bgs,
        isNavVisible = _props.isNavVisible;

    var addProps = {
      screenOptions: this.state.screenOptions
    };
    return React.createElement(
      Fragment,
      null,
      React.createElement(Navigation, {
        id: this.props.id,
        isNavVisible: isNavVisible,
        navItems: navItems,
        selectedId: this.state.selectedId,
        handleTabChange: this.handleTabChange,
        styles: navBarStyles || {},
        screenOptions: this.state.screenOptions
      }),
      navItems.map(function (navItem, index) {
        return React.createElement(
          Screen,
          {
            key: _this3.props.id + index,
            id: _this3.props.id,
            index: index,
            bg: bgs[index] || {},
            scrollNext: _this3.scrollNext,
            scrollPrev: _this3.scrollPrev,
            screenOptions: _this3.state.screenOptions
          },
          React.createElement(components[index], addProps, null)
        );
      })
    );
  };

  return ReactiveLayout;
}(Component);

ReactiveLayout.defaultProps = {
  bgs: [],
  isNavVisible: true
};

ReactiveLayout.propTypes = process.env.NODE_ENV !== "production" ? {
  id: PropTypes.string.isRequired,
  isNavVisible: PropTypes.bool.isRequired,
  navItems: PropTypes.array.isRequired,
  components: PropTypes.array.isRequired,
  navBarStyles: PropTypes.object,
  bgs: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string,
    color: PropTypes.string
  }))
} : {};

export default ReactiveLayout;