"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _up = require("./up.png");

var _up2 = _interopRequireDefault(_up);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "auto",
  paddingBottom: "20px",
  width: "100%",
  backgoundColor: "transparent",
  position: "absolute",
  bottom: 0
};

var leftScrollButtonStyle = {
  background: "url(" + _up2.default + ")",
  width: "48px",
  height: "48px",
  cursor: "pointer",
  margin: "0px 5px 0px 5px"
};

var rightScrollButtonStyle = _extends({}, leftScrollButtonStyle, {
  transform: "rotate(180deg)"
});

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
      "div",
      { style: containerStyle },
      !isFirst && _react2.default.createElement("div", { style: leftScrollButtonStyle, onClick: this.props.scrollPrev }),
      !isLast && _react2.default.createElement("div", { style: rightScrollButtonStyle, onClick: this.props.scrollNext })
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