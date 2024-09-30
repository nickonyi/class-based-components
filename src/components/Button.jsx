import { Component, createContext } from "react"

const themeContext = createContext(null);

class Button extends Component{

static contentType = themeContext;

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