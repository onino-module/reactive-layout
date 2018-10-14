import React, { Component } from "react";
import PropTypes from "prop-types";

import textsFr from "./../data/texts-fr.json";
import textsEn from "./../data/texts-en.json";

const textsDefault = {
  fr: textsFr,
  en: textsEn,
};

const withData = data => Wrapped => {
  class Result extends Component {
    constructor({ defaultLanguage }) {
      super();
      data = data || {};
      this.allTexts = data.texts || textsDefault;
      const lng = data.lng || defaultLanguage;
      this.state = { texts: this.allTexts[lng], lng: lng };
    }

    componentDidMount() {}

    setLanguage = lng => {
      this.setState({ texts: this.allTexts[lng] });
    };

    render() {
      return (
        <Wrapped
          {...this.props}
          setLanguage={this.setLanguage}
          texts={this.state.texts}
          components={data.components}
          bgs={data.bgs}
        />
      );
    }
  }

  Result.propType = {
    defaultLanguage: PropTypes.string,
  };

  Result.defaultProps = {
    defaultLanguage: "fr",
  };

  return Result;
};

export default withData;
