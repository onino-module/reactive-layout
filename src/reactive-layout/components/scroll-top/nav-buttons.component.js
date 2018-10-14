import React, { Component } from "react";
import PropTypes from "prop-types";

import up from "./up.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding-bottom: 20px;
  width: 100%;
`;

const ArrowUp = styled.div`
  background: url(${up});
  width: 48px;
  height: 48px;
  cursor: pointer;
  margin: 0px 5px 0px 5px;
`;

const ArrowDown = ArrowUp.extend`
  transform: rotate(180deg);
`;

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
      <Container>
        {!isFirst && <ArrowUp onClick={this.props.scrollPrev} />}
        {!isLast && <ArrowDown onClick={this.props.scrollNext} />}
      </Container>
    );
  }
}

NavButtons.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default NavButtons;
