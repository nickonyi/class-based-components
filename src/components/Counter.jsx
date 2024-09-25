import React, { Component } from 'react'

class Counter extends Component {

    
        state = {
            name:'Darius',
            age:35,
        }
       

    handleAgeChange = () => {
        this.setState({
          age: this.state.age + 1 ,
          
        });
      };

      handleNameChange = (e) => {
        this.setState({
            name:e.target.value
        });
    }
    
 render () {
    return (
        <>
        <input
          value={this.state.name}
          onChange={this.handleNameChange}
        />
          <button onClick={this.handleAgeChange}>Increameant this age</button>
          <p>Hello, {this.state.name} You are {this.state.age}</p>
        </>
    )
 }
}

export default Counter
