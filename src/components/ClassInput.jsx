import { Component } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
        todos:["one task","is all it takes","to fall in love with me"],
        inputVal:""
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
        ...state,
        inputVal:e.target.value
    }))
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState((state) => ({
        todos:state.todos.concat(state.inputVal),
        inputVal:""
    }))
  }

  handleDelete(index){
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.filter((todo,i) => i!== index);
      return {todos:updatedTodos}
    })

  }

  render(){
    return (
    <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input 
          type="text" 
          name="task-entry"
          value={this.state.inputVal} 
          onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
            {
                this.state.todos.map((todo,index) =>(
                    <li key={todo}>
                    {todo}
                    <button onClick={()=> this.handleDelete(index)} className="delete">
                      Delete
                    </button>
                    </li>
                ))
            }
            </ul>
    </section>)
  }

}


export default ClassInput;