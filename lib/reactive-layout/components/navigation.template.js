"use strict";

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  position: fixed;\n  top: 0;\n  background-color: ", ";\n"], ["\n  width: 100%;\n  position: fixed;\n  top: 0;\n  background-color: ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  height: 45px;\n  max-width: 1080px;\n  margin: auto;\n"], ["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  height: 45px;\n  max-width: 1080px;\n  margin: auto;\n"]),
    _templateObject3 = _taggedTemplateLiteralLoose(["\n  display: ", ";\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n"], ["\n  display: ", ";\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n"]),
    _templateObject4 = _taggedTemplateLiteralLoose(["\n  text-decoration: none;\n  color: ", ";\n  font-size: 1em;\n  width: 100px;\n  text-align: center;\n"], ["\n  text-decoration: none;\n  color: ", ";\n  font-size: 1em;\n  width: 100px;\n  text-align: center;\n"]),
    _templateObject5 = _taggedTemplateLiteralLoose(["\n  height: 16px;\n  margin-left: 10px;\n  cursor: pointer;\n"], ["\n  height: 16px;\n  margin-left: 10px;\n  cursor: pointer;\n"]),
    _templateObject6 = _taggedTemplateLiteralLoose(["\n  display: ", ";\n  background-color: transparent;\n  margin-right: 10px;\n  height: 30px;\n  color: white;\n"], ["\n  display: ", ";\n  background-color: transparent;\n  margin-right: 10px;\n  height: 30px;\n  color: white;\n"]),
    _templateObject7 = _taggedTemplateLiteralLoose(["\n  display: ", ";\n"], ["\n  display: ", ";\n"]),
    _templateObject8 = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  cursor: pointer;\n  padding: 5px;\n  font-weight: 900;\n  font-family : 'Play';\n"], ["\n  color: ", ";\n  cursor: pointer;\n  padding: 5px;\n  font-weight: 900;\n  font-family : 'Play';\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _themeUtils = require("../api/theme-utils");

var _scrollTo = require("./../api/scroll-to");

var _scrollTo2 = _interopRequireDefault(_scrollTo);

var _uk = require("./../images/flags/uk.png");

var _uk2 = _interopRequireDefault(_uk);

var _fr = require("./../images/flags/fr.png");

var _fr2 = _interopRequireDefault(_fr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var MOVE_BORDER_COLOR_DEFAULT = "#9A9A9A";

var FixedWrapper = _styledComponents2.default.div(_templateObject, function (_ref) {
  var bgColor = _ref.bgColor;
  return bgColor;
});

var Container = _styledComponents2.default.div(_templateObject2);

var Nav = _styledComponents2.default.nav(_templateObject3, (0, _themeUtils.isPc)("flex", "none"));

var NavButton = _styledComponents2.default.a(_templateObject4, function (_ref2) {
  var textColor = _ref2.textColor;
  return textColor;
});

var NavOption = NavButton.withComponent("option");

var Flag = _styledComponents2.default.img(_templateObject5);

var Select = _styledComponents2.default.select(_templateObject6, (0, _themeUtils.isPc)("none", "inline"));

var Tabs = _styledComponents2.default.div(_templateObject7, (0, _themeUtils.isPc)("flex", "none"));

var Tab = _styledComponents2.default.div(_templateObject8, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.text3;
});

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
    }, _this.handleTabChange = function (newId, prevId, e) {
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
        bgColor = _props.bgColor,
        theme = _props.theme;

    return _react2.default.createElement(
      FixedWrapper,
      { bgColor: bgColor },
      _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(Flag, {
            src: _uk2.default,
            "data-lng": "en",
            onClick: this.setLanguage,
            alt: "uk flag"
          }),
          _react2.default.createElement(Flag, {
            src: _fr2.default,
            "data-lng": "fr",
            onClick: this.setLanguage,
            alt: "fr flag"
          })
        ),
        _react2.default.createElement(
          Tabs,
          null,
          navItems.map(function (item, index) {
            return _react2.default.createElement(
              Tab,
              {
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
          Select,
          { onChange: this.scrollToMob },
          navItems.map(function (item, index) {
            return _react2.default.createElement(
              NavOption,
              {
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

Navigation.defaultProps = {
  bgColor: "none",
  textColor: "white",
  borderColor: MOVE_BORDER_COLOR_DEFAULT
};

Navigation.propTypes = process.env.NODE_ENV !== "production" ? {
  navItems: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    link: _propTypes2.default.string.isRequired,
    text: _propTypes2.default.string.isRequired
  })).isRequired,
  setLanguage: _propTypes2.default.func.isRequired,
  bgColor: _propTypes2.default.string,
  textColor: _propTypes2.default.string,
  id: _propTypes2.default.string.isRequired
} : {};

exports.default = Navigation;
module.exports = exports["default"];