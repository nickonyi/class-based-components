import  { Component } from 'react'

class Count extends Component {
    constructor(props){
        super(props)
    }
 render (){
    const {todos} = this.props;
     return (
    <div>
        <h3>Todos count:{todos.length}</h3>
    </div>
  )}
}

export default Count