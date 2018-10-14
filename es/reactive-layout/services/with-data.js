var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";

import textsFr from "./../data/texts-fr.json";
import textsEn from "./../data/texts-en.json";

var textsDefault = {
  fr: textsFr,
  en: textsEn
};

var withData = function withData(data) {
  return function (Wrapped) {
    var _class, _temp, _initialiseProps;

    var Result = (_temp = _class = function (_Component) {
      _inherits(Result, _Component);

      function Result(_ref) {
        var defaultLanguage = _ref.defaultLanguage;

        _classCallCheck(this, Result);

        var _this = _possibleConstructorReturn(this, _Component.call(this));

        _initialiseProps.call(_this);

        data = data || {};
        _this.allTexts = data.texts || textsDefault;
        var lng = data.lng || defaultLanguage;
        _this.state = { texts: _this.allTexts[lng], lng: lng };
        return _this;
      }

      Result.prototype.componentDidMount = function componentDidMount() {};

      Result.prototype.render = function render() {
        return React.createElement(Wrapped, _extends({}, this.props, {
          setLanguage: this.setLanguage,
          texts: this.state.texts,
          components: data.components,
          bgs: data.bgs
        }));
      };

      return Result;
    }(Component), _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.setLanguage = function (lng) {
        _this2.setState({ texts: _this2.allTexts[lng] });
      };
    }, _temp);


    Result.propType = {
      defaultLanguage: PropTypes.string
    };

    Result.defaultProps = {
      defaultLanguage: "fr"
    };

    return Result;
  };
};

export default withData;