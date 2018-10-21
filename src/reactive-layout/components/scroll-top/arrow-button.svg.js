import React, { Component } from "react";
import PropTypes from "prop-types";

class ArrowButtonSvg extends Component {
  render() {
    return (
      <svg
        id="svg2"
        width={this.props.size}
        version="1.1"
        viewBox="0 0 500 500"
      >
        <circle
          id="path4138"
          strokeLinejoin="round"
          opacity=".7"
          strokeWidth="40"
          strokeLinecap="round"
          stroke={this.props.color}
          cy="250"
          cx="250"
          r="211"
          fill="none"
        />
        <path
          id="path4148"
          fill={this.props.color}
          d="m110 280l140-100 140 100h-280"
        />
      </svg>
    );
  }
}

ArrowButtonSvg.defaultProps = {
  color: "#666666",
  size: 50,
};

ArrowButtonSvg.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default ArrowButtonSvg;
