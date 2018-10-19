import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

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
    const { navItems, components, navBarStyles } = this.props;
    return (
      <Fragment>
        <Navigation
          id={this.props.id}
          navItems={navItems}
          selectedId={this.state.selectedId}
          handleTabChange={this.handleTabChange}
          styles={navBarStyles || {}}
        />
        {navItems.map((navItem, index) => (
          <Screen
            key={this.props.id + index}
            id={this.props.id}
            index={index}
            scrollNext={this.scrollNext}
            scrollPrev={this.scrollPrev}
          >
            {React.createElement(components[index])}
          </Screen>
        ))}
      </Fragment>
    );
  }
}

ReactiveLayout.propTypes = {
  id: PropTypes.string.isRequired,
  navItems: PropTypes.array.isRequired,
  components: PropTypes.array.isRequired,
  navBarStyles: PropTypes.object,
};

export default ReactiveLayout;
