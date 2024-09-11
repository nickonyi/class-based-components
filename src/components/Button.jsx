import { Component, createContext } from "react"
import { ThemeContext } from "./Panel";


class Button extends Component{
  static contextType = ThemeContext;
  render() {
    const theme = this.context;
    const className = 'button-' + theme;
   return (
      <button className={className}>
        {this.props.children}
      </button>
   )
  }
}

export default Button