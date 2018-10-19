import React, { Component } from "react";
import PropTypes from "prop-types";
import up from "./up.png";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "auto",
  paddingBottom: "20px",
  width: "100%",
};

const leftScrollButtonStyle = {
  background: `url(${up})`,
  width: "48px",
  height: "48px",
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
    const isFirst = this.props.index === 0;
    const isLast = this.props.index === this.state.totalLength;
    return (
      <div style={containerStyle}>
        {!isFirst && (
          <div style={leftScrollButtonStyle} onClick={this.props.scrollPrev} />
        )}
        {!isLast && (
          <div style={rightScrollButtonStyle} onClick={this.props.scrollNext} />
        )}
      </div>
    );
  }
}

NavButtons.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default NavButtons;
