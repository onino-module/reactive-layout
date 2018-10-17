"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _computeOptions = require("./../api/compute-options.js");

var _computeOptions2 = _interopRequireDefault(_computeOptions);

var _theme = require("./../api/theme");

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withTheme = function withTheme(userTheme) {
  return function (Wrapped) {
    var Result = function (_Component) {
      _inherits(Result, _Component);

      function Result(props) {
        _classCallCheck(this, Result);

        var _this = _possibleConstructorReturn(this, _Component.call(this));

        _this.computeStyles = function () {
          _this.setState({ options: _extends({}, (0, _computeOptions2.default)()) });
        };

        var _colors = userTheme.colors || _theme.colors;
        _this.state = {
          colors: _colors,
          options: _extends({}, (0, _computeOptions2.default)())
        };
        return _this;
      }

      Result.prototype.componentDidMount = function componentDidMount() {
        window.addEventListener("resize", this.computeStyles);
      };

      Result.prototype.render = function render() {
        var theme = _extends({ colors: this.state.colors }, this.state.options);
        return _react2.default.createElement(
          _styledComponents.ThemeProvider,
          { theme: theme },
          _react2.default.createElement(Wrapped, _extends({}, this.props, { theme: theme }))
        );
      };

      return Result;
    }(_react.Component);

    return Result;
  };
};

exports.default = withTheme;
module.exports = exports["default"];