import React, { Component } from 'react'

import computeOptions from "./../api/compute-options.js"
import { colors } from './../api/theme'
import { ThemeProvider } from 'styled-components'

const withTheme = () => (Wrapped) => {
  class Result extends Component {
    constructor(props) {
      super()
      this.state = {
        theme: { ...colors, ...computeOptions() },
      }
    }

    componentDidMount() {
      window.addEventListener('resize', this.computeStyles)
    }

    computeStyles = () => {
      this.setState({
        theme: { ...colors, ...computeOptions() }
      })
    }

    render() {
      return (
        <ThemeProvider theme={this.state.theme}>
          <Wrapped
            {...this.props}
            theme={this.state.theme} />
        </ThemeProvider>
      )
    }
  }
  return Result
}

export default withTheme
