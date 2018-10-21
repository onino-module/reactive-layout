import React, { Component } from "react";
import PropTypes from "prop-types";
import ArrowButtonSvg from "./arrow-button.svg";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "auto",
  width: "100%",
  backgoundColor: "transparent",
  position: "absolute",
  bottom: 50,
};

const leftScrollButtonStyle = {
  width: "auto",
  height: "auto",
  cursor: "pointer",
  margin: "0px 5px 0px 5px",
};

const rightScrollButtonStyle = {
  ...leftScrollButtonStyle,
  transform: "rotate(180deg)",
};

class NavButtons extends Component {
  state = {
    totalLength: 0,
  };

  componentDidMount() {
    const newValue =
      document.getElementById(this.props.id).childElementCount - 2;
    this.setState({ totalLength: newValue });
  }

  NavButtons = e => {
    e.preventDefault();
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: 0,
    });
  };

  scrollNextUp = () => {
    const target = document.getElementById(this.props.id).children[
      this.props.index
    ];
    this.scrollTo(target);
  };

  scrollNextDown = () => {
    const target = document.getElementById(this.props.id).children[
      this.props.index + 2
    ];
    this.scrollTo(target);
  };

  scrollTo = el => {
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: el.offsetTop,
    });
  };

  render() {
    const { size, color } = this.props.navButtonOptions;
    const isFirst = this.props.index === 0;
    const isLast = this.props.index === this.state.totalLength;
    return (
      <div style={containerStyle}>
        {!isFirst && (
          <div style={leftScrollButtonStyle} onClick={this.props.scrollPrev}>
            <ArrowButtonSvg size={size} color={color} />
          </div>
        )}
        {!isLast && (
          <div style={rightScrollButtonStyle} onClick={this.props.scrollNext}>
            <ArrowButtonSvg size={size} color={color} />
          </div>
        )}
      </div>
    );
  }
}

NavButtons.defaultProps = {
  navButtonOptions: {
    size: 50,
    color: "#999999",
  },
};

NavButtons.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  navButtonOptions: PropTypes.shape({
    size: PropTypes.number,
    color: PropTypes.string,
  }).isRequired,
};

export default NavButtons;
