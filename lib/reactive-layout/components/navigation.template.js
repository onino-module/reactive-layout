"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fixedContainerStyle = {
  width: "100%",
  position: "fixed",
  top: "0"
};

var centeredContainerStyle = {
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
  fontWeight: "900"
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
        theme = _props.theme,
        styles = _props.styles;

    var _fixedContainerStyle = _extends({}, fixedContainerStyle, styles.fixedContainer);
    var _navButtonStyle = _extends({}, navButtonStyle, styles.navButton);
    var _rightWrapperStyle = _extends({}, rightWrapperStyle, styles.rightWrapper);
    return _react2.default.createElement(
      "div",
      { style: _fixedContainerStyle },
      _react2.default.createElement(
        "div",
        { style: centeredContainerStyle },
        _react2.default.createElement("div", null),
        _react2.default.createElement(
          "div",
          { style: _rightWrapperStyle },
          navItems.map(function (item, index) {
            return _react2.default.createElement(
              "div",
              {
                style: _navButtonStyle,
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
        _react2.default.createElement(
          "select",
          { style: selectStyle, onChange: this.scrollToMob },
          navItems.map(function (item, index) {
            return _react2.default.createElement(
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
}(_react.Component);

Navigation.propTypes = process.env.NODE_ENV !== "production" ? {
  navItems: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    link: _propTypes2.default.string.isRequired,
    text: _propTypes2.default.string.isRequired
  })).isRequired,
  id: _propTypes2.default.string.isRequired,
  styles: _propTypes2.default.object
} : {};

exports.default = Navigation;
module.exports = exports["default"];