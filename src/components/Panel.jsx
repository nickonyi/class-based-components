import React, { Component, createContext } from 'react'

const ThemeContext = createContext(null);

class Panel extends Component() {
    static contextType = ThemeContext;
  render() {
    const theme = this.context;
    const className = 'panel-' + theme;

    return (
        <section className={className}>
          <h1>{this.props.title}</h1>
          {this.props.children}
        </section>
    )

  }
}

export default Panel