import React, { Component } from "react";
import PropTypes from "prop-types";

const fixedWrapperStyle = {
  width: "100%",
  position: "fixed",
  top: "0",
};

const containerStyle = {
  display: "flex",
  width: "100%",
  maxWidth: "1080px",
  justifyContent: "space-between",
  alignItems: "center",
  height: "45px",
  margin: "auto",
};

const rightWrapperStyle = {
  display: "flex",
};

const navOptionStyle = {
  textDecoration: "none",
  fontSize: "1em",
  width: "100px",
  textAlign: "center",
};

const selectStyle = {
  backgroundColor: "transparent",
  marginRight: "10px",
  height: "30px",
  color: "white",
  display: "none",
};

const navButtonStyle = {
  cursor: "pointer",
  padding: "5px",
  fontWeight: "900",
  fontFamily: "Play",
};

class Navigation extends Component {
  state = {
    slectedId: "1",
  };

  scroll = index => {
    const target = document.getElementById(this.props.id).children[index + 1];
    this.scrollTo(target);
  };

  scrollTo = el => {
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: el.offsetTop,
    });
  };

  setLanguage = e => this.props.setLanguage(e.currentTarget.dataset.lng);

  handledivChange = (newId, prevId, e) => {
    this.setState({
      selectedId: newId,
    });
    this.scroll(parseInt(newId));
  };

  render() {
    const { navItems, theme } = this.props;

    return (
      <div style={fixedWrapperStyle}>
        <div style={containerStyle}>
          <div />
          <div style={rightWrapperStyle}>
            {navItems.map((item, index) => {
              return (
                <div
                  style={navButtonStyle}
                  key={"navItem" + index}
                  id={index.toString()}
                  onClick={() => this.scroll(index)}
                  theme={theme}
                >
                  {item.text}
                </div>
              );
            })}
          </div>
          <select style={selectStyle} onChange={this.scrollToMob}>
            {navItems.map((item, index) => {
              return (
                <option
                  style={navOptionStyle}
                  key={"menuItem" + index}
                  data-link={item}
                  value={item}
                >
                  {item.text}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  id: PropTypes.string.isRequired,
};

export default Navigation;
