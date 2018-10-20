import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import Navigation from "./components/navigation.template";
import Screen from "./components/screen.layout";
import computeOptions from "./services/compute-options";

class ReactiveLayout extends Component {
  constructor() {
    super();
    this.state = {
      isDetailOpen: false,
      detailIndex: 0,
      selectedId: "0",
      screenOptions: computeOptions(),
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({
        screenOptions: computeOptions(),
      });
    });
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
    const {
      navItems,
      components,
      navBarStyles,
      bgs,
      isNavVisible,
      hideBottomNav,
    } = this.props;
    const addProps = {
      screenOptions: this.state.screenOptions,
      scrollPrev: this.scrollPrev,
      scrollNext: this.scrollNext,
    };
    return (
      <Fragment>
        <Navigation
          id={this.props.id}
          isNavVisible={isNavVisible}
          navItems={navItems}
          selectedId={this.state.selectedId}
          handleTabChange={this.handleTabChange}
          styles={navBarStyles || {}}
          screenOptions={this.state.screenOptions}
        />
        {navItems.map((navItem, index) => (
          <Screen
            key={this.props.id + index}
            id={this.props.id}
            index={index}
            bg={bgs[index] || {}}
            scrollNext={this.scrollNext}
            scrollPrev={this.scrollPrev}
            screenOptions={this.state.screenOptions}
            hideBottomNav={hideBottomNav}
          >
            {React.createElement(components[index], addProps, null)}
          </Screen>
        ))}
      </Fragment>
    );
  }
}

ReactiveLayout.defaultProps = {
  bgs: [],
  isNavVisible: true,
  hideBottomNav: false,
};

ReactiveLayout.propTypes = {
  id: PropTypes.string.isRequired,
  hideBottomNav: PropTypes.bool.isRequired,
  isNavVisible: PropTypes.bool.isRequired,
  navItems: PropTypes.array.isRequired,
  components: PropTypes.array.isRequired,
  navBarStyles: PropTypes.object,
  bgs: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      color: PropTypes.string,
    }),
  ),
};

export default ReactiveLayout;
