import React, { Component } from "react";

import computeOptions from "./../api/compute-options.js";
import { colors } from "./../api/theme";
import { ThemeProvider } from "styled-components";

const withTheme = userTheme => Wrapped => {
  class Result extends Component {
    constructor(props) {
      super();
      const _colors = userTheme.colors || colors;
      this.state = {
        colors: _colors,
        options: { ...computeOptions() },
      };
    }

    componentDidMount() {
      window.addEventListener("resize", this.computeStyles);
    }

    computeStyles = () => {
      this.setState({ options: { ...computeOptions() } });
    };

    render() {
      const theme = { colors: this.state.colors, ...this.state.options };
      return (
        <ThemeProvider theme={theme}>
          <Wrapped {...this.props} theme={theme} />
        </ThemeProvider>
      );
    }
  }
  return Result;
};

export default withTheme;
