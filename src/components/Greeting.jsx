import { Component } from "react";
import Button from "./Button";

class Greeting extends Component {
    render () {
        return(
         <>
          <h1>Hello, {this.props.name}</h1>
           <Button />
        </>)
    }
}

export default Greeting