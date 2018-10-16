import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import bgDefault from "./images/bg/bg_default.jpg";

import Navigation from "./components/navigation.template";
import Screen from "./components/screen.layout";

class ReactiveLayout extends Component {
  constructor() {
    super();
    this.state = {
      isDetailOpen: false,
      detailIndex: 0,
      selectedId: "0",
    };
  }

  handleTabChange = (newId, prevId, e) => {
    this.setState({
      selectedId: newId,
    });
    this.scroll(parseInt(newId));
  };

  scroll = index => {
    const target = document.getElementById(this.props.id).children[index + 1];
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: target.offsetTop,
    });
  };

  scrollNext = () => {
    const selectedId = parseInt(this.state.selectedId);
    const newId = selectedId + 1;
    this.setState({
      selectedId: newId.toString(),
    });
    this.scroll(newId);
  };

  scrollPrev = () => {
    const selectedId = parseInt(this.state.selectedId);
    const newId = selectedId - 1;
    this.setState({
      selectedId: newId.toString(),
    });
    this.scroll(newId);
  };

  openDetails = index => {
    this.setState({
      isDetailOpen: true,
      detailIndex: index,
    });
  };

  closeDetails = () => {
    this.setState({
      isDetailOpen: false,
    });
  };

  submitForm = e => {
    e.preventDefault();
  };

  render() {
    const { setLanguage, texts, theme, components, bgs } = this.props;
    return (
      <Fragment>
        <Navigation
          id={this.props.id}
          setLanguage={setLanguage}
          navItems={texts.navItems}
          selectedId={this.state.selectedId}
          handleTabChange={this.handleTabChange}
          bgColor={theme.colors.nav}
          textColor={theme.colors.text3}
        />
        {texts.navItems.map((navItem, index) => (
          <Screen
            key={this.props.id + index}
            id={this.props.id}
            index={index}
            bg={bgs ? bgs[index] : bgDefault}
            scrollNext={this.scrollNext}
            scrollPrev={this.scrollPrev}
            theme={theme}
          >
            {React.createElement(components[index], { texts, theme }, null)}
          </Screen>
        ))}
      </Fragment>
    );
  }
}

ReactiveLayout.defaultProps = {
  id: "recative-layout",
};

ReactiveLayout.propTypes = {
  infos: PropTypes.any,
  experiences: PropTypes.any,
  formations: PropTypes.any,
  skills: PropTypes.any,
  texts: PropTypes.object.isRequired,
  setLanguage: PropTypes.func,
  theme: PropTypes.object.isRequired,
};

export default ReactiveLayout;
