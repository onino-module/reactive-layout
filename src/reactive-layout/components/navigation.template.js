import React, { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import enFlag from "./../images/flags/uk.png";
import frFlag from "./../images/flags/fr.png";
import { isPc } from "../api/theme-utils";

import scrollTo from "./../api/scroll-to";
import { Tabs, Tab } from "@blueprintjs/core";

const MOVE_BORDER_COLOR_DEFAULT = "#9A9A9A";

const FixedWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${({ bgColor }) => bgColor};
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  max-width: 1080px;
  margin: auto;
`;

const Nav = styled.nav`
  display: ${isPc("flex", "none")};
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

const NavButton = styled.a`
  text-decoration: none;
  color: ${({ textColor }) => textColor};
  font-size: 1em;
  width: 100px;
  text-align: center;
`;

const NavOption = NavButton.withComponent("option");

const Flag = styled.img`
  height: 16px;
  margin-left: 10px;
  cursor: pointer;
`;

const Select = styled.select`
  display: ${isPc("none", "inline")};
  background-color: transparent;
  margin-right: 10px;
  height: 30px;
  color: white;
`;

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

  scrollRequest = e => {
    e.preventDefault();
    const link = e.currentTarget.dataset.link;
    const target = document.getElementById(link);
    scrollTo(target);
  };

  scrollToMob = e => {
    e.preventDefault();
    const value = e.currentTarget.value;
    console.log(value);
    const target = document.getElementById(value);
    scrollTo(target);
  };

  setLanguage = e => this.props.setLanguage(e.currentTarget.dataset.lng);

  handleTabChange = (newId, prevId, e) => {
    this.setState({
      selectedId: newId,
    });
    this.scroll(parseInt(newId));
  };

  render() {
    const { navItems, bgColor, handleTabChange, selectedId } = this.props;
    return (
      <FixedWrapper bgColor={bgColor}>
        <Container>
          <div>
            <Flag
              src={enFlag}
              data-lng="en"
              onClick={this.setLanguage}
              alt="uk flag"
            />
            <Flag
              src={frFlag}
              data-lng="fr"
              onClick={this.setLanguage}
              alt="fr flag"
            />
          </div>
          <Tabs
            id="navigation"
            onChange={handleTabChange}
            selectedTabId={selectedId}
          >
            {navItems.map((item, index) => {
              return (
                <Tab
                  data-tabIndex={index}
                  key={"navItem" + index}
                  id={index.toString()}
                  onClick={this.scroll}
                >
                  {item.text}
                </Tab>
              );
            })}
          </Tabs>
          <Select onChange={this.scrollToMob}>
            {navItems.map((item, index) => {
              return (
                <NavOption
                  key={"menuItem" + index}
                  data-link={item}
                  value={item}
                >
                  {item.text}
                </NavOption>
              );
            })}
          </Select>
        </Container>
      </FixedWrapper>
    );
  }
}

Navigation.defaultProps = {
  bgColor: "none",
  textColor: "white",
  borderColor: MOVE_BORDER_COLOR_DEFAULT,
};

Navigation.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setLanguage: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Navigation;
