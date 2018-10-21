function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";

var ArrowButtonSvg = function (_Component) {
  _inherits(ArrowButtonSvg, _Component);

  function ArrowButtonSvg() {
    _classCallCheck(this, ArrowButtonSvg);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ArrowButtonSvg.prototype.render = function render() {
    return React.createElement(
      "svg",
      {
        id: "svg2",
        width: this.props.size,
        version: "1.1",
        viewBox: "0 0 500 500"
      },
      React.createElement("circle", {
        id: "path4138",
        strokeLinejoin: "round",
        opacity: ".7",
        strokeWidth: "40",
        strokeLinecap: "round",
        stroke: this.props.color,
        cy: "250",
        cx: "250",
        r: "211",
        fill: "none"
      }),
      React.createElement("path", {
        id: "path4148",
        fill: this.props.color,
        d: "m110 280l140-100 140 100h-280"
      })
    );
  };

  return ArrowButtonSvg;
}(Component);

ArrowButtonSvg.defaultProps = {
  color: "#666666",
  size: 50
};

ArrowButtonSvg.propTypes = process.env.NODE_ENV !== "production" ? {
  id: PropTypes.string,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
} : {};

export default ArrowButtonSvg;