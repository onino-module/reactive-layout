var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

import computeOptions from "./../api/compute-options.js";
import { colors } from './../api/theme';
import { ThemeProvider } from 'styled-components';

var withTheme = function withTheme() {
  return function (Wrapped) {
    var Result = function (_Component) {
      _inherits(Result, _Component);

      function Result(props) {
        _classCallCheck(this, Result);

        var _this = _possibleConstructorReturn(this, _Component.call(this));

        _this.computeStyles = function () {
          _this.setState({
            theme: _extends({}, colors, computeOptions())
          });
        };

        _this.state = {
          theme: _extends({}, colors, computeOptions())
        };
        return _this;
      }

      Result.prototype.componentDidMount = function componentDidMount() {
        window.addEventListener('resize', this.computeStyles);
      };

      Result.prototype.render = function render() {
        return React.createElement(
          ThemeProvider,
          { theme: this.state.theme },
          React.createElement(Wrapped, _extends({}, this.props, {
            theme: this.state.theme }))
        );
      };

      return Result;
    }(Component);

    return Result;
  };
};

export default withTheme;