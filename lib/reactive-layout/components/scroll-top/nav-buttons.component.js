"use strict";

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: auto;\n  padding-bottom: 20px;\n  width: 100%;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: auto;\n  padding-bottom: 20px;\n  width: 100%;\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  background: url(", ");\n  width: 48px;\n  height: 48px;\n  cursor: pointer;\n  margin: 0px 5px 0px 5px;\n"], ["\n  background: url(", ");\n  width: 48px;\n  height: 48px;\n  cursor: pointer;\n  margin: 0px 5px 0px 5px;\n"]),
    _templateObject3 = _taggedTemplateLiteralLoose(["\n  transform: rotate(180deg);\n"], ["\n  transform: rotate(180deg);\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _up = require("./up.png");

var _up2 = _interopRequireDefault(_up);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Container = _styledComponents2.default.div(_templateObject);

var ArrowUp = _styledComponents2.default.div(_templateObject2, _up2.default);

var ArrowDown = ArrowUp.extend(_templateObject3);

var NavButtons = function (_Component) {
  _inherits(NavButtons, _Component);

  function NavButtons() {
    var _temp, _this, _ret;

    _classCallCheck(this, NavButtons);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      totalLength: 0
    }, _this.NavButtons = function (e) {
      e.preventDefault();
      window.scrollTo({
        behavior: "smooth",
        left: 0,
        top: 0
      });
    }, _this.scrollNextUp = function () {
      var target = document.getElementById(_this.props.id).children[_this.props.index];
      _this.scrollTo(target);
    }, _this.scrollNextDown = function () {
      var target = document.getElementById(_this.props.id).children[_this.props.index + 2];
      _this.scrollTo(target);
    }, _this.scrollTo = function (el) {
      window.scrollTo({
        behavior: "smooth",
        left: 0,
        top: el.offsetTop
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  NavButtons.prototype.componentDidMount = function componentDidMount() {
    var newValue = document.getElementById(this.props.id).childElementCount - 2;
    this.setState({ totalLength: newValue });
  };

  NavButtons.prototype.render = function render() {
    var isFirst = this.props.index === 0;
    var isLast = this.props.index === this.state.totalLength;
    return _react2.default.createElement(
      Container,
      null,
      !isFirst && _react2.default.createElement(ArrowUp, { onClick: this.props.scrollPrev }),
      !isLast && _react2.default.createElement(ArrowDown, { onClick: this.props.scrollNext })
    );
  };

  return NavButtons;
}(_react.Component);

NavButtons.propTypes = process.env.NODE_ENV !== "production" ? {
  index: _propTypes2.default.number.isRequired,
  id: _propTypes2.default.string.isRequired
} : {};

exports.default = NavButtons;
module.exports = exports["default"];