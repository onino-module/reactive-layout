import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import bgDefault from "./images/bg/bg_default.jpg";

import Navigation from "./components/navigation.template";
import withData from "./services/with-data";
import withTheme from "./services/with-theme";
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
    console.log(this.state.selectedId);
    const selectedId = parseInt(this.state.selectedId);
    const newId = selectedId + 1;
    this.setState({
      selectedId: newId.toString(),
    });
    console.log(newId);
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
          setLanguage={setLanguage}
          navItems={texts.navItems}
          selectedId={this.state.selectedId}
          handleTabChange={this.handleTabChange}
          bgColor={theme.nav}
          textColor={theme.text3}
        />
        {texts.navItems.map((navItem, index) => (
          <Screen
            id={this.props.id}
            index={index}
            bg={bgs ? bgs[index] : bgDefault}
            scrollNext={this.scrollNext}
            scrollPrev={this.scrollPrev}
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

const WithTheme = withTheme()(ReactiveLayout);

export default WithTheme;
